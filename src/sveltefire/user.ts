import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Unsubscriber } from 'svelte/store';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';

import type { IGenericUser } from './interfaces';
import { db, firebaseApp } from '.';
import { setCookie } from './helpers/cookies';
import { docStore } from './stores';
import { firebaseConfig } from './config';

const userKey = `${firebaseConfig.projectId}_firebase_user`;

function createUserStore() {
  const { subscribe, set } = writable<IGenericUser>(null);
  let unsub: Unsubscriber;

  if (typeof window !== 'undefined') {
    const auth = getAuth(firebaseApp);
    let cached = null;
    cached = JSON.parse(localStorage.getItem(userKey));
    set(cached);

    onAuthStateChanged(
      auth,
      (u) => {
        if (u) {
          unsub && unsub();
          const userStore = docStore<IGenericUser>(`users/${u.uid}`, { log: true });
          unsub = userStore.subscribe((user) => {
            if (user) {
              set(user);
              cacheUser(user);
              denoteVisitOnce(user.uid);
            }
          });
        } else {
          set(null);
          removeCachedUser();
        }
      },
      (err) => console.error(err.message)
    );
  }

  const signOutFn = async (session: Writable<any>) => {
    const auth = getAuth();
    unsub && unsub();
    const sessionValue = get(session);
    sessionValue.user = null;
    session.set(sessionValue);
    await signOut(auth);
  };

  return {
    subscribe,
    signOut: signOutFn,
  };
}

export const user = createUserStore();

function cacheUser(user: IGenericUser) {
  localStorage.setItem(userKey, JSON.stringify(user));
  const minimalUser: Partial<IGenericUser> = {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL || null,
  }; // Cookies are limited to 4kb, about 1,000-4000 characters
  setCookie('user', JSON.stringify(minimalUser), { 'max-age': 31536000 });
}

function removeCachedUser() {
  localStorage.removeItem(userKey);
  const yesterday = new Date(new Date());
  yesterday.setDate(yesterday.getDate() - 1);
  setCookie('user', null, { expires: yesterday });
}

const denoteVisitOnce = (() => {
  let denoted = false;
  return async function (uid: string) {
    if (!denoted) {
      denoted = true;
      try {
        await updateDoc(doc(db, 'users', uid), { lastVisit: serverTimestamp() });
      } catch (err) {
        console.error(err);
      }
      return true;
    } else {
      return true;
    }
  };
})();

// OLD
// unsub = onSnapshot(doc(db, 'users', u.uid), (snapshot) => {
//   const user = snapshot.data() as IUser;
//   if (user) {
//     console.log('retrieved: ', user);
//   }
// });

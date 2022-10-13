import type { IUser } from '@living-dictionaries/types/user.interface';
import { createUserStore, firebaseConfig } from 'sveltefirets';

export const user = createUserStore<IUser>({
  userKey: `${firebaseConfig.projectId}_firebase_user`,
  log: true,
});

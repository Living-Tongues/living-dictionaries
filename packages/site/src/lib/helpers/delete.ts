import { page } from '$app/stores';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import type { ActualDatabaseEntry, GoalDatabaseVideo } from '@living-dictionaries/types';
import { updateOnline, deleteDocumentOnline, set } from 'sveltefirets';
import { arrayUnion } from 'firebase/firestore/lite';
import { serverTimestamp } from 'firebase/firestore';

export async function deleteImage(entry: ActualDatabaseEntry, dictionaryId: string) {
  const { data: { t } } = get(page)
  try {
    await updateOnline<ActualDatabaseEntry>(
      `dictionaries/${dictionaryId}/words/${entry.id}`,
      { pf: null },
      { abbreviate: true }
    );
  } catch (err) {
    alert(`${t('misc.error')}: ${err}`);
  }
}

export async function deleteAudio(entry: ActualDatabaseEntry, dictionaryId: string) {
  const { data: { t } } = get(page)
  try {
    await updateOnline<ActualDatabaseEntry>(
      `dictionaries/${dictionaryId}/words/${entry.id}`,
      { sf: null, sfs: null },
      { abbreviate: true }
    );
  } catch (err) {
    alert(`${t('misc.error')}: ${err}`);
  }
}

export async function deleteVideo(entry: ActualDatabaseEntry, dictionaryId: string) {
  const { data: { t } } = get(page)
  try {
    const [video] = entry.vfs;
    const deletedVideo: GoalDatabaseVideo = {
      ...video,
      sp: Array.isArray(video.sp) ? video.sp : [video.sp],
      deleted: Date.now(),
    };
    await updateOnline<ActualDatabaseEntry>(
      `dictionaries/${dictionaryId}/words/${entry.id}`,
      { vfs: null, deletedVfs: arrayUnion(deletedVideo) },
      { abbreviate: true }
    );
  } catch (err) {
    alert(`${t('misc.error')}: ${err}`);
  }
}

export async function deleteEntry(entry: ActualDatabaseEntry, dictionaryId: string, algoliaQueryParams: string) {
  const { data: { t } } = get(page)
  if (
    confirm(t('entry.delete_entry'))
  ) {
    try {
      goto(`/${dictionaryId}/entries/list${algoliaQueryParams}`);
      set<ActualDatabaseEntry>(`dictionaries/${dictionaryId}/deletedEntries/${entry.id}`, {
        ...entry,
        deletedAt: serverTimestamp(),
      }); // using cache based set to avoid conflicts w/ serverTimestamps loaded in from firestore normal and sent out via firestore lite, not awaiting in case internet is flaky - can go on to the delete operation.
      await deleteDocumentOnline(`dictionaries/${dictionaryId}/words/${entry.id}`);
    } catch (err) {
      alert(`${t('misc.error')}: ${err}`);
    }
  }
}

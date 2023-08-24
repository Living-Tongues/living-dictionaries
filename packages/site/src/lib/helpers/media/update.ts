import type { GoalDatabaseVideo, ActualDatabaseEntry } from '@living-dictionaries/types';
import { update } from 'sveltefirets';
import { get } from 'svelte/store';
import { dictionary } from '$lib/stores';
import { arrayUnion } from 'firebase/firestore';
import { t } from 'svelte-i18n';

export async function addVideo(entry_id: string, video: GoalDatabaseVideo) {
  const $t = get(t);
  try {
    const $dictionary = get(dictionary);
    video.ts = Date.now();
    await update<ActualDatabaseEntry>(
      `dictionaries/${$dictionary.id}/words/${entry_id}`,
      { vfs: arrayUnion(video) },
      { abbreviate: true }
    );
  } catch (err) {
    alert(`${$t('misc.error', { default: 'Error' })}: ${err}`);
  }
}

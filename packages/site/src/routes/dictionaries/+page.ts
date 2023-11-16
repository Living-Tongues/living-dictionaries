import { error } from '@sveltejs/kit';
import type { IDictionary } from '@living-dictionaries/types';
import { getCollection } from 'sveltefirets';
import { orderBy, where } from 'firebase/firestore';
import type { PageLoad } from './$types';
import { ErrorCodes } from '$lib/constants';

export const load: PageLoad = async () => {
  try {
    const publicDictionaries = await getCollection<IDictionary>('dictionaries', [
      orderBy('name'),
      where('public', '==', true),
    ]);
    return { publicDictionaries };
  } catch (err) {
    throw error(ErrorCodes.INTERNAL_SERVER_ERROR, err);
  }
};

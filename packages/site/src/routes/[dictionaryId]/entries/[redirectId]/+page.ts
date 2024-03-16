import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { ResponseCodes } from '$lib/constants';

export const load: PageLoad = ({ params }) => {
  redirect(ResponseCodes.MOVED_PERMANENTLY_PRESERVE_REQUEST, `/${params.dictionaryId}/entry/${params.redirectId}`);
};

import type { IDictionary, IInvite } from '@living-dictionaries/types';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import { user } from '$lib/stores';
import { apiFetch } from '$lib/client/apiFetch';
import { authState } from 'sveltefirets';
import type { InviteRequestBody } from '../../routes/api/email/invite/+server';

export async function inviteHelper(
  role: 'manager' | 'contributor' = 'contributor',
  dictionary: IDictionary
) {
  const $t = get(t);
  const inviter = get(user);

  const targetEmail = prompt(`${$t('contact.email', { default: 'Email' })}?`);
  if (!targetEmail) return;

  const isEmail = /^\S+@\S+\.\S+$/.test(targetEmail);
  if (!isEmail) {
    return alert($t('misc.invalid', { default: 'Invalid Email' }));
  }

  try {
    const invite: IInvite = {
      inviterEmail: inviter.email,
      inviterName: inviter.displayName,
      dictionaryName: dictionary.name,
      targetEmail,
      role,
      status: 'queued',
    };

    const auth_state_user = get(authState);
    const auth_token = await auth_state_user.getIdToken();

    const response = await apiFetch<InviteRequestBody>('/api/email/invite', {
      auth_token,
      dictionaryId: dictionary.id,
      invite
    });

    if (response.status !== 200) {
      const body = await response.json();
      throw new Error(body.message);
    }
  } catch (err) {
    alert(`${$t('misc.error', { default: 'Error' })}: ${err}`);
    console.error(err);
  }
}

import { getAdminSupabaseClient } from '$lib/supabase/admin';
import type { IUser } from '@living-dictionaries/types';

export async function save_user_to_supabase(user: IUser): Promise<string> {
  console.info({user})
  const adminSupabase = getAdminSupabaseClient();
  const { data, error } = await adminSupabase.auth.admin.createUser({
    email: user.email,
    email_confirm: true,
    app_metadata: { fb_uid: user.uid },
    user_metadata: get_firebase_user_meta_data(user),
  });
  console.info({data, error})
  return data?.user?.id
}

function get_firebase_user_meta_data({displayName, photoURL}: IUser) {
  const metadata: {displayName?: string, photoURL?: string} = {}
  if (displayName)
    metadata.displayName = displayName;
  if (photoURL)
    metadata.photoURL = photoURL;
  return metadata;
}


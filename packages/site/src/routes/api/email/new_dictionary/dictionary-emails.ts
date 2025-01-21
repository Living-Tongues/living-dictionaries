import type { IUser, Tables } from '@living-dictionaries/types'
import { getAdminRecipients } from '../addresses'
import newDictionary from '../html/newDictionary'
import { send_email } from '../send-email'
import { notifyAdminsOnNewDictionary } from './composeMessages'

export async function send_dictionary_emails(dictionary: Tables<'dictionaries'>, user: IUser) {
  try {
    await send_email({
      to: [{ email: user.email }],
      subject: 'New Living Dictionary Created',
      type: 'text/html',
      body: newDictionary(dictionary.name, dictionary.id),
    })

    await send_email({
      to: getAdminRecipients(user.email),
      subject: `Living Dictionary created: ${dictionary.name}`,
      type: 'text/plain',
      body: notifyAdminsOnNewDictionary(dictionary, user),
    })
  } catch (err) {
    console.error(`Error with email send request: ${err.message}`)
  }
}

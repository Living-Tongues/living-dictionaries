import type { RequestHandler } from './$types';
import type { EmailParts, Address } from '../send/mail-channels.interface';
import { dev } from '$app/environment';
import { SEND_EMAIL_KEY } from '$env/static/private';
import { getSupportMessageRecipients } from '../addresses';

export interface SupportRequestBody {
  email: string;
  message: string;
  name: string;
  url: string;
  subject?: string;
  additionalRecipients?: Address[]
}

export const POST: RequestHandler = async ({ request, fetch }) => {
  const { email, message, name, url, subject, additionalRecipients } = await request.json() as SupportRequestBody;
  const emailParts: EmailParts = {
    to: [...getSupportMessageRecipients({ dev }), ...additionalRecipients],
    reply_to: { email },
    subject: subject || 'Living Dictionaries Support Request',
    type: 'text/plain',
    body: `${message} 

Sent by ${name} (${email}) from ${url}`,
  };

  return await fetch('/api/email/send', {
    method: 'POST',
    body: JSON.stringify({ send_key: SEND_EMAIL_KEY, emailParts }),
    headers: {
      'content-type': 'application/json'
    }
  });
};

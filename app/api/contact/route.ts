import { Resend } from 'resend';
import { NextResponse } from 'next/server';

let resend: Resend | null = null;

function getResend() {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error('RESEND_API_KEY environment variable is required');
    }
    resend = new Resend(key);
  }
  return resend;
}

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, type, message } = await req.json();

    const data = await getResend().emails.send({
      from: 'Disposable Films <onboarding@resend.dev>',
      to: 'milnedunk@gmail.com',
      subject: `New enquiry request from ${name} (${type})`,
      text: `
        Contact Name: ${name}
        Email Address: ${email}
        WhatsApp No: ${whatsapp}
        Service Type: ${type}
        Additional Message: ${message}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

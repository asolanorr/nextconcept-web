import EmailTemplate from '@/components/EmailTemplate/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, response: Response) {
  const { fullName, company, email, phone, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact <contact@yournextconcept.com>',
      to: ['contact@yournextconcept.com'],
      subject: 'Contact request from your website',
      react: EmailTemplate({
        fullName: fullName,
        company: company,
        email: email,
        phone: phone,
        message: message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

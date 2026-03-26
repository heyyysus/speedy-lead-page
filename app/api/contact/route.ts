import { Resend } from 'resend';
import { Submission } from '@/app/auto/page';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';



const resend = new Resend(process.env.RESEND_KEY);


export async function POST(req: NextRequest) {
  const { submission }: {submission: Submission} = await req.json();

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for");


  await resend.emails.send({
    from: 'Contact Form <SUBMISSIONS@jesusvelarde.com>',
    to: [
      'jesus@speedyins.com', 
      'yasmin@speedyins.com', 
      'fernando@speedyins.com', 
      'sammy@speedyins.com',
      'jorge@speedyins.com',
      'LFIGUEROA@speedyins.com',
      'CHRIS@speedyins.com',
      'YOLANDA@speedyins.com',
      'ESMERALDA@speedyins.com',
      'info@speedyins.com'
    ],
    subject: 'New Form Submission',
    replyTo: "noreply@speedyins.com",
    html: `
      <p><strong>First Name:</strong> ${submission.fname}</p>
      <p><strong>Last Name:</strong> ${submission.lname}</p>
      <p><strong>Phone No:</strong> ${submission.phone}</p>
      <p><strong>Date of Birth (YYYY-MM-DD):</strong> ${submission.dob}</p>
      <p><strong>Zip:</strong> ${submission.zip}</p>
      <p><strong>Opt In (SMS): </strong> ${submission.optedIn}</p>
      <p><strong>IP: </strong> ${ip}</p>
      <p><strong>Year:</strong> ${submission.year}</p>
      <p><strong>Make:</strong> ${submission.make}</p>
      <p><strong>Model:</strong> ${submission.model}</p>
      <br />
      <p><strong>REPLY TO ALL WITH "WORKING ON IT" IF YOU HAVE STARTED WORKING ON THE QUOTE</strong></p>
    `
  });

  return Response.json({ success: true });
}
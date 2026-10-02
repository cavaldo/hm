import { NextResponse } from "next/server";
// Stub: connect Resend / Nodemailer / a CRM here.
export async function POST(req: Request) {
  const data = await req.json();
  console.log("New enquiry:", data);
  return NextResponse.json({ ok: true });
}

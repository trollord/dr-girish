import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const firstName = (data.firstName || "").toString().trim();
    const lastName = (data.lastName || "").toString().trim();
    const name = `${firstName} ${lastName}`.trim() || "Unknown";
    const phone = (data.phone || "").toString().trim();
    const email = (data.email || "Not provided").toString().trim();
    const procedure = (data.procedure || "Not specified").toString().trim();
    const consultationType = (data.consultationType || "Not specified").toString().trim();
    const message = (data.message || "No message").toString().trim();

    if (!firstName || !phone || !email) {
      return NextResponse.json({ ok: false, error: "Name, phone and email are required" }, { status: 400 });
    }

    const subject = `New Consultation Request — ${name} (${procedure})`;
    const textBody = [
      "New consultation request from girishmirajkar.com:",
      "",
      `Name:                ${name}`,
      `Phone:               ${phone}`,
      `Email:               ${email}`,
      `Procedure:           ${procedure}`,
      `Consultation Type:   ${consultationType}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `"Dr. Girish Website" <${process.env.SENDER_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL!,
      subject,
      text: textBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Contact API error:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

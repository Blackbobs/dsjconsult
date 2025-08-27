import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: "ty@dsjconsult.com",
      subject,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ success: true, message: "Email sent!" }, { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}

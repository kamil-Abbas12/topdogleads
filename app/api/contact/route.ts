import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import nodemailer from "nodemailer";
import Contact from "@/models/Contact";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const SERVICE_LABELS: Record<string, string> = {
  "final-expense": "Final Expense",
  "medicare-insurance": "Medicare Insurance",
  "motor-vehicle-accident": "Motor Vehicle Accident",
  "home-insurance": "Home Insurance",
  "auto-insurance": "Auto Insurance",
  "pest-control": "Pest Control",
  "roofing": "Roofing",
  "solar": "Solar",
};

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const name = body?.name?.trim() || "";
    const email = body?.email?.trim() || "";
    const interest = body?.interest?.trim() || "";
    const message = body?.message?.trim() || "";

    const missingFields: string[] = [];

    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!interest) missingFields.push("interest");
    if (!message) missingFields.push("message");

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail environment variables");
      return NextResponse.json(
        { success: false, message: "Email service is not configured" },
        { status: 500 }
      );
    }

    const serviceLabel = SERVICE_LABELS[interest];
    if (!serviceLabel) {
      return NextResponse.json(
        { success: false, message: "Invalid service selected" },
        { status: 400 }
      );
    }

    // Save to DB
    await Contact.create({
      name,
      email,
      service: interest,
      message,
    });

    // 1. Confirmation email to user
    await transporter.sendMail({
      from: `"Top Dog Leads" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message — Top Dog Leads",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#1c2d56;padding:32px 40px;">
            <h1 style="color:#fff;margin:0;font-size:24px;">Top Dog Leads</h1>
          </div>
          <div style="padding:40px;">
            <h2 style="margin-top:0;">Hi ${name}, we'll be in touch!</h2>
            <p style="color:#444;line-height:1.6;">
              Thank you for reaching out. We've received your inquiry about
              <strong>${serviceLabel}</strong> and one of our specialists
              will contact you shortly.
            </p>
            <div style="background:#f5f7ff;border-left:4px solid #1c2d56;padding:16px 20px;margin:24px 0;border-radius:0 6px 6px 0;">
              <p style="margin:0 0 8px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:.08em;">Your message</p>
              <p style="margin:0;color:#1a1a1a;">${message}</p>
            </div>
            <p style="color:#444;line-height:1.6;">
              If you have any urgent questions, feel free to call us directly.
            </p>
            <p style="margin-top:32px;color:#888;font-size:13px;">— The Top Dog Leads Team</p>
          </div>
          <div style="background:#f0f0f0;padding:16px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#999;">© ${new Date().getFullYear()} Top Dog Leads. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    // 2. Notify admin inbox
    await transporter.sendMail({
      from: `"Top Dog Leads Contact Form" <${process.env.GMAIL_USER}>`,
      to: "topdogleadsbackend@gmail.com",
      subject: `New Lead: ${serviceLabel} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#1c2d56;padding:24px 32px;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Contact Form Submission</h2>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;width:140px;text-transform:uppercase;letter-spacing:.08em;">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:.08em;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee;">
                  <a href="mailto:${email}" style="color:#1c2d56;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:.08em;">Service</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee;">${serviceLabel}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;">Message</td>
                <td style="padding:12px 0;line-height:1.6;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background:#f0f0f0;padding:12px 32px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#999;">
              Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}

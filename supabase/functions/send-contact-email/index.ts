import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = (await req.json()) as ContactPayload;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const GMAIL_USER = "soaf.baz@gmail.com";
    const GMAIL_APP_PASSWORD = Deno.env.get("GMAIL_APP_PASSWORD");
    const RECIPIENT = "contact@HotelMerlin.com";

    if (!GMAIL_APP_PASSWORD) {
      console.error("GMAIL_APP_PASSWORD is not set");
      return new Response(
        JSON.stringify({ error: "Email service is not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: GMAIL_USER,
          password: GMAIL_APP_PASSWORD,
        },
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject || "New contact form message");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background:#ffffff; padding:24px; border:1px solid #eaeaea; border-radius:8px;">
        <h2 style="color:#0f172a; margin-top:0;">New Contact Form Submission</h2>
        <p style="color:#475569; font-size:14px;">You received a new message from HotelMerlin.com</p>
        <hr style="border:none; border-top:1px solid #eaeaea; margin:16px 0;" />
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <div style="background:#f8fafc; padding:12px; border-radius:6px; color:#0f172a;">${safeMessage}</div>
        <hr style="border:none; border-top:1px solid #eaeaea; margin:16px 0;" />
        <p style="color:#94a3b8; font-size:12px;">This email was sent from the contact form on HotelMerlin.com</p>
      </div>
    `;

    await client.send({
      from: `HotelMerlin Contact <${GMAIL_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `[HotelMerlin Contact] ${subject || "New message from " + name}`,
      content: `New message from ${name} <${email}>\n\nSubject: ${subject || "(none)"}\n\n${message}`,
      html,
    });

    // Confirmation email to the sender
    await client.send({
      from: `Hotel Merlin <${GMAIL_USER}>`,
      to: email,
      subject: "We received your message — Hotel Merlin",
      content: `Hi ${name},\n\nThank you for reaching out to Hotel Merlin. We received your message and our team will get back to you within 24 hours on business days.\n\nBest regards,\nHotel Merlin Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background:#ffffff; padding:24px; border:1px solid #eaeaea; border-radius:8px;">
          <h2 style="color:#0f172a; margin-top:0;">Thank you for contacting Hotel Merlin</h2>
          <p style="color:#475569;">Hi ${safeName},</p>
          <p style="color:#475569;">We received your message and our team will get back to you within 24 hours on business days.</p>
          <p style="color:#475569;">Best regards,<br/>Hotel Merlin Team</p>
        </div>
      `,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});

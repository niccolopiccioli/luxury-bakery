import { NextResponse } from "next/server";
import { getEmailConfig, getResendClient, emailShell } from "@/lib/email/resend";
import { contactSchema, isHoneypotTriggered } from "@/lib/email/schemas";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (isHoneypotTriggered(parsed.data.website)) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, message, product } = parsed.data;
    const resend = getResendClient();
    const { from, to } = getEmailConfig();

    const context = product ? `Product: ${product}` : "";

    const body = `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      ${context ? `<p>${context}</p>` : ""}
      <p style="white-space:pre-wrap;line-height:1.6;">${message}</p>
    `;

    if (resend) {
      await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `[Sweet Lab] Contact from ${name}`,
        html: emailShell("New contact inquiry", body),
      });

      await resend.emails.send({
        from,
        to: [email],
        subject: "We received your message — Sweet Lab",
        html: emailShell(
          "Thank you for reaching out",
          "<p>We have received your message and will respond within 24 hours.</p>",
        ),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

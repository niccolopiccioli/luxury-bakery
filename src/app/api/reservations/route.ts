import { NextResponse } from "next/server";
import { getEmailConfig, getResendClient, emailShell } from "@/lib/email/resend";
import { isHoneypotTriggered, reservationSchema } from "@/lib/email/schemas";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = reservationSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (isHoneypotTriggered(parsed.data.website)) {
      return NextResponse.json({ ok: true });
    }

    const { date, time, guests, email, notes } = parsed.data;
    const resend = getResendClient();
    const { from, to } = getEmailConfig();

    const body = `
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${date} at ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      ${notes ? `<p style="white-space:pre-wrap;"><strong>Notes:</strong><br>${notes}</p>` : ""}
    `;

    if (resend) {
      await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `[Sweet Lab] Reservation request — ${date}`,
        html: emailShell("New reservation request", body),
      });

      await resend.emails.send({
        from,
        to: [email],
        subject: "Reservation received — Sweet Lab",
        html: emailShell(
          "Your reservation request",
          "<p>Thank you. We have received your request and will confirm within 24 hours.</p>",
        ),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

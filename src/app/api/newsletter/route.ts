import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/email/resend";
import { isHoneypotTriggered, newsletterSchema } from "@/lib/email/schemas";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = newsletterSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (isHoneypotTriggered(parsed.data.website)) {
      return NextResponse.json({ ok: true });
    }

    const resend = getResendClient();
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (resend && audienceId) {
      await resend.contacts.create({
        audienceId,
        email: parsed.data.email,
        unsubscribed: false,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

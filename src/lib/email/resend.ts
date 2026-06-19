import { Resend } from "resend";

let client: Resend | null = null;

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!client) client = new Resend(apiKey);
  return client;
}

export function getEmailConfig() {
  return {
    from: process.env.RESEND_FROM_EMAIL ?? "Sweet Lab <onboarding@resend.dev>",
    to: process.env.RESEND_TO_EMAIL ?? "delivered@resend.dev",
    audienceId: process.env.RESEND_AUDIENCE_ID,
  };
}

export function emailShell(title: string, body: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:32px;background:#faf7f2;font-family:Georgia,serif;color:#2c1810;">
  <div style="max-width:560px;margin:0 auto;background:#fff;padding:32px;border:1px solid #e8dcc8;">
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#b87333;">Sweet Lab</p>
    <h1 style="margin:0 0 24px;font-size:24px;font-weight:400;">${title}</h1>
    ${body}
    <p style="margin-top:32px;font-size:12px;color:#2c181080;">Via della Spiga 26, Milano · info@sweetlab.it</p>
  </div>
</body>
</html>`;
}

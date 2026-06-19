"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export function NewsletterForm() {
  const t = useTranslations("common");
  const tFooter = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: "" }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <p className="mt-4 text-sm text-copper">{tFooter("newsletterSuccess")}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("newsletterPlaceholder")}
        required
        aria-label={t("newsletter")}
        className="min-w-0 flex-1 border-b border-cream/30 bg-transparent py-2 text-sm text-cream outline-none placeholder:text-cream/40 focus:border-copper"
      />
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 text-xs tracking-widest uppercase text-copper transition-colors hover:text-cream disabled:opacity-50"
      >
        {status === "loading" ? t("sending") : t("subscribe")}
      </button>
      {status === "error" && (
        <p className="text-xs text-rose-gold">{tFooter("newsletterError")}</p>
      )}
    </form>
  );
}

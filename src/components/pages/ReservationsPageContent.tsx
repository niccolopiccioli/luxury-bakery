"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getOfferBySlug } from "@/data/offers";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

type ReservationsPageContentProps = {
  experienceSlug?: string;
};

export function ReservationsPageContent({
  experienceSlug,
}: ReservationsPageContentProps) {
  const t = useTranslations("reservations");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const experience = experienceSlug ? getOfferBySlug(experienceSlug) : undefined;

  const defaultNotes = useMemo(() => {
    if (!experience) return "";
    const title = getLocalizedField(experience.title, locale);
    return locale === "it"
      ? `Interessato/a a: ${title}`
      : locale === "en"
        ? `Interested in: ${title}`
        : locale === "fr"
          ? `Intéressé(e) par : ${title}`
          : `Interesado/a en: ${title}`;
  }, [experience, locale]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: data.get("date"),
          time: data.get("time"),
          guests: data.get("guests"),
          email: data.get("email"),
          notes: data.get("notes"),
          experience: experienceSlug,
          website: data.get("website"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="pb-12 pt-32">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <RevealOnScroll>
        <p className="mb-10 max-w-2xl text-espresso/70">{t("intro")}</p>

        {experience && (
          <p className="mb-8 text-copper">
            {t("experienceLabel")}:{" "}
            <strong>{getLocalizedField(experience.title, locale)}</strong>
          </p>
        )}

        {submitted ? (
          <p className="text-lg text-copper">{t("success")}</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid max-w-2xl gap-6">
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="text-xs tracking-widest uppercase">
                  {t("date")}
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="mt-2 w-full border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
                />
              </div>
              <div>
                <label htmlFor="time" className="text-xs tracking-widest uppercase">
                  {t("time")}
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="mt-2 w-full border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
                />
              </div>
            </div>
            <div>
              <label htmlFor="guests" className="text-xs tracking-widest uppercase">
                {t("guests")}
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={1}
                max={12}
                required
                className="mt-2 w-full border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs tracking-widest uppercase">
                {t("email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
              />
            </div>
            <div>
              <label htmlFor="notes" className="text-xs tracking-widest uppercase">
                {t("notes")}
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                defaultValue={defaultNotes}
                className="mt-2 w-full resize-none border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
              />
            </div>
            {error && <p className="text-sm text-copper">{t("error")}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? tCommon("sending") : tCommon("bookNow")}
            </Button>
          </form>
        )}
      </RevealOnScroll>
    </Section>
  );
}

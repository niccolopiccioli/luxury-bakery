"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function ReservationsPageContent() {
  const t = useTranslations("reservations");
  const tCommon = useTranslations("common");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <Section className="pb-12 pt-32">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <RevealOnScroll>
        <p className="mb-10 max-w-2xl text-espresso/70">{t("intro")}</p>

        {submitted ? (
          <p className="text-lg text-copper">{t("success")}</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid max-w-2xl gap-6">
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
                className="mt-2 w-full resize-none border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? tCommon("sending") : tCommon("bookNow")}
            </Button>
          </form>
        )}
      </RevealOnScroll>
    </Section>
  );
}

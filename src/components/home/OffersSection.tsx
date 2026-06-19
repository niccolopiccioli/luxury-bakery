"use client";

import { useLocale, useTranslations } from "next-intl";
import { featuredOffers } from "@/data/offers";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function OffersSection() {
  const t = useTranslations("offers");
  const locale = useLocale() as Locale;

  return (
    <Section id="offers">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="grid gap-8 md:grid-cols-2">
        {featuredOffers.map((offer, index) => (
          <RevealOnScroll key={offer.id} delay={index * 0.1}>
            <article className="border border-espresso/10 bg-cream p-8 transition-shadow hover:shadow-lg">
              <span className="text-xs tracking-widest uppercase text-copper">
                {getLocalizedField(offer.badge, locale)}
              </span>
              <h3 className="font-display mt-3 text-2xl text-espresso">
                {getLocalizedField(offer.title, locale)}
              </h3>
              <p className="mt-3 text-sm text-espresso/70">
                {getLocalizedField(offer.description, locale)}
              </p>
              <p className="mt-4 text-xs tracking-widest uppercase text-espresso/50">
                {t("validUntil")}{" "}
                {new Date(offer.validUntil).toLocaleDateString(locale, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <Link
                href={offer.ctaHref}
                className="mt-6 inline-block text-sm tracking-wide text-copper uppercase transition-colors hover:text-espresso"
              >
                {t("learnMore")} →
              </Link>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}

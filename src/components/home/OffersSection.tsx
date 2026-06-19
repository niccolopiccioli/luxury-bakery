"use client";

import { useState } from "react";
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
                href={
                  offer.slug === "spring-tasting"
                    ? { pathname: "/prenotazioni", query: { experience: offer.slug } }
                    : offer.ctaHref
                }
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

const BANNER_KEY = "sweetlab-offer-banner-dismissed";

export function OffersBanner() {
  const t = useTranslations("offers");
  const locale = useLocale() as Locale;
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(BANNER_KEY) !== "1";
  });
  const offer = featuredOffers[0];

  if (!visible || !offer) return null;

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, "1");
    setVisible(false);
  };

  return (
    <div className="relative bg-espresso px-6 py-3 text-center text-cream md:px-12">
      <p className="text-sm md:text-base">
        <span className="font-medium text-copper">
          {getLocalizedField(offer.badge, locale)}:
        </span>{" "}
        {getLocalizedField(offer.title, locale)} —{" "}
        <Link
          href={{ pathname: "/prenotazioni", query: { experience: offer.slug } }}
          className="underline underline-offset-4 hover:text-copper"
        >
          {t("bannerCta")}
        </Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-xs tracking-widest uppercase text-cream/60 hover:text-cream"
        aria-label={t("dismiss")}
      >
        ✕
      </button>
    </div>
  );
}

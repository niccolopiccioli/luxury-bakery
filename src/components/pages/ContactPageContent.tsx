"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { getProductBySlug } from "@/data/products";
import { getOfferBySlug } from "@/data/offers";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getDirectionsUrl, getMailtoUrl, phoneTel } from "@/lib/site-links";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";

type ContactPageContentProps = {
  productSlug?: string;
  offerSlug?: string;
};

export function ContactPageContent({
  productSlug,
  offerSlug,
}: ContactPageContentProps) {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const product = productSlug ? getProductBySlug(productSlug) : undefined;
  const offer = offerSlug ? getOfferBySlug(offerSlug) : undefined;

  const defaultMessage = useMemo(() => {
    if (product) {
      return locale === "it"
        ? `Buongiorno, vorrei informazioni sulla creazione "${product.name}".`
        : locale === "en"
          ? `Hello, I would like information about "${product.name}".`
          : locale === "fr"
            ? `Bonjour, je souhaiterais des informations sur "${product.name}".`
            : `Hola, me gustaría información sobre "${product.name}".`;
    }
    if (offer) {
      const title = getLocalizedField(offer.title, locale);
      return locale === "it"
        ? `Buongiorno, sono interessato/a a: ${title}.`
        : locale === "en"
          ? `Hello, I am interested in: ${title}.`
          : locale === "fr"
            ? `Bonjour, je suis intéressé(e) par : ${title}.`
            : `Hola, estoy interesado/a en: ${title}.`;
    }
    return "";
  }, [product, offer, locale]);

  const mapSrc = `https://maps.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=15&output=embed`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          product: productSlug,
          offer: offerSlug,
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
    <>
      <Section className="pb-12 pt-32">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {product && (
          <p className="mb-8 text-copper">
            {t("inquiryTitle")}: <strong>{product.name}</strong>
          </p>
        )}
        {offer && !product && (
          <p className="mb-8 text-copper">
            {t("inquiryOffer")}:{" "}
            <strong>{getLocalizedField(offer.title, locale)}</strong>
          </p>
        )}

        <div className="grid gap-16 lg:grid-cols-2">
          <RevealOnScroll>
            <h3 className="font-display text-2xl text-espresso">{t("formTitle")}</h3>
            {submitted ? (
              <p className="mt-6 text-copper">{tCommon("success")}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <div>
                  <label htmlFor="name" className="text-xs tracking-widest uppercase">
                    {t("name")}
                  </label>
                  <input
                    id="name"
                    name="name"
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
                  <label htmlFor="message" className="text-xs tracking-widest uppercase">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    defaultValue={defaultMessage}
                    className="mt-2 w-full resize-none border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
                  />
                </div>
                {error && <p className="text-sm text-copper">{t("error")}</p>}
                <Button type="submit" disabled={loading}>
                  {loading ? tCommon("sending") : tCommon("submit")}
                </Button>
              </form>
            )}
            <p className="mt-6 text-sm text-espresso/60">
              <Link href="/faq" className="text-copper hover:text-espresso">
                {t("faqLink")} →
              </Link>
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h3 className="font-display text-2xl text-espresso">{t("infoTitle")}</h3>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs tracking-widest uppercase text-copper">
                  {t("address")}
                </dt>
                <dd className="mt-2 text-espresso">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest uppercase text-copper">
                  {t("phone")}
                </dt>
                <dd className="mt-2">
                  <a href={`tel:${phoneTel}`} className="text-espresso hover:text-copper">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest uppercase text-copper">
                  {t("email")}
                </dt>
                <dd className="mt-2">
                  <a href={getMailtoUrl()} className="text-espresso hover:text-copper">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest uppercase text-copper">
                  {t("hours")}
                </dt>
                <dd className="mt-2 space-y-1 text-espresso">
                  <p>{t("hoursWeekdays")}</p>
                  <p>{t("hoursSunday")}</p>
                  <p>{t("hoursMonday")}</p>
                </dd>
              </div>
            </dl>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-2xl text-espresso">{t("mapTitle")}</h3>
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-copper uppercase hover:text-espresso"
            >
              {t("directions")} →
            </a>
          </div>
          <div className="relative aspect-[21/9] overflow-hidden bg-champagne">
            <iframe
              title={t("mapTitle")}
              src={mapSrc}
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}

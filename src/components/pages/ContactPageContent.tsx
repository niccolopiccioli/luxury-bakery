"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function ContactPageContent() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const mapSrc = `https://maps.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=15&output=embed`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <Section className="pb-12 pt-32">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-16 lg:grid-cols-2">
          <RevealOnScroll>
            <h3 className="font-display text-2xl text-espresso">{t("formTitle")}</h3>
            {submitted ? (
              <p className="mt-6 text-copper">{tCommon("success")}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                    className="mt-2 w-full resize-none border-b border-espresso/20 bg-transparent py-3 text-espresso outline-none focus:border-copper"
                  />
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? tCommon("sending") : tCommon("submit")}
                </Button>
              </form>
            )}
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
                <dd className="mt-2 text-espresso">{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest uppercase text-copper">
                  {t("email")}
                </dt>
                <dd className="mt-2 text-espresso">{siteConfig.email}</dd>
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
          <h3 className="font-display mb-6 text-2xl text-espresso">{t("mapTitle")}</h3>
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

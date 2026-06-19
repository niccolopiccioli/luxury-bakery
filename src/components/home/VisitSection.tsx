"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function VisitSection() {
  const t = useTranslations("home");
  const tContact = useTranslations("contact");

  const mapSrc = `https://maps.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=15&output=embed`;

  return (
    <Section id="visit">
      <SectionHeader title={t("visitTitle")} subtitle={t("visitSubtitle")} />

      <div className="grid gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-copper">
                {tContact("address")}
              </p>
              <p className="mt-2 font-display text-2xl text-espresso">
                {siteConfig.address.street}
              </p>
              <p className="text-espresso/70">
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-copper">
                {tContact("hours")}
              </p>
              <ul className="mt-2 space-y-1 text-espresso/80">
                <li>{tContact("hoursWeekdays")}</li>
                <li>{tContact("hoursSunday")}</li>
                <li>{tContact("hoursMonday")}</li>
              </ul>
            </div>
            <Button href="/contatti" variant="secondary">
              {t("visitCta")}
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="relative aspect-[4/3] overflow-hidden bg-champagne">
            <iframe
              title={tContact("mapTitle")}
              src={mapSrc}
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}

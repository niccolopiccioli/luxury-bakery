"use client";

import { useTranslations, useLocale } from "next-intl";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import type { Locale } from "@/i18n/routing";

export function LaboratorySection() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  return (
    <Section id="laboratory">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll direction="left">
          <ParallaxImage
            src={images.laboratory}
            alt={
              locale === "it"
                ? "Interno elegante del laboratorio Sweet Lab"
                : "Sweet Lab atelier interior"
            }
            speed={0.2}
            containerClassName="aspect-[4/5]"
          />
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={0.2}>
          <p className="text-xs tracking-widest uppercase text-copper">
            {t("laboratoryTitle")}
          </p>
          <h2 className="font-display mt-4 text-4xl font-light text-espresso md:text-5xl">
            {t("laboratoryTitle")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-espresso/70 md:text-lg">
            {t("laboratoryText")}
          </p>
          <div className="mt-8">
            <Button href="/chi-siamo" variant="secondary">
              {t("laboratoryCta")}
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}

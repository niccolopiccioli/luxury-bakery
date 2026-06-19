"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { testimonials } from "@/data/testimonials";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as Locale;
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <Section variant="champagne">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <RevealOnScroll>
        <blockquote className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center gap-1 text-copper" aria-hidden="true">
            {Array.from({ length: item.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="font-display text-2xl leading-relaxed text-espresso md:text-3xl">
            &ldquo;{getLocalizedField(item.quote, locale)}&rdquo;
          </p>
          <footer className="mt-8">
            <p className="text-sm font-medium text-espresso">{item.name}</p>
            <p className="mt-1 text-xs tracking-widest uppercase text-espresso/50">
              {item.city} · {getLocalizedField(item.occasion, locale)}
            </p>
          </footer>
        </blockquote>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={testimonials[index].id}
              type="button"
              aria-label={`${t("goTo")} ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === active ? "bg-copper" : "bg-espresso/20"
              }`}
            />
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}

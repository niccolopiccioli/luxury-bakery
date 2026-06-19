"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { faqCategories, faqItems, type FaqCategory } from "@/data/faq";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function FaqPageContent() {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <Section className="pb-12 pt-32">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="mb-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
            activeCategory === "all"
              ? "bg-espresso text-cream"
              : "border border-espresso/20 text-espresso hover:border-espresso"
          }`}
        >
          {t("all")}
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
              activeCategory === cat
                ? "bg-espresso text-cream"
                : "border border-espresso/20 text-espresso hover:border-espresso"
            }`}
          >
            {t(`categories.${cat}`)}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {filtered.map((item, index) => (
          <RevealOnScroll key={item.id} delay={index * 0.05}>
            <details className="group border-b border-espresso/10 pb-4">
              <summary className="cursor-pointer list-none font-display text-lg text-espresso transition-colors group-open:text-copper md:text-xl [&::-webkit-details-marker]:hidden">
                {getLocalizedField(item.question, locale)}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-espresso/70 md:text-base">
                {getLocalizedField(item.answer, locale)}
              </p>
            </details>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}

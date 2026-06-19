"use client";

import { useTranslations } from "next-intl";
import { pressItems } from "@/data/press";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function PressStrip() {
  const t = useTranslations("press");

  return (
    <section className="border-y border-espresso/10 bg-cream px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <p className="mb-6 text-center text-xs tracking-[0.3em] uppercase text-espresso/50">
            {t("title")}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {pressItems.map((item) => (
              <li
                key={item.id}
                className="font-display text-lg text-espresso/40 md:text-xl"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ImageCredit } from "@/components/ui/ImageCredit";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function GalleryPageContent() {
  const t = useTranslations("gallery");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">(
    "all",
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Section className="pb-12 pt-32">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="mb-12 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
              activeCategory === "all"
                ? "bg-espresso text-cream"
                : "border border-espresso/20 text-espresso hover:border-espresso"
            }`}
          >
            {tCommon("all")}
          </button>
          {galleryCategories.map((cat) => (
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

        <div className="masonry-grid">
          {filtered.map((item, index) => (
            <RevealOnScroll key={item.id} delay={(index % 6) * 0.05}>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(galleryItems.findIndex((g) => g.id === item.id))
                }
                className="masonry-item group relative block w-full overflow-hidden text-left"
              >
                <div
                  className={`relative overflow-hidden ${
                    index % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={getLocalizedField(item.alt, locale)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/95 p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-sm tracking-widest uppercase text-cream"
              onClick={() => setLightboxIndex(null)}
            >
              {tCommon("close")}
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={galleryItems[lightboxIndex].image.replace(/w=\d+/, "w=1600")}
                  alt={getLocalizedField(galleryItems[lightboxIndex].alt, locale)}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="mt-4 text-center">
                <ImageCredit
                  photographer={galleryItems[lightboxIndex].credit.photographer}
                  url={galleryItems[lightboxIndex].credit.url}
                  label={tCommon("photoCredit")}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

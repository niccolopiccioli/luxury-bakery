"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { galleryTeaserItems } from "@/data/gallery";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function GalleryTeaserSection() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;

  return (
    <Section id="gallery-teaser" variant="champagne">
      <SectionHeader title={t("galleryTitle")} subtitle={t("gallerySubtitle")} />

      <div className="masonry-grid">
        {galleryTeaserItems.map((item, index) => (
          <RevealOnScroll key={item.id} delay={index * 0.08}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="masonry-item group relative overflow-hidden"
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
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/galleria"
          className="text-sm tracking-widest uppercase text-espresso underline-offset-4 hover:text-copper hover:underline"
        >
          {tCommon("viewAll")}
        </Link>
      </div>
    </Section>
  );
}

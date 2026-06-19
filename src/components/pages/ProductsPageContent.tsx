"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products, productCategories, type ProductCategory } from "@/data/products";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { formatPrice, getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function ProductsPageContent() {
  const t = useTranslations("products");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    "all",
  );

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
          {productCategories.map((cat) => (
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

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <RevealOnScroll>
                  <Link href={`/creazioni/${product.slug}`} className="group block">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={getLocalizedField(product.imageAlt, locale)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-display text-xl text-espresso group-hover:text-copper">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-espresso/70">
                        {getLocalizedField(product.description, locale)}
                      </p>
                      <p className="mt-3 text-sm text-copper">
                        {tCommon("from")} {formatPrice(product.price, locale)}
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}

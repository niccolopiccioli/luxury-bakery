"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  getRelatedProducts,
  type Product,
} from "@/data/products";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageCredit } from "@/components/ui/ImageCredit";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { formatPrice, getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

type ProductDetailContentProps = {
  product: Product;
};

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const t = useTranslations("products");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const related = getRelatedProducts(product.slug);
  const details =
    product.details?.[locale] ?? product.description[locale];
  const allergens =
    product.allergens?.[locale] ??
    (locale === "it"
      ? "Informazioni allergeni disponibili su richiesta."
      : locale === "en"
        ? "Allergen information available on request."
        : locale === "fr"
          ? "Informations allergènes disponibles sur demande."
          : "Información de alérgenos disponible bajo pedido.");

  const inquiryHref = {
    pathname: "/contatti" as const,
    query: { product: product.slug },
  };

  return (
    <>
      <Section className="pb-12 pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] overflow-hidden bg-champagne">
              <Image
                src={product.image}
                alt={getLocalizedField(product.imageAlt, locale)}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="mt-3">
              <ImageCredit
                photographer={product.credit.photographer}
                url={product.credit.url}
                label={tCommon("photoCredit")}
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <p className="text-xs tracking-widest uppercase text-copper">
              {t(`categories.${product.category}`)}
            </p>
            <h1 className="font-display mt-3 text-4xl text-espresso md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl text-copper">
              {formatPrice(product.price, locale)}
            </p>
            <p className="mt-8 leading-relaxed text-espresso/80">{details}</p>
            <p className="mt-6 text-sm text-espresso/60">
              <span className="font-medium text-espresso">{t("allergens")}: </span>
              {allergens}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={inquiryHref}>{t("inquire")}</Button>
              <Button href="/creazioni" variant="secondary">
                {tCommon("viewAll")}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {related.length > 0 && (
        <Section variant="champagne" className="pt-0">
          <h2 className="font-display mb-10 text-3xl text-espresso">
            {t("relatedTitle")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/creazioni/${item.slug}`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={getLocalizedField(item.imageAlt, locale)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <p className="font-display mt-3 text-lg text-espresso group-hover:text-copper">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

export function ProductDetailNotFound() {
  const t = useTranslations("products");
  const tCommon = useTranslations("common");
  return (
    <Section className="py-32 text-center">
      <p className="font-display text-2xl text-espresso">{t("notFound")}</p>
      <Button href="/creazioni" className="mt-8">
        {tCommon("viewAll")}
      </Button>
    </Section>
  );
}

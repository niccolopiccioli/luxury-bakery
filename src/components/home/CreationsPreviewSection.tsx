"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { featuredProducts } from "@/data/products";
import { Section, SectionHeader } from "@/components/ui/Section";
import { formatPrice, getLocalizedField } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks";
import type { Locale } from "@/i18n/routing";

gsap.registerPlugin(ScrollTrigger);

export function CreationsPreviewSection() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth;

      if (scrollWidth <= 0) return;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <Section
      id="creations"
      ref={sectionRef}
      variant="champagne"
      className="overflow-hidden"
    >
      <SectionHeader
        title={t("creationsTitle")}
        subtitle={t("creationsSubtitle")}
      />

      <div className="hidden md:block">
        <div ref={trackRef} className="horizontal-scroll-track pb-8">
          {featuredProducts.map((product) => (
            <motion.article
              key={product.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-[320px] shrink-0 lg:w-[380px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={getLocalizedField(product.imageAlt, locale)}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="380px"
                />
              </div>
              <div className="mt-4 border-b border-copper/30 pb-4">
                <h3 className="font-display text-2xl text-espresso">
                  {product.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-espresso/70">
                  {getLocalizedField(product.description, locale)}
                </p>
                <p className="mt-3 text-sm text-copper">
                  {tCommon("from")} {formatPrice(product.price, locale)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:hidden">
        {featuredProducts.map((product) => (
          <article key={product.id}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={product.image}
                alt={getLocalizedField(product.imageAlt, locale)}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-display text-xl text-espresso">{product.name}</h3>
              <p className="mt-2 text-sm text-copper">
                {tCommon("from")} {formatPrice(product.price, locale)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

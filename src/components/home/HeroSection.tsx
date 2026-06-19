"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { SplitText } from "@/components/motion/SplitText";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/lib/hooks";

import { images } from "@/lib/images";

type HeroSectionProps = {
  ready: boolean;
};

export function HeroSection({ ready }: HeroSectionProps) {
  const t = useTranslations("home");
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ready || reducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.4,
            ease: "power3.inOut",
          },
        );
      }
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" },
        );
      }
    });

    return () => ctx.revert();
  }, [ready, reducedMotion]);

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={images.hero}
          alt={t("heroTagline")}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-12 md:pb-32 lg:px-20"
      >
        <SplitText
          text={t("heroTagline")}
          as="h1"
          triggerOnMount={ready}
          delay={0.8}
          className="font-display max-w-4xl text-5xl leading-[1.1] font-light text-cream md:text-7xl lg:text-8xl"
        />
        <p className="mt-6 max-w-xl text-base text-cream/80 md:text-lg">
          {t("heroSubtitle")}
        </p>
        <div className="mt-10">
          <Button href="/creazioni" variant="primary">
            {t("heroCta")}
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

import { images } from "@/lib/images";

const timelineKeys = ["2018", "2020", "2022", "2024"] as const;
const valueKeys = ["ingredients", "precision", "tradition"] as const;
const teamKeys = ["elena", "marco", "sofia"] as const;

export function AboutPageContent() {
  const t = useTranslations("about");
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !timelineRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 1,
          },
        },
      );
    }, timelineRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src={images.aboutHero}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <RevealOnScroll>
            <p className="text-xs tracking-widest uppercase text-cream/70">
              {t("subtitle")}
            </p>
            <h1 className="font-display mt-4 text-5xl text-cream md:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/80">{t("heroText")}</p>
          </RevealOnScroll>
        </div>
      </section>

      <Section>
        <SectionHeader title={t("timelineTitle")} />
        <div ref={timelineRef} className="relative pl-8 md:pl-12">
          <div
            ref={lineRef}
            className="absolute top-0 left-3 h-full w-px origin-top bg-copper md:left-4"
          />
          <div className="space-y-12">
            {timelineKeys.map((year, index) => (
              <RevealOnScroll key={year} delay={index * 0.1}>
                <div className="relative">
                  <span className="absolute -left-8 flex h-6 w-6 items-center justify-center md:-left-10">
                    <span className="h-2 w-2 rounded-full bg-copper" />
                  </span>
                  <p className="font-display text-3xl text-copper">{year}</p>
                  <p className="mt-2 max-w-2xl text-espresso/80">
                    {t(`timeline.${year}`)}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="champagne">
        <SectionHeader title={t("valuesTitle")} />
        <div className="grid gap-10 md:grid-cols-3">
          {valueKeys.map((key, index) => (
            <RevealOnScroll key={key} delay={index * 0.1}>
              <article className="border-t border-espresso/10 pt-6">
                <h3 className="font-display text-2xl text-espresso">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-espresso/70">
                  {t(`values.${key}.text`)}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title={t("teamTitle")} />
        <div className="grid gap-10 md:grid-cols-3">
          {teamKeys.map((key, index) => (
            <RevealOnScroll key={key} delay={index * 0.1}>
              <article>
                <div className="aspect-square bg-champagne" />
                <h3 className="font-display mt-6 text-2xl text-espresso">
                  {t(`team.${key}.name`)}
                </h3>
                <p className="mt-1 text-sm text-copper">{t(`team.${key}.role`)}</p>
                <p className="mt-3 text-sm text-espresso/70">{t(`team.${key}.bio`)}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}

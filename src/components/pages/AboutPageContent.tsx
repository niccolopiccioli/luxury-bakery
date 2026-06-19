"use client";

import { useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { SplitText } from "@/components/motion/SplitText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/lib/hooks";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const timelineKeys = ["2018", "2019", "2020", "2022", "2024"] as const;
const valueKeys = ["ingredients", "precision", "tradition", "craft"] as const;
const philosophyKeys = ["01", "02", "03", "04", "05"] as const;
const processKeys = ["01", "02", "03", "04", "05"] as const;
const ingredientKeys = ["butter", "vanilla", "pistachio", "chocolate"] as const;
const statKeys = ["recipes", "suppliers", "tastings", "awards"] as const;
const teamKeys = ["elena", "marco", "sofia"] as const;

const timelineImages = {
  "2018": images.patisserieCafe,
  "2019": images.kneadingDough,
  "2020": images.professionalKitchen,
  "2022": images.displayCase,
  "2024": images.chocolateCloseUp,
} as const;

const teamImages = {
  elena: images.pastryHands,
  marco: images.chocolateCloseUp,
  sofia: images.bakeryInterior,
} as const;

const ingredientImages = {
  butter: images.marblePastry,
  vanilla: images.layeredCake,
  pistachio: images.pistachioDessert,
  chocolate: images.chocolateCake,
} as const;

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const el = ref.current;
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value, suffix, reducedMotion]);

  return (
    <span ref={ref} className="font-display text-5xl text-copper md:text-6xl">
      {reducedMotion ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}

export function AboutPageContent() {
  const t = useTranslations("about");
  const reducedMotion = useReducedMotion();

  const manifestoRef = useRef<HTMLElement>(null);
  const manifestoLinesRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLElement>(null);
  const originTextRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const philosophyTrackRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);

  const manifestoLines = useMemo(
    () => t.raw("manifesto.lines") as string[],
    [t],
  );
  const originParagraphs = useMemo(
    () => t.raw("origin.paragraphs") as string[],
    [t],
  );

  useEffect(() => {
    if (reducedMotion || !manifestoRef.current || !manifestoLinesRef.current) return;

    const lineElements =
      manifestoLinesRef.current.querySelectorAll(".about-manifesto-line");

    const ctx = gsap.context(() => {
      gsap.set(lineElements, { opacity: 0.12, y: 24 });

      ScrollTrigger.create({
        trigger: manifestoRef.current,
        start: "top top",
        end: "+=180%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          lineElements.forEach((line, index) => {
            const lineProgress = Math.min(
              1,
              Math.max(0, (self.progress - index * 0.18) / 0.28),
            );
            gsap.to(line, {
              opacity: 0.12 + lineProgress * 0.88,
              y: 24 - lineProgress * 24,
              duration: 0.1,
              overwrite: true,
            });
          });
        },
      });
    }, manifestoRef);

    return () => ctx.revert();
  }, [reducedMotion, manifestoLines]);

  useEffect(() => {
    if (reducedMotion || !originRef.current || !originTextRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: originRef.current,
        start: "top top",
        end: () => `+=${originTextRef.current?.scrollHeight ?? 800}`,
        pin: originRef.current?.querySelector(".origin-pin"),
        pinSpacing: true,
        scrub: 0.5,
      });
    }, originRef);

    return () => ctx.revert();
  }, [reducedMotion, originParagraphs]);

  useEffect(() => {
    if (reducedMotion || !timelineRef.current || !timelineLineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 65%",
            end: "bottom 35%",
            scrub: 1,
          },
        },
      );

      timelineRef.current?.querySelectorAll(".timeline-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.3, x: -30 },
          {
            opacity: 1,
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "top 45%",
              scrub: 1,
            },
          },
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !philosophyRef.current || !philosophyTrackRef.current) return;

    const track = philosophyTrackRef.current;
    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth;
      if (scrollWidth <= 0) return;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, philosophyRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !processRef.current || !processLineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        processLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        },
      );
    }, processRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.aboutHero}
            alt=""
            fill
            className="object-cover scale-105"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:px-12 lg:px-20">
          <p className="text-xs tracking-[0.35em] uppercase text-cream/60">
            {t("subtitle")}
          </p>
          <SplitText
            text={t("title")}
            as="h1"
            triggerOnMount
            className="font-display mt-6 block text-5xl text-cream md:text-7xl lg:text-8xl"
          />
          <RevealOnScroll delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
              {t("heroText")}
            </p>
          </RevealOnScroll>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-3 text-cream/50">
            <span className="text-[10px] tracking-[0.3em] uppercase">
              {t("scrollHint")}
            </span>
            <span className="block h-12 w-px animate-pulse bg-cream/40" />
          </div>
        </div>
      </section>

      {/* Manifesto — pinned scroll reveal */}
      <section
        ref={manifestoRef}
        className="min-h-screen bg-cream px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center">
          <p className="mb-10 text-xs tracking-[0.35em] uppercase text-copper">
            {t("manifesto.eyebrow")}
          </p>
          <div ref={manifestoLinesRef} className="space-y-6 md:space-y-10">
            {manifestoLines.map((line) => (
              <p
                key={line}
                className="about-manifesto-line font-display text-2xl leading-snug text-espresso md:text-4xl lg:text-5xl"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Origin — sticky image + scrolling narrative */}
      <section ref={originRef} className="bg-champagne px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="origin-pin relative h-[50vh] lg:h-[70vh] lg:self-start">
            <ParallaxImage
              src={images.laboratory}
              alt=""
              speed={0.2}
              containerClassName="h-full w-full"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-espresso/10" />
          </div>
          <div ref={originTextRef} className="lg:py-8">
            <SectionHeader title={t("origin.title")} subtitle={t("origin.subtitle")} />
            <div className="space-y-6">
              {originParagraphs.map((paragraph, index) => (
                <RevealOnScroll key={index} delay={index * 0.08}>
                  <p className="text-base leading-relaxed text-espresso/75 md:text-lg md:leading-loose">
                    {paragraph}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <SectionHeader title={t("stats.title")} subtitle={t("stats.subtitle")} />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statKeys.map((key, index) => (
            <RevealOnScroll key={key} delay={index * 0.1}>
              <div className="border-t border-espresso/15 pt-6">
                <AnimatedCounter
                  value={Number(t(`stats.items.${key}.value`))}
                  suffix={t(`stats.items.${key}.suffix`)}
                />
                <p className="mt-3 text-sm leading-relaxed text-espresso/65">
                  {t(`stats.items.${key}.label`)}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="champagne">
        <SectionHeader title={t("timelineTitle")} subtitle={t("timelineSubtitle")} />
        <div ref={timelineRef} className="relative pl-8 md:pl-16">
          <div
            ref={timelineLineRef}
            className="absolute top-0 left-3 h-full w-px origin-top bg-copper/60 md:left-6"
          />
          <div className="space-y-20 md:space-y-28">
            {timelineKeys.map((year) => (
              <article key={year} className="timeline-item relative grid gap-8 md:grid-cols-2 md:gap-16">
                <span className="absolute -left-8 flex h-8 w-8 items-center justify-center md:-left-12">
                  <span className="h-3 w-3 rounded-full border-2 border-copper bg-champagne" />
                </span>
                <div>
                  <p className="font-display text-4xl text-copper md:text-5xl">{year}</p>
                  <h3 className="font-display mt-3 text-2xl text-espresso md:text-3xl">
                    {t(`timeline.${year}.title`)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-espresso/70 md:text-base md:leading-loose">
                    {t(`timeline.${year}.text`)}
                  </p>
                </div>
                <ParallaxImage
                  src={timelineImages[year]}
                  alt=""
                  speed={0.15}
                  containerClassName="aspect-[4/3] w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy — horizontal scroll */}
      <section
        ref={philosophyRef}
        className="overflow-hidden bg-espresso px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.35em] uppercase text-cream/50">
            {t("philosophy.eyebrow")}
          </p>
          <h2 className="font-display mt-4 text-4xl text-cream md:text-5xl lg:text-6xl">
            {t("philosophy.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-cream/60">{t("philosophy.subtitle")}</p>
        </div>
        <div ref={philosophyTrackRef} className="mt-16 flex w-max gap-6 px-6 md:gap-8 md:px-12 lg:px-20">
          {philosophyKeys.map((key) => (
            <article
              key={key}
              className="flex w-[min(85vw,420px)] shrink-0 flex-col border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm md:w-[420px] md:p-10"
            >
              <span className="font-display text-5xl text-copper/80">{key}</span>
              <h3 className="font-display mt-6 text-2xl text-cream">
                {t(`philosophy.items.${key}.title`)}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/65 md:text-base">
                {t(`philosophy.items.${key}.text`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <Section>
        <SectionHeader title={t("process.title")} subtitle={t("process.subtitle")} />
        <div ref={processRef} className="relative pl-8 md:pl-12">
          <div
            ref={processLineRef}
            className="absolute top-0 left-3 h-full w-px origin-top bg-espresso/15 md:left-4"
          />
          <div className="space-y-14">
            {processKeys.map((key, index) => (
              <RevealOnScroll key={key} delay={index * 0.08}>
                <div className="relative grid gap-4 md:grid-cols-[80px_1fr] md:gap-10">
                  <span className="font-display text-3xl text-copper">{key}</span>
                  <div>
                    <h3 className="font-display text-xl text-espresso md:text-2xl">
                      {t(`process.steps.${key}.title`)}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-espresso/70 md:text-base">
                      {t(`process.steps.${key}.text`)}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Ingredients */}
      <Section variant="champagne">
        <SectionHeader title={t("ingredients.title")} subtitle={t("ingredients.subtitle")} />
        <div className="grid gap-8 sm:grid-cols-2">
          {ingredientKeys.map((key, index) => (
            <RevealOnScroll key={key} delay={index * 0.1}>
              <article className="group overflow-hidden bg-cream">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={ingredientImages[key]}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl text-espresso">
                    {t(`ingredients.items.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-espresso/70 md:text-base">
                    {t(`ingredients.items.${key}.text`)}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader title={t("valuesTitle")} subtitle={t("valuesSubtitle")} />
        <div className="grid gap-12 md:grid-cols-2">
          {valueKeys.map((key, index) => (
            <RevealOnScroll key={key} delay={index * 0.1}>
              <article className="border-t-2 border-copper/30 pt-8">
                <h3 className="font-display text-3xl text-espresso">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="mt-4 text-sm leading-loose text-espresso/70 md:text-base">
                  {t(`values.${key}.text`)}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section variant="champagne">
        <SectionHeader title={t("teamTitle")} subtitle={t("teamSubtitle")} />
        <div className="space-y-24 md:space-y-32">
          {teamKeys.map((key, index) => (
            <RevealOnScroll key={key}>
              <article
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <ParallaxImage
                    src={teamImages[key]}
                    alt=""
                    speed={0.12}
                    containerClassName="aspect-[4/5] w-full max-w-md"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <p className="text-xs tracking-[0.3em] uppercase text-copper">
                    {t(`team.${key}.role`)}
                  </p>
                  <h3 className="font-display mt-2 text-3xl text-espresso md:text-4xl">
                    {t(`team.${key}.name`)}
                  </h3>
                  <p className="mt-6 text-sm leading-loose text-espresso/75 md:text-base">
                    {t(`team.${key}.bio`)}
                  </p>
                  <blockquote className="mt-8 border-l-2 border-copper pl-6 font-display text-xl italic text-espresso/80 md:text-2xl">
                    &ldquo;{t(`team.${key}.quote`)}&rdquo;
                  </blockquote>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-espresso px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="absolute inset-0 opacity-20">
          <Image src={images.sweetTable} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl text-cream md:text-5xl lg:text-6xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-cream/70">{t("cta.text")}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/prenotazioni">{t("cta.book")}</Button>
              <Button href="/contatti" variant="secondary" className="border-cream/30 text-cream hover:bg-cream hover:text-espresso">
                {t("cta.contact")}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

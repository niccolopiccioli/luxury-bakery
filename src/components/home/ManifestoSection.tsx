"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

export function ManifestoSection() {
  const t = useTranslations("home.manifesto");
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const lines = useMemo(
    () => [t("line1"), t("line2"), t("line3")],
    [t],
  );

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !linesRef.current) return;

    const lineElements = linesRef.current.querySelectorAll(".manifesto-line");

    const ctx = gsap.context(() => {
      gsap.set(lineElements, { opacity: 0.15, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          lineElements.forEach((line, index) => {
            const lineProgress = Math.min(
              1,
              Math.max(0, (progress - index * 0.25) / 0.35),
            );
            gsap.to(line, {
              opacity: 0.15 + lineProgress * 0.85,
              y: 20 - lineProgress * 20,
              duration: 0.1,
              overwrite: true,
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, lines]);

  return (
    <section id="manifesto" ref={sectionRef} className="min-h-screen px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div ref={linesRef} className="flex min-h-[60vh] flex-col justify-center">
          {lines.map((line) => (
            <p
              key={line}
              className="manifesto-line font-display text-3xl leading-tight text-espresso md:text-5xl lg:text-6xl"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

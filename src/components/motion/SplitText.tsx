"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

type SplitTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  triggerOnMount?: boolean;
};

export function SplitText({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  triggerOnMount = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".split-char");
    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(
        chars,
        { opacity: 0, y: 60, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          delay,
          ease: "power3.out",
        },
      );

      if (!triggerOnMount) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
          animation,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, triggerOnMount, reducedMotion]);

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const chars = text.split("").map((char, index) => (
    <span
      key={`${char}-${index}`}
      className="split-char"
      style={{ display: char === " " ? "inline" : "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Tag className={className}>
      <span ref={containerRef} style={{ display: "inline" }}>
        {chars}
      </span>
    </Tag>
  );
}

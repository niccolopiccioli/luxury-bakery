"use client";

import { useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ParallaxImageProps = Omit<ImageProps, "ref"> & {
  speed?: number;
  containerClassName?: string;
};

export function ParallaxImage({
  speed = 0.3,
  containerClassName,
  className,
  alt,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <div ref={imageRef} className="relative h-[120%] w-full -top-[10%]">
        <Image
          alt={alt}
          className={cn("object-cover", className)}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          {...props}
        />
      </div>
    </div>
  );
}

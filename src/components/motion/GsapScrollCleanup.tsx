"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
  ScrollTrigger.clearScrollMemory();
}

export function GsapScrollCleanup() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    killAllScrollTriggers();

    return () => {
      killAllScrollTriggers();
    };
  }, [pathname]);

  return null;
}

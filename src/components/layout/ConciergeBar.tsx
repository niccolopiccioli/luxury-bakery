"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getWhatsAppUrl, phoneTel } from "@/lib/site-links";
import { useReducedMotion } from "@/lib/hooks";
import type { Locale } from "@/i18n/routing";

export function ConciergeBar() {
  const t = useTranslations("concierge");
  const locale = useLocale() as Locale;
  const reducedMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => setExpanded(window.scrollY < 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 pb-[env(safe-area-inset-bottom)]"
      role="complementary"
      aria-label={t("label")}
    >
      <div
        className={`flex items-center gap-1 rounded-full border border-copper/30 bg-espresso/95 px-2 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          expanded ? "scale-100 opacity-100" : "scale-95 opacity-90"
        }`}
      >
        <Link
          href="/prenotazioni"
          className="rounded-full bg-copper px-4 py-2.5 text-xs font-medium tracking-wide text-cream uppercase transition-colors hover:bg-copper/90"
        >
          {t("book")}
        </Link>
        <a
          href={getWhatsAppUrl(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 py-2.5 text-xs tracking-wide text-cream/90 uppercase transition-colors hover:text-copper"
        >
          {t("whatsapp")}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="rounded-full px-3 py-2.5 text-xs tracking-wide text-cream/90 uppercase transition-colors hover:text-copper"
        >
          {t("call")}
        </a>
      </div>
    </div>
  );
}

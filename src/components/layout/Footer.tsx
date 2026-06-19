"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="border-t border-espresso/10 bg-espresso px-6 py-16 text-cream md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl">Sweet Lab</p>
          <p className="mt-3 text-sm text-cream/70">{t("tagline")}</p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-cream/50">
            {t("navTitle")}
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/80 transition-colors hover:text-copper"
                >
                  {tNav(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-cream/50">
            {t("hoursTitle")}
          </p>
          <ul className="mt-4 space-y-1 text-sm text-cream/80">
            <li>{tContact("hoursWeekdays")}</li>
            <li>{tContact("hoursSunday")}</li>
            <li>{tContact("hoursMonday")}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-cream/50">
            {t("contactTitle")}
          </p>
          <ul className="mt-4 space-y-1 text-sm text-cream/80">
            <li>
              {siteConfig.address.street}, {siteConfig.address.city}
            </li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Sweet Lab. All rights reserved.</p>
        <p>{t("credits")}</p>
      </div>
    </footer>
  );
}

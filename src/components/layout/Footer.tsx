"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { getDirectionsUrl, getMailtoUrl, phoneTel } from "@/lib/site-links";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const tCommon = useTranslations("common");

  return (
    <footer className="border-t border-espresso/10 bg-espresso px-6 pb-28 pt-16 text-cream md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl">Sweet Lab</p>
          <p className="mt-3 text-sm text-cream/70">{t("tagline")}</p>
          <p className="mt-6 text-xs tracking-widest uppercase text-cream/50">
            {tCommon("newsletter")}
          </p>
          <NewsletterForm />
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
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              {siteConfig.address.street}, {siteConfig.address.city}
            </li>
            <li>
              <a href={`tel:${phoneTel}`} className="transition-colors hover:text-copper">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={getMailtoUrl()} className="transition-colors hover:text-copper">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper transition-colors hover:text-cream"
              >
                {tContact("directions")} →
              </a>
            </li>
          </ul>

          <p className="mt-6 text-xs tracking-widest uppercase text-cream/50">
            {t("followUs")}
          </p>
          <ul className="mt-3 flex gap-4 text-sm">
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 transition-colors hover:text-copper"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 transition-colors hover:text-copper"
              >
                Facebook
              </a>
            </li>
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

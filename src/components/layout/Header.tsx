"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/data/navigation";
import { LangSwitcher } from "./LangSwitcher";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/80 py-4 backdrop-blur-md"
            : "bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          <Link
            href="/"
            className="font-display text-2xl tracking-wide text-espresso md:text-3xl"
          >
            Sweet Lab
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-espresso/80 uppercase transition-colors hover:text-copper"
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <LangSwitcher />
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label={tCommon("openMenu")}
          >
            <span className="block h-0.5 w-6 bg-espresso" />
            <span className="block h-0.5 w-6 bg-espresso" />
            <span className="block h-0.5 w-4 bg-espresso" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-cream"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-2xl text-espresso">Sweet Lab</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase"
                aria-label={tCommon("closeMenu")}
              >
                {tCommon("close")}
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-6 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl text-espresso"
                  >
                    {t(item.labelKey)}
                  </Link>
                </motion.div>
              ))}
              <LangSwitcher className="mt-8" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

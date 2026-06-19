"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { faqCategories, faqItems, type FaqCategory } from "@/data/faq";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { Button } from "@/components/ui/Button";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

function FaqAccordionItem({
  id,
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="border-b border-espresso/10"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-copper"
      >
        <span className="font-display text-lg text-espresso md:text-xl">
          <span className="mr-4 text-sm text-copper/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 shrink-0 text-2xl text-copper"
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-10 text-sm leading-relaxed text-espresso/70 md:text-base md:leading-loose">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function FaqPageContent() {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const question = getLocalizedField(item.question, locale).toLowerCase();
      const answer = getLocalizedField(item.answer, locale).toLowerCase();
      return question.includes(q) || answer.includes(q);
    });
  }, [activeCategory, search, locale]);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-espresso/10 bg-champagne px-6 pb-16 pt-32 md:px-12 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.35em] uppercase text-copper">
            {t("subtitle")}
          </p>
          <SplitText
            text={t("title")}
            as="h1"
            triggerOnMount
            className="font-display mt-4 block text-5xl text-espresso md:text-6xl lg:text-7xl"
          />
          <RevealOnScroll delay={0.3}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-espresso/70 md:text-lg">
              {t("heroText")}
            </p>
            <p className="mt-6 text-xs tracking-widest uppercase text-espresso/45">
              {t("questionsCount", { count: faqItems.length })}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <label htmlFor="faq-search" className="sr-only">
              {t("searchPlaceholder")}
            </label>
            <input
              id="faq-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full border-b border-espresso/20 bg-transparent py-3 text-sm text-espresso outline-none placeholder:text-espresso/35 focus:border-copper"
            />
            <nav className="mt-8 flex flex-wrap gap-2 lg:flex-col lg:gap-1" aria-label="FAQ categories">
              {(["all", ...faqCategories] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 text-left text-xs tracking-widest uppercase transition-colors ${
                    activeCategory === cat
                      ? "bg-espresso text-cream"
                      : "text-espresso/60 hover:text-espresso"
                  }`}
                >
                  {cat === "all" ? t("all") : t(`categories.${cat}`)}
                </button>
              ))}
            </nav>
          </aside>

          {/* Accordion */}
          <div>
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center text-espresso/50"
                >
                  {t("noResults")}
                </motion.p>
              ) : (
                filtered.map((item, index) => (
                  <FaqAccordionItem
                    key={item.id}
                    id={item.id}
                    question={getLocalizedField(item.question, locale)}
                    answer={getLocalizedField(item.answer, locale)}
                    index={index}
                    isOpen={openId === item.id}
                    onToggle={() =>
                      setOpenId((prev) => (prev === item.id ? null : item.id))
                    }
                  />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-espresso/10 bg-espresso px-6 py-20 md:px-12 lg:px-20">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              {t("stillQuestions")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/65">{t("stillQuestionsText")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contatti">{t("contactCta")}</Button>
              <Button href="/prenotazioni" variant="secondary" className="border-cream/30 text-cream hover:bg-cream hover:text-espresso">
                {t("bookCta")}
              </Button>
            </div>
            <p className="mt-8 text-sm text-cream/40">
              <Link href="/chi-siamo" className="underline-offset-4 hover:text-cream hover:underline">
                Sweet Lab
              </Link>
              {" · Via della Spiga 26, Milano"}
            </p>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}

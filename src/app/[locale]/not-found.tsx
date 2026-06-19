"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");
  const tNav = useTranslations("nav");

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-display text-8xl text-copper">404</p>
      <h1 className="font-display mt-4 text-3xl text-espresso md:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-espresso/70">{t("description")}</p>
      <div className="mt-8">
        <Button href="/">{tNav("home")}</Button>
      </div>
    </section>
  );
}

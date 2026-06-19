import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
  namespace?: string;
};

export async function generatePageMetadata({
  params,
  namespace = "meta",
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace });

  const title = t("title");
  const description = t.has("description") ? t("description") : t("subtitle");

  return {
    title: namespace === "meta" ? title : `${title} | Sweet Lab`,
    description,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, `/${loc}`]),
      ),
    },
  };
}

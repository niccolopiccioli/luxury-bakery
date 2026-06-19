import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/data/site";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxury-bakery.vercel.app";

type Props = {
  params: Promise<{ locale: string }>;
  namespace?: string;
  path?: string;
  titleOverride?: string;
  descriptionOverride?: string;
  image?: string;
};

export async function generatePageMetadata({
  params,
  namespace = "meta",
  path = "",
  titleOverride,
  descriptionOverride,
  image,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace });

  const title = titleOverride ?? (namespace === "meta" ? t("title") : `${t("title")} | Sweet Lab`);
  const description =
    descriptionOverride ??
    (t.has("description") ? t("description") : t("subtitle"));

  const localePath = path ? `/${locale}${path}` : `/${locale}`;
  const ogImage = image ?? `${BASE_URL}/textures/grain.svg`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${localePath}`,
      languages: Object.fromEntries(
        routing.locales.map((loc) => [
          loc,
          `${BASE_URL}/${loc}${path}`,
        ]),
      ),
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${localePath}`,
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

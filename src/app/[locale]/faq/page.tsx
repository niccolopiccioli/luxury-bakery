import { setRequestLocale } from "next-intl/server";
import { FaqPageContent } from "@/components/pages/FaqPageContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/data/faq";
import { generatePageMetadata } from "@/lib/generate-page-metadata";
import { getLocalizedField } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  return generatePageMetadata({ params, namespace: "faq", path: "/faq" });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: getLocalizedField(item.question, locale as Locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: getLocalizedField(item.answer, locale as Locale),
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <FaqPageContent />
    </>
  );
}

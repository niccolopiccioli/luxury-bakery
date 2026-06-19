import { setRequestLocale } from "next-intl/server";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  return generatePageMetadata({ params, namespace: "about", path: "/chi-siamo" });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageContent />;
}

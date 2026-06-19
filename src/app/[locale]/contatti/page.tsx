import { setRequestLocale } from "next-intl/server";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string; offer?: string }>;
};

export async function generateMetadata({ params }: Props) {
  return generatePageMetadata({ params, namespace: "contact", path: "/contatti" });
}

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { product, offer } = await searchParams;
  setRequestLocale(locale);

  return <ContactPageContent productSlug={product} offerSlug={offer} />;
}

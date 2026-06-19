import { setRequestLocale } from "next-intl/server";
import { GalleryPageContent } from "@/components/pages/GalleryPageContent";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  return generatePageMetadata({ params, namespace: "gallery" });
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <GalleryPageContent />;
}

import { setRequestLocale } from "next-intl/server";
import { ProductsPageContent } from "@/components/pages/ProductsPageContent";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  return generatePageMetadata({ params, namespace: "products", path: "/creazioni" });
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProductsPageContent />;
}

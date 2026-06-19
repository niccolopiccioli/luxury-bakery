import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ProductDetailContent,
} from "@/components/pages/ProductDetailContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { products, getProductBySlug } from "@/data/products";
import { generatePageMetadata } from "@/lib/generate-page-metadata";
import { getLocalizedField } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return generatePageMetadata({
    params: Promise.resolve({ locale }),
    namespace: "products",
    path: `/creazioni/${slug}`,
    titleOverride: `${product.name} | Sweet Lab`,
    descriptionOverride: getLocalizedField(product.description, locale as Locale),
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: getLocalizedField(product.description, locale as Locale),
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <ProductDetailContent product={product} />
    </>
  );
}

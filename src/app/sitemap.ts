import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { routing } from "@/i18n/routing";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxury-bakery.vercel.app";

const staticPaths = [
  "",
  "/chi-siamo",
  "/creazioni",
  "/galleria",
  "/contatti",
  "/prenotazioni",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }

    for (const product of products) {
      entries.push({
        url: `${BASE_URL}/${locale}/creazioni/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}

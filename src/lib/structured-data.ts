import { siteConfig } from "@/data/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: siteConfig.name,
    image: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxury-bakery.vercel.app"}/textures/grain.svg`,
    "@id": "https://luxury-bakery.vercel.app",
    url: "https://luxury-bakery.vercel.app",
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

import type { Locale } from "@/i18n/routing";

export type Offer = {
  id: string;
  slug: string;
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  validUntil: string;
  ctaHref: "/prenotazioni" | "/contatti" | "/creazioni";
  featured: boolean;
};

export const offers: Offer[] = [
  {
    id: "spring-tasting",
    slug: "spring-tasting",
    badge: {
      it: "Esperienza",
      en: "Experience",
      fr: "Expérience",
      es: "Experiencia",
    },
    title: {
      it: "Menu Degustazione di Primavera",
      en: "Spring Tasting Menu",
      fr: "Menu Dégustation de Printemps",
      es: "Menú Degustación de Primavera",
    },
    description: {
      it: "Cinque creazioni stagionali con abbinamento tè e champagne. Solo su prenotazione, mar–sab.",
      en: "Five seasonal creations paired with tea and champagne. By reservation only, Tue–Sat.",
      fr: "Cinq créations saisonnières avec accords thé et champagne. Sur réservation, mar–sam.",
      es: "Cinco creaciones de temporada maridadas con té y champagne. Solo con reserva, mar–sáb.",
    },
    validUntil: "2026-06-30",
    ctaHref: "/prenotazioni",
    featured: true,
  },
  {
    id: "mothers-day",
    slug: "mothers-day",
    badge: {
      it: "Stagionale",
      en: "Seasonal",
      fr: "Saisonnier",
      es: "Estacional",
    },
    title: {
      it: "Collezione Festa della Mamma",
      en: "Mother's Day Collection",
      fr: "Collection Fête des Mères",
      es: "Colección Día de la Madre",
    },
    description: {
      it: "Entremets rose e pistacchio, disponibili in edizione limitata con confezione regalo.",
      en: "Rose and pistachio entremets, available in limited edition with gift packaging.",
      fr: "Entremets rose et pistache, édition limitée avec emballage cadeau.",
      es: "Entremets de rosa y pistacho, edición limitada con empaquetado regalo.",
    },
    validUntil: "2026-05-11",
    ctaHref: "/creazioni",
    featured: true,
  },
  {
    id: "corporate-gifts",
    slug: "corporate-gifts",
    badge: {
      it: "Corporate",
      en: "Corporate",
      fr: "Corporate",
      es: "Corporate",
    },
    title: {
      it: "Box Regalo Aziendali",
      en: "Corporate Gift Boxes",
      fr: "Coffrets Cadeaux Corporate",
      es: "Cajas Regalo Corporativas",
    },
    description: {
      it: "Personalizzazione logo, consegna in tutta Italia. Ideale per clienti e team.",
      en: "Logo customization, delivery across Italy. Ideal for clients and teams.",
      fr: "Personnalisation logo, livraison dans toute l'Italie. Idéal pour clients et équipes.",
      es: "Personalización de logo, entrega en toda Italia. Ideal para clientes y equipos.",
    },
    validUntil: "2026-12-31",
    ctaHref: "/contatti",
    featured: false,
  },
];

export const featuredOffers = offers.filter((o) => o.featured);

export function getOfferBySlug(slug: string) {
  return offers.find((o) => o.slug === slug);
}

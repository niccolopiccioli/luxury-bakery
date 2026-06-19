export const siteConfig = {
  name: "Sweet Lab",
  tagline: {
    it: "Dove la scienza incontra la dolcezza",
    en: "Where science meets sweetness",
    fr: "Où la science rencontre la douceur",
    es: "Donde la ciencia encuentra la dulzura",
  },
  address: {
    street: "Via della Spiga 26",
    city: "Milano",
    postalCode: "20121",
    country: "Italia",
  },
  phone: "+39 02 1234 5678",
  phoneE164: "+390212345678",
  whatsapp: "390212345678",
  email: "info@sweetlab.it",
  coordinates: {
    lat: 45.4695,
    lng: 9.1954,
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Via+della+Spiga+26,+20121+Milano",
  hours: {
    weekdays: { open: "08:00", close: "20:00", days: "mar-sab" },
    sunday: { open: "09:00", close: "14:00" },
    monday: "closed",
  },
  social: {
    instagram: "https://instagram.com/sweetlab",
    facebook: "https://facebook.com/sweetlab",
  },
  founded: 2018,
} as const;

export type SiteConfig = typeof siteConfig;

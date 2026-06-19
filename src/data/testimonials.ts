import type { Locale } from "@/i18n/routing";

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  rating: number;
  occasion: Record<Locale, string>;
  quote: Record<Locale, string>;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Chiara B.",
    city: "Milano",
    rating: 5,
    occasion: {
      it: "Degustazione privata",
      en: "Private tasting",
      fr: "Dégustation privée",
      es: "Degustación privada",
    },
    quote: {
      it: "Ogni boccone racconta una storia di precisione. Il Saint-Honoré è semplicemente memorabile.",
      en: "Every bite tells a story of precision. The Saint-Honoré is simply unforgettable.",
      fr: "Chaque bouchée raconte une histoire de précision. Le Saint-Honoré est tout simplement inoubliable.",
      es: "Cada bocado cuenta una historia de precisión. El Saint-Honoré es simplemente inolvidable.",
    },
  },
  {
    id: "2",
    name: "James R.",
    city: "London",
    rating: 5,
    occasion: {
      it: "Anniversario",
      en: "Anniversary",
      fr: "Anniversaire",
      es: "Aniversario",
    },
    quote: {
      it: "Abbiamo scelto Sweet Lab per il nostro anniversario. Servizio impeccabile, dolci da sogno.",
      en: "We chose Sweet Lab for our anniversary. Impeccable service, dreamlike pastries.",
      fr: "Nous avons choisi Sweet Lab pour notre anniversaire. Service impeccable, pâtisseries de rêve.",
      es: "Elegimos Sweet Lab para nuestro aniversario. Servicio impecable, pasteles de ensueño.",
    },
  },
  {
    id: "3",
    name: "Marie L.",
    city: "Paris",
    rating: 5,
    occasion: {
      it: "Evento aziendale",
      en: "Corporate event",
      fr: "Événement d'entreprise",
      es: "Evento corporativo",
    },
    quote: {
      it: "I box regalo corporate hanno conquistato tutti i nostri clienti. Eleganza milanese al massimo.",
      en: "The corporate gift boxes won over all our clients. Milanese elegance at its finest.",
      fr: "Les coffrets cadeaux corporate ont conquis tous nos clients. L'élégance milanaise à son apogée.",
      es: "Las cajas regalo corporativas conquistaron a todos nuestros clientes. Elegancia milanesa en su máxima expresión.",
    },
  },
  {
    id: "4",
    name: "Sofia M.",
    city: "Roma",
    rating: 5,
    occasion: {
      it: "Torta su misura",
      en: "Custom cake",
      fr: "Gâteau sur mesure",
      es: "Tarta a medida",
    },
    quote: {
      it: "Hanno realizzato la torta dei miei sogni per un matrimonio intimo. Arte commestibile.",
      en: "They created my dream cake for an intimate wedding. Edible art.",
      fr: "Ils ont créé le gâteau de mes rêves pour un mariage intime. Art comestible.",
      es: "Crearon la tarta de mis sueños para una boda íntima. Arte comestible.",
    },
  },
  {
    id: "5",
    name: "Elena V.",
    city: "Milano",
    rating: 5,
    occasion: {
      it: "Visita al laboratorio",
      en: "Laboratory visit",
      fr: "Visite du laboratoire",
      es: "Visita al laboratorio",
    },
    quote: {
      it: "Vedere Elena al lavoro è un'esperienza che ogni appassionato dovrebbe fare almeno una volta.",
      en: "Watching Elena at work is an experience every enthusiast should have at least once.",
      fr: "Voir Elena au travail est une expérience que tout passionné devrait vivre au moins une fois.",
      es: "Ver a Elena trabajar es una experiencia que todo entusiasta debería vivir al menos una vez.",
    },
  },
  {
    id: "6",
    name: "Thomas K.",
    city: "Monaco",
    rating: 5,
    occasion: {
      it: "Prima colazione",
      en: "Breakfast",
      fr: "Petit-déjeuner",
      es: "Desayuno",
    },
    quote: {
      it: "I croissant sono fragranti come a Parigi, ma con un'anima milanese. Tornerò ogni volta che sono in città.",
      en: "The croissants are as flaky as in Paris, but with a Milanese soul. I'll return every time I'm in town.",
      fr: "Les croissants sont aussi feuilletés qu'à Paris, mais avec une âme milanaise. Je reviendrai à chaque visite.",
      es: "Los croissants son tan crujientes como en París, pero con alma milanesa. Volveré cada vez que esté en la ciudad.",
    },
  },
];

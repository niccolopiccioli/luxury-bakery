import { images } from "@/lib/images";

export type GalleryCategory = "interiors" | "creations" | "details" | "laboratory";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: string;
  alt: Record<"it" | "en" | "fr" | "es", string>;
  credit: {
    photographer: string;
    url: string;
  };
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "creations",
    image: images.macarons,
    alt: {
      it: "Macaron colorati su piano di marmo",
      en: "Colorful macarons on a marble counter",
      fr: "Macarons colorés sur plan de travail en marbre",
      es: "Macarons coloridos sobre encimera de mármol",
    },
    credit: { photographer: "Pixabay", url: "https://www.pexels.com/@pixabay" },
  },
  {
    id: "g2",
    category: "laboratory",
    image: images.pastryHands,
    alt: {
      it: "Chef pasticciera che lavora il cioccolato",
      en: "Pastry chef tempering chocolate",
      fr: "Cheffe pâtissière travaillant le chocolat",
      es: "Pastelera templando chocolate",
    },
    credit: { photographer: "Monika Grabkowska", url: "https://unsplash.com/@moniqa" },
  },
  {
    id: "g3",
    category: "interiors",
    image: images.bakeryInterior,
    alt: {
      it: "Interno elegante di pasticceria artigianale",
      en: "Elegant artisan bakery interior",
      fr: "Intérieur élégant de pâtisserie artisanale",
      es: "Interior elegante de pastelería artesanal",
    },
    credit: { photographer: "Lisa Fotios", url: "https://www.pexels.com/@fotios-photos" },
  },
  {
    id: "g4",
    category: "creations",
    image: images.chocolateCake,
    alt: {
      it: "Torta al cioccolato con glassa lucida",
      en: "Chocolate cake with glossy glaze",
      fr: "Gâteau au chocolat au glaçage brillant",
      es: "Tarta de chocolate con glaseado brillante",
    },
    credit: { photographer: "American Heritage Chocolate", url: "https://unsplash.com/@americanheritagechocolate" },
  },
  {
    id: "g5",
    category: "details",
    image: images.pastryDisplay,
    alt: {
      it: "Dettaglio di pasticcini su vassoio",
      en: "Detail of pastries on a serving tray",
      fr: "Détail de pâtisseries sur plateau",
      es: "Detalle de pastelería en bandeja",
    },
    credit: { photographer: "Daria Shevtsova", url: "https://www.pexels.com/@daria-shevtsova" },
  },
  {
    id: "g6",
    category: "creations",
    image: images.berryDessert,
    alt: {
      it: "Dolce con frutti di bosco freschi",
      en: "Dessert with fresh berries",
      fr: "Dessert aux fruits rouges frais",
      es: "Postre con frutos rojos frescos",
    },
    credit: { photographer: "Syd Wachs", url: "https://unsplash.com/@sydiw" },
  },
  {
    id: "g7",
    category: "laboratory",
    image: images.kneadingDough,
    alt: {
      it: "Laboratorio pasticceria con impasti",
      en: "Pastry laboratory with dough preparations",
      fr: "Laboratoire de pâtisserie avec préparations",
      es: "Laboratorio de pastelería con masas",
    },
    credit: { photographer: "Becca Tapert", url: "https://unsplash.com/@taptap" },
  },
  {
    id: "g8",
    category: "details",
    image: images.croissants,
    alt: {
      it: "Croissant appena sfornato",
      en: "Freshly baked croissant",
      fr: "Croissant fraîchement sorti du four",
      es: "Croissant recién horneado",
    },
    credit: { photographer: "Pexels", url: "https://www.pexels.com" },
  },
  {
    id: "g9",
    category: "interiors",
    image: images.marblePastry,
    alt: {
      it: "Bancone in marmo con dolci esposti",
      en: "Marble counter with displayed pastries",
      fr: "Comptoir en marbre avec pâtisseries exposées",
      es: "Mostrador de mármol con pastelería expuesta",
    },
    credit: { photographer: "Fakurian Design", url: "https://unsplash.com/@fakurian" },
  },
  {
    id: "g10",
    category: "creations",
    image: images.pastry03,
    alt: {
      it: "Torta al cioccolato con fetta",
      en: "Chocolate cake with a slice",
      fr: "Gâteau au chocolat avec une part",
      es: "Tarta de chocolate con porción",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "g11",
    category: "details",
    image: images.pastry01,
    alt: {
      it: "Macaron impilati in tonalità pastello",
      en: "Stacked macarons in pastel tones",
      fr: "Macarons empilés en tons pastel",
      es: "Macarons apilados en tonos pastel",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "g12",
    category: "laboratory",
    image: images.professionalKitchen,
    alt: {
      it: "Cucina professionale con attrezzature",
      en: "Professional kitchen with equipment",
      fr: "Cuisine professionnelle avec équipements",
      es: "Cocina profesional con equipamiento",
    },
    credit: { photographer: "Becca Tapert", url: "https://unsplash.com/@taptap" },
  },
  {
    id: "g13",
    category: "creations",
    image: images.pastry04,
    alt: {
      it: "Pasticceria francese su piatto bianco",
      en: "French pastry on a white plate",
      fr: "Pâtisserie française sur assiette blanche",
      es: "Pastelería francesa en plato blanco",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "g14",
    category: "interiors",
    image: images.patisserieCafe,
    alt: {
      it: "Caffè pasticceria con luce naturale",
      en: "Patisserie café with natural light",
      fr: "Café pâtisserie à la lumière naturelle",
      es: "Café pastelería con luz natural",
    },
    credit: { photographer: "Nathan Dumlao", url: "https://unsplash.com/@nate_dumlao" },
  },
  {
    id: "g15",
    category: "details",
    image: images.pastry05,
    alt: {
      it: "Éclair al cioccolato fondente",
      en: "Dark chocolate éclair",
      fr: "Éclair au chocolat fondant",
      es: "Éclair de chocolate oscuro",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "g16",
    category: "creations",
    image: images.pastry07,
    alt: {
      it: "Torta al limone con meringa",
      en: "Lemon meringue tart",
      fr: "Tarte au citron meringuée",
      es: "Tarta de limón con merengue",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "g17",
    category: "laboratory",
    image: images.chocolateCloseUp,
    alt: {
      it: "Mani che impastano in laboratorio",
      en: "Hands kneading dough in the laboratory",
      fr: "Mains pétrissant la pâte au laboratoire",
      es: "Manos amasando en el laboratorio",
    },
    credit: { photographer: "Lisa Fotios", url: "https://www.pexels.com/@fotios-photos" },
  },
  {
    id: "g18",
    category: "interiors",
    image: images.displayCase,
    alt: {
      it: "Vetrina pasticceria con dolci esposti",
      en: "Patisserie display case with pastries",
      fr: "Vitrine de pâtisserie avec gâteaux exposés",
      es: "Vitrina de pastelería con dulces expuestos",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
];

export const galleryCategories: GalleryCategory[] = [
  "interiors",
  "creations",
  "details",
  "laboratory",
];

export const galleryTeaserItems = galleryItems.slice(0, 6);

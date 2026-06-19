export type ProductCategory =
  | "dryPastry"
  | "mousse"
  | "chocolate"
  | "seasonal";

export type Product = {
  id: string;
  slug: string;
  category: ProductCategory;
  name: string;
  description: Record<"it" | "en" | "fr" | "es", string>;
  price: number;
  image: string;
  imageAlt: Record<"it" | "en" | "fr" | "es", string>;
  featured?: boolean;
  credit: {
    photographer: string;
    url: string;
  };
};

import { images } from "@/lib/images";

export const products: Product[] = [
  {
    id: "1",
    slug: "saint-honore",
    category: "dryPastry",
    name: "Saint-Honoré de la Maison",
    description: {
      it: "Choux caramellati, crema mousseline alla vaniglia Bourbon e perle di zucchero.",
      en: "Caramelized choux, Bourbon vanilla mousseline cream and sugar pearls.",
      fr: "Choux caramélisés, crème mousseline à la vanille Bourbon et perles de sucre.",
      es: "Choux caramelizados, crema mousseline de vainilla Bourbon y perlas de azúcar.",
    },
    price: 12,
    image: images.berryDessert,
    imageAlt: {
      it: "Saint-Honoré su piatto di porcellana bianca",
      en: "Saint-Honoré on a white porcelain plate",
      fr: "Saint-Honoré sur assiette en porcelaine blanche",
      es: "Saint-Honoré en plato de porcelana blanca",
    },
    featured: true,
    credit: { photographer: "Syd Wachs", url: "https://unsplash.com/@sydiw" },
  },
  {
    id: "2",
    slug: "entremets-yuzu",
    category: "mousse",
    name: "Entremets Yuzu-Framboise",
    description: {
      it: "Mousse yuzu, inserto lampone e base cacao croccante.",
      en: "Yuzu mousse, raspberry insert and crisp cocoa base.",
      fr: "Mousse yuzu, insert framboise et base croustillante au cacao.",
      es: "Mousse de yuzu, inserto de frambuesa y base crujiente de cacao.",
    },
    price: 14,
    image: images.chocolateCake,
    imageAlt: {
      it: "Entremets rosa con glassa lucida",
      en: "Pink entremets with glossy glaze",
      fr: "Entremets rose au glaçage brillant",
      es: "Entremets rosa con glaseado brillante",
    },
    featured: true,
    credit: { photographer: "American Heritage Chocolate", url: "https://unsplash.com/@americanheritagechocolate" },
  },
  {
    id: "3",
    slug: "tarte-chocolat",
    category: "chocolate",
    name: "Tarte au Chocolat 72%",
    description: {
      it: "Ganache fondente, frolla al cacao e nocciole piemontesi.",
      en: "Dark ganache, cocoa shortcrust and Piedmont hazelnuts.",
      fr: "Ganache fondante, pâte sablée au cacao et noisettes du Piémont.",
      es: "Ganache oscura, masa sablée de cacao y avellanas del Piamonte.",
    },
    price: 11,
    image: images.pastry03,
    imageAlt: {
      it: "Torta al cioccolato con fetta tagliata",
      en: "Chocolate tart with a sliced portion",
      fr: "Tarte au chocolat avec une part coupée",
      es: "Tarta de chocolate con una porción cortada",
    },
    featured: true,
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "4",
    slug: "macaron-collection",
    category: "dryPastry",
    name: "Macaron Collection",
    description: {
      it: "Selezione stagionale di sei macaron con ganache artigianale.",
      en: "Seasonal selection of six macarons with artisan ganache.",
      fr: "Sélection saisonnière de six macarons à ganache artisanale.",
      es: "Selección estacional de seis macarons con ganache artesanal.",
    },
    price: 18,
    image: images.macarons,
    imageAlt: {
      it: "Macaron color pastello disposti in fila",
      en: "Pastel macarons arranged in a row",
      fr: "Macarons pastel disposés en rangée",
      es: "Macarons pastel dispuestos en fila",
    },
    featured: true,
    credit: { photographer: "Pixabay", url: "https://www.pexels.com/@pixabay" },
  },
  {
    id: "5",
    slug: "croissant-beurre",
    category: "dryPastry",
    name: "Croissant au Beurre AOP",
    description: {
      it: "Sfogliatura a 81 strati con burro Charentes-Poitou.",
      en: "81-layer lamination with Charentes-Poitou butter.",
      fr: "Feuilletage 81 couches au beurre Charentes-Poitou.",
      es: "Laminado de 81 capas con mantequilla Charentes-Poitou.",
    },
    price: 5,
    image: images.croissants,
    imageAlt: {
      it: "Croissant dorato su carta da forno",
      en: "Golden croissant on parchment paper",
      fr: "Croissant doré sur papier sulfurisé",
      es: "Croissant dorado sobre papel de hornear",
    },
    credit: { photographer: "Pexels", url: "https://www.pexels.com" },
  },
  {
    id: "6",
    slug: "millefeuille-vanilla",
    category: "dryPastry",
    name: "Millefeuille à la Vanille",
    description: {
      it: "Tre strati di sfoglia caramellata e crème pâtissière alla vaniglia.",
      en: "Three layers of caramelized puff pastry and vanilla crème pâtissière.",
      fr: "Trois couches de feuilletage caramélisé et crème pâtissière vanille.",
      es: "Tres capas de hojaldre caramelizado y crème pâtissière de vainilla.",
    },
    price: 9,
    image: images.pastry04,
    imageAlt: {
      it: "Millefeuille con glassa bianca",
      en: "Millefeuille with white icing",
      fr: "Millefeuille au glaçage blanc",
      es: "Millefeuille con glaseado blanco",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "7",
    slug: "mousse-pistache",
    category: "mousse",
    name: "Mousse Pistache-Sicilia",
    description: {
      it: "Pistacchio di Bronte, inserto ciliegia e praliné croccante.",
      en: "Bronte pistachio, cherry insert and crisp praliné.",
      fr: "Pistache de Bronte, insert cerise et praliné croquant.",
      es: "Pistacho de Bronte, inserto de cereza y praliné crujiente.",
    },
    price: 13,
    image: images.pistachioDessert,
    imageAlt: {
      it: "Dessert verde pistacchio in coppetta",
      en: "Pistachio green dessert in a cup",
      fr: "Dessert vert pistache en coupe",
      es: "Postre verde pistacho en copa",
    },
    credit: { photographer: "Slava", url: "https://unsplash.com/@slava" },
  },
  {
    id: "8",
    slug: "eclair-cafe",
    category: "chocolate",
    name: "Éclair au Café",
    description: {
      it: "Pasta choux, crème al caffè arabica e glassa fondente.",
      en: "Choux pastry, arabica coffee cream and dark glaze.",
      fr: "Pâte à choux, crème au café arabica et glaçage fondant.",
      es: "Masa choux, crema de café arábica y glaseado oscuro.",
    },
    price: 7,
    image: images.pastry05,
    imageAlt: {
      it: "Éclair al cioccolato su vassoio",
      en: "Chocolate éclair on a tray",
      fr: "Éclair au chocolat sur plateau",
      es: "Éclair de chocolate en bandeja",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "9",
    slug: "tarte-citron",
    category: "seasonal",
    name: "Tarte au Citron Meyer",
    description: {
      it: "Crema al limone Meyer, meringa italiana e scorza candita.",
      en: "Meyer lemon cream, Italian meringue and candied zest.",
      fr: "Crème au citron Meyer, meringue italienne et zeste confit.",
      es: "Crema de limón Meyer, merengue italiano y piel confitada.",
    },
    price: 10,
    image: images.pastry07,
    imageAlt: {
      it: "Torta al limone con meringa dorata",
      en: "Lemon tart with golden meringue",
      fr: "Tarte au citron à meringue dorée",
      es: "Tarta de limón con merengue dorado",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "10",
    slug: "baba-rhum",
    category: "seasonal",
    name: "Baba au Rhum",
    description: {
      it: "Impasto lievitato, sciroppo al rum agricolo e chantilly.",
      en: "Yeasted dough, agricultural rum syrup and chantilly.",
      fr: "Pâte levée, sirop au rhum agricole et chantilly.",
      es: "Masa leudada, jarabe de ron agrícola y chantilly.",
    },
    price: 8,
    image: images.pastry06,
    imageAlt: {
      it: "Baba al rum con panna montata",
      en: "Rum baba with whipped cream",
      fr: "Baba au rhum avec crème chantilly",
      es: "Baba al ron con nata montada",
    },
    credit: { photographer: "Klaus Nielsen", url: "https://www.pexels.com/@klaus-nielsen-629708" },
  },
  {
    id: "11",
    slug: "opera",
    category: "chocolate",
    name: "Opéra Revisité",
    description: {
      it: "Biscotto Joconde, ganache al caffè e glassa al cioccolato.",
      en: "Joconde sponge, coffee ganache and chocolate glaze.",
      fr: "Biscuit Joconde, ganache au café et glaçage chocolat.",
      es: "Bizcocho Joconde, ganache de café y glaseado de chocolate.",
    },
    price: 11,
    image: images.tiramisuSlice,
    imageAlt: {
      it: "Fetta di torta Opera su piatto elegante",
      en: "Slice of Opera cake on an elegant plate",
      fr: "Part de gâteau Opéra sur assiette élégante",
      es: "Porción de tarta Opera en plato elegante",
    },
    credit: { photographer: "Kobby Mendez", url: "https://unsplash.com/@kobbymendez" },
  },
  {
    id: "12",
    slug: "financier-noisette",
    category: "dryPastry",
    name: "Financier Noisette",
    description: {
      it: "Burro nocciola, mandorle di Sicilia e miele di acacia.",
      en: "Hazelnut butter, Sicilian almonds and acacia honey.",
      fr: "Beurre noisette, amandes de Sicile et miel d'acacia.",
      es: "Mantequilla avellanada, almendras sicilianas y miel de acacia.",
    },
    price: 4,
    image: images.marblePastry,
    imageAlt: {
      it: "Financier dorati su superficie di marmo",
      en: "Golden financiers on a marble surface",
      fr: "Financiers dorés sur surface en marbre",
      es: "Financiers dorados sobre superficie de mármol",
    },
    credit: { photographer: "Fakurian Design", url: "https://unsplash.com/@fakurian" },
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const productCategories: ProductCategory[] = [
  "dryPastry",
  "mousse",
  "chocolate",
  "seasonal",
];

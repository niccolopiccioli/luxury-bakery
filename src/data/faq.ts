import type { Locale } from "@/i18n/routing";

export type FaqCategory =
  | "visit"
  | "allergens"
  | "custom"
  | "reservations"
  | "gifts";

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
};

export const faqCategories: FaqCategory[] = [
  "visit",
  "allergens",
  "custom",
  "reservations",
  "gifts",
];

export const faqItems: FaqItem[] = [
  {
    id: "visit-1",
    category: "visit",
    question: {
      it: "Devo prenotare per visitare il salone?",
      en: "Do I need a reservation to visit the salon?",
      fr: "Dois-je réserver pour visiter le salon ?",
      es: "¿Necesito reservar para visitar el salón?",
    },
    answer: {
      it: "No per acquisti al banco. Consigliamo la prenotazione per degustazioni guidate e eventi privati.",
      en: "No for counter purchases. We recommend booking for guided tastings and private events.",
      fr: "Non pour les achats au comptoir. Nous recommandons de réserver pour les dégustations guidées et les événements privés.",
      es: "No para compras en mostrador. Recomendamos reservar para degustaciones guiadas y eventos privados.",
    },
  },
  {
    id: "visit-2",
    category: "visit",
    question: {
      it: "C'è parcheggio nelle vicinanze?",
      en: "Is there parking nearby?",
      fr: "Y a-t-il un parking à proximité ?",
      es: "¿Hay aparcamiento cerca?",
    },
    answer: {
      it: "Sì, parcheggi convenzionati in Via Sant'Andrea e parcheggio pubblico in Via Borgospesso, a 3 minuti a piedi.",
      en: "Yes, partner car parks on Via Sant'Andrea and public parking on Via Borgospesso, 3 minutes on foot.",
      fr: "Oui, parkings partenaires Via Sant'Andrea et parking public Via Borgospesso, à 3 minutes à pied.",
      es: "Sí, aparcamientos concertados en Via Sant'Andrea y aparcamiento público en Via Borgospesso, a 3 minutos a pie.",
    },
  },
  {
    id: "allergens-1",
    category: "allergens",
    question: {
      it: "Fornite informazioni sugli allergeni?",
      en: "Do you provide allergen information?",
      fr: "Fournissez-vous des informations sur les allergènes ?",
      es: "¿Proporcionan información sobre alérgenos?",
    },
    answer: {
      it: "Sì. Ogni creazione indica gli allergeni principali. Per esigenze specifiche, contattateci prima dell'ordine.",
      en: "Yes. Each creation lists major allergens. For specific needs, contact us before ordering.",
      fr: "Oui. Chaque création indique les allergènes majeurs. Pour des besoins spécifiques, contactez-nous avant de commander.",
      es: "Sí. Cada creación indica los alérgenos principales. Para necesidades específicas, contáctenos antes de pedir.",
    },
  },
  {
    id: "allergens-2",
    category: "allergens",
    question: {
      it: "Avete opzioni senza glutine?",
      en: "Do you offer gluten-free options?",
      fr: "Proposez-vous des options sans gluten ?",
      es: "¿Ofrecen opciones sin gluten?",
    },
    answer: {
      it: "Alcune creazioni stagionali possono essere adattate. Non siamo un laboratorio certificato senza glutine.",
      en: "Some seasonal creations can be adapted. We are not a certified gluten-free laboratory.",
      fr: "Certaines créations saisonnières peuvent être adaptées. Nous ne sommes pas un laboratoire certifié sans gluten.",
      es: "Algunas creaciones estacionales pueden adaptarse. No somos un laboratorio certificado sin gluten.",
    },
  },
  {
    id: "custom-1",
    category: "custom",
    question: {
      it: "Realizzate torte su misura?",
      en: "Do you make custom cakes?",
      fr: "Réalisez-vous des gâteaux sur mesure ?",
      es: "¿Elaboran tartas a medida?",
    },
    answer: {
      it: "Sì, su prenotazione con almeno 7 giorni di anticipo. Un briefing con la chef è incluso nel servizio.",
      en: "Yes, by appointment with at least 7 days' notice. A briefing with the chef is included.",
      fr: "Oui, sur rendez-vous avec au moins 7 jours de préavis. Un briefing avec la cheffe est inclus.",
      es: "Sí, con cita previa y al menos 7 días de antelación. Incluye una reunión con la chef.",
    },
  },
  {
    id: "reservations-1",
    category: "reservations",
    question: {
      it: "Qual è la policy di cancellazione?",
      en: "What is the cancellation policy?",
      fr: "Quelle est la politique d'annulation ?",
      es: "¿Cuál es la política de cancelación?",
    },
    answer: {
      it: "Cancellazione gratuita fino a 48 ore prima. Oltre tale termine, potrebbe essere applicato un acconto.",
      en: "Free cancellation up to 48 hours before. After that, a deposit may apply.",
      fr: "Annulation gratuite jusqu'à 48 h avant. Au-delà, un acompte peut s'appliquer.",
      es: "Cancelación gratuita hasta 48 h antes. Después, puede aplicarse un depósito.",
    },
  },
  {
    id: "gifts-1",
    category: "gifts",
    question: {
      it: "Offrite consegna e confezioni regalo?",
      en: "Do you offer delivery and gift packaging?",
      fr: "Proposez-vous la livraison et les emballages cadeaux ?",
      es: "¿Ofrecen entrega y empaquetado regalo?",
    },
    answer: {
      it: "Consegna in centro Milano e corriere premium su richiesta. Confezioni regalo artigianali disponibili.",
      en: "Delivery in central Milan and premium courier on request. Artisan gift packaging available.",
      fr: "Livraison dans le centre de Milan et coursier premium sur demande. Emballages cadeaux artisanaux disponibles.",
      es: "Entrega en el centro de Milán y mensajería premium bajo pedido. Empaquetado regalo artesanal disponible.",
    },
  },
];

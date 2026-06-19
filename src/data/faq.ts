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
      it: "No per acquisti al banco e per le nostre viennoiserie del mattino. Consigliamo vivamente la prenotazione per degustazioni guidate, eventi privati e quando desiderate parlare con la chef senza fretta.",
      en: "No for counter purchases and our morning viennoiserie. We strongly recommend booking for guided tastings, private events, and when you'd like unhurried time with the chef.",
      fr: "Non pour les achats au comptoir et nos viennoiseries du matin. Nous recommandons fortement de réserver pour les dégustations guidées, événements privés et un moment sans hâte avec la cheffe.",
      es: "No para compras en mostrador y nuestra viennoiserie matutina. Recomendamos reservar para degustaciones guiadas, eventos privados y cuando desee tiempo sin prisas con la chef.",
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
      it: "Sì. Parcheggi convenzionati in Via Sant'Andrea e parcheggio pubblico in Via Borgospesso, entrambi a circa 3 minuti a piedi. Il Quartiere Quadrilatero è pedonale in parte — consigliamo di arrivare con qualche minuto di anticipo.",
      en: "Yes. Partner car parks on Via Sant'Andrea and public parking on Via Borgospesso, both about 3 minutes on foot. The Quadrilatero district is partly pedestrian — allow a few extra minutes.",
      fr: "Oui. Parkings partenaires Via Sant'Andrea et parking public Via Borgospesso, à environ 3 minutes à pied. Le Quadrilatero est en partie piéton — prévoyez quelques minutes de plus.",
      es: "Sí. Aparcamientos concertados en Via Sant'Andrea y aparcamiento público en Via Borgospesso, a unos 3 minutos a pie. El Quadrilatero es parcialmente peatonal — calcule unos minutos extra.",
    },
  },
  {
    id: "visit-3",
    category: "visit",
    question: {
      it: "Posso visitare il laboratorio durante la produzione?",
      en: "Can I watch the laboratory during production?",
      fr: "Puis-je observer le laboratoire en production ?",
      es: "¿Puedo ver el laboratorio durante la produzione?",
    },
    answer: {
      it: "Sì — è parte della nostra filosofia. Dalle 7 alle 11 potete osservare laminazione, temperaggio e montaggio. Durante le degustazioni su prenotazione siete a pochi metri dal pass con spiegazioni del team.",
      en: "Yes — it's central to our philosophy. From 7 to 11 a.m. you can watch lamination, tempering and assembly. During booked tastings you sit metres from the pass with explanations from the team.",
      fr: "Oui — c'est au cœur de notre philosophie. De 7 h à 11 h, vous pouvez observer lamination et tempérage. Lors des dégustations réservées, vous êtes à quelques mètres du pass.",
      es: "Sí — es parte de nuestra filosofía. De 7 a 11 h puede observar laminado y templado. En degustaciones reservadas está a pocos metros del pass con explicaciones del equipo.",
    },
  },
  {
    id: "visit-4",
    category: "visit",
    question: {
      it: "Accettate bambini nelle degustazioni?",
      en: "Are children welcome at tastings?",
      fr: "Les enfants sont-ils les bienvenus aux dégustations ?",
      es: "¿Se admiten niños en las degustaciones?",
    },
    answer: {
      it: "Sì, con accompagnamento adulto. Offriamo porzioni ridotte su richiesta. Per gruppi scolastici organizziamo visite didattiche il martedì mattina — contattateci con almeno due settimane di anticipo.",
      en: "Yes, with an accompanying adult. We offer smaller portions on request. For school groups we run educational visits Tuesday mornings — contact us at least two weeks ahead.",
      fr: "Oui, avec un adulte accompagnateur. Portions réduites sur demande. Pour les groupes scolaires, visites pédagogiques le mardi matin — contactez-nous deux semaines à l'avance.",
      es: "Sí, con un adulto. Porciones reducidas bajo pedido. Para grupos escolares, visitas educativas los martes por la mañana — contáctenos con dos semanas de antelación.",
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
      it: "Sì. Ogni creazione indica gli allergeni principali (glutine, latte, uova, frutta a guscio, soia). Schede complete disponibili al banco e via email. Per esigenze specifiche, contattateci prima dell'ordine — valutiamo ogni richiesta con la chef.",
      en: "Yes. Every creation lists major allergens (gluten, dairy, eggs, tree nuts, soy). Full sheets at the counter and by email. For specific needs, contact us before ordering — the chef reviews each request.",
      fr: "Oui. Chaque création indique les allergènes majeurs. Fiches complètes au comptoir et par email. Pour des besoins spécifiques, contactez-nous avant de commander.",
      es: "Sí. Cada creación indica los alérgenos principales. Fichas completas en mostrador y por email. Para necesidades específicas, contáctenos antes de pedir.",
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
      it: "Alcune creazioni stagionali possono essere adattate su richiesta. Non siamo un laboratorio certificato senza glutine e lavoriamo in uno spazio condiviso — valutiamo caso per caso con massima trasparenza.",
      en: "Some seasonal creations can be adapted on request. We are not a certified gluten-free laboratory and work in a shared space — we assess each case with full transparency.",
      fr: "Certaines créations saisonnières peuvent être adaptées. Nous ne sommes pas un laboratoire certifié sans gluten — nous évaluons chaque cas avec transparence.",
      es: "Algunas creaciones estacionales pueden adaptarse. No somos un laboratorio certificado sin gluten — evaluamos cada caso con transparencia.",
    },
  },
  {
    id: "allergens-3",
    category: "allergens",
    question: {
      it: "Usate alcool nelle preparazioni?",
      en: "Do you use alcohol in your preparations?",
      fr: "Utilisez-vous de l'alcool dans vos préparations ?",
      es: "¿Usan alcohol en sus preparaciones?",
    },
    answer: {
      it: "Occasionalmente — rum in babà, kirsch in certe creme, liquori in praliné. Sempre indicato in etichetta. Possiamo omettere o sostituire su richiesta quando la ricetta lo consente.",
      en: "Occasionally — rum in babà, kirsch in some creams, liqueurs in praliné. Always listed on the label. We can omit or substitute when the recipe allows.",
      fr: "Occasionnellement — rhum, kirsch, liqueurs en praliné. Toujours indiqué. Nous pouvons omettre ou substituer quand la recette le permet.",
      es: "Ocasionalmente — ron en babà, kirsch en algunas cremas, licores en praliné. Siempre indicado. Podemos omitir o sustituir cuando la receta lo permita.",
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
      it: "Sì, su prenotazione con almeno 7 giorni di anticipo (14 per matrimoni ed eventi oltre 20 persone). Un briefing con la chef è incluso: gusti, dimensioni, allestimento e consegna.",
      en: "Yes, by appointment with at least 7 days' notice (14 for weddings and events over 20 guests). A briefing with the chef is included: flavours, size, styling and delivery.",
      fr: "Oui, sur rendez-vous avec au moins 7 jours de préavis (14 pour mariages et grands événements). Briefing avec la cheffe inclus.",
      es: "Sí, con cita previa y al menos 7 días de antelación (14 para bodas y eventos de más de 20 invitados). Incluye reunión con la chef.",
    },
  },
  {
    id: "custom-2",
    category: "custom",
    question: {
      it: "Realizzate logo o decorazioni personalizzate?",
      en: "Can you create custom logos or decorations?",
      fr: "Pouvez-vous créer logos ou décorations personnalisés ?",
      es: "¿Pueden crear logos o decoraciones personalizadas?",
    },
    answer: {
      it: "Sì — da monogrammi in cioccolato a decorazioni floreali commestibili. Condividete riferimenti visivi al briefing; il team propone soluzioni coerenti con la nostra estetica artigianale.",
      en: "Yes — from chocolate monograms to edible floral decorations. Share visual references at the briefing; the team proposes solutions aligned with our artisan aesthetic.",
      fr: "Oui — monogrammes en chocolat, décorations florales comestibles. Partagez vos références au briefing.",
      es: "Sí — desde monogramas de chocolate hasta decoraciones florales comestibles. Comparta referencias visuales en la reunión.",
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
      it: "Cancellazione gratuita fino a 48 ore prima. Entro 48 ore potrebbe essere trattenuto un acconto del 30%. Per eventi privati oltre 8 persone, condizioni specifiche vi saranno comunicate alla conferma.",
      en: "Free cancellation up to 48 hours before. Within 48 hours a 30% deposit may be retained. For private events over 8 guests, specific terms are shared at confirmation.",
      fr: "Annulation gratuite jusqu'à 48 h avant. En deçà, acompte de 30 % possible. Conditions spécifiques pour événements privés de plus de 8 personnes.",
      es: "Cancelación gratuita hasta 48 h antes. Dentro de 48 h puede retenerse un depósito del 30 %. Condiciones específicas para eventos privados de más de 8 personas.",
    },
  },
  {
    id: "reservations-2",
    category: "reservations",
    question: {
      it: "Quanto dura una degustazione guidata?",
      en: "How long does a guided tasting last?",
      fr: "Combien de temps dure une dégustation guidée ?",
      es: "¿Cuánto dura una degustación guiada?",
    },
    answer: {
      it: "Circa 75–90 minuti. Include 5–7 creazioni con spiegazione delle tecniche, abbinamento con tè o caffé specialty, e tempo per domande. Versione ridotta da 45 minuti disponibile su richiesta.",
      en: "About 75–90 minutes. Includes 5–7 creations with technique explanations, pairing with specialty tea or coffee, and time for questions. A 45-minute version is available on request.",
      fr: "Environ 75–90 minutes. 5–7 créations avec explications, accords thé ou café, temps pour questions. Version 45 minutes sur demande.",
      es: "Unos 75–90 minutos. Incluye 5–7 creaciones con explicaciones, maridaje con té o café de especialidad, y tiempo para preguntas. Versión de 45 minutos bajo pedido.",
    },
  },
  {
    id: "reservations-3",
    category: "reservations",
    question: {
      it: "Posso prenotare per un gruppo aziendale?",
      en: "Can I book for a corporate group?",
      fr: "Puis-je réserver pour un groupe d'entreprise ?",
      es: "¿Puedo reservar para un grupo corporativo?",
    },
    answer: {
      it: "Sì, fino a 14 persone nel salone privato. Per numeri superiori valutiamo format su misura con allestimento dedicato. Scriveteci a info@sweetlab.it con data, numero ospiti e preferenze.",
      en: "Yes, up to 14 guests in the private salon. For larger groups we design bespoke formats. Email info@sweetlab.it with date, guest count and preferences.",
      fr: "Oui, jusqu'à 14 personnes dans le salon privé. Formats sur mesure pour groupes plus importants. Écrivez à info@sweetlab.it.",
      es: "Sí, hasta 14 personas en el salón privado. Formatos a medida para grupos mayores. Escriba a info@sweetlab.it.",
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
      it: "Consegna in centro Milano entro 24 ore e corriere premium su richiesta per il resto d'Italia. Confezioni regalo artigianali in carta cotton e nastro rame — biglietto manoscritto incluso.",
      en: "Delivery in central Milan within 24 hours and premium courier on request for the rest of Italy. Artisan gift boxes in cotton paper with copper ribbon — handwritten note included.",
      fr: "Livraison dans le centre de Milan sous 24 h et coursier premium sur demande. Emballages artisanaux en papier coton et ruban cuivré — carte manuscrite incluse.",
      es: "Entrega en el centro de Milán en 24 h y mensajería premium bajo pedido. Empaquetado artesanal en papel algodón con cinta cobre — nota manuscrita incluida.",
    },
  },
  {
    id: "gifts-2",
    category: "gifts",
    question: {
      it: "Avete buoni regalo?",
      en: "Do you offer gift vouchers?",
      fr: "Proposez-vous des chèques-cadeaux ?",
      es: "¿Ofrecen vales regalo?",
    },
    answer: {
      it: "Sì — importi da €50 a €500, validi 12 mesi, utilizzabili per creazioni, degustazioni ed eventi privati. Disponibili al banco o via email in formato digitale elegante.",
      en: "Yes — amounts from €50 to €500, valid 12 months, redeemable for creations, tastings and private events. Available at the counter or by email in an elegant digital format.",
      fr: "Oui — montants de 50 € à 500 €, valables 12 mois. Disponibles au comptoir ou par email.",
      es: "Sí — importes de 50 € a 500 €, válidos 12 meses. Disponibles en mostrador o por email.",
    },
  },
  {
    id: "gifts-3",
    category: "gifts",
    question: {
      it: "Posso spedire un regalo direttamente al destinatario?",
      en: "Can I ship a gift directly to the recipient?",
      fr: "Puis-je envoyer un cadeau directement au destinataire ?",
      es: "¿Puedo enviar un regalo directamente al destinatario?",
    },
    answer: {
      it: "Certamente. Indicate l'indirizzo del destinatario e il messaggio al momento dell'ordine. Non includiamo la fattura nel pacco — la inviamo separatamente via email.",
      en: "Certainly. Provide the recipient's address and message when ordering. We never include the invoice in the package — it is sent separately by email.",
      fr: "Bien sûr. Indiquez l'adresse du destinataire et le message à la commande. La facture n'est jamais incluse dans le colis.",
      es: "Por supuesto. Indique la dirección del destinatario y el mensaje al pedir. Nunca incluimos la factura en el paquete.",
    },
  },
];

export type NavItem = {
  href:
    | "/chi-siamo"
    | "/creazioni"
    | "/galleria"
    | "/contatti"
    | "/prenotazioni"
    | "/faq";
  labelKey:
    | "about"
    | "products"
    | "gallery"
    | "contact"
    | "reservations"
    | "faq";
};

export const navItems: NavItem[] = [
  { href: "/chi-siamo", labelKey: "about" },
  { href: "/creazioni", labelKey: "products" },
  { href: "/galleria", labelKey: "gallery" },
  { href: "/faq", labelKey: "faq" },
  { href: "/contatti", labelKey: "contact" },
  { href: "/prenotazioni", labelKey: "reservations" },
];

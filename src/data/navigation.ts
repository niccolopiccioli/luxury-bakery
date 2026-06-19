export type NavItem = {
  href: "/chi-siamo" | "/creazioni" | "/galleria" | "/contatti" | "/prenotazioni";
  labelKey: "about" | "products" | "gallery" | "contact" | "reservations";
};

export const navItems: NavItem[] = [
  { href: "/chi-siamo", labelKey: "about" },
  { href: "/creazioni", labelKey: "products" },
  { href: "/galleria", labelKey: "gallery" },
  { href: "/contatti", labelKey: "contact" },
  { href: "/prenotazioni", labelKey: "reservations" },
];

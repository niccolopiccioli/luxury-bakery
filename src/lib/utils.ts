import type { Locale } from "@/i18n/routing";

export function getLocalizedField<T extends Record<Locale, string>>(
  field: T,
  locale: string,
): string {
  if (locale in field) {
    return field[locale as Locale];
  }
  return field.it;
}

export function formatPrice(price: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

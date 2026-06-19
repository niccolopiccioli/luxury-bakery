import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/routing";

export const phoneTel = siteConfig.phoneE164;

export function getDirectionsUrl() {
  return siteConfig.directionsUrl;
}

export function getWhatsAppUrl(locale: Locale, message?: string) {
  const defaultMessages: Record<Locale, string> = {
    it: "Ciao Sweet Lab, vorrei informazioni.",
    en: "Hello Sweet Lab, I would like some information.",
    fr: "Bonjour Sweet Lab, je souhaiterais des informations.",
    es: "Hola Sweet Lab, me gustaría recibir información.",
  };
  const text = encodeURIComponent(message ?? defaultMessages[locale]);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function getMailtoUrl(subject?: string) {
  const base = `mailto:${siteConfig.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

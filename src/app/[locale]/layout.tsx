import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConciergeBar } from "@/components/layout/ConciergeBar";
import { OffersBanner } from "@/components/home/OffersSection";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { GsapScrollCleanup } from "@/components/motion/GsapScrollCleanup";
import { PageTransition } from "@/components/motion/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocalBusinessSchema } from "@/lib/structured-data";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full bg-cream font-body text-espresso antialiased">
        <JsonLd data={getLocalBusinessSchema()} />
        <NextIntlClientProvider messages={messages}>
          <SmoothScrollProvider>
            <GsapScrollCleanup />
            <div className="grain-overlay" aria-hidden="true" />
            <OffersBanner />
            <Header />
            <main className="flex-1 pb-24">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <ConciergeBar />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

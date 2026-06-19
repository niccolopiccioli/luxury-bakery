import { setRequestLocale } from "next-intl/server";
import { ReservationsPageContent } from "@/components/pages/ReservationsPageContent";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  return generatePageMetadata({ params, namespace: "reservations" });
}

export default async function ReservationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ReservationsPageContent />;
}

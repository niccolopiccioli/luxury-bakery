import { setRequestLocale } from "next-intl/server";
import { ReservationsPageContent } from "@/components/pages/ReservationsPageContent";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ experience?: string }>;
};

export async function generateMetadata({ params }: Props) {
  return generatePageMetadata({
    params,
    namespace: "reservations",
    path: "/prenotazioni",
  });
}

export default async function ReservationsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { experience } = await searchParams;
  setRequestLocale(locale);

  return <ReservationsPageContent experienceSlug={experience} />;
}

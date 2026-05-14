import HomeBeforeAfter from "@/components/pages/home/HomeBeforeAfter";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeProcess from "@/components/pages/home/HomeProcess";
import HomeServices from "@/components/pages/home/HomeServices";
import HomeStatsStrip from "@/components/pages/home/HomeStatsStrip";
import HomeTestimonials from "@/components/pages/home/HomeTestimonials";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-x-hidden">
      <HomeHero locale={locale} />
      <HomeStatsStrip />
      <HomeServices locale={locale} />
      <HomeBeforeAfter locale={locale} />
      <HomeTestimonials />
      <HomeProcess />
    </main>
  );
}

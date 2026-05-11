import HomeBeforeAfter from "@/components/home/HomeBeforeAfter";
import HomeHero from "@/components/home/HomeHero";
import HomeProcess from "@/components/home/HomeProcess";
import HomeServices from "@/components/home/HomeServices";
import HomeStatsStrip from "@/components/home/HomeStatsStrip";
import HomeTestimonials from "@/components/home/HomeTestimonials";

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

import HomeBeforeAfter from "@/components/pages/home/HomeProjectsPreview";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeProcess from "@/components/pages/home/HomeProcess";
import HomeServicesPreview from "@/components/pages/home/HomeServicesPreview";
import HomeStatsStrip from "@/components/pages/home/HomeStatsStrip";
import HomeTestimonials from "@/components/pages/home/HomeTestimonials";
import HomeTrustBar from "@/components/pages/home/HomeTrustBar";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-x-hidden">
      <HomeHero locale={locale} />
      <HomeServicesPreview locale={locale} />
      <HomeBeforeAfter locale={locale} />
      <HomeTrustBar />
      <HomeStatsStrip />
      <HomeTestimonials />
      <HomeProcess />
    </main>
  );
}

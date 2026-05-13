import AboutCta from "@/components/pages/about/AboutCta";
import AboutHero from "@/components/pages/about/AboutHero";
import AboutValuesWhyChoose from "@/components/pages/about/AboutValuesWhyChoose";
import AboutCompany from "@/components/pages/about/AboutCompany";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  await params;

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-x-hidden">
      <AboutHero />
      <AboutCompany />
      <AboutValuesWhyChoose />
      <AboutCta />
    </main>
  );
}

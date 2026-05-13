import AboutCta from "@/components/about/AboutCta";
import AboutHero from "@/components/about/AboutHero";
import AboutValuesWhyChoose from "@/components/about/AboutValuesWhyChoose";
import AboutCompany from "@/components/about/AboutCompany";

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

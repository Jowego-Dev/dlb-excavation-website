import ServicesBeforeAfter from "@/components/pages/services/ServicesBeforeAfter";
import ServicesFinalCta from "@/components/pages/services/ServicesFinalCta";
import ServicesGrid from "@/components/pages/services/ServicesGrid";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesProcess from "@/components/pages/services/ServicesProcess";
import ServicesTestimonials from "@/components/pages/services/ServicesTestimonials";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  await params;

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-x-hidden">
      <ServicesHero />
      <ServicesGrid />
      <ServicesBeforeAfter />
      <ServicesTestimonials />
      <ServicesProcess />
      <ServicesFinalCta />
    </main>
  );
}

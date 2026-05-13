import ServicesBeforeAfter from "./ServicesBeforeAfter";
import ServicesFeaturesStrip from "./ServicesFeaturesStrip";
import ServicesFinalCta from "./ServicesFinalCta";
import ServicesGrid from "./ServicesGrid";
import ServicesHero from "./ServicesHero";
import ServicesProcess from "./ServicesProcess";
import ServicesTestimonials from "./ServicesTestimonials";

export default function ServicesPageView() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesFeaturesStrip />
      <ServicesBeforeAfter />
      <ServicesTestimonials />
      <ServicesProcess />
      <ServicesFinalCta />
    </>
  );
}

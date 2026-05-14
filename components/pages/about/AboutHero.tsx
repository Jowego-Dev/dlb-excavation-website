import Hero from "@/components/sections/Hero";

export default function AboutHero() {
  return (
    <Hero
      variant="page"
      headingId="about-hero-heading"
      image="/images/about/hero.webp"
      imageAlt="Landscaped residential property at dusk with outdoor lighting"
      eyebrow={
        <p className="text-xs font-semibold tracking-[0.2em] text-[#7cb342] sm:text-sm">
          ABOUT
        </p>
      }
      title="DLB Excavation"
      description="We are a local excavation and site-prep team focused on precision grading, drainage, and hardscape-ready foundations—delivered with clear communication and respect for your property across the Ottawa–Gatineau region."
    />
  );
}

import { FaPhone } from "react-icons/fa6";
import Hero from "@/components/sections/Hero";
import ActionButton from "@/components/ui/ActionButton";
import { CTAButton } from "@/components/ui/CTAButton";
import { BUSINESS } from "@/lib/business/business";

export default function ServicesHero() {
  return (
    <Hero
      variant="page"
      headingId="services-hero-heading"
      image="/images/services/hero.webp"
      imageAlt="Heavy equipment preparing a residential excavation site"
      eyebrow={
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
          Our services
        </p>
      }
      title="Complete excavation solutions"
      description="From tight-access digs to finish grading, we deliver organized job sites, clear communication, and workmanship built for drainage, stability, and Ottawa–Gatineau weather."
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <CTAButton className="min-h-13 px-6 py-3 text-base" />
        <ActionButton
          href={BUSINESS.contact.phoneHref}
          className="min-h-13 gap-3 px-6 py-3 text-base"
        >
          <FaPhone className="h-5 w-5 shrink-0" aria-hidden />
          Call {BUSINESS.contact.phone}
        </ActionButton>
      </div>
    </Hero>
  );
}

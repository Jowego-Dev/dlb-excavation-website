import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import ActionButton from "@/components/ui/ActionButton";
import Container from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { BUSINESS } from "@/lib/business/business";

export default function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative isolate min-h-[min(100dvh,56rem)] overflow-hidden"
    >
      <Image
        src="/images/services/hero.png"
        alt="Heavy equipment preparing a residential excavation site"
        fill
        priority
        sizes="100vw"
        className="-z-1 object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/35"
        aria-hidden
      />

      <Container className="relative z-10 max-w-[100rem] pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
            Our services
          </p>
          <h1
            id="services-hero-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Complete excavation solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            From tight-access digs to finish grading, we deliver organized job
            sites, clear communication, and workmanship built for drainage,
            stability, and Ottawa–Gatineau weather.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton className="min-h-[3.25rem] px-6 py-3 text-base" />
            <ActionButton
              href={BUSINESS.contact.phoneHref}
              className="min-h-[3.25rem] gap-3 px-6 py-3 text-base"
            >
              <FaPhone className="h-5 w-5 shrink-0" aria-hidden />
              Call {BUSINESS.contact.phone}
            </ActionButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

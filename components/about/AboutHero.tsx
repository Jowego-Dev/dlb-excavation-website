import Image from "next/image";
import Container from "@/components/Container";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative isolate min-h-[min(100dvh,52rem)] overflow-hidden sm:min-h-[min(100dvh,56rem)]"
    >
      <Image
        src="/images/about/hero.webp"
        alt="Landscaped residential property at dusk with outdoor lighting"
        fill
        priority
        sizes="100vw"
        className="-z-1 object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[min(100dvh,52rem)] items-center py-24 sm:min-h-[min(100dvh,56rem)] sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <h1
            id="about-hero-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            About DLB Excavation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            We are a local excavation and site-prep team focused on precision grading, drainage,
            and hardscape-ready foundations—delivered with clear communication and respect for your
            property across the Ottawa–Gatineau region.
          </p>
        </div>
      </Container>
    </section>
  );
}

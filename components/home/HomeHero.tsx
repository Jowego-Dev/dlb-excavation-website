import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { CTAButton } from "../CTAButton";
import { LinkButton } from "../LinkButton";

type Props = {
  locale: string;
};

export default function HomeHero({ locale }: Props) {
  const base = `/${locale}`;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/home/hero.webp"
        alt="Outdoor patio and landscaped yard at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-1 object-cover object-center"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-r from-black/70  to-transparent"
        aria-hidden
      />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-3xl">
          <h1
            id="home-hero-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transform Your Property Into Something{" "}
            <span className="text-accent">Extraordinary</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
            Professional excavation, grading, and hardscape prep—built for
            drainage, stability, and lasting curb appeal across the
            Ottawa–Gatineau region.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton />

            <LinkButton variant="outline" href="/services">
              View our work
            </LinkButton>
          </div>
        </div>
        <div>
          <h1>test</h1>
        </div>
      </Container>
    </section>
  );
}

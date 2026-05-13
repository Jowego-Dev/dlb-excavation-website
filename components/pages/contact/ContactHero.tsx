import Image from "next/image";
import { Caveat } from "next/font/google";
import { FaPhone } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import { BUSINESS } from "@/lib/business/business";
import type { ContactCopy } from "./contact-copy";

const script = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

type Props = {
  copy: ContactCopy;
};

export default function ContactHero({ copy }: Props) {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate min-h-[min(100vh,52rem)] overflow-hidden pb-32 sm:pb-40 md:pb-44"
    >
      <Image
        src="/images/contact/hero.webp"
        alt={copy.heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/35"
        aria-hidden
      />

      <Container className="relative z-10 pt-28 pb-16 sm:pt-32 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#7cb342] sm:text-sm">
            {copy.heroEyebrow}
          </p>
          <h1
            id="contact-hero-heading"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {copy.heroTitleBefore}{" "}
            <span
              className={`${script.className} text-[#9ccc65] sm:text-6xl md:text-7xl lg:text-8xl`}
            >
              {copy.heroTitleAccent}
            </span>{" "}
            {copy.heroTitleAfter}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {copy.heroBody}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#4B6F28] text-white shadow-lg ring-4 ring-white/10"
              aria-hidden
            >
              <FaPhone className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-white/80">
                {copy.heroCallLabel}
              </p>
              <a
                href={BUSINESS.contact.phoneHref}
                className="text-2xl font-bold tracking-tight text-white underline-offset-4 hover:underline sm:text-3xl"
              >
                {BUSINESS.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Caveat } from "next/font/google";
import { FaPhone } from "react-icons/fa6";
import Hero from "@/components/sections/Hero";
import { BUSINESS } from "@/lib/business/business";
import type { ContactCopy } from "./contact-copy";

const script = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

type Props = {
  copy: ContactCopy;
};

export default function ContactHero({ copy }: Props) {
  return (
    <Hero
      variant="page"
      headingId="contact-hero-heading"
      image="/images/contact/hero.webp"
      imageAlt={copy.heroImageAlt}
      eyebrow={
        <p className="text-xs font-semibold tracking-[0.2em] text-[#7cb342] sm:text-sm">
          {copy.heroEyebrow}
        </p>
      }
      title={
        <>
          {copy.heroTitleBefore}{" "}
          <span
            className={`${script.className} text-[#9ccc65] sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            {copy.heroTitleAccent}
          </span>{" "}
          {copy.heroTitleAfter}
        </>
      }
      description={copy.heroBody}
    >
      <div className="flex flex-wrap items-center gap-4">
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
    </Hero>
  );
}

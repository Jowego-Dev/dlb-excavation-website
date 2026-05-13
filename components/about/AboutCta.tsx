import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import ActionButton from "@/components/ActionButton";
import Container from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { BUSINESS } from "@/lib/business/business";

export default function AboutCta() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <Image
        src="/images/about/cta-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-1 object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/85 via-black/78 to-black/65"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="about-cta-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to work with a team you can trust?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Let&apos;s bring your outdoor vision to life.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-end lg:justify-end">
            <CTAButton className="min-h-13 px-6 py-3 text-base" />
            <ActionButton
              href={BUSINESS.contact.phoneHref}
              className="min-h-13 gap-3 px-6 py-3 text-base"
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

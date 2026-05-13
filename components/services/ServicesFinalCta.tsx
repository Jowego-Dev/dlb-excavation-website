import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import ActionButton from "@/components/ActionButton";
import Container from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { BUSINESS } from "@/lib/business/business";

export default function ServicesFinalCta() {
  return (
    <section
      aria-labelledby="services-final-cta-heading"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <Image
        src="/images/services/cta-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-1 object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/55" aria-hidden />

      <Container className="relative z-10 max-w-[100rem]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
              Ready to start your project?
            </p>
            <h2
              id="services-final-cta-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Let&apos;s build something great together
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Tell us about your lot, your deadline, and the finish you are aiming for. We will map the
              right equipment, haul strategy, and crew size to get it done without drama.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-end lg:justify-end">
            <CTAButton className="min-h-[3.25rem] px-6 py-3 text-base" />
            <ActionButton href={BUSINESS.contact.phoneHref} className="min-h-[3.25rem] gap-3 px-6 py-3 text-base">
              <FaPhone className="h-5 w-5 shrink-0" aria-hidden />
              Call {BUSINESS.contact.phone}
            </ActionButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

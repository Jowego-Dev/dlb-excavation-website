import Image from "next/image";
import {
  FaClock,
  FaFire,
  FaHandshake,
  FaMedal,
  FaPeopleGroup,
  FaShieldHalved,
} from "react-icons/fa6";
import Container from "@/components/ui/Container";

const values = [
  {
    title: "Integrity",
    text: "Honest scopes, transparent pricing, and no surprises when conditions on site change.",
    Icon: FaShieldHalved,
  },
  {
    title: "Teamwork",
    text: "Operators, laborers, and haul partners coordinated as one crew toward the same finish line.",
    Icon: FaPeopleGroup,
  },
  {
    title: "Quality",
    text: "We cut for drainage and structure first—then refine so the next trade can start clean.",
    Icon: FaMedal,
  },
  {
    title: "Reliability",
    text: "We show up when promised and keep the job moving with the right machine on the right day.",
    Icon: FaClock,
  },
  {
    title: "Respect",
    text: "Quiet hours, neighbor-friendly access, and careful handling around trees and utilities.",
    Icon: FaHandshake,
  },
  {
    title: "Passion",
    text: "We like solving tight access, tough grades, and messy lots—done right, they are the most rewarding jobs.",
    Icon: FaFire,
  },
] as const;

const whyChoose = [
  {
    title: "Personalized service",
    description:
      "Your lot is unique; we plan equipment paths, spoils placement, and sequencing around your goals—not a generic template.",
    image: "/images/about/why-1.png",
    alt: "Finished stone walkway and garden edging",
  },
  {
    title: "Attention to detail",
    description:
      "String lines, laser checks, and final hand work where machines cannot go—so transitions and slopes look intentional.",
    image: "/images/about/why-2.png",
    alt: "Hardscape and grading detail on a residential project",
  },
  {
    title: "Built to last",
    description:
      "Compaction and drainage done with Ottawa–Gatineau freeze–thaw cycles in mind, protecting your investment for years.",
    image: "/images/about/why-3.png",
    alt: "Excavation and landscape work at a completed property",
  },
] as const;

export default function AboutValuesWhyChoose() {
  return (
    <section
      className="border-t border-slate-200 bg-white py-16 sm:py-20 lg:py-24"
      aria-label="Company values and reasons to choose DLB Excavation"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div role="region" aria-labelledby="about-values-heading">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
              Our values
            </p>
            <h2
              id="about-values-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              The principles that guide our work
            </h2>

            <ul
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
              role="list"
            >
              {values.map(({ title, text, Icon }) => (
                <li
                  key={title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-lime-400/30 hover:shadow-md"
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-600"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div role="region" aria-labelledby="about-why-heading">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
              Why choose us
            </p>
            <h2
              id="about-why-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              More than just excavation
            </h2>

            <ul className="mt-10 space-y-5" role="list">
              {whyChoose.map(({ title, description, image, alt }) => (
                <li
                  key={title}
                  className="flex gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:gap-5 sm:p-5"
                >
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-neutral-200 sm:h-28 sm:w-36">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

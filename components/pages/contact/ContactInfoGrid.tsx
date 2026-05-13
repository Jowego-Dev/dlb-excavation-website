import Link from "next/link";
import {
  FaCheck,
  FaGear,
  FaLocationDot,
  FaShieldHalved,
} from "react-icons/fa6";
import Container from "@/components/ui/Container";
import { buildLocalizedPath } from "@/lib/navigation/navigation.utils";
import { ROUTES } from "@/lib/routes";
import type { ContactCopy } from "./contact-copy";

const AREAS_EN = [
  "Gatineau",
  "Ottawa",
  "Cantley",
  "Chelsea",
  "Val-des-Monts",
  "Maniwaki",
  "Gracefield",
];

const AREAS_FR = [
  "Gatineau",
  "Ottawa",
  "Cantley",
  "Chelsea",
  "Val-des-Monts",
  "Maniwaki",
  "Gracefield",
];

type Props = {
  locale: string;
  copy: ContactCopy;
};

export default function ContactInfoGrid({ locale, copy }: Props) {
  const areas = locale === "fr" ? AREAS_FR : AREAS_EN;
  const servicesHref = buildLocalizedPath(locale, ROUTES.SERVICES);

  return (
    <section
      aria-labelledby="contact-serving-heading"
      className="bg-white pb-20 pt-12 sm:pb-24 sm:pt-16"
    >
      <Container className="max-w-[100rem]">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {/* Proudly serving */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4B6F28]/12 text-[#4B6F28]"
                aria-hidden
              >
                <FaLocationDot className="h-5 w-5" />
              </span>
              <h2
                id="contact-serving-heading"
                className="text-lg font-bold tracking-tight text-[#1A1A1A] sm:text-xl"
              >
                {copy.gridServingTitle}
              </h2>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <FaCheck
                    className="h-4 w-4 shrink-0 text-[#4B6F28]"
                    aria-hidden
                  />
                  {area}
                </li>
              ))}
            </ul>
            <Link
              href={servicesHref}
              className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-[#4B6F28] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#4B6F28] transition hover:bg-[#4B6F28] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B6F28]"
            >
              {copy.gridServingCta}
            </Link>
          </div>

          {/* How it works */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4B6F28]/12 text-[#4B6F28]"
                aria-hidden
              >
                <FaGear className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-bold tracking-tight text-[#1A1A1A] sm:text-xl">
                {copy.gridHowTitle}
              </h2>
            </div>
            <ol className="mt-6 space-y-5">
              {copy.gridHowSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4B6F28] text-xs font-bold text-white"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Why choose */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4B6F28]/12 text-[#4B6F28]"
                aria-hidden
              >
                <FaShieldHalved className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-bold tracking-tight text-[#1A1A1A] sm:text-xl">
                {copy.gridWhyTitle}
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {copy.gridWhyItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-slate-700 sm:text-base"
                >
                  <FaCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#4B6F28]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

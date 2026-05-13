import { FaClock, FaMapMarkerAlt, FaShieldAlt, FaStar } from "react-icons/fa";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: FaShieldAlt,
    title: "Licensed & insured",
    body: "Carrying the coverage and credentials your municipality and insurer expect for residential work.",
  },
  {
    icon: FaStar,
    title: "Proven workmanship",
    body: "Clean lines, tight grades, and neighbours who still wave when we wrap for the day.",
  },
  {
    icon: FaClock,
    title: "Predictable scheduling",
    body: "We book realistically, show up ready, and communicate when weather or supply shifts the plan.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Local to the region",
    body: "Soils, frost, and bylaws across Ottawa–Gatineau inform how we cut, fill, and finish every lot.",
  },
] as const;

export default function ServicesFeaturesStrip() {
  return (
    <section
      className="border-y border-neutral-200/80 bg-neutral-100 py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-features-heading"
    >
      <Container className="max-w-[100rem]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-600 sm:text-sm">
              Why choose us
            </p>
            <h2
              id="services-features-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              Local. Reliable. Built for our climate.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              We treat every driveway, shoreline, and backyard like it has to
              perform for decades—not just look good on handover day.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-neutral-300/80">
              {features.map(({ icon: Icon, title, body }) => (
                <li key={title} className="lg:px-6 first:lg:pl-0 last:lg:pr-0">
                  <div className="flex flex-col items-start">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-lime-500 text-lime-600"
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-neutral-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {body}
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

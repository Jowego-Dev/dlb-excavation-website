import Link from "next/link";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

type Props = { locale: string };

export default function HomeBeforeAfter({ locale }: Props) {
  const base = `/${locale}`;

  return (
    <section
      className="bg-emerald-950 py-16 sm:py-20 lg:py-24"
      aria-labelledby="home-before-after-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-lime-400">
            Before &amp; after
          </p>
          <h2
            id="home-before-after-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            See the transformation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Real projects, real results. Sloped yards, wet basements, and tired
            entrances—your property has more potential than you think.
          </p>
          <Link
            href={`${base}#services`}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-lime-400 px-6 py-3 text-base font-semibold text-neutral-900 shadow-sm transition hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            View more projects
          </Link>
        </div>
        <BeforeAfterSlider
          beforeSrc="/images/home/before.webp"
          afterSrc="/images/home/after.webp"
        />
      </div>
    </section>
  );
}

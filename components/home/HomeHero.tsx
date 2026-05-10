import Image from "next/image";
import Link from "next/link";

type Props = {
  locale: string;
};

export default function HomeHero({ locale }: Props) {
  const base = `/${locale}`;

  return (
    <section
      className="relative isolate flex min-h-[min(90svh,52rem)] w-screen max-w-[100vw] -translate-x-1/2 left-1/2 flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 md:justify-center md:pb-24 md:pt-28"
      aria-labelledby="home-hero-heading"
    >
      <Image
        src="/images/home/hero.png"
        alt="Outdoor patio and landscaped yard at dusk"
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div
        className="-z-10 absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h1
          id="home-hero-heading"
          className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transform Your Property Into Something{" "}
          <span className="text-lime-400">Extraordinary</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          Professional excavation, grading, and hardscape prep—built for drainage, stability,
          and lasting curb appeal across the Ottawa–Gatineau region.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center justify-center rounded-md bg-lime-400 px-6 py-3 text-base font-semibold text-neutral-900 shadow-sm transition hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            Get a free quote
          </Link>
          <Link
            href={`${base}#services`}
            className="inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}

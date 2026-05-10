import Link from "next/link";

type Props = { locale: string };

export default function HomeFinalCta({ locale }: Props) {
  const base = `/${locale}`;

  return (
    <section className="bg-emerald-950 py-16 sm:py-20" aria-labelledby="home-final-cta-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h2 id="home-final-cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to upgrade your outdoor space?
          </h2>
          <p className="mt-3 text-lg text-white/80">Let&apos;s build something amazing together.</p>
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap lg:w-auto lg:justify-end">
          <Link
            href={`${base}/contact`}
            className="inline-flex min-w-[12rem] items-center justify-center rounded-md bg-lime-400 px-6 py-3 text-center text-base font-semibold text-neutral-900 shadow-sm transition hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            Get a free quote
          </Link>
          <a
            href="tel:+18191112222"
            className="inline-flex min-w-[12rem] items-center justify-center rounded-md border border-white/80 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Call us now
          </a>
        </div>
      </div>
    </section>
  );
}

import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import Container from "@/components/Container";

export default function ServicesBeforeAfter() {
  return (
    <section
      className="bg-emerald-950 py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-before-after-heading"
    >
      <Container className="max-w-[100rem]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
              Before &amp; after
            </p>
            <h2
              id="services-before-after-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Proof in every pass
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
              Compare finished drainage, clean edges, and restored turf lines. Each slider highlights how
              thoughtful grading changes the way water moves—and how your property feels day to day.
            </p>
          </div>
          <BeforeAfterSlider
            beforeSrc="/images/services/before.webp"
            afterSrc="/images/services/after.webp"
            beforeLabel="Before"
            afterLabel="After"
          />
        </div>
      </Container>
    </section>
  );
}

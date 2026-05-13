import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "They sequenced the dig, haul-out, and new granular lifts without tearing up the whole street. Communication was steady the whole way.",
    name: "Marc D.",
    location: "Gatineau, QC",
    avatar: "/images/services/testimonial-1.png",
  },
  {
    quote:
      "Our grade finally directs water away from the foundation. The crew treated the neighbours’ drive like their own.",
    name: "Sarah L.",
    location: "Ottawa, ON",
    avatar: "/images/services/testimonial-2.png",
  },
  {
    quote:
      "Tight access, buried utilities, and a winter deadline—they still delivered a laser-checked base for our paver crew.",
    name: "James R.",
    location: "Kanata, ON",
    avatar: "/images/services/testimonial-3.png",
  },
] as const;

export default function ServicesTestimonials() {
  return (
    <section
      className="bg-neutral-100 py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-testimonials-heading"
    >
      <Container className="max-w-[100rem]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-600 sm:text-sm">
              What our clients say
            </p>
            <h2
              id="services-testimonials-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
            >
              Trusted on the properties that matter most
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              Homeowners, builders, and landscape partners rely on us when the
              grade has to be right the first time.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-7">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm">
                  <div
                    className="flex gap-0.5 text-lime-500"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="h-4 w-4" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-neutral-600">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                    <Image
                      src={t.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <cite className="not-italic text-sm font-semibold text-neutral-900">
                        {t.name}
                      </cite>
                      <p className="text-xs text-neutral-500">{t.location}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "They showed up when they said they would, kept the street clean, and our new grade actually fixed the spring pooling we fought for years.",
    name: "Marc D.",
    location: "Gatineau, QC",
    avatar: "/images/home/testimonial-1.png",
  },
  {
    quote:
      "Clear quote, no surprises, and the crew was respectful of our neighbours. The patio base is rock solid.",
    name: "Sarah L.",
    location: "Ottawa, ON",
    avatar: "/images/home/testimonial-2.png",
  },
  {
    quote:
      "We needed tight access and careful digging near utilities. DLB coordinated everything and communicated daily.",
    name: "James R.",
    location: "Kanata, ON",
    avatar: "/images/home/testimonial-3.png",
  },
] as const;

export default function HomeTestimonials() {
  return (
    <section
      className="bg-neutral-100 py-16 sm:py-20 lg:py-24"
      aria-labelledby="home-testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-lime-600">What our clients say</p>
            <h2
              id="home-testimonials-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              Trusted by homeowners across the region
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-7">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm">
                  <div className="flex gap-0.5 text-lime-500" aria-label="5 out of 5 stars">
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
                      <cite className="not-italic text-sm font-semibold text-neutral-900">{t.name}</cite>
                      <p className="text-xs text-neutral-500">{t.location}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

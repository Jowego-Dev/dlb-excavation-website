import Image from "next/image";
import Link from "next/link";
import { FaHammer, FaLeaf, FaRoad, FaTools } from "react-icons/fa";

type Props = { locale: string };

const services = [
  {
    title: "Excavation & grading",
    description: "Site prep, trenching, and precision grading for drainage and a solid base.",
    image: "/images/home/service-1.png",
    icon: FaTools,
    alt: "Excavation equipment on a residential lot",
  },
  {
    title: "Hardscape base prep",
    description: "Compacted layers and detail work so patios and driveways stay level for years.",
    image: "/images/home/service-2.png",
    icon: FaHammer,
    alt: "Prepared gravel base for paving",
  },
  {
    title: "Drainage & swales",
    description: "Move water away from foundations with swales, culverts, and thoughtful slopes.",
    image: "/images/home/service-3.png",
    icon: FaRoad,
    alt: "Grading for yard drainage",
  },
  {
    title: "Landscape support",
    description: "Soil placement, berms, and finish shaping that set up beds and turf for success.",
    image: "/images/home/service-4.png",
    icon: FaLeaf,
    alt: "Finished landscape grading",
  },
] as const;

export default function HomeServices({ locale }: Props) {
  const base = `/${locale}`;

  return (
    <section
      id="services"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="home-services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-lime-500">Our services</p>
          <h2
            id="home-services-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Complete excavation solutions
          </h2>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            From first dig to final grade, we keep communication clear and the job site organized—so
            your project stays on track and on budget.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((s) => (
            <li key={s.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-neutral-200/80 transition hover:shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image src={s.image} alt={s.alt} fill className="object-cover" sizes="(max-width:640px) 100vw, 25vw" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-lg bg-lime-400 text-neutral-900 shadow-md">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-neutral-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{s.description}</p>
                  <Link
                    href={`${base}/services`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-lime-600 transition hover:text-lime-500"
                  >
                    Learn more
                    <span aria-hidden className="ml-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

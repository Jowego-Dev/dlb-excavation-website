import Image from "next/image";
import {
  FaBoxOpen,
  FaCheck,
  FaCircle,
  FaLayerGroup,
  FaRoad,
  FaRoute,
  FaTools,
  FaTree,
  FaTruck,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import Container from "@/components/Container";

type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: IconType;
  bullets: readonly [string, string, string];
};

const services: ServiceItem[] = [
  {
    slug: "excavation",
    title: "Excavation",
    description:
      "Precision digging, trenching, and site prep with careful attention to access, utilities, and neighbouring properties.",
    image: "/images/services/grid-1.png",
    imageAlt: "Excavation equipment on a graded lot",
    icon: FaTools,
    bullets: ["Basements & additions", "Utility trenches", "Rock-aware planning"],
  },
  {
    slug: "retaining-walls",
    title: "Retaining walls",
    description:
      "Engineered prep, drainage, and backfill coordination so structural walls sit on a stable, well-compacted base.",
    image: "/images/services/grid-2.png",
    imageAlt: "Prepared base for a retaining structure",
    icon: FaLayerGroup,
    bullets: ["Base compaction", "Drainage falls", "Tiered sites"],
  },
  {
    slug: "tree-removal",
    title: "Tree removal",
    description:
      "Controlled takedowns and lift planning for hazardous trees, tight yards, and sensitive shorelines.",
    image: "/images/services/grid-3.png",
    imageAlt: "Land clearing and tree work support",
    icon: FaTree,
    bullets: ["Hazard assessments", "Crane & rigging paths", "Clean chip-out"],
  },
  {
    slug: "stump-grinding",
    title: "Stump grinding",
    description:
      "Below-grade grinding and root chasing that clears the way for new grade, seed, or hardscape without surprises.",
    image: "/images/services/grid-4.png",
    imageAlt: "Stump grinding and finish prep",
    icon: FaCircle,
    bullets: ["Depth to spec", "Debris management", "Ready for topsoil"],
  },
  {
    slug: "private-driveways",
    title: "Private driveways",
    description:
      "Subgrade shaping, geotextile, and aggregate lifts that shed water and stay smooth through freeze–thaw cycles.",
    image: "/images/services/grid-5.png",
    imageAlt: "Driveway base and gravel placement",
    icon: FaRoad,
    bullets: ["Crowns & swales", "Compacted lifts", "Clean edges"],
  },
  {
    slug: "forest-roads",
    title: "Forest roads",
    description:
      "Low-impact trails and access roads with proper crowning, culverts, and erosion control for seasonal use.",
    image: "/images/services/grid-6.png",
    imageAlt: "Gravel forest access road",
    icon: FaRoute,
    bullets: ["Culvert installs", "Ditching", "Surface renewal"],
  },
  {
    slug: "bulk-hauling",
    title: "Bulk hauling",
    description:
      "Tandem dumps for import/export of structural fill, clear, topsoil, and aggregates—scheduled to keep your site moving.",
    image: "/images/services/grid-7.png",
    imageAlt: "Dump truck delivering aggregate",
    icon: FaTruck,
    bullets: ["Tandem capacity", "Tight turns", "Metered loads"],
  },
  {
    slug: "material-delivery",
    title: "Material delivery",
    description:
      "On-time drops of screened soil, granulars, and specialty blends placed where you need them on the lot.",
    image: "/images/services/grid-8.png",
    imageAlt: "Material pile placed for spreading",
    icon: FaBoxOpen,
    bullets: ["Screened options", "Spot placement", "Repeatable schedules"],
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-grid-heading"
    >
      <Container className="max-w-[100rem]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-600 sm:text-sm">
            What we do
          </p>
          <h2
            id="services-grid-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
          >
            Our excavation &amp; landscaping services
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            One crew, one schedule, and one standard of finish—from first cut to final rake—so your
            property is ready for the next phase with confidence.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((s) => (
            <li key={s.slug} id={s.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-neutral-200/90 transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-neutral-900 shadow-lg ring-2 ring-white/90"
                    aria-hidden
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-neutral-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{s.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-neutral-100 pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-neutral-700">
                        <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

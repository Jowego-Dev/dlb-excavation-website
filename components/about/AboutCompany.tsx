import Image from "next/image";
import {
  FaComments,
  FaHammer,
  FaLeaf,
  FaMapLocationDot,
  FaUserCheck,
} from "react-icons/fa6";
import Container from "@/components/Container";

const features = [
  {
    title: "Locally owned & operated",
    description:
      "Rooted in Gatineau and serving the wider region with crews who understand local soil, weather, and bylaws.",
    Icon: FaMapLocationDot,
  },
  {
    title: "Reliable & professional",
    description:
      "Organized job sites, realistic schedules, and proactive updates so you always know what happens next.",
    Icon: FaUserCheck,
  },
  {
    title: "Quality workmanship",
    description:
      "Equipment matched to access and scope, with finish work checked for slope, compaction, and clean edges.",
    Icon: FaHammer,
  },
  {
    title: "Customer focused",
    description:
      "We listen to how you use the space—driveways, pools, additions—and tailor the dig to your end goal.",
    Icon: FaComments,
  },
] as const;

export default function AboutCompany() {
  return (
    <section
      aria-labelledby="about-who-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
              Who we are
            </p>
            <h2
              id="about-who-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
            >
              A local team with a commitment to excellence
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              <p>
                DLB Excavation was built around a simple idea: excavation should
                set the rest of your project up for success. That means
                thoughtful staging, protection of existing landscaping where
                possible, and grades that shed water the right way.
              </p>
              <p>
                From first site visit to final rake-out, we treat your property
                like our own— minimizing disruption, controlling dust and mud,
                and leaving a tidy, workable surface for whatever you build
                next.
              </p>
            </div>

            <ul className="mt-10 space-y-8" role="list">
              {features.map(({ title, description, Icon }) => (
                <li key={title} className="flex gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/10 text-lime-500"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-lg lg:aspect-[3/4]">
            <Image
              src="/images/about/team.png"
              alt="DLB Excavation crew and equipment on a residential job site"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </figure>
        </div>

        <div className="mt-14 flex flex-col gap-5 rounded-2xl bg-slate-50 p-6 sm:mt-16 sm:flex-row sm:items-center sm:gap-8 sm:p-8 lg:mt-20 lg:p-10">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-full bg-lime-400/20 text-lime-600 sm:h-16 sm:w-16"
            aria-hidden
          >
            <FaLeaf className="h-7 w-7 sm:h-8 sm:w-8" />
          </span>
          <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
            <span className="font-semibold text-neutral-900">Our mission:</span>{" "}
            To create outdoor spaces that enhance the beauty, function, and
            value of your property—built with integrity, craftsmanship, and
            care.
          </p>
        </div>
      </Container>
    </section>
  );
}

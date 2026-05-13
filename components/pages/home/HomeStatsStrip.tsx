import { FaAward, FaMapMarkerAlt, FaShieldAlt, FaStar } from "react-icons/fa";

const items = [
  {
    icon: FaAward,
    title: "10+",
    subtitle: "Years of experience",
  },
  {
    icon: FaStar,
    title: "200+",
    subtitle: "Happy customers",
  },
  {
    icon: FaShieldAlt,
    title: "Licensed",
    subtitle: "Fully licensed & insured",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Local",
    subtitle: "Serving Ottawa & Gatineau",
  },
] as const;

export default function HomeStatsStrip() {
  return (
    <section className="bg-emerald-950 py-12 sm:py-14" aria-labelledby="home-stats-heading">
      <h2 id="home-stats-heading" className="sr-only">
        Why homeowners choose DLB
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={subtitle} className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Icon className="h-8 w-8 shrink-0 text-lime-400" aria-hidden />
            <p className="mt-4 text-2xl font-bold tracking-tight text-white">{title}</p>
            <p className="mt-1 text-sm font-medium text-white/80">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

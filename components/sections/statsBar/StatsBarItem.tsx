import type { StatsBarItemData } from "./StatsBar";

type Props = StatsBarItemData;

export default function StatsBarItem({
  icon: Icon,
  value,
  title,
  description,
}: Props) {
  return (
    <div className="flex flex-col items-center px-8 py-10 text-center">
      {/* Icon */}
      <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-accent/70 bg-black/30 backdrop-blur-sm">
        <Icon className="text-5xl text-white" />
      </div>

      {/* Value */}
      <div className="text-6xl font-black tracking-tight text-accent lg:text-7xl">
        {value}
      </div>

      {/* Accent line */}
      <div className="my-5 h-1 w-14 rounded-full bg-accent" />

      {/* Title */}
      <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 max-w-xs text-base leading-8 text-white/75">
        {description}
      </p>
    </div>
  );
}

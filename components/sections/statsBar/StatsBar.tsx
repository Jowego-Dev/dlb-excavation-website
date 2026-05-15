import Section from "@/components/ui/Section";
import Image from "next/image";
import StatsBarItem from "./StatsBarItem";
import type { IconType } from "react-icons";

export type StatsBarItemData = {
  icon: IconType;
  value: string;
  title: string;
  description: string;
};

type Props = {
  items: readonly StatsBarItemData[];

  backgroundImage?: string;
};

export default function StatsBar({
  items,

  backgroundImage = "/images/home/statsbar/background.webp",
}: Props) {
  return (
    <Section
      beforeContainer={
        <>
          <Image
            src={backgroundImage}
            alt="Excavator working on a construction site"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-radial from-black/80 via-black/50 to-transparent"
            aria-hidden
          />
        </>
      }
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {items.map((item) => (
          <StatsBarItem
            key={item.title}
            icon={item.icon}
            value={item.value}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}

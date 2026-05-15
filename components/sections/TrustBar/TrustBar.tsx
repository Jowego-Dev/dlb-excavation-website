import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import TrustBarItem from "./TrustBarItem";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";

export type TrustBarItemData = {
  icon: ReactNode;
  title: string;
  description: string;
};

type TrustBarProps = {
  eyebrow?: string;
  title: ReactNode;
  items: TrustBarItemData[];
  headingId?: string;
};

export default function TrustBar({
  eyebrow,
  title,
  items,
  headingId,
}: TrustBarProps) {
  return (
    <Section aria-labelledby={headingId}>
      <div className="flex flex-col gap-6">
        <header className="text-center">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

          <h2
            id={headingId}
            className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            {title}
          </h2>
        </header>

        <ul className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.title}
              className={cn(
                "min-w-0",
                index > 0 && "md:border-l md:border-border lg:pl-8",
              )}
            >
              <TrustBarItem
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

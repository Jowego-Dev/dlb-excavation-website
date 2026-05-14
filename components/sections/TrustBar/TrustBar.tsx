import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import TrustItem from "./TrustItem";
import Section from "@/components/ui/Section";

export type TrustBarItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

type TrustBarSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  items: TrustBarItem[];
  headingId?: string;
};

export default function TrustBarSection({
  eyebrow,
  title,
  items,
  headingId,
}: TrustBarSectionProps) {
  return (
    <Section aria-labelledby={headingId}>
      <div className="flex flex-col gap-6">
        <header className="text-center">
          {eyebrow && (
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent/60" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-700 sm:text-sm">
                {eyebrow}
              </span>

              <span aria-hidden className="h-px w-8 bg-accent/60" />
            </div>
          )}

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
              <TrustItem
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

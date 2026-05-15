import type { ReactNode } from "react";
import Section from "@/components/ui/Section";
import ServicePreviewCard from "./ServicePreviewCard";
import Eyebrow from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/LinkButton";

export type ServicePreviewItem = {
  image: string;
  imageAlt: string;

  title: string;
  description: string;

  href: string;
};

type ServicePreviewSectionProps = {
  eyebrow?: string;

  title: ReactNode;
  description?: ReactNode;
  cta: string;

  items: ServicePreviewItem[];

  headingId?: string;
};

export default function ServicePreviewSection({
  eyebrow,

  title,
  description,
  cta,
  items,

  headingId,
}: ServicePreviewSectionProps) {
  return (
    <Section>
      <div className="flex flex-col gap-14">
        <header className="text-center">
          {eyebrow && (
            <div className="mb-4 flex items-center justify-center gap-3">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}

          <h2
            id={headingId}
            className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>

          {description && (
            <div className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
              {description}
            </div>
          )}
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <ServicePreviewCard
              key={item.title}
              image={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </div>
      <LinkButton href="/services" className="mt-12 mx-auto w-fit min-w-64">
        {cta}
      </LinkButton>
    </Section>
  );
}

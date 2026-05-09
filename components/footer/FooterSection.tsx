// FooterSection.tsx

import { AccordionItem } from "@/components/Accordion";

import FooterSectionHeading from "./FooterSectionHeading";
import { cn } from "@/lib/utils";

type FooterSectionProps = {
  title: string;
  children: React.ReactNode;

  defaultOpen?: boolean;

  className?: string;

  accordionBorderClassName?: string;
  accordionIconClassName?: string;
};

export default function FooterSection({
  title,
  children,
  defaultOpen = false,
  className,

  accordionBorderClassName,
  accordionIconClassName,
}: FooterSectionProps) {
  return (
    <>
      {/* Mobile Accordion */}
      <div className="lg:hidden">
        <AccordionItem
          defaultOpen={defaultOpen}
          borderClassName={accordionBorderClassName}
          iconClassName={accordionIconClassName}
          trigger={<FooterSectionHeading title={title} showDivider={false} />}
        >
          <div className="pb-6">{children}</div>
        </AccordionItem>
      </div>

      {/* Desktop Section */}
      <div className={cn("hidden lg:block", className)}>
        <FooterSectionHeading title={title} />

        <div className="mt-4">{children}</div>
      </div>
    </>
  );
}

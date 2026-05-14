// Accordion.tsx

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa";

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}

type AccordionItemProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  borderClassName?: string;
  iconClassName?: string;
};

export function AccordionItem({
  trigger,
  children,
  defaultOpen = false,
  className,
  triggerClassName,
  contentClassName,
  borderClassName = "border-white/10",
  iconClassName = "text-white",
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border-b", borderClassName, className)}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={cn(
          `
            flex w-full items-center justify-between
            py-5
            text-left
            transition-colors
          `,
          triggerClassName,
        )}
      >
        {trigger}
        <FaChevronDown
          className={cn(
            `h-5 w-5 shrink-0 ${iconClassName} transition-transform duration-300`,
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Content */}
      <div
        className={cn(
          `grid overflow-hidden transition-all duration-300`,
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          contentClassName,
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

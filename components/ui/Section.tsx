import type { ReactNode } from "react";

import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;

  beforeContainer?: ReactNode;

  className?: string;
  containerClassName?: string;

  padding?: "none" | "sm" | "md" | "lg";
  background?: "transparent" | "surface" | "muted" | "dark";
};

const paddingStyles = {
  none: "",
  sm: "py-12",
  md: "py-16 sm:py-20",
  lg: "py-24 sm:py-28",
} as const;

const backgroundStyles = {
  transparent: "bg-transparent",
  surface: "bg-surface",
  muted: "bg-neutral-100",
  dark: "bg-neutral-950 text-white",
} as const;

export default function Section({
  children,
  beforeContainer,

  className,
  containerClassName,

  padding = "lg",
  background = "transparent",
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        paddingStyles[padding],
        backgroundStyles[background],
        className,
      )}
    >
      {beforeContainer}

      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

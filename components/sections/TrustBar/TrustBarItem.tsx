import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TrustBarItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function TrustBarItem({
  icon,
  title,
  description,
  className,
}: TrustBarItemProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-200/90 bg-white text-accent [&>svg]:h-5 [&>svg]:w-5"
        aria-hidden
      >
        {icon}
      </span>

      <h3 className="mt-4 text-base font-bold tracking-tight text-neutral-900">
        {title}
      </h3>

      <span className="mt-3 block h-px w-8 shrink-0 bg-accent/80" aria-hidden />

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600 sm:max-w-none">
        {description}
      </p>
    </div>
  );
}

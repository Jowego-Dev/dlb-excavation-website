import Link from "next/link";
import type { ReactNode } from "react";
import {
  buttonBase,
  buttonVariants,
  ButtonVariant,
} from "@/lib/styles/components/buttonStyles";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

export function LinkButton({
  href,
  children,
  variant = "cta", // TODO: Default should be primary (no yet implemented)
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`
        flex items-center justify-center
        p-4 md:p-3
        
        ${buttonBase}
        ${buttonVariants[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

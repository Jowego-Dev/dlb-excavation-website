import Link from "next/link";
import { focusRing } from "@/lib/styles/styles";
import { cn } from "@/lib/utils";

type LogoSize = "small" | "large";
type LogoTheme = "dark" | "light";

type LogoProps = {
  className?: string;
  size?: LogoSize;
  theme?: LogoTheme;
};

export default function Logo({
  className,
  size = "large",
  theme = "dark",
}: LogoProps) {
  const logoSrc = `/logo/${size}-${theme}.svg`;

  return (
    <Link
      href="/"
      aria-label="DLB Excavation home"
      className={cn("shrink-0", focusRing)}
    >
      <img
        src={logoSrc}
        alt="DLB Excavation logo"
        className={cn("h-auto w-auto", className)}
      />
    </Link>
  );
}

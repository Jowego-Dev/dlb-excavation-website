import Link from "next/link";
import { focusRing } from "@/lib/styles";

type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const src =
    variant === "light"
      ? "/maple-digital-logo-light.svg"
      : "/maple-digital-logo-dark.svg";

  return (
    <Link
      href="/"
      aria-label="Maple Digital home"
      className={`inline-block p-1 ${focusRing}`}
    >
      <img src={src} alt="Maple Digital logo" className={`h-15 w-auto`} />
    </Link>
  );
}

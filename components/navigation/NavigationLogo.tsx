"use client";

import Logo from "@/components/ui/Logo";
import { useNavbarChrome } from "./NavigationChrome";

type NavigationLogoProps = {
  className?: string;
  size?: "small" | "large";
};

export default function NavigationLogo({
  className,
  size = "small",
}: NavigationLogoProps) {
  const { surface } = useNavbarChrome();

  return (
    <Logo
      className={className}
      size={size}
      theme={surface === "hero" ? "light" : "dark"}
    />
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationStyles as styles } from "@/lib/styles/navigation/navigationStyles";
import { useLocale, useTranslations } from "next-intl";
import {
  buildLocalizedPath,
  isActivePath,
} from "@/lib/navigation/navigation.utils";
import { useNavbarChrome } from "./NavigationChrome";
import { cn } from "@/lib/utils";

type NavigationLinkProps = {
  href: string;
  translationKey: string;
};

export default function NavigationLink({
  href,
  translationKey,
}: NavigationLinkProps) {
  const locale = useLocale();
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const { surface } = useNavbarChrome();

  const target = buildLocalizedPath(locale, href);
  const isActive = isActivePath(pathname, target);

  const onHero = surface === "hero";
  const linkColorClasses = onHero
    ? isActive
      ? styles.navigationLinkActive
      : `${styles.navigationLinkDefault} ${styles.navigationLinkHover}`
    : isActive
      ? styles.navigationLinkBarActive
      : `${styles.navigationLinkBarDefault} ${styles.navigationLinkBarHover}`;

  return (
    <Link
      href={target}
      className={cn(
        "inline-flex px-2",
        styles.navigationLinkBase,
        linkColorClasses,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {t(translationKey)}
    </Link>
  );
}

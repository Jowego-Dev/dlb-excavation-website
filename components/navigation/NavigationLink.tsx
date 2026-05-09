"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationStyles as styles } from "@/lib/styles/navigation/navigationStyles";
import { useLocale, useTranslations } from "next-intl";
import {
  buildLocalizedPath,
  isActivePath,
} from "@/lib/navigation/navigation.utils";

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

  const target = buildLocalizedPath(locale, href);
  const isActive = isActivePath(pathname, target);

  return (
    <Link
      href={target}
      className={`inline-flex ${styles.navigationLinkBase} ${isActive ? styles.navigationLinkActive : `${styles.navigationLinkDefault} ${styles.navigationLinkHover}`} px-2`}
      aria-current={isActive ? "page" : undefined}
    >
      {t(translationKey)}
    </Link>
  );
}

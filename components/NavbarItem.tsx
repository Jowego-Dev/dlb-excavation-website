"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarStyles as styles } from "@/lib/styles";
import { useLocale, useTranslations } from "next-intl";
import { buildLocalizedPath, isActivePath } from "@/lib/nav-utils";

type NavItemProps = {
  href: string;
  translationKey: string;
};

export default function NavbarItem({ href, translationKey }: NavItemProps) {
  const locale = useLocale();
  const t = useTranslations("navigation");
  const pathname = usePathname();

  const target = buildLocalizedPath(locale, href);
  const isActive = isActivePath(pathname, target);

  return (
    <Link
      href={target}
      className={`${styles.link} px-2`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className={isActive ? styles.activeLink : ""}>
        {t(translationKey)}
      </span>
    </Link>
  );
}

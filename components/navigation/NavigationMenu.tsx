"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { PAGES } from "@/lib/navigation/pages";
import Link from "next/link";
import LanguageToggler from "../LanguageSwitcher";
import { navigationMenuStyles as styles } from "@/lib/styles/navigation/navigationMenuStyles";
import { FaChevronRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import {
  buildLocalizedPath,
  isActivePath,
} from "@/lib/navigation/navigation.utils";
import { CTAButton } from "../CTAButton";

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("navigation");

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: PointerEvent) {
      if (!menuRef.current) return;

      const target = event.target as Node;
      if (!menuRef.current.contains(target)) {
        closeMenu();
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="flex items-center gap-10 lg:hidden">
      <LanguageToggler />
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`${styles.menuButton} inline-flex items-center justify-center w-12 h-12`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? (
          <MdClose aria-hidden="true" className="h-6 w-6" />
        ) : (
          <FaBars aria-hidden="true" className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full z-50 ${styles.menuContainer}`}
        >
          <ul className="flex flex-col gap-2 p-4">
            {PAGES.map((link) => {
              const target = buildLocalizedPath(locale, link.href);
              const isActive = isActivePath(pathname, target);

              return (
                <li key={link.href}>
                  <Link
                    href={target}
                    className={`flex items-center justify-between w-full px-4 py-3 ${styles.itemBase} ${styles.itemHover} ${isActive ? styles.itemActive : styles.itemDefault}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {t(link.key)}

                    <FaChevronRight
                      aria-hidden="true"
                      className={`${styles.iconBase} ${isActive ? styles.iconActive : styles.iconDefault}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={`mt-4 px-4 pb-4 pt-4`}>
            <CTAButton />
          </div>
        </div>
      )}
    </div>
  );
}

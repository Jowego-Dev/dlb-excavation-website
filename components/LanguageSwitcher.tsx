"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";
import { locales, Locale } from "@/i18n/config";
import { GrLanguage } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { languageSwitcher as styles } from "@/lib/styles";

const LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  if (!locales.includes(currentLocale as Locale)) {
    throw new Error("Invalid locale");
  }

  function getPath(lang: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    const newSegments = [...segments];

    if (newSegments.length === 0) {
      newSegments.push(lang);
    } else {
      newSegments[0] = lang;
    }

    return `/${newSegments.join("/")}`;
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close dropdown on Escape key press
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={ref} className={`relative ${styles.container}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-menu"
        className={`flex items-center gap-2 py-4 px-3 md:py-2 -mx-2 ${styles.button}`}
      >
        <GrLanguage className={`w-5 h-5`} />

        <span className="flex items-center gap-1 uppercase">
          <span className={currentLocale === "en" ? styles.activeLanguage : ""}>
            EN
          </span>

          <span>/</span>

          <span className={currentLocale === "fr" ? styles.activeLanguage : ""}>
            FR
          </span>
        </span>
      </button>

      {open && (
        <div className={`absolute right-0 mt-2 w-36 ${styles.menu}`}>
          {locales.map((lang) => (
            <Link
              key={lang}
              href={getPath(lang)}
              className={`flex items-center justify-between px-4 py-4 md:px-3 md:py-2 ${styles.menuItem}`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-5 ${styles.abreviation}`}>
                  {lang.toUpperCase()}
                </span>
                <span className={styles.label}>{LABELS[lang]}</span>
              </div>

              {currentLocale === lang && (
                <FaCheck className={`w-3 h-3 ${styles.checkIcon}`} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

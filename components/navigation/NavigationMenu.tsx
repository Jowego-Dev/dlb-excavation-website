"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PAGES } from "@/lib/navigation/pages";
import {
  FaArrowRight,
  FaChevronRight,
  FaClipboardList,
  FaFacebookF,
  FaPhone,
} from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import {
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import { TbBulldozer } from "react-icons/tb";
import { useLocale, useTranslations } from "next-intl";
import {
  buildLocalizedPath,
  isActivePath,
} from "@/lib/navigation/navigation.utils";
import { ROUTES } from "@/lib/routes";
import { locales, type Locale } from "@/i18n/config";
import { BUSINESS } from "@/lib/business/business";
import { navigationMenuStyles as styles } from "@/lib/styles/navigation/navigationMenuStyles";
import { focusRing } from "@/lib/styles/styles";
import { useNavbarChrome } from "./NavigationChrome";
import { cn } from "@/lib/utils";

const LANGUAGE_LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

const NAV_ICONS = {
  home: HiOutlineHome,
  services: TbBulldozer,
  about: HiOutlineUser,
  contact: HiOutlineEnvelope,
} as const;

function getLocalizedSwitchPath(pathname: string, lang: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  const next = [...segments];
  if (next.length === 0) {
    next.push(lang);
  } else {
    next[0] = lang;
  }
  return `/${next.join("/")}`;
}

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navigation");
  const { setMobileMenuOpen } = useNavbarChrome();

  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setMobileMenuOpen(open);
    return () => setMobileMenuOpen(false);
  }, [open, setMobileMenuOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (open) {
      setRenderOverlay(true);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
      return () => cancelAnimationFrame(id);
    }

    setAnimateIn(false);
    const timeout = window.setTimeout(() => setRenderOverlay(false), 300);
    return () => window.clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    if (!renderOverlay) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [renderOverlay]);

  useEffect(() => {
    if (!open) return;
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open, closeMenu]);

  useLayoutEffect(() => {
    if (!renderOverlay || !animateIn) return;

    const selector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function getFocusable() {
      const root = panelRef.current;
      if (!root) return [];

      return Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          !el.getAttribute("aria-hidden") &&
          el.tabIndex !== -1,
      );
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousFocus = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [renderOverlay, animateIn]);

  const estimateHref = buildLocalizedPath(locale, ROUTES.CONTACT);

  const overlay =
    renderOverlay &&
    mounted &&
    createPortal(
      <>
        <button
          type="button"
          tabIndex={-1}
          aria-label={t("mobileMenu.closeMenu")}
          className={cn(
            "fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ease-out",
            animateIn ? "opacity-100" : "opacity-0",
          )}
          onClick={closeMenu}
        />

        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("mobileMenu.ariaMenu")}
          id="mobile-menu"
          className={cn(
            "fixed inset-0 z-[61] flex h-screen w-screen flex-col overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-out rounded-l-3xl sm:rounded-l-[2rem]",
            animateIn ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="relative shrink-0 border-b border-black/10 px-4 pb-4 pt-5">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeMenu}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label={t("mobileMenu.closeMenu")}
            >
              <MdClose aria-hidden className="h-7 w-7" />
            </button>

            <div className="flex justify-center px-10 pt-2">
              <Link
                href={buildLocalizedPath(locale, ROUTES.HOME)}
                onClick={closeMenu}
                className={cn("inline-flex shrink-0", focusRing)}
                aria-label="DLB Excavation home"
              >
                <img
                  src="/logo/small-dark.svg"
                  alt=""
                  className="h-16 w-auto sm:h-20"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-8 pt-2">
            <nav aria-label={t("mobileMenu.ariaMenu")} className="shrink-0">
              <ul className="flex flex-col">
                {PAGES.map((link) => {
                  const target = buildLocalizedPath(locale, link.href);
                  const isActive = isActivePath(pathname, target);
                  const Icon =
                    NAV_ICONS[link.key as keyof typeof NAV_ICONS] ??
                    HiOutlineHome;

                  return (
                    <li key={link.href}>
                      <Link
                        href={target}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className="flex min-h-[3.5rem] items-center gap-4 border-b border-black/10 py-3 text-black transition-colors active:bg-black/[0.03]"
                      >
                        <Icon
                          aria-hidden
                          className="h-6 w-6 shrink-0 text-cta"
                          strokeWidth={1.75}
                        />
                        <span className="flex-1 text-left text-sm font-bold uppercase tracking-wide">
                          {t(link.key)}
                        </span>
                        <FaChevronRight
                          aria-hidden
                          className="h-3.5 w-3.5 shrink-0 text-black/70"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-8 shrink-0">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                <HiOutlineGlobeAlt
                  aria-hidden
                  className="h-4 w-4 text-cta"
                  strokeWidth={2}
                />
                {t("mobileMenu.language")}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {locales.map((lang) => {
                  const active = locale === lang;
                  return (
                    <Link
                      key={lang}
                      href={getLocalizedSwitchPath(pathname, lang)}
                      onClick={closeMenu}
                      className={cn(
                        "rounded-full px-4 py-3 text-center text-sm font-semibold transition-all duration-200",
                        active
                          ? "bg-cta text-black shadow-sm"
                          : "border border-black/15 bg-white text-black hover:border-black/25",
                      )}
                      aria-current={active ? "true" : undefined}
                    >
                      {LANGUAGE_LABELS[lang]}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 flex shrink-0 flex-col gap-4">
              <Link
                href={estimateHref}
                onClick={closeMenu}
                aria-label={t("mobileMenu.estimateAria")}
                className="flex items-center gap-4 rounded-xl bg-cta px-4 py-5 text-black shadow-lg transition-all duration-200 active:scale-[0.99] hover:brightness-[1.02]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <FaClipboardList aria-hidden className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold uppercase tracking-wide">
                    {t("cta")}
                  </span>
                  <span className="mt-1 block text-xs font-normal leading-snug text-black/85">
                    {t("mobileMenu.estimateSubline")}
                  </span>
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <FaArrowRight aria-hidden className="h-5 w-5" />
                </span>
              </Link>

              <a
                href={BUSINESS.contact.phoneHref}
                className="flex items-center gap-4 rounded-xl border border-black/10 bg-white px-4 py-4 text-black shadow-sm transition-colors hover:bg-neutral-50 active:bg-neutral-100"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cta text-white">
                  <FaPhone aria-hidden className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold uppercase tracking-wide">
                    {t("mobileMenu.callPrefix")} {BUSINESS.contact.phone}
                  </span>
                  <span className="mt-1 block text-xs text-neutral-500">
                    {t("mobileMenu.phoneHours")}
                  </span>
                </span>
                <FaChevronRight
                  aria-hidden
                  className="h-4 w-4 shrink-0 text-cta"
                />
              </a>
            </div>

            <div className="mt-auto flex shrink-0 justify-center border-t border-black/10 pt-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("mobileMenu.facebookAria")}
                className="text-black transition-opacity hover:opacity-70"
              >
                <FaFacebookF aria-hidden className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </>,
      document.body,
    );

  return (
    <div className="flex items-center lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`${styles.menuButton} inline-flex h-12 w-12 items-center justify-center`}
        aria-label={open ? t("mobileMenu.closeMenu") : t("mobileMenu.openMenu")}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? (
          <MdClose aria-hidden className="h-6 w-6" />
        ) : (
          <FaBars aria-hidden className="h-6 w-6" />
        )}
      </button>
      {overlay}
    </div>
  );
}

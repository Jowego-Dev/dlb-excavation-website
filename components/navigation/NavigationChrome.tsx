"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import {
  buildLocalizedPath,
  isActivePath,
} from "@/lib/navigation/navigation.utils";
import { ROUTES } from "@/lib/routes";
import { useNavbarScroll, type NavbarSurface } from "@/hooks/useNavbarScroll";

type NavbarChromeContextValue = {
  surface: NavbarSurface;
  setMobileMenuOpen: (open: boolean) => void;
};

const NavbarChromeContext = createContext<NavbarChromeContextValue | null>(
  null,
);

export function useNavbarChrome(): NavbarChromeContextValue {
  const ctx = useContext(NavbarChromeContext);
  if (!ctx) {
    throw new Error("useNavbarChrome must be used within NavigationChrome");
  }
  return ctx;
}

/** For controls that may be rendered outside the chrome (not used today). */
export function useNavbarChromeOptional(): NavbarChromeContextValue | null {
  return useContext(NavbarChromeContext);
}

type NavigationChromeProps = {
  children: ReactNode;
};

export default function NavigationChrome({ children }: NavigationChromeProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpenState] = useState(false);

  const setMobileMenuOpen = useCallback((open: boolean) => {
    setMobileMenuOpenState(open);
  }, []);

  const homePath = buildLocalizedPath(locale, ROUTES.HOME);
  const isHome = isActivePath(pathname, homePath);

  const { surface, hiddenByScroll } = useNavbarScroll(isHome, mobileMenuOpen);

  const isOffCanvas = hiddenByScroll && !mobileMenuOpen;

  const contextValue = useMemo(
    () => ({ surface, setMobileMenuOpen }),
    [surface, setMobileMenuOpen],
  );

  return (
    <NavbarChromeContext.Provider value={contextValue}>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
          isOffCanvas && "-translate-y-full pointer-events-none",
          surface === "bar" &&
            "border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md supports-backdrop-filter:bg-white/80",
          surface === "hero" && "border-transparent bg-transparent shadow-none",
        )}
      >
        {children}
      </header>
    </NavbarChromeContext.Provider>
  );
}

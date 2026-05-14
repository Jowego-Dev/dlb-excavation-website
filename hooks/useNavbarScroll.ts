"use client";

import { useLayoutEffect, useRef, useState } from "react";

const SCROLL_DIRECTION_DELTA = 12;
const TOP_ANCHOR_PX = 24;

export type NavbarSurface = "hero" | "bar";

export type UseNavbarScrollResult = {
  surface: NavbarSurface;
  hiddenByScroll: boolean;
};

/**
 * Scroll direction + “at top” detection for the main navbar.
 * When {@link menuOpen} is true, hide-on-scroll is disabled so the mobile sheet stays usable.
 */
export function useNavbarScroll(
  isHome: boolean,
  menuOpen: boolean,
): UseNavbarScrollResult {
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useLayoutEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const nowAtTop = y < TOP_ANCHOR_PX;

      setAtTop((prev) => (prev === nowAtTop ? prev : nowAtTop));

      if (menuOpen) {
        setHiddenByScroll((prev) => (prev === false ? prev : false));
        lastY.current = y;
        return;
      }

      const delta = y - lastY.current;

      setHiddenByScroll((prev) => {
        let next = prev;
        if (nowAtTop) {
          next = false;
        } else if (delta > SCROLL_DIRECTION_DELTA) {
          next = true;
        } else if (delta < -SCROLL_DIRECTION_DELTA) {
          next = false;
        }
        return next === prev ? prev : next;
      });

      lastY.current = y;
    }

    lastY.current = window.scrollY;
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, isHome]);

  const surface: NavbarSurface = !isHome || !atTop ? "bar" : "hero";

  return { surface, hiddenByScroll };
}

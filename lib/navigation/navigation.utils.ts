import { ROUTES } from "../routes";

export function buildLocalizedPath(locale: string, href: string) {
  const normalized = href.startsWith("/") ? href : `/${href}`;

  const clean = normalized !== "/" ? normalized.replace(/\/$/, "") : normalized;

  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

export function isActivePath(pathname: string, target: string) {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const normalizedTarget = target.replace(/\/$/, "") || "/";

  const pathSegments = normalizedPath.split("/");
  const targetSegments = normalizedTarget.split("/");

  return (
    pathSegments.length >= targetSegments.length &&
    targetSegments.every((seg, i) => pathSegments[i] === seg)
  );
}

export function buildServiceHref(locale: string, slug: string) {
  return `${buildLocalizedPath(locale, ROUTES.SERVICES)}#${slug}`;
}

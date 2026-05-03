export function buildLocalizedPath(locale: string, href: string) {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
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

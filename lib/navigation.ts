export type NavLink = {
  href: string;
  key: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

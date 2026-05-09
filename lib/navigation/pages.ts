import { ROUTES } from "../routes";

export type Page = {
  href: string;
  key: string;
};

export const PAGES: Page[] = [
  { href: ROUTES.HOME, key: "home" },
  { href: ROUTES.SERVICES, key: "services" },
  { href: ROUTES.ABOUT, key: "about" },
  { href: ROUTES.CONTACT, key: "contact" },
];

export const COMPANY_PAGES: Page[] = [
  { href: ROUTES.ABOUT, key: "about" },
  { href: ROUTES.CONTACT, key: "contact" },
  { href: ROUTES.PRIVACY, key: "privacy" },
  { href: ROUTES.TERMS, key: "terms" },
];

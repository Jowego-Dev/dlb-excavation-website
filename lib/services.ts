export type ServiceLink = {
  href: string;
  key: string;
};

export const SERVICES_LINKS: ServiceLink[] = [
  { href: "/services/web-design", key: "webDesign" },
  { href: "/services/seo", key: "seo" },
  { href: "/services/performance", key: "performance" },
  { href: "/services/maintenance", key: "maintenance" },
];

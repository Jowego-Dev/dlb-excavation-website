export type Service = {
  slug: string;
  key: string;
};

export const SERVICES: Service[] = [
  { slug: "excavation", key: "excavation" },
  { slug: "landscaping", key: "landscaping" },
  { slug: "retaining-wall", key: "retaining-wall" },
  { slug: "tree-removal", key: "tree-removal" },
  { slug: "stump-removal", key: "stump-removal" },
  { slug: "private-road-construction", key: "private-road-construction" },
  { slug: "forestry-road-development", key: "forestry-road-development" },
  { slug: "dump-truck-services", key: "dump-truck-services" },
  { slug: "material-delivery", key: "material-delivery" },
  { slug: "snow-removal", key: "snow-removal" },
];

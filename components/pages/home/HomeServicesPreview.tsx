import ServicePreviewSection from "@/components/sections/servicePreview/ServicePreview";
import type { ServicePreviewItem } from "@/components/sections/servicePreview/ServicePreview";

type Props = { locale: string };

const items: ServicePreviewItem[] = [
  {
    image: "/images/home/services/excavation.webp",
    imageAlt: "Excavation and grading work",

    title: "Excavation & grading",
    description:
      "Site preparation, trenching, and precision grading for drainage and long-term stability.",

    href: "/services",
  },
  {
    image: "/images/home/services/retaining-wall.webp",
    imageAlt: "Retaining wall installation",

    title: "Retaining walls",
    description:
      "Cleanly built retaining walls designed for support, drainage, and durable finish work.",

    href: "/services",
  },
  {
    image: "/images/home/services/drainage.webp",
    imageAlt: "Drainage and swale work",

    title: "Drainage solutions",
    description:
      "Thoughtful grading and drainage planning that moves water away from structures and slopes.",

    href: "/services",
  },
  {
    image: "/images/home/services/bulk-transport.webp",
    imageAlt: "Bulk material transport",

    title: "Bulk transport",
    description:
      "Delivery and movement of aggregates, soil, and materials with organized site access.",

    href: "/services",
  },
];

export default function HomeServicesPreview({ locale }: Props) {
  return (
    <ServicePreviewSection
      headingId="home-services-heading"
      eyebrow="EXCAVATION & LANDSCAPING SOLUTIONS"
      title="Our services"
      description="From first dig to final grade, we keep communication clear and the job site organized—so your project stays on track and on budget."
      cta="View all our services"
      items={items}
    />
  );
}

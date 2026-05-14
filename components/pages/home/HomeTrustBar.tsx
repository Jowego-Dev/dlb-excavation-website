import {
  FaClock,
  FaComments,
  FaHouse,
  FaLocationDot,
  FaShieldHalved,
  FaTractor,
} from "react-icons/fa6";
import TrustBarSection, {
  type TrustBarItem,
} from "@/components/sections/TrustBar/TrustBar";

const items: TrustBarItem[] = [
  {
    icon: <FaLocationDot className="h-5 w-5" />,
    title: "Local expertise",
    description:
      "We plan around Ottawa–Gatineau soils, frost, slopes, and how water actually moves across your lot.",
  },
  {
    icon: <FaClock className="h-5 w-5" />,
    title: "Reliable scheduling",
    description:
      "Realistic timelines, on-time mobilization, and clear updates when weather or site conditions shift the day.",
  },
  {
    icon: <FaShieldHalved className="h-5 w-5" />,
    title: "Clean finish work",
    description:
      "Tight grades, controlled transitions, and tidy edges—work that reads as finished, not rushed.",
  },
  {
    icon: <FaTractor className="h-5 w-5" />,
    title: "Right equipment",
    description:
      "Well-maintained machines sized for residential access, tight digs, and heavier cuts when the job calls for it.",
  },
  {
    icon: <FaComments className="h-5 w-5" />,
    title: "Straight talk",
    description:
      "Plain-language scope, staging, and next steps—so you always know what is happening and why.",
  },
  {
    icon: <FaHouse className="h-5 w-5" />,
    title: "Residential focus",
    description:
      "Quiet starts, respectful staging, and careful treatment of driveways, lawns, and neighbouring properties.",
  },
];

export default function HomeTrustBar() {
  return (
    <TrustBarSection
      headingId="services-trust-heading"
      eyebrow="Local. Reliable."
      title="Why homeowners choose DLB Excavation"
      items={items}
    />
  );
}

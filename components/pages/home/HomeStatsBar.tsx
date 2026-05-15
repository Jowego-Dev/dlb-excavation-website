import { FaAward } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";

import StatsBar from "@/components/sections/statsBar/StatsBar";

const stats = [
  {
    icon: FaAward,
    value: "10+",
    title: "Years of Experience",
    description: "Building reliable solutions for over a decade.",
  },
  {
    icon: LuClipboardCheck,
    value: "200+",
    title: "Projects Completed",
    description: "Successfully completed projects of all sizes.",
  },
  {
    icon: FaMapMarkedAlt,
    value: "10+",
    title: "Cities Served",
    description: "Proudly serving Ottawa, Gatineau & surrounding areas.",
  },
  {
    icon: MdConstruction,
    value: "10+",
    title: "Services Available",
    description: "A full range of excavation and landscaping services.",
  },
] as const;

export default function HomeStatsBar() {
  return <StatsBar items={stats} />;
}

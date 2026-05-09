import { FaChevronRight } from "react-icons/fa";
import { footerStyles as styles } from "@/lib/styles/components/footerStyles";

type FooterNavItem = {
  label: string;
  href: string;
};

type FooterNavListProps = {
  items: FooterNavItem[];
  ariaLabel: string;
};

export default function FooterNavList({
  items,
  ariaLabel,
}: FooterNavListProps) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className="lg:space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`group inline-flex items-center gap-4 p-5 lg:p-1 w-full ${styles.navlist.item}`}
            >
              <FaChevronRight
                className={`h-5 w-5 lg:h-3 lg:w-3 shrink-0 ${styles.navlist.icon}`}
              />

              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

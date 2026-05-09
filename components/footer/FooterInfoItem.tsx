import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { footerStyles as styles } from "@/lib/styles/components/footerStyles";

type FooterInfoItemProps = {
  icon: IconType;

  text: string;

  className?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
};

export default function FooterInfoItem({
  icon: Icon,
  text,
  className,
  iconWrapperClassName,
  iconClassName,
}: FooterInfoItemProps) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      {/* Icon */}
      <div
        className={cn(
          `flex h-12 w-12 shrink-0 items-center justify-center ${styles.infoItem.icon.container}`,
          iconWrapperClassName,
        )}
      >
        <Icon
          className={cn(`h-7 w-7 ${styles.infoItem.icon.icon}`, iconClassName)}
        />
      </div>

      <p className={styles.infoItem.content}>{text}</p>
    </div>
  );
}

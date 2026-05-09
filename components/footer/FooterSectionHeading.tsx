import { footerStyles as styles } from "@/lib/styles/components/footerStyles";

type FooterSectionHeadingProps = {
  title: string;
  showDivider?: boolean;
};

export default function FooterSectionHeading({
  title,
  showDivider = true,
}: FooterSectionHeadingProps) {
  return (
    <div className="w-full">
      <h3 className={styles.heading}>{title}</h3>

      {showDivider && <div className={`mt-3 h-px w-full ${styles.divider}`} />}
    </div>
  );
}

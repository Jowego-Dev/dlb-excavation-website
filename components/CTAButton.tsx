"use client";

import { useLocale, useTranslations } from "next-intl";
import { buildLocalizedPath } from "@/lib/navigation/navigation.utils";
import { ROUTES } from "@/lib/routes";
import { LinkButton } from "./LinkButton";
import { FaFileInvoice } from "react-icons/fa6";

type CTAButtonProps = {
  className?: string;
};

export function CTAButton({ className = "" }: CTAButtonProps) {
  const locale = useLocale();
  const t = useTranslations("navigation");

  return (
    <LinkButton
      href={buildLocalizedPath(locale, ROUTES.CONTACT)}
      variant="cta"
      className={`gap-3 ${className}`}
    >
      <FaFileInvoice className="w-5 h-5 shrink-0" />
      {t("cta")}
    </LinkButton>
  );
}

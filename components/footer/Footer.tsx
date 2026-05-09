import Container from "../Container";
import Logo from "../Logo";
import { footerStyles as styles } from "@/lib/styles/components/footerStyles";
import { FaPhone, FaClock } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import { COMPANY_PAGES } from "@/lib/navigation/pages";
import { SERVICES } from "@/lib/services/services";
import {
  buildLocalizedPath,
  buildServiceHref,
} from "@/lib/navigation/navigation.utils";
import { BUSINESS } from "@/lib/business/business";
import { CTAButton } from "../CTAButton";
import { FaFacebookF } from "react-icons/fa";
import ActionButton from "../ActionButton";
import FooterNavList from "./FooterNavList";
import FooterInfoItem from "./FooterInfoItem";
import FooterSection from "./FooterSection";

export default async function Footer({ locale }: { locale: string }) {
  const tFooter = await getTranslations({ locale, namespace: "footer" });
  const tNavigation = await getTranslations({
    locale,
    namespace: "navigation",
  });
  const tServices = await getTranslations({ locale, namespace: "services" });
  const tLegal = await getTranslations({ locale, namespace: "legal" });

  return (
    <footer>
      {/* CTA Banner */}
      <section className={`py-4 ${styles.ctaBanner.container}`}>
        <Container className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
          <div>
            <h2 className={`pb-1 text-2xl ${styles.ctaBanner.marketingLine}`}>
              {tFooter("cta.headline")}
            </h2>
            <p className={styles.ctaBanner.maketingSubLine}>
              {tFooter("cta.subline")}
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 pt-6 md:flex-row md:gap-8 lg:gap-12 lg:pt-0">
            <CTAButton />
            <ActionButton
              className="md:hidden gap-3 w-full"
              href={BUSINESS.contact.phoneHref}
            >
              <FaPhone className="w-5 h-5 shrink-0" />
              <span className="w-full text-center">{tFooter("cta.call")}</span>
            </ActionButton>
            <a
              href={BUSINESS.contact.phoneHref}
              className={`hidden md:flex gap-3 items-center ${styles.ctaBanner.phone}`}
            >
              <FaPhone
                className={`w-5 h-5 items-center ${styles.ctaBanner.phoneIcon}`}
              />
              {BUSINESS.contact.phone}
            </a>
          </div>
        </Container>
      </section>

      <section className={`py-4 ${styles.container}`}>
        <Container>
          <div className="grid py-4 gap-12 lg:grid-cols-[0.8fr_1fr_1fr_1fr]">
            {/* Brand Column */}
            <div className="flex flex-col items-center">
              {/* Logo */}
              <div className="flex justify-center">
                <Logo className="h-40" size="large" theme="light" />
              </div>

              <div className={`mt-6 h-px w-full ${styles.divider}`} />

              <p className={`mt-6 max-w-sm ${styles.brand.description}`}>
                {tFooter("brand.description")}
              </p>

              {/* Socials */}
              <nav aria-label="Social media links" className="mt-10 w-full">
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className={`inline-flex items-center gap-4 ${styles.brand.social.container}`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center ${styles.brand.social.icon}`}
                    >
                      <FaFacebookF className="h-5 w-5 " />
                    </div>

                    <span className={""}>
                      {tFooter("brand.follow") + " "}
                      <span className={styles.brand.social.name}>Facebook</span>
                    </span>
                  </a>
                </div>
              </nav>
            </div>

            {/* Services */}
            <FooterSection
              title={tFooter("headings.services")}
              accordionBorderClassName={styles.accordion.border}
              accordionIconClassName={styles.accordion.icon}
            >
              <FooterNavList
                ariaLabel="Services navigation"
                items={SERVICES.map((service) => ({
                  label: tServices(`${service.key}.title`),
                  href: buildServiceHref(locale, service.slug),
                }))}
              />
            </FooterSection>

            {/* About Us */}
            <FooterSection
              title={tFooter("headings.about")}
              accordionBorderClassName={styles.accordion.border}
              accordionIconClassName={styles.accordion.icon}
            >
              <FooterNavList
                ariaLabel="Services navigation"
                items={COMPANY_PAGES.map((page) => ({
                  label: tNavigation(page.key),
                  href: buildLocalizedPath(locale, page.href),
                }))}
              />
            </FooterSection>

            {/* Business Info */}
            <FooterSection
              title={tFooter("headings.info")}
              defaultOpen
              accordionBorderClassName={styles.accordion.border}
              accordionIconClassName={styles.accordion.icon}
            >
              <div className="space-y-8">
                <FooterInfoItem icon={FaClock} text={tFooter("info.hours")} />

                <FooterInfoItem
                  icon={IoLocation}
                  text={BUSINESS.address.full}
                />

                <FooterInfoItem
                  icon={FaMapMarkedAlt}
                  text={tFooter("info.servingArea")}
                />
              </div>
            </FooterSection>
          </div>

          {/* Bottom Bar */}
          <div
            className={`py-2 flex flex-col gap-6 pt-8 lg:flex-row lg:items-center lg:justify-between ${styles.copyRightBar.container}`}
          >
            <p className={styles.copyRightBar.content}>
              © 2026 DLB Excavation. All rights reserved.
            </p>
            <p>
              Website created by{" "}
              <a
                className={styles.copyRightBar.createdBy}
                href={`https://www.jowego.ca/${locale}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jowego
              </a>
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
}

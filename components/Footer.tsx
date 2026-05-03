import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { footerStyles as styles } from "@/lib/styles";
import { FaPhone, FaClock } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { getTranslations } from "next-intl/server";
import { NAV_LINKS } from "@/lib/navigation";
import { SERVICES_LINKS } from "@/lib/services";

export default async function Footer({ locale }: { locale: string }) {
  const tFooter = await getTranslations({ locale, namespace: "footer" });
  const tNavigation = await getTranslations({
    locale,
    namespace: "navigation",
  });
  const tServices = await getTranslations({ locale, namespace: "services" });
  const tLegal = await getTranslations({ locale, namespace: "legal" });

  return (
    <footer
      className={`${styles.container} border-t py-12`}
      aria-label="Website footer"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-block">
              <Logo variant="dark" />

              <div className="flex justify-center mt-6 lg:mt-4">
                <nav
                  className="flex gap-3 lg:gap-0"
                  aria-label="Social media links"
                >
                  <a
                    href="#"
                    aria-label="Visit Maple Digital on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIcon} inline-flex items-center justify-center w-11 h-11`}
                  >
                    <FaFacebook className="w-5 h-5" aria-hidden="true" />
                  </a>

                  <a
                    href="#"
                    aria-label="Visit Maple Digital on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIcon} inline-flex items-center justify-center w-11 h-11`}
                  >
                    <FaInstagramSquare className="w-5 h-5" aria-hidden="true" />
                  </a>

                  <a
                    href="#"
                    aria-label="Visit Maple Digital on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIcon} inline-flex items-center justify-center w-11 h-11`}
                  >
                    <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`${styles.title} pb-1 mb-1 lg:pb-2 lg:mn-4`}>
              Navigation
            </h3>
            <nav aria-label="Footer Navigation">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className={`${styles.link} block py-3 lg:py-1`}
                    >
                      {tNavigation(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className={`${styles.title} pb-1 mb-1 lg:pb-2 lg:mn-4`}>
              Services
            </h3>
            <nav aria-label="Footer Services">
              <ul>
                {SERVICES_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className={`${styles.link} block py-3 lg:py-1`}
                    >
                      {tServices(`${link.key}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className={`${styles.title} pb-1 mb-1 lg:pb-2 lg:mn-4`}>
              Contact
            </h3>
            <address className="not-italic">
              <ul>
                <li>
                  <a
                    href="tel:+18191112222"
                    aria-label="Call Maple Digital at 819-111-2222"
                    className={`${styles.link} flex items-center gap-4 py-3 lg:py-1`}
                  >
                    <FaPhone
                      className={`${styles.contactIcon} h-4 w-auto`}
                      aria-hidden="true"
                    />
                    819-111-2222
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mapledigital.ca"
                    aria-label="Email Maple Digital at info@mapledigital.ca"
                    className={`${styles.link} flex items-center gap-4 py-3 lg:py-1`}
                  >
                    <MdMail
                      className={`${styles.contactIcon} h-4 w-auto`}
                      aria-hidden="true"
                    />
                    info@mapledigital.ca
                  </a>
                </li>
                <li className="flex items-center gap-4 py-3 lg:py-1">
                  <FaClock
                    className={`${styles.contactIcon} h-4 w-auto`}
                    aria-hidden="true"
                  />
                  <span>{tFooter("hours")}</span>
                </li>
                <li className="flex items-center gap-4 py-3 lg:py-1">
                  <IoLocation
                    className={`${styles.contactIcon} h-4 w-auto`}
                    aria-hidden="true"
                  />
                  <span>Gatineau, Québec</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div
          className={`${styles.bottomContainer} mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row`}
        >
          <p>
            {`© ${new Date().getFullYear()} Maple Digital. ${tFooter("copyright")}`}
          </p>
          <nav
            className="flex flex-col items-center gap-1 md:flex-row md:gap-6"
            aria-label="Legal"
          >
            <Link
              href={`/${locale}/privacy-policy`}
              className={`${styles.link} block py-3 lg:py-0`}
            >
              {tLegal("privacy")}
            </Link>
            <Link
              href={`/${locale}/terms-of-service`}
              className={`${styles.link} block py-3 lg:py-0`}
            >
              {tLegal("terms")}
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

import Container from "../Container";
import NavigationMenu from "./NavigationMenu";
import NavigationLink from "./NavigationLink";
import LanguageSwitcher from "../LanguageSwitcher";
import Logo from "../Logo";
import { PAGES } from "@/lib/navigation/pages";
import { getTranslations } from "next-intl/server";
import { navigationStyles as styles } from "@/lib/styles/navigation/navigationStyles";
import { CTAButton } from "../CTAButton";
export default async function Navigation({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "navigation" });

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="relative" aria-labelledby="main-nav-heading">
        <Container>
          <div className="flex items-center justify-between py-2 md:py-3">
            <Logo className="h-24" size="small" theme="light" />

            <div className="hidden lg:flex items-center gap-6 lg:gap-10">
              <ul className="flex items-center gap-4">
                {PAGES.map((link) => (
                  <li key={link.href}>
                    <NavigationLink
                      href={link.href}
                      translationKey={link.key}
                    />
                  </li>
                ))}
              </ul>

              <LanguageSwitcher />
              <CTAButton />
            </div>

            <NavigationMenu />
          </div>
        </Container>
      </nav>
    </header>
  );
}

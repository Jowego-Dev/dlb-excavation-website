import Container from "../ui/Container";
import NavigationMenu from "./NavigationMenu";
import NavigationLink from "./NavigationLink";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import NavigationLogo from "./NavigationLogo";
import NavigationChrome from "./NavigationChrome";
import { PAGES } from "@/lib/navigation/pages";
import { CTAButton } from "../ui/CTAButton";

export default async function Navigation({
  locale: _locale,
}: {
  locale: string;
}) {
  return (
    <NavigationChrome>
      <nav className="relative" aria-labelledby="main-nav-heading">
        <Container>
          <div className="flex items-center justify-between py-2 md:py-3">
            <NavigationLogo className="h-24" size="small" />

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
    </NavigationChrome>
  );
}

import Hero from "@/components/sections/Hero";
import { CTAButton } from "@/components/ui/CTAButton";
import { LinkButton } from "@/components/ui/LinkButton";
import { buildLocalizedPath } from "@/lib/navigation/navigation.utils";
import { ROUTES } from "@/lib/routes";

type Props = {
  locale: string;
};

export default function HomeHero({ locale }: Props) {
  return (
    <Hero
      variant="home"
      headingId="home-hero-heading"
      image="/images/home/hero.webp"
      imageAlt="Outdoor patio and landscaped yard at dusk"
      title={
        <>
          Transform Your Property Into Something{" "}
          <span className="text-accent">Extraordinary</span>
        </>
      }
      description="Professional excavation, grading, and hardscape prep—built for drainage, stability, and lasting curb appeal across the Ottawa–Gatineau region."
    >
      <div className="flex flex-wrap gap-4">
        <CTAButton />

        <LinkButton
          variant="outline"
          href={buildLocalizedPath(locale, ROUTES.SERVICES)}
        >
          View our work
        </LinkButton>
      </div>
    </Hero>
  );
}

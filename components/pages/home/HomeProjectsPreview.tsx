import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { HiOutlineBuildingOffice2, HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiPlant } from "react-icons/pi";
import { LinkButton } from "@/components/ui/LinkButton";

type Props = { locale: string };

const highlights = [
  {
    icon: HiOutlineBuildingOffice2,
    title: "Better drainage",
    description: "Fix standing water and protect your property.",
  },
  {
    icon: HiOutlineSquares2X2,
    title: "Stronger foundations",
    description: "Retaining walls and grading done right.",
  },
  {
    icon: PiPlant,
    title: "Outdoor spaces you'll love",
    description: "Clean, finished results that add value.",
  },
];

export default function HomeProjectPreview({ locale }: Props) {
  const base = `/${locale}`;

  return (
    <Section className="bg-emerald-950 py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-[2fr_1fr] xl:gap-16">
        <div>
          <Eyebrow>Your property has more potential than you think.</Eyebrow>
          <h2
            id="home-before-after-heading"
            className="mb-6 text-3xl text-center font-bold tracking-tight text-white sm:text-4xl"
          >
            See the transformation
          </h2>
          <BeforeAfterSlider
            beforeSrc="/images/home/before.webp"
            afterSrc="/images/home/after.webp"
          />
        </div>
        <div className="flex h-full flex-col justify-center text-center xl:text-left">
          <h3 className="mt-5 text-4xl font-bold tracking-tight text-white">
            Making your ideas a reality.
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            We transform challenging properties into functional, beautiful
            spaces built to last.
          </p>

          <div className="mt-10 flex flex-col gap-8 mx-auto">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-5 text-left">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-lime-400/40">
                    <Icon className="h-7 w-7 text-lime-400" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-base leading-relaxed text-white/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <LinkButton href="/services" className="w-80 mt-10 mx-auto">
            View our projects
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}

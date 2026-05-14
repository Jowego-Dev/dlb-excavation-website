import Image from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type HeroVariant = "home" | "page";

export type HeroProps = {
  variant?: HeroVariant;
  image: string;
  imageAlt: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  headingId: string;
  children?: ReactNode;
  priority?: boolean;
  className?: string;
};

const PAGE_HERO_MIN_H =
  "min-h-[min(100dvh,52rem)] sm:min-h-[min(100dvh,56rem)]";

const variantStyles = {
  home: {
    section: "min-h-screen",
    container:
      "flex min-h-screen w-full items-center py-16 sm:py-20 md:py-24 lg:py-28",
    content: "w-full max-w-3xl text-left",
    overlay: "absolute inset-0 bg-linear-to-r from-black/70 to-transparent",
    image: "absolute inset-0 -z-10 h-full w-full object-cover object-center",
    eyebrowWrapper: "mb-4 sm:mb-5",
    title:
      "text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
    description:
      "mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl",
    children: "mt-8 sm:mt-10",
  },
  page: {
    section: PAGE_HERO_MIN_H,
    container: cn(
      "flex w-full items-center",
      PAGE_HERO_MIN_H,
      "py-20 sm:py-24 md:py-32",
    ),
    content: "w-full max-w-3xl text-left",
    overlay:
      "absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40",
    image: "absolute inset-0 -z-10 h-full w-full object-cover object-center",
    eyebrowWrapper: "mb-4 sm:mb-5",
    title:
      "text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl",
    description:
      "mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg",
    children: "mt-8 sm:mt-10",
  },
} as const;

export default function Hero({
  variant = "page",
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  headingId,
  children,
  priority = true,
  className,
}: HeroProps) {
  const vs = variantStyles[variant];

  return (
    <section
      aria-labelledby={headingId}
      className={cn("relative isolate overflow-hidden", vs.section, className)}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className={vs.image}
      />

      <div className={vs.overlay} aria-hidden />

      <Container className={cn("relative", vs.container)}>
        <div className={vs.content}>
          {eyebrow ? <div className={vs.eyebrowWrapper}>{eyebrow}</div> : null}

          <h1 id={headingId} className={vs.title}>
            {title}
          </h1>

          <div className={vs.description}>{description}</div>

          {children ? <div className={vs.children}>{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

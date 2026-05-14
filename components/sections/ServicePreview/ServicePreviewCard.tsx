import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ServicePreviewCardProps = {
  image: string;
  imageAlt: string;

  title: string;
  description: string;

  href: string;

  className?: string;
};

export default function ServicePreviewCard({
  image,
  imageAlt,

  title,
  description,

  href,

  className,
}: ServicePreviewCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-neutral-200/80 transition hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-4/3">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-neutral-900">{title}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center text-sm font-semibold text-lime-600 transition hover:text-lime-500"
        >
          Learn more
          <span aria-hidden className="ml-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

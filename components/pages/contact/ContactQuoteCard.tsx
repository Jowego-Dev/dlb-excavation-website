import {
  FaClock,
  FaDollarSign,
  FaPhone,
  FaShieldHalved,
} from "react-icons/fa6";
import Container from "@/components/ui/Container";
import { BUSINESS } from "@/lib/business/business";
import type { ContactCopy } from "./contact-copy";
import ContactQuoteForm from "./ContactQuoteForm";

type ServiceOption = { value: string; label: string };

type Props = {
  copy: ContactCopy;
  serviceOptions: ServiceOption[];
};

export default function ContactQuoteCard({ copy, serviceOptions }: Props) {
  const quick: {
    title: string;
    body: string;
    icon: typeof FaClock;
    showPhone?: boolean;
  }[] = [
    {
      title: copy.quickFastTitle,
      body: copy.quickFastBody,
      icon: FaClock,
    },
    {
      title: copy.quickFreeTitle,
      body: copy.quickFreeBody,
      icon: FaDollarSign,
    },
    {
      title: copy.quickQualityTitle,
      body: copy.quickQualityBody,
      icon: FaShieldHalved,
    },
    {
      title: copy.quickCallTitle,
      body: copy.quickCallBody,
      icon: FaPhone,
      showPhone: true,
    },
  ];

  return (
    <div className="relative z-20 -mt-24 sm:-mt-28 md:-mt-32">
      <Container className="max-w-[100rem]">
        <div className="overflow-hidden rounded-2xl border border-[#E5E7EB]/80 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="border-b border-[#E5E7EB] p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
              <ContactQuoteForm copy={copy} serviceOptions={serviceOptions} />
            </div>

            <aside
              aria-label={copy.quoteSidebarAria}
              className="flex flex-col gap-8 bg-slate-50/80 p-6 sm:p-8 lg:p-10"
            >
              {quick.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4B6F28] text-white shadow"
                    aria-hidden
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.body}
                    </p>
                    {item.showPhone ? (
                      <a
                        href={BUSINESS.contact.phoneHref}
                        className="mt-2 inline-block text-sm font-semibold text-[#4B6F28] underline-offset-2 hover:underline"
                      >
                        {BUSINESS.contact.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </Container>
    </div>
  );
}

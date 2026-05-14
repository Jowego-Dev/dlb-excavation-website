import ContactHero from "./ContactHero";
import ContactInfoGrid from "./ContactInfoGrid";
import ContactQuoteCard from "./ContactQuoteCard";
import { getContactCopy } from "./contact-copy";

type ServiceOption = { value: string; label: string };

type Props = {
  locale: string;
  serviceOptions: ServiceOption[];
};

export default function ContactPageView({ locale, serviceOptions }: Props) {
  const copy = getContactCopy(locale);

  return (
    <>
      <ContactHero copy={copy} />
      <ContactQuoteCard copy={copy} serviceOptions={serviceOptions} />
      <ContactInfoGrid locale={locale} copy={copy} />
    </>
  );
}

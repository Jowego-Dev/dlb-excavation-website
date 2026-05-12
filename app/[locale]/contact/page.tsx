import { getTranslations } from "next-intl/server";
import ContactPageView from "@/components/contact/ContactPageView";
import { SERVICES } from "@/lib/services/services";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const serviceOptions = SERVICES.map((s) => ({
    value: s.slug,
    label: t(`${s.key}.title`),
  }));

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-x-hidden bg-white">
      <ContactPageView locale={locale} serviceOptions={serviceOptions} />
    </main>
  );
}

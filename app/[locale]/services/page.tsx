import ServicesPageView from "@/components/pages/services/ServicesPageView";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  await params;

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-x-hidden">
      <ServicesPageView />
    </main>
  );
}

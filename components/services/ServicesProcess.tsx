import { FaCheckCircle, FaFileAlt, FaLeaf, FaPencilAlt } from "react-icons/fa";
import Container from "@/components/Container";

const steps = [
  {
    n: 1,
    title: "Request a quote",
    body: "Share photos, pins, and goals—we follow up with clear options and a realistic timeline.",
    icon: FaFileAlt,
  },
  {
    n: 2,
    title: "Site walk & plan",
    body: "We confirm access, utilities, drainage targets, and staging so production days stay predictable.",
    icon: FaPencilAlt,
  },
  {
    n: 3,
    title: "Build & haul",
    body: "Operators, trucks, and spotters work in sync to keep the trench safe and the street tidy.",
    icon: FaCheckCircle,
  },
  {
    n: 4,
    title: "Walkthrough & next steps",
    body: "Review the finished grade together, then roll straight into hardscape, landscape, or paving.",
    icon: FaLeaf,
  },
] as const;

export default function ServicesProcess() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-process-heading"
    >
      <Container className="max-w-[100rem]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-600 sm:text-sm">
              Our process
            </p>
            <h2
              id="services-process-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
            >
              Simple milestones, zero guesswork
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              Whether we are on site for two days or two weeks, you always know what happens next.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {steps.map((step, i) => (
                <li key={step.n} className="relative flex flex-col">
                  {i < steps.length - 1 ? (
                    <div
                      className="absolute left-[calc(50%+1.25rem)] top-6 hidden h-px w-[calc(100%-2.5rem)] bg-neutral-200 lg:block"
                      aria-hidden
                    />
                  ) : null}
                  <div className="relative flex flex-1 flex-col rounded-2xl border border-neutral-100 bg-neutral-50/80 p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-neutral-900">
                        {step.n}
                      </span>
                      <step.icon className="mt-2 h-5 w-5 text-lime-700" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-neutral-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.body}</p>
                  </div>
                  {i < steps.length - 1 ? (
                    <div className="my-4 flex justify-center lg:hidden" aria-hidden>
                      <span className="text-2xl font-light text-neutral-300">↓</span>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

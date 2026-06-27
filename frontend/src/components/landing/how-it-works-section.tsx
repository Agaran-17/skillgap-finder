import type { Step } from "@/types/landing";

const steps: Step[] = [
  {
    number: 1,
    title: "Upload Resume",
    description: "Drop your PDF resume and we'll extract your skills and experience.",
  },
  {
    number: 2,
    title: "Choose Target Role",
    description: "Tell us the job you're aiming for — AI Engineer, Data Scientist, and more.",
  },
  {
    number: 3,
    title: "Discover Missing Skills",
    description: "See a clear breakdown of skills you have versus skills you need.",
  },
  {
    number: 4,
    title: "Get Learning Roadmap",
    description: "Receive a personalized plan to close your gaps and become job-ready.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-t border-white/[0.08] bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-base text-[#D1D5DB] md:text-lg">
            Four simple steps from resume to career-ready.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-lg border border-white/[0.08] bg-[#111111] text-lg font-bold text-[#E50914]">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-white md:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

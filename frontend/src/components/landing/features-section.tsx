import { FileSearch, Map, Target } from "lucide-react";

import type { Feature } from "@/types/landing";

const features: Feature[] = [
  {
    title: "Resume Analysis",
    description:
      "Instantly parse and understand your resume — skills, experience, and qualifications extracted with precision.",
    icon: FileSearch,
  },
  {
    title: "Skill Gap Detection",
    description:
      "Compare your profile against any target role and pinpoint exactly which skills you're missing.",
    icon: Target,
  },
  {
    title: "Personalized Learning Roadmap",
    description:
      "Get a tailored action plan with recommended resources to bridge your gaps and land the role.",
    icon: Map,
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#0B0B0B] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Everything you need to level up
          </h2>
          <p className="mt-4 text-base text-[#D1D5DB] md:text-lg">
            From resume to roadmap — in minutes, not months.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-lg border border-white/[0.08] bg-[#111111] p-8 transition-colors duration-200 hover:border-white/[0.15] hover:bg-[#141414]"
            >
              <div className="mb-6 inline-flex text-[#E50914]">
                <feature.icon className="size-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D1D5DB] md:text-base">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-36 md:pb-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-black to-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/70">
          <Sparkles className="size-3.5 text-[#E50914]" />
          <span>SkillGap Finder</span>
        </div>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Discover the Skills Standing Between You and Your{" "}
          <span className="text-[#E50914]">Dream Job</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#D1D5DB] md:text-lg md:leading-8">
          Upload your resume, compare it against your target role, and get a
          personalized roadmap to close your skill gaps.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            nativeButton={false}
            render={<Link href="/analyze" />}
            className="group h-12 rounded bg-[#E50914] px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#F40612]"
          >
            Analyze My Resume
            <ArrowRight className="ml-2 size-4 opacity-80" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:h-16">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white transition-opacity duration-200 hover:opacity-80"
        >
          SkillGap<span className="text-[#E50914]">Finder</span>
        </Link>
        <Button
          nativeButton={false}
          render={<Link href="/analyze" />}
          className="h-9 rounded bg-[#E50914] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#F40612]"
        >
          Analyze My Resume
        </Button>
      </nav>
    </header>
  );
}

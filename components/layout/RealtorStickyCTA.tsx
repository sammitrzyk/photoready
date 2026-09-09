"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users } from "lucide-react";

export function RealtorStickyCTA() {
  const pathname = usePathname();

  if (pathname === "/for-agents") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#DDD3C7] bg-[#0B1F3A] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
      <Link
        href="/for-agents"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#159AD6] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E7AAF]"
      >
        <Users className="h-4 w-4 shrink-0" aria-hidden="true" />
        Real Estate Agent? Partner With Us
      </Link>
    </div>
  );
}

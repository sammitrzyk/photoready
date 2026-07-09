"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            className="flex items-center justify-center w-10 h-10 rounded-md text-[#0B1F3A]/60 hover:text-[#0B1F3A] hover:bg-[#0B1F3A]/6 transition-colors md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-[#0B1F3A] border-l border-white/10 text-white p-0"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-display text-lg font-bold text-white">PhotoReady</span>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-3 rounded-md text-white/80 hover:text-white hover:bg-white/8 transition-colors text-[15px] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pt-2 pb-6 flex flex-col gap-3 border-t border-white/10 mt-2">
          <Button
            asChild
            className="w-full bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold"
          >
            <Link href="/contact" onClick={() => setOpen(false)}>
              Get an Estimate
            </Link>
          </Button>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 text-white/70 hover:text-white text-sm transition-colors py-2"
          >
            <Phone className="h-4 w-4" />
            Call {siteConfig.phone}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

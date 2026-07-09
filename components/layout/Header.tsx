import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF8] border-b border-[#DDD3C7]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 xl:px-12">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo/PRLOGO.png"
              alt="PhotoReady Home Prep"
              width={120}
              height={120}
              className="h-11 w-auto"
              priority
            />
            <span className="font-display text-[1.05rem] font-bold text-[#0B1F3A] tracking-tight leading-none">
              PhotoReady
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-[13px] font-medium tracking-wide text-[#0B1F3A]/55 hover:text-[#0B1F3A] transition-colors duration-150 group"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#159AD6] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-[13px] text-[#5A6472] hover:text-[#0B1F3A] transition-colors duration-150"
            >
              <Phone className="h-3.5 w-3.5 text-[#159AD6] shrink-0" />
              <span className="font-medium tracking-wide">{siteConfig.phone}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-md bg-[#0B1F3A] hover:bg-[#153557] text-white text-[13px] font-semibold tracking-wide transition-colors duration-150"
            >
              Get an Estimate
            </Link>
          </div>

          {/* Mobile */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

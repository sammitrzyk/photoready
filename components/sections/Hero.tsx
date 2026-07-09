import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

const HERO_IMAGE = "/images/hero/realhero.png";

const checklistItems = [
  "Cleanout & declutter",
  "Paint & touch-ups",
  "Flooring & carpet",
  "Deep cleaning",
  "Curb appeal",
];

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT A — Navy/cobalt brand-led hero, cream as secondary warmth
// Currently active. Swap Hero export at the bottom to try Variant B.
// ─────────────────────────────────────────────────────────────────────────────

function HeroLight() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 130% 100% at 16% 12%, #12385A 0%, #0F2E4D 38%, #0B1F3A 100%)",
      }}
    >
      {/* Barely-there noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.05,
        }}
        aria-hidden="true"
      />

      {/* Soft cobalt spotlight behind the headline — brand energy */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full lg:w-[62%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 22% 28%, rgba(21,154,214,0.16) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Faint diagonal line texture — HOMEstretch-style depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 16px)",
          maskImage: "linear-gradient(to right, black 0%, black 55%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 55%, transparent 95%)",
        }}
        aria-hidden="true"
      />

      {/* Warm amber glow behind right image column — small warmth accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 50%, rgba(201,150,69,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] gap-8 lg:gap-10 items-center py-14 md:py-16 lg:pt-[72px] lg:pb-[96px]">

          {/* ── Left: Copy ── */}
          <div className="relative flex flex-col gap-5 max-w-[560px]">

            <div className="flex items-center gap-2">
              <span className="block w-2 h-2 rounded-full bg-[#159AD6]" aria-hidden="true" />
              <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-[#9CCBFF]">
                Pre-Listing Home Prep · Harrisburg, PA
              </p>
            </div>

            <h1 className="relative font-display text-[2.9rem] sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[3.8rem] font-extrabold text-white leading-[1.0] tracking-[-0.02em]">
              One Call Away.
              <br />
              Photo-Ready
              <br />
              <span className="relative inline-block text-[#159AD6]">
                <span
                  className="absolute -inset-x-3 -inset-y-2 -z-10 rounded-[999px] blur-2xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(21,154,214,0.35) 0%, transparent 75%)" }}
                  aria-hidden="true"
                />
                Today.
              </span>
            </h1>

            <p className="mt-1 text-[20px] font-medium text-[#DCE7F2] leading-[1.6] max-w-[610px]">
              PhotoReady gets homes ready before they hit the market —
              coordinating cleanouts, repairs, touch-ups, cleaning, flooring,
              and curb appeal for photos and showings.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                className="bg-white hover:bg-[#159AD6] text-[#0B1F3A] hover:text-white font-semibold px-6 h-11 rounded-lg text-sm shadow-none transition-colors"
              >
                <Link href="/contact">Get an Estimate</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-[#159AD6] font-medium px-6 h-11 rounded-lg text-sm transition-colors"
              >
                <Link href="/services">See Services</Link>
              </Button>
            </div>

            <p className="text-[11.5px] text-[#AEC3DA] tracking-wide leading-loose">
              One call&nbsp;·&nbsp;One prep plan&nbsp;·&nbsp;Harrisburg &amp; Central PA
            </p>

          </div>

          {/* ── Right: Image card ── */}
          <div className="relative">

            {/* Image card — editorial photo panel, no card-in-card backing */}
            <div className="relative rounded-[14px] overflow-hidden border border-white/40 shadow-[0_12px_30px_rgba(0,0,0,0.18)] h-[420px] md:h-[480px] lg:h-[520px]">
              <Image
                src={HERO_IMAGE}
                alt="A real estate agent walking a homeowner couple through a bright, clean home during a pre-listing walkthrough"
                fill
                className="object-cover object-[38%_20%] scale-[1.2] -translate-y-[6%] saturate-[1.05] brightness-[1.03]"
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{ background: "linear-gradient(160deg, rgba(255,196,140,0.14) 0%, transparent 55%)" }}
                aria-hidden="true"
              />
              {/* Left-edge blend into the navy panel — softens the hard seam */}
              <div
                className="absolute inset-y-0 left-0 w-[16%] pointer-events-none"
                style={{ background: "linear-gradient(to right, rgba(11,31,58,0.85) 0%, transparent 100%)" }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
            </div>

            {/* Checklist overlay — anchored to the navy/image seam, corner-pinned */}
            <div className="absolute -bottom-3 -left-7 w-[137px] bg-[#FDFAF6] border border-[#D5CABE] rounded-lg shadow-[0_6px_16px_rgba(11,31,58,0.18)] overflow-hidden">
              <div className="h-[2.5px] bg-[#0A5FD1]" aria-hidden="true" />
              <div className="p-2.5">
                <p className="text-[8.5px] font-semibold text-[#0B1F3A] tracking-wide uppercase">
                  Pre-listing prep checklist
                </p>
                <p className="text-[7.5px] text-[#8A7F74] mt-0.5 tracking-wide mb-1.5">
                  Built around your photo date
                </p>
                <div className="h-px bg-[#E8E1D6] mb-1.5" />
                <ul className="flex flex-col gap-1">
                  {checklistItems.map((item) => (
                    <li key={item} className="flex items-center gap-1">
                      <Check className="w-2 h-2 text-[#0A5FD1] shrink-0" strokeWidth={2.5} />
                      <span className="text-[8.5px] text-[#2C3A47] leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-[#E8E1D6] mt-1.5 mb-1" />
                <p className="text-[7px] text-[#8A7F74] tracking-wide uppercase">
                  Ready before photos
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Curved cream transition into the value strip below */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[46px] md:h-[64px]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,38 C420,8 1020,68 1440,28 L1440,80 L0,80 Z"
          fill="#FBF8F2"
        />
      </svg>

    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT B — Cream left, navy accent frame behind image (editorial)
// Swap the export below to try this version.
// ─────────────────────────────────────────────────────────────────────────────

function HeroNavyAccent() {
  return (
    <section className="bg-[#FFFDF8] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-16 md:py-20 lg:py-24">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-6 max-w-xl">

            <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-[#159AD6]">
              Pre-Listing Home Prep · Harrisburg, PA
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem] font-bold text-[#0B1F3A] leading-[1.08] tracking-[-0.015em]">
              Get your home photo-ready before it hits the market.
            </h1>

            <p className="text-[16px] md:text-[17px] text-[#5A6472] leading-relaxed">
              PhotoReady helps sellers and agents get homes ready for photos,
              showings, and sale — coordinating cleanouts, repairs, paint,
              flooring, cleaning, and curb appeal.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold px-6 h-11 rounded-lg text-sm shadow-none transition-colors"
              >
                <Link href="/contact">Get an Estimate</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#D5CABE] bg-white text-[#0B1F3A] hover:bg-[#F7F3EC] font-medium px-6 h-11 rounded-lg text-sm transition-colors"
              >
                <Link href="/services">See Services</Link>
              </Button>
            </div>

            <p className="text-[11px] text-[#A89F95] tracking-wide leading-loose">
              One call&nbsp;·&nbsp;One prep plan&nbsp;·&nbsp;Cleanouts, repairs,
              paint, floors, cleaning &amp; curb appeal
            </p>

          </div>

          {/* ── Right: Image with navy accent frame ── */}
          <div className="relative">

            {/* Navy accent block — offset behind the image card */}
            <div className="absolute top-5 right-0 left-6 bottom-0 rounded-2xl bg-[#0B1F3A]" />

            {/* Image card — floats above the navy frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D5CABE]/40 shadow-[0_20px_56px_rgba(11,31,58,0.2)] aspect-[4/5]">
              <Image
                src={HERO_IMAGE}
                alt="Staging-ready home interior prepared for listing photos"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
            </div>

            {/* Checklist overlay */}
            <div className="absolute bottom-5 left-2 w-[200px] bg-[#FDFAF6] border border-[#D5CABE] rounded-lg shadow-[0_8px_28px_rgba(11,31,58,0.22)] p-4 z-10">
              <p className="text-[11px] font-semibold text-[#0B1F3A] tracking-wide uppercase">
                Pre-listing prep checklist
              </p>
              <p className="text-[10px] text-[#8A7F74] mt-0.5 tracking-wide mb-2.5">
                Built around your photo date
              </p>
              <div className="h-px bg-[#E8E1D6] mb-2.5" />
              <ul className="flex flex-col gap-1.5">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-2.5 h-2.5 text-[#C99645] shrink-0" strokeWidth={2.5} />
                    <span className="text-[11px] text-[#2C3A47] leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-[#E8E1D6] mt-2.5 mb-2" />
              <p className="text-[9.5px] text-[#8A7F74] tracking-wide uppercase">
                Ready before photos
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Active export — swap HeroLight ↔ HeroNavyAccent to compare
// ─────────────────────────────────────────────────────────────────────────────
export const Hero = HeroLight;

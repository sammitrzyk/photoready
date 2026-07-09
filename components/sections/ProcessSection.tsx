import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Walk the home",
    copy: "We review the property, your timeline, and what needs to happen before photos, showings, or move-out.",
  },
  {
    number: "02",
    title: "Build the prep list",
    copy: "We prioritize the cleanouts, repairs, cleaning, paint, flooring, and curb appeal work that will make the biggest difference.",
  },
  {
    number: "03",
    title: "Get it photo-ready",
    copy: "PhotoReady coordinates the work so the home is cleaner, brighter, repaired, and ready for the listing process.",
  },
];

export function ProcessSection() {
  return (
    <Section tight className="bg-[#F7F3EC]" curveTo="#FFFDF8">
      <Container>
        <SectionHeader
          eyebrow="HOW IT WORKS"
          title={'The "One Call" Prep Plan'}
          lead="You do not need to manage five different vendors. We walk the home, build the prep list, and coordinate the work around your listing timeline."
          align="center"
          className="mb-8"
        />

        <div className="max-w-[1180px] mx-auto bg-white border border-[rgba(217,226,234,0.9)] rounded-[24px] shadow-[0_16px_36px_rgba(11,31,58,0.06)] px-6 py-8 md:px-11 md:py-[42px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={[
                  "flex flex-col gap-3 md:px-8",
                  index > 0 ? "pt-6 border-t border-[#E4E9EF] md:pt-0 md:border-t-0 md:border-l" : "",
                ].join(" ")}
              >
                <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#DFF3FF] text-[#1298EE] font-display font-extrabold text-lg tabular-nums flex-shrink-0">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5A6472] leading-relaxed">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2.5">
          <Button
            asChild
            className="w-full md:w-auto bg-[#0B1F3A] hover:bg-[#159AD6] text-white font-semibold px-8 py-2.5 rounded-lg transition-colors"
          >
            <Link href="/contact">Schedule a Walkthrough</Link>
          </Button>
          <p className="text-xs text-[#5A6472]">
            One walkthrough. One prep plan. No juggling vendors.
          </p>
        </div>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const painPoints = [
  "Tight timeline to get the house listed",
  "Worried photos won't show the home at its best",
  "Not sure which fixes are worth doing",
  "Clutter, worn floors, or unfinished repairs",
  "Juggling painters, cleaners, haulers, and handymen separately",
  "Prepping the house while moving, working, or settling an estate",
];

export function HomePrepChecklist() {
  return (
    <Section tight className="bg-[#FFFDF8] pt-6 md:pt-10" curveTo="#F6EFE5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 pt-6 md:pt-7">
            <SectionHeader
              align="left"
              eyebrow="THE PREP LIST"
              title="Selling's stressful. The prep shouldn't be."
              titleClassName="font-extrabold leading-[1.08] text-[#1B3A5C]"
            />
            <div>
              <Button
                asChild
                className="bg-[#0390FA] hover:bg-[#159AD6] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                <Link href="/contact">Get My Prep Plan</Link>
              </Button>
            </div>
          </div>

          <div className="bg-[#FFFDF8] rounded-xl border border-[#D5CABE] shadow-[0_10px_30px_rgba(11,31,58,0.08)] overflow-hidden">
            <div className="h-[3px] bg-[#159AD6]" aria-hidden="true" />
            <div className="p-6 md:p-7">
              <p className="text-base font-bold text-[#0B1F3A] mb-4">
                What gets in the way before listing.
              </p>

              <ul className="flex flex-col gap-3">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#159AD6]/15">
                      <Check className="w-3 h-3 text-[#159AD6]" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-[#1F2A35] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

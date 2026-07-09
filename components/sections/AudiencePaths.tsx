import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AudiencePaths() {
  return (
    <Section className="bg-[#FFFDF8]" curveTo="#F7F3EC">
      <Container>
        <SectionHeader
          title="Built for sellers. Useful for agents."
          align="center"
          className="mb-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {/* Card 1 — Homeowners */}
          <div className="bg-[#F7F3EC] border border-[#D5CABE] rounded-xl p-7 md:p-8 flex flex-col gap-4">
            <p className="pr-eyebrow">HOMEOWNERS</p>
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="font-display text-xl font-bold text-[#0B1F3A]">
                Get the home ready without managing every contractor.
              </h3>
              <p className="text-base text-[#5A6472] leading-relaxed">
                Whether you are moving, selling, downsizing, or handling an estate, PhotoReady helps turn the prep list into a clear plan.
              </p>
            </div>
            <div className="mt-2">
              <Button
                asChild
                variant="outline"
                className="border-[#0B1F3A] text-[#0B1F3A] bg-transparent hover:bg-[#0B1F3A] hover:text-white font-semibold px-5 py-2 rounded-lg transition-colors"
              >
                <Link href="/contact">Get an Estimate</Link>
              </Button>
            </div>
          </div>

          {/* Card 2 — Real Estate Agents */}
          <div className="bg-[#0B1F3A] rounded-xl p-7 md:p-8 flex flex-col gap-4">
            <p className="pr-eyebrow text-[#159AD6]">REAL ESTATE AGENTS</p>
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="font-display text-xl font-bold text-white">
                A pre-listing partner your clients can actually use.
              </h3>
              <p className="text-base text-white/75 leading-relaxed">
                Refer one team for cleanouts, repairs, paint, cleaning, flooring, and curb appeal — with communication built around your listing timeline.
              </p>
            </div>
            <div className="mt-2">
              <Button
                asChild
                className="bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold px-5 py-2 rounded-lg transition-colors"
              >
                <Link href="/for-agents">For Agents</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

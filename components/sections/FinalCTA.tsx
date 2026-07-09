import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <Section navy className="py-20 md:py-28">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready to get the home photo-ready?
          </h2>
          <p className="text-white/75 mt-4 text-lg">
            Tell us the address, timeline, and what needs done. We&rsquo;ll help
            you figure out the right prep plan before the home hits the market.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              asChild
              className="bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              <Link href="/contact">Get an Estimate</Link>
            </Button>

            <a
              href={siteConfig.phoneHref}
              className="border border-white/30 text-white/80 hover:text-white hover:border-white transition px-6 py-3 rounded-md text-sm flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call {siteConfig.phone}
            </a>
          </div>

          <p className="mt-8 text-white/40 text-xs text-center">
            Serving Harrisburg, Mechanicsburg, Camp Hill, Carlisle, New
            Cumberland, and nearby Central PA communities.
          </p>
        </div>
      </Container>
    </Section>
  );
}

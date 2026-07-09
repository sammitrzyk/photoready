import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CalendarCheck, Phone, Eye, MapPin, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const trustPoints: TrustPoint[] = [
  {
    icon: CalendarCheck,
    title: "Built around listing dates",
    description:
      "Prep work scheduled around your photo date, showings, and market deadline.",
  },
  {
    icon: Phone,
    title: "One coordinator for multiple services",
    description:
      "One call handles cleanouts, repairs, paint, cleaning, flooring, and curb appeal.",
  },
  {
    icon: Eye,
    title: "Recommendations based on buyer perception",
    description:
      "We prioritize what buyers notice — not unnecessary upgrades.",
  },
  {
    icon: MapPin,
    title: "Local Harrisburg / Central PA service",
    description:
      "Based in Central PA, serving Harrisburg, Mechanicsburg, Camp Hill, Carlisle, and nearby communities.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication throughout",
    description:
      "From walkthrough to completion, you know what's happening and when.",
  },
];

export function WhyPhotoReady() {
  return (
    <Section className="bg-[#FFFDF8]" curveTo="#F7F3EC">
      <Container>
        <SectionHeader
          eyebrow="WHY PHOTOREADY"
          title="Practical prep, not unnecessary upgrades."
          lead="We focus on the work that helps the home look cleaner, brighter, and easier to buy — without turning pre-listing prep into a full renovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-[#F7F3EC] border border-[#D5CABE] rounded-xl p-5 flex gap-4 items-start"
              >
                <div className="bg-[#E8E1D6] h-9 w-9 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="text-[#159AD6] h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-sm">
                    {point.title}
                  </p>
                  <p className="text-xs text-[#5A6472] mt-1">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

import { Phone, CalendarCheck, Camera } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { type LucideIcon } from "lucide-react";

interface ValueItem {
  Icon: LucideIcon;
  title: string;
  copy: string;
}

const values: ValueItem[] = [
  {
    Icon: Phone,
    title: "One Call, One Plan",
    copy: "Cleanouts, repairs, cleaning, paint, floors, and curb appeal coordinated through one point of contact.",
  },
  {
    Icon: CalendarCheck,
    title: "Built Around Listing Day",
    copy: "Prep is scheduled around the listing timeline so the home is ready before photos and showings.",
  },
  {
    Icon: Camera,
    title: "Photos After Prep",
    copy: "Once the home is ready, professional listing photos can be handled too.",
  },
];

export function ValueStrip() {
  return (
    <Section className="bg-[#F6F9FC] pb-6 md:pb-10" curveTo="#FFFDF8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map(({ Icon, title, copy }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-5 bg-white rounded-2xl shadow-[0_8px_28px_rgba(11,31,58,0.08)] p-8"
            >
              <div className="flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#1E5FD1]">
                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[13px] font-bold uppercase tracking-wide text-[#0B1F3A]">{title}</h3>
                <p className="text-sm text-[#2A3644] leading-relaxed max-w-[280px]">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

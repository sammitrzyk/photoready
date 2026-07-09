import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Package, PaintbrushVertical, Flower2, Layers } from "lucide-react";

const projects = [
  {
    icon: <Package className="text-[#5A6472] h-8 w-8" />,
    title: "Cleanout + Move-Out Clean",
    tags: ["Cleanout", "Cleaning"],
  },
  {
    icon: <PaintbrushVertical className="text-[#5A6472] h-8 w-8" />,
    title: "Paint Touch-Up + Carpet Refresh",
    tags: ["Painting", "Flooring"],
  },
  {
    icon: <Flower2 className="text-[#5A6472] h-8 w-8" />,
    title: "Curb Appeal Cleanup",
    tags: ["Landscaping", "Exterior"],
  },
  {
    icon: <Layers className="text-[#5A6472] h-8 w-8" />,
    title: "Full Pre-Listing Prep",
    tags: ["Full Prep", "Multiple Services"],
  },
];

export function RecentWork() {
  return (
    <Section cream curveTo="#FFFDF8">
      <Container>
        <SectionHeader
          eyebrow="RECENT WORK"
          title="Real results, every time."
          lead="Every project is different — here are a few examples of what we help with before homes go to market."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-[#D5CABE] rounded-xl overflow-hidden"
            >
              <div className="bg-[#E8E1D6] h-44 flex items-center justify-center">
                {project.icon}
              </div>
              <div className="px-4 py-4">
                <p className="font-semibold text-[#0B1F3A] mb-2">
                  {project.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F7F3EC] text-[#5A6472] text-xs px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#5A6472] text-sm mt-6 text-center">
          Before-and-after project photos coming soon.
        </p>
      </Container>
    </Section>
  );
}

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  navy?: boolean;
  cream?: boolean;
  stone?: boolean;
  tight?: boolean;
  /** Hex color of the section immediately below this one. Draws a soft curved
   *  seam at the bottom edge (matching the hero's wave) instead of a hard line. */
  curveTo?: string;
}

export function Section({ children, className, id, navy, cream, stone, tight, curveTo }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        curveTo && "overflow-hidden",
        tight ? "py-12 md:py-16" : "py-16 md:py-24",
        navy && "bg-[#0B1F3A] text-[#FFFDF8]",
        cream && "bg-[#F7F3EC]",
        stone && "bg-[#E8E1D6]",
        className
      )}
    >
      {children}
      {curveTo && (
        <svg
          className="absolute bottom-0 left-0 w-full h-[18px] md:h-[30px]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,38 C420,8 1020,68 1440,28 L1440,80 L0,80 Z" fill={curveTo} />
        </svg>
      )}
    </section>
  );
}

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  titleClassName?: string;
  maxWidth?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  light = false,
  className,
  titleClassName,
  maxWidth = "max-w-2xl",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? `mx-auto text-center ${maxWidth}` : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("pr-eyebrow", light && "pr-eyebrow-light")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl font-bold",
          light ? "text-white" : "text-[#0B1F3A]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            light ? "text-white/75" : "text-[#5A6472]"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

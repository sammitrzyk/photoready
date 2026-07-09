import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
}

export function Container({ children, className, narrow, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8 xl:px-12",
        narrow ? "max-w-3xl" : wide ? "max-w-screen-xl" : "max-w-6xl",
        className
      )}
    >
      {children}
    </div>
  );
}

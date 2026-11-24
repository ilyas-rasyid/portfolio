import type { PropsWithChildren } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const { ref, visible } = useIntersection();
  return (
    <div ref={ref} className={cn(className, visible && "reveal-enter")}>
      {children}
    </div>
  );
}

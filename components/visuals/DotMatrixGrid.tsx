import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
  dotColor?: string;
  spacing?: number;
  opacity?: number;
}

export function DotMatrixGrid({
  className,
  dotColor = "var(--border)",
  spacing = 24,
  opacity = 0.5
}: DotMatrixGridProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none -z-20", className)}
      style={{
        backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity
      }}
      aria-hidden="true"
    />
  );
}

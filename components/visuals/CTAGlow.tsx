import { cn } from "@/lib/utils";

interface CTAGlowProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export function CTAGlow({ children, className, active = true }: CTAGlowProps) {
  if (!active) return <div className={className}>{children}</div>;

  return (
    <div className={cn("relative group inline-block", className)}>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500 group-hover:duration-200 pointer-events-none motion-reduce:transition-none" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

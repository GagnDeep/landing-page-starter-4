import { AnimatedGradientMesh } from "@/components/visuals";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  headline: string;
  subheading?: string;
  className?: string;
}

export function PageHero({ headline, subheading, className }: PageHeroProps) {
  return (
    <section className={cn("relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-border", className)}>
      <AnimatedGradientMesh />
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{headline}</h1>
        {subheading && (
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}

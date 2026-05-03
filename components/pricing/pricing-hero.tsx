import { pricingContent } from "@/content/pricing";
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function PricingHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden border-b border-border">
      <AnimatedGradientMesh className="absolute inset-0 -z-10" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
        <StaggeredReveal>
          <StaggerItem>
            <h1 className="font-heading text-5xl md:text-7xl text-foreground font-medium tracking-tight mb-6">
              {pricingContent.hero.headline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {pricingContent.hero.subheadline}
            </p>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

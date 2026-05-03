import Link from "next/link";
import { homeContent } from "@/content/home";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function Concierge() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <AnimatedGradientMesh className="absolute inset-0 -z-10" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto shadow-2xl">
          <StaggeredReveal className="text-center">
            <StaggerItem>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
                {homeContent.concierge.title}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                {homeContent.concierge.description}
              </p>
            </StaggerItem>

            <StaggerItem className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
              {homeContent.concierge.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </StaggerItem>

            <StaggerItem>
              <Link href={homeContent.concierge.cta.href}>
                <MagneticButton className="w-full sm:w-auto">
                  {homeContent.concierge.cta.label}
                </MagneticButton>
              </Link>
            </StaggerItem>
          </StaggeredReveal>
        </div>
      </div>
    </section>
  );
}

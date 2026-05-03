import { contactContent } from "@/content/contact";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-border">
      <AnimatedGradientMesh className="absolute inset-0 -z-10" />
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-3xl">
        <StaggeredReveal>
          <StaggerItem>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground font-medium mb-6">
              {contactContent.hero.headline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {contactContent.hero.subheadline}
            </p>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

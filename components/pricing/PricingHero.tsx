import { pricingContent } from "@/content/pricing";
import { FadeIn } from "@/components/visuals/FadeIn";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { RevealText } from "@/components/visuals/RevealText";

export function PricingHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-background py-24 border-b border-border">
      <AnimatedGradientMesh />
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
          <RevealText>{pricingContent.hero.headline}</RevealText>
        </h1>
        <FadeIn delay={0.2} direction="up">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {pricingContent.hero.subheadline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

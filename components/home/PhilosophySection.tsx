import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <FadeIn delay={0.2} direction="up">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-foreground">
            {homeContent.philosophy.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.4} direction="up">
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-serif italic">
            &quot;{homeContent.philosophy.description}&quot;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

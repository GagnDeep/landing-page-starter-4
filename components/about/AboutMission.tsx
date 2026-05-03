import { aboutContent } from "@/content/about";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Target } from "lucide-react";

export function AboutMission() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <FadeIn>
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {aboutContent.mission.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutContent.mission.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

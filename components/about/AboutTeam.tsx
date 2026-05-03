import { aboutContent } from "@/content/about";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Users } from "lucide-react";

export function AboutTeam() {
  return (
    <section className="py-24 bg-muted/10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <FadeIn>
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {aboutContent.team.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutContent.team.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

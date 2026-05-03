import { featuresContent } from "@/content/features";
import { FadeIn } from "@/components/visuals/FadeIn";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Microchip } from "lucide-react";

export function TechStack() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <FloatingBlobs />
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <FadeIn className="w-full md:w-1/3">
            <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Microchip className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {featuresContent.techStack.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              We continuously invest in global tier-1 medical equipment to ensure procedures are minimally invasive and exact.
            </p>
          </FadeIn>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuresContent.techStack.items.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} className="bg-card border border-border rounded-xl p-6 shadow-sm text-center flex flex-col items-center justify-center h-40">
                <span className="font-heading text-lg font-semibold text-foreground">{item}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

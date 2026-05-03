import { homeContent } from "@/content/home";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { FadeIn } from "@/components/visuals/FadeIn";
import { ShieldAlert } from "lucide-react";

export function SterilizationShowcase() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden border-y border-border">
      <FloatingBlobs />
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl text-center">
        <FadeIn>
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
            <ShieldAlert className="h-8 w-8 text-primary" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {homeContent.sterilization.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            {homeContent.sterilization.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

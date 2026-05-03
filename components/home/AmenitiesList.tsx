import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Check } from "lucide-react";

export function AmenitiesList() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn className="w-full md:w-1/3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {homeContent.amenities.title}
            </h2>
          </FadeIn>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {homeContent.amenities.items.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="flex items-center gap-4 bg-background p-6 rounded-xl border border-border shadow-sm">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-foreground/90">{item}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { faqContent } from "@/content/faq";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function FaqHero() {
  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <StaggeredReveal>
          <StaggerItem>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground font-medium mb-6">
              {faqContent.hero.headline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {faqContent.hero.subheadline}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
                <Search className="w-5 h-5" />
              </div>
              <Input
                type="text"
                placeholder={faqContent.search.placeholder}
                className="pl-12 h-14 bg-muted/30 border-border rounded-full shadow-sm focus-visible:ring-primary text-base"
              />
            </div>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

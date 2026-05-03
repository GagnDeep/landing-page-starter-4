import { careersContent } from "@/content/careers";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { Microscope, GraduationCap, Gem } from "lucide-react";

export function CultureBenefits() {
  const icons = [Microscope, GraduationCap, Gem];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <StaggeredReveal className="text-center mb-16 md:mb-24">
          <StaggerItem>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              {careersContent.culture.title}
            </h2>
          </StaggerItem>
        </StaggeredReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {careersContent.culture.benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <StaggeredReveal key={benefit.title} delay={index * 0.1}>
                <StaggerItem className="flex flex-col items-center text-center p-8 rounded-3xl bg-muted/30 border border-border h-full group hover:border-primary/30 transition-colors duration-500">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </StaggerItem>
              </StaggeredReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { homeContent } from "@/content/home";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <StaggeredReveal className="mb-16 md:mb-24 text-center">
          <StaggerItem>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              {homeContent.process.title}
            </h2>
          </StaggerItem>
        </StaggeredReveal>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 gap-8">
          {homeContent.process.steps.map((step, index) => (
            <StaggeredReveal key={step.number} delay={index * 0.1}>
              <StaggerItem className="relative flex flex-col pt-8 md:pt-12 border-t border-border group">
                <div className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-border group-hover:bg-primary transition-colors duration-500" />
                <span className="text-3xl font-heading text-muted-foreground/30 font-light mb-4 transition-colors duration-500 group-hover:text-primary">
                  {step.number}
                </span>
                <h3 className="font-medium text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </StaggerItem>
            </StaggeredReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

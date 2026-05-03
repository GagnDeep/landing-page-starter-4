import { pricingContent } from "@/content/pricing";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function ComparisonTable() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <StaggeredReveal className="text-center mb-16">
          <StaggerItem>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
              {pricingContent.comparison.title}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted-foreground text-lg">
              {pricingContent.comparison.description}
            </p>
          </StaggerItem>
        </StaggeredReveal>

        <StaggeredReveal delay={0.2} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-3 bg-muted/50 p-6 border-b border-border">
            <div className="font-medium text-foreground text-sm uppercase tracking-widest">Procedure</div>
            <div className="font-medium text-foreground text-sm uppercase tracking-widest text-right">Typical UK Price</div>
            <div className="font-medium text-primary text-sm uppercase tracking-widest text-right">Our Price</div>
          </div>
          <div className="divide-y divide-border">
            {pricingContent.comparison.items.map((item, index) => (
              <StaggerItem key={index} className="grid grid-cols-3 p-6 items-center hover:bg-muted/10 transition-colors">
                <div className="text-foreground font-medium">{item.procedure}</div>
                <div className="text-muted-foreground text-right">{item.ukPrice}</div>
                <div className="text-foreground font-heading text-xl md:text-2xl text-right">{item.ourPrice}</div>
              </StaggerItem>
            ))}
          </div>
        </StaggeredReveal>
      </div>
    </section>
  );
}

import { pricingContent } from "@/content/pricing";
import { FadeIn } from "@/components/visuals/FadeIn";
import { HoverCard } from "@/components/visuals/HoverCard";

export function PricingTables() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <FadeIn delay={0.1}>
            <HoverCard className="p-8 h-full flex flex-col bg-card border-border/50">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center pb-4 border-b border-border/50">
                {pricingContent.tables.general.title}
              </h3>
              <ul className="space-y-6 flex-grow">
                {pricingContent.tables.general.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-border/20 pb-4 last:border-0">
                    <span className="text-foreground/90 font-medium">{item.service}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </HoverCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <HoverCard className="p-8 h-full flex flex-col bg-primary/5 border-primary/20 shadow-md">
              <h3 className="font-heading text-2xl font-bold text-primary mb-8 text-center pb-4 border-b border-primary/20">
                {pricingContent.tables.specialized.title}
              </h3>
              <ul className="space-y-6 flex-grow">
                {pricingContent.tables.specialized.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-primary/10 pb-4 last:border-0">
                    <span className="text-foreground/90 font-medium">{item.service}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </HoverCard>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

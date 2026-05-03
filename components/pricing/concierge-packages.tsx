import { pricingContent } from "@/content/pricing";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConciergePackages() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <StaggeredReveal className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <StaggerItem>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
              {pricingContent.conciergePackages.title}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted-foreground text-lg">
              {pricingContent.conciergePackages.description}
            </p>
          </StaggerItem>
        </StaggeredReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingContent.conciergePackages.tiers.map((tier, index) => (
            <StaggeredReveal key={tier.name} delay={index * 0.15}>
              <StaggerItem
                className={cn(
                  "flex flex-col h-full bg-background rounded-3xl p-8 md:p-10 border transition-all duration-500",
                  index === 1 ? "border-primary shadow-xl scale-[1.02]" : "border-border shadow-sm hover:border-foreground/30"
                )}
              >
                {index === 1 && (
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-6">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl text-foreground mb-3">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-8 pb-8 border-b border-border flex-1">
                  {tier.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </StaggeredReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

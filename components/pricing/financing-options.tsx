import { pricingContent } from "@/content/pricing";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { CreditCard, Landmark, Banknote } from "lucide-react";

export function FinancingOptions() {
  const icons = [Landmark, CreditCard, Banknote];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <StaggeredReveal>
          <StaggerItem>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              {pricingContent.financing.title}
            </h2>
            <p className="text-muted-foreground mb-12">
              {pricingContent.financing.description}
            </p>
          </StaggerItem>
          <StaggerItem className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pricingContent.financing.options.map((option, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-muted/30 border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{option}</p>
                </div>
              );
            })}
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

import { pricingContent } from "@/content/pricing";
import { FadeIn } from "@/components/visuals/FadeIn";
import { CreditCard, ShieldCheck } from "lucide-react";

export function PricingFinancing() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <FadeIn direction="left" className="flex flex-col space-y-4">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {pricingContent.financing.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pricingContent.financing.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="right" className="flex flex-col space-y-4">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {pricingContent.insurance.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pricingContent.insurance.description}
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

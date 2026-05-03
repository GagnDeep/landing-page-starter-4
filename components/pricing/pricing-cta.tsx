import Link from "next/link";
import { pricingContent } from "@/content/pricing";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function PricingCta() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <StaggeredReveal>
          <StaggerItem>
            <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
              {pricingContent.cta.headline}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-background/80 mb-12 font-light">
              {pricingContent.cta.subheadline}
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link href={pricingContent.cta.ctaPrimary.href}>
              <MagneticButton className="bg-background text-foreground hover:bg-background/90">
                {pricingContent.cta.ctaPrimary.label}
              </MagneticButton>
            </Link>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

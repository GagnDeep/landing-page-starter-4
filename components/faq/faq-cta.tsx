import { faqContent } from "@/content/faq";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import Link from "next/link";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function FaqCta() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 border-t border-border text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <StaggeredReveal>
          <StaggerItem>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              {faqContent.supportCta.headline}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted-foreground text-lg mb-12">
              {faqContent.supportCta.subheadline}
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link href={faqContent.supportCta.ctaPrimary.href}>
              <MagneticButton>
                {faqContent.supportCta.ctaPrimary.label}
              </MagneticButton>
            </Link>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

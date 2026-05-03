import { careersContent } from "@/content/careers";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import Link from "next/link";

export function CareersCta() {
  return (
    <section className="py-24 md:py-32 bg-background text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <StaggeredReveal>
          <StaggerItem>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              {careersContent.applicationCta.headline}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {careersContent.applicationCta.subheadline}
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link href={careersContent.applicationCta.ctaPrimary.href}>
              <MagneticButton>
                {careersContent.applicationCta.ctaPrimary.label}
              </MagneticButton>
            </Link>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

import { featuresContent } from "@/content/features";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import Link from "next/link";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function ClosingCtas() {
  return (
    <>
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <StaggeredReveal>
             <StaggerItem>
               <h2 className="font-heading text-4xl md:text-5xl mb-6">{featuresContent.galleryCta.title}</h2>
               <p className="text-lg text-background/70 mb-12">{featuresContent.galleryCta.description}</p>
             </StaggerItem>
             <StaggerItem>
               <Link href={featuresContent.galleryCta.cta.href}>
                 <MagneticButton className="bg-background text-foreground hover:bg-background/90">
                   {featuresContent.galleryCta.cta.label}
                 </MagneticButton>
               </Link>
             </StaggerItem>
          </StaggeredReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <StaggeredReveal>
             <StaggerItem>
               <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">{featuresContent.consultationCta.headline}</h2>
               <p className="text-lg text-muted-foreground mb-12">{featuresContent.consultationCta.subheadline}</p>
             </StaggerItem>
             <StaggerItem>
               <Link href={featuresContent.consultationCta.ctaPrimary.href}>
                 <MagneticButton>
                   {featuresContent.consultationCta.ctaPrimary.label}
                 </MagneticButton>
               </Link>
             </StaggerItem>
          </StaggeredReveal>
        </div>
      </section>
    </>
  );
}

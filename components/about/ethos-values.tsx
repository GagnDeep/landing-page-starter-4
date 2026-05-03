import { aboutContent } from "@/content/about";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import Link from "next/link";

export function EthosValues() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <StaggeredReveal className="mb-16 md:mb-24 text-center">
          <StaggerItem>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground">
               {aboutContent.ethos.title}
             </h2>
          </StaggerItem>
        </StaggeredReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
           {aboutContent.ethos.values.map((value, i) => (
             <StaggeredReveal key={value.title} delay={i * 0.1}>
               <StaggerItem className="border-t border-border pt-8 group">
                  <div className="w-12 h-[1px] bg-primary mb-8 group-hover:w-24 transition-all duration-500" />
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                     {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                     {value.description}
                  </p>
               </StaggerItem>
             </StaggeredReveal>
           ))}
        </div>

        <StaggeredReveal className="text-center max-w-2xl mx-auto bg-muted/30 p-12 rounded-3xl border border-border">
           <StaggerItem>
             <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
               {aboutContent.cta.headline}
             </h2>
           </StaggerItem>
           <StaggerItem>
              <Link href={aboutContent.cta.ctaPrimary.href}>
                 <MagneticButton>
                    {aboutContent.cta.ctaPrimary.label}
                 </MagneticButton>
              </Link>
           </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

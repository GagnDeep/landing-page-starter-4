import { aboutContent } from "@/content/about";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function DoctorJourney() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <StaggeredReveal className="mb-16 md:mb-24 text-center">
           <StaggerItem>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                {aboutContent.journey.title}
             </h2>
           </StaggerItem>
        </StaggeredReveal>

        <div className="space-y-12">
           {aboutContent.journey.timeline.map((item, index) => (
             <StaggeredReveal key={item.year} delay={index * 0.15}>
               <StaggerItem className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start border-t border-border pt-8 group">
                  <div className="font-heading text-3xl md:text-4xl text-muted-foreground/30 font-light group-hover:text-primary transition-colors duration-500">
                    {item.year}
                  </div>
                  <div className="md:col-span-3">
                     <h3 className="text-xl font-medium text-foreground mb-3">
                       {item.title}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed">
                       {item.description}
                     </p>
                  </div>
               </StaggerItem>
             </StaggeredReveal>
           ))}
        </div>
      </div>
    </section>
  );
}

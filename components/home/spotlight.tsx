import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { SmoothMaskReveal } from "@/components/visuals/smooth-mask-reveal";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function Spotlight() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StaggeredReveal>
            <StaggerItem>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                {homeContent.spotlight.title}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {homeContent.spotlight.description}
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4">
                 {homeContent.spotlight.features.map((feature, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-[1px] bg-primary" />
                      <span className="text-sm tracking-widest uppercase font-medium">{feature}</span>
                   </div>
                 ))}
              </div>
            </StaggerItem>
          </StaggeredReveal>

          <StaggeredReveal delay={0.2}>
            <StaggerItem>
              <SmoothMaskReveal
                beforeImage={images.people.patient1} // Placeholder for a "before" image
                afterImage={images.people.patient2}  // Placeholder for an "after" image
                alt="Smile Transformation"
                className="shadow-2xl"
              />
            </StaggerItem>
          </StaggeredReveal>
        </div>
      </div>
    </section>
  );
}

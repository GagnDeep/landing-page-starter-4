import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { homeContent } from "@/content/home";

export function ClinicalPrecision() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {homeContent.clinicalPrecision.techList.map((tech) => (
            <StaggerItem key={tech.title} className="flex flex-col gap-4 border-l border-background/20 pl-6">
              <h3 className="font-heading text-2xl font-medium">{tech.title}</h3>
              <p className="text-background/70 text-sm font-light leading-relaxed">{tech.description}</p>
            </StaggerItem>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  );
}

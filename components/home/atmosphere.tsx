import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import { ParallaxImageWrapper } from "@/components/visuals";

export function SalonAtmosphere() {
  const content = homeContent.sections.salonExperience;

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParallaxImageWrapper image={imageRegistry.salonInterior} />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex items-center justify-center min-h-[50vh]">
        <div className="max-w-3xl text-center bg-card/90 backdrop-blur-md p-10 md:p-16 rounded-2xl shadow-xl border border-border/50">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">{content.headline}</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {content.body}
          </p>
        </div>
      </div>
    </section>
  );
}

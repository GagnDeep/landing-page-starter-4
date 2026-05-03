import { aboutContent } from "@/content/about";
import { CinematicParallax } from "@/components/visuals/cinematic-parallax";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { images } from "@/lib/images";

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <CinematicParallax src={images.hero.secondary} alt="About Dr. Sethi" overlay={true} />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
        <StaggeredReveal>
          <StaggerItem>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-8">
              {aboutContent.hero.headline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              {aboutContent.hero.subheadline}
            </p>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

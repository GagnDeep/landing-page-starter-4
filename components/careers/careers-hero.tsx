import { careersContent } from "@/content/careers";
import { CinematicParallax } from "@/components/visuals/cinematic-parallax";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { images } from "@/lib/images";

export function CareersHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CinematicParallax src={images.clinic.interior} alt="Clinic Environment" overlay={true} />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl pt-24">
        <StaggeredReveal>
          <StaggerItem>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-8">
              {careersContent.hero.headline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
              {careersContent.hero.subheadline}
            </p>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

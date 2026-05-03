import Link from "next/link";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { CinematicParallax } from "@/components/visuals/cinematic-parallax";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CinematicParallax src={images.hero.main} alt="Luxury Dental Clinic" overlay={true} />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <StaggeredReveal className="max-w-4xl">
          <StaggerItem>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-6">
              {homeContent.hero.headline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              {homeContent.hero.subheadline}
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={homeContent.hero.ctaPrimary.href}>
              <MagneticButton strength={30} className="bg-white text-black hover:bg-white/90">
                {homeContent.hero.ctaPrimary.label}
              </MagneticButton>
            </Link>
            <Link
              href={homeContent.hero.ctaSecondary.href}
              className="text-white text-sm tracking-wide font-medium border-b border-white/30 hover:border-white transition-colors pb-1"
            >
              {homeContent.hero.ctaSecondary.label}
            </Link>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

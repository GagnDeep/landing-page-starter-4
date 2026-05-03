import { CinematicParallax } from "@/components/visuals/cinematic-parallax";
import { images } from "@/lib/images";
import { homeContent } from "@/content/home";

export function ClinicExperience() {
  return (
    <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
      <CinematicParallax src={images.clinic.interior} alt="Clinic Interior" overlay={true} />
      <div className="absolute inset-0 z-10 flex items-end p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
        <div className="container mx-auto">
          <p className="text-white font-heading text-3xl md:text-5xl max-w-2xl font-medium tracking-tight">
            {homeContent.clinicExperience.title}
          </p>
          <p className="text-white/80 mt-4 text-sm uppercase tracking-widest font-medium">
            {homeContent.clinicExperience.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

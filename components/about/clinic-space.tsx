import { aboutContent } from "@/content/about";
import { CinematicParallax } from "@/components/visuals/cinematic-parallax";
import { images } from "@/lib/images";

export function ClinicSpace() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
           <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              {aboutContent.clinicSpace.title}
           </h2>
           <p className="text-lg text-muted-foreground">
              {aboutContent.clinicSpace.description}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
           <div className="md:col-span-8 rounded-2xl overflow-hidden relative">
              <CinematicParallax src={images.clinic.waitingRoom} alt="Waiting Room" overlay={false} className="w-full h-full" />
           </div>
           <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-2xl overflow-hidden relative">
                 <CinematicParallax src={images.clinic.equipment} alt="Equipment" overlay={false} className="w-full h-full" />
              </div>
              <div className="rounded-2xl overflow-hidden relative">
                 <CinematicParallax src={images.abstract.textureLight} alt="Texture" overlay={false} className="w-full h-full" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

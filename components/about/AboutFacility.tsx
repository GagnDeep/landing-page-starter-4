import { aboutContent } from "@/content/about";
import { FadeIn } from "@/components/visuals/FadeIn";
import { images } from "@/lib/images";
import Image from "next/image";

export function AboutFacility() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 flex flex-col space-y-6">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {aboutContent.facility.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutContent.facility.description}
              </p>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <FadeIn delay={0.2} direction="up" className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image src={images.about.clinicLounge.src} alt={images.about.clinicLounge.alt} fill className="object-cover" />
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className="relative h-64 rounded-xl overflow-hidden shadow-md mt-8">
              <Image src={images.about.sterilizationRoom.src} alt={images.about.sterilizationRoom.alt} fill className="object-cover" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

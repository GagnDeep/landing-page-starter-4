import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import { images } from "@/lib/images";
import Image from "next/image";
import { Play } from "lucide-react";

export function VirtualTourTeaser() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group flex items-center justify-center">
          <Image
            src={images.about.clinicLounge.src}
            alt={images.about.clinicLounge.alt}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />

          <div className="relative z-10 text-center max-w-2xl px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                {homeContent.virtualTour.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-white/90 mb-10">
                {homeContent.virtualTour.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <button className="inline-flex h-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2">
                <Play className="mr-3 h-5 w-5 fill-current" />
                {homeContent.virtualTour.buttonText}
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

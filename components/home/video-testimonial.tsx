import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { Play } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";
import { homeContent } from "@/content/home";

export function VideoTestimonial() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <StaggeredReveal>
          <StaggerItem>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-16">
                {homeContent.videoTestimonial.title}
             </h2>
          </StaggerItem>
          <StaggerItem>
             <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                <Image src={images.hero.secondary} alt="Patient Documentary" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                   </div>
                </div>
             </div>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}

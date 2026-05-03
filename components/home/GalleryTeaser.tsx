import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GalleryTeaser() {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {homeContent.galleryTeaser.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              {homeContent.galleryTeaser.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/features" className="group inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              {homeContent.galleryTeaser.linkText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeIn delay={0.3} className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
            <Image src={images.services.cosmetic.src} alt="Before and After Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </FadeIn>
          <FadeIn delay={0.4} className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
            <Image src={images.services.implants.src} alt="Implant Success Story" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </FadeIn>
          <FadeIn delay={0.5} className="relative h-64 md:h-80 rounded-xl overflow-hidden group hidden sm:block lg:block sm:col-span-2 lg:col-span-1">
            <Image src={images.hero.smilingPatient.src} alt="Smiling Patient" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

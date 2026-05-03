import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32">
      <AnimatedGradientMesh />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col space-y-8 max-w-2xl">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              <RevealText delay={0.1}>Precision Care.</RevealText>
              <br />
              <RevealText delay={0.3} className="text-primary">Complete Reassurance.</RevealText>
            </h1>

            <FadeIn delay={0.5} duration={0.8}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {homeContent.hero.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.7} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {homeContent.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {homeContent.hero.secondaryCta}
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="relative hidden lg:block h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images.hero.clinicInterior.src}
              alt={images.hero.clinicInterior.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

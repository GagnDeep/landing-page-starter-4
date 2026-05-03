import { homeContent } from "@/content/home";
import { AnimatedGradientMesh } from "@/components/visuals";
import { StaggeredTextReveal } from "@/components/visuals";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { imageRegistry } from "@/lib/images";
import Image from "next/image";

export function HeroSection() {
  const content = homeContent.sections.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <AnimatedGradientMesh />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 max-w-2xl z-10">
          <StaggeredTextReveal
            elementType="h1"
            text={content.headline || "Elevate Your Everyday Elegance."}
            className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1]"
          />
          <p className="text-xl text-muted-foreground leading-relaxed">
            {content.subheading}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button size="lg" asChild className="rounded-full px-8 h-14 text-base">
              <Link href={content.ctaPrimary?.href || "/contact"}>{content.ctaPrimary?.label || "Book Now"}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-14 text-base">
              <Link href={content.ctaSecondary?.href || "/features"}>{content.ctaSecondary?.label || "Explore Services"}</Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 hidden md:block">
          <Image
            src={imageRegistry.heroMain.src}
            alt={imageRegistry.heroMain.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle overlay to ensure image doesn't clash with luxury vibe */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const content = homeContent.sections.trustBar;

  return (
    <div className="border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {[content.highlight1, content.highlight2, content.highlight3].map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-medium tracking-wide uppercase text-sm text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BrandEthos() {
  const content = homeContent.sections.brandEthos;

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-medium mb-8 text-primary">
          {content.headline}
        </h2>
        <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-light">
          {content.body}
        </p>
      </div>
    </section>
  );
}

import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh, FloatingBlobs, DotMatrixGrid, CTAGlow } from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. Features Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12 bg-muted/10 border-b border-border">
        <AnimatedGradientMesh className="z-0 opacity-30" />
        <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-foreground">
              {featuresContent.hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {featuresContent.hero.subheading}
            </p>
          </div>
          <div className="hidden lg:block relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
             <Image src={siteImages.hero.salonInterior.src} alt={siteImages.hero.salonInterior.alt} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 04. The Boho Philosophy */}
      <section className="py-24 md:py-32 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">{featuresContent.philosophy.heading}</h2>
        <p className="font-heading text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center">
          {featuresContent.philosophy.text}
        </p>
      </section>

      {/* 05 - 07. Features List */}
      <section className="py-24 px-6 bg-accent/5 relative overflow-hidden">
        <DotMatrixGrid className="opacity-10" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {featuresContent.features.map((feature, idx) => (
                <div key={idx} className="space-y-6">
                    <div className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center text-primary font-heading text-xl">
                        0{idx + 1}
                    </div>
                    <h3 className="text-xl font-semibold tracking-wide">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 08. The Ambience Gallery (Simulated via image grid) */}
      <section className="py-24 max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-lg">
                <Image src={siteImages.features.hygiene.src} alt={siteImages.features.hygiene.alt} fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg md:-mt-24">
                <Image src={siteImages.features.products.src} alt={siteImages.features.products.alt} fill className="object-cover" />
            </div>
        </div>
      </section>

      {/* 09. Technology & Tools */}
      <section className="py-24 px-6 border-y border-border">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="font-heading text-4xl md:text-5xl">{featuresContent.technology.heading}</h2>
            </div>
            <ul className="space-y-12">
                {featuresContent.technology.items.map((item, idx) => (
                    <li key={idx} className="border-b border-border/50 pb-8 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold tracking-wide mb-2">{item.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* 11. Sustainability Efforts & 15. Hygiene Guarantee */}
      <section className="py-24 md:py-32 px-6 bg-foreground text-background relative overflow-hidden">
        <FloatingBlobs colors={["rgba(255,255,255,0.05)", "rgba(255,255,255,0)", "rgba(255,255,255,0.05)"]} />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
                <h2 className="font-heading text-3xl md:text-4xl text-primary">{featuresContent.sustainability.heading}</h2>
                <p className="text-lg opacity-80 leading-relaxed max-w-md">{featuresContent.sustainability.text}</p>
            </div>
            <div className="space-y-8 bg-background/5 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm border border-background/10">
                <h2 className="font-heading text-3xl md:text-4xl">{featuresContent.hygieneGuarantee.heading}</h2>
                <ul className="space-y-4">
                    {featuresContent.hygieneGuarantee.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <span className="text-primary mt-1">✓</span>
                            <span className="opacity-90">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="py-24 md:py-40 px-6 text-center bg-accent/10">
        <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl text-primary">{featuresContent.cta.heading}</h2>
            <CTAGlow className="inline-block">
                <Button size="lg" className="rounded-full px-12 tracking-widest uppercase text-sm" asChild>
                    <Link href={featuresContent.cta.cta.href}>{featuresContent.cta.cta.label}</Link>
                </Button>
            </CTAGlow>
        </div>
      </section>
    </div>
  );
}

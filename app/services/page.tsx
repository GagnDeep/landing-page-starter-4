import { servicesContent } from "@/content/services";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh, FloatingBlobs, DotMatrixGrid, CTAGlow } from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: servicesContent.seo.title,
  description: servicesContent.seo.description,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. Services Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12 text-center bg-muted/20">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="font-heading text-5xl md:text-7xl leading-tight tracking-tight">
            {servicesContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            {servicesContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 04. Menu Navigation (Sticky) */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <ul className="flex items-center justify-center gap-8 py-4 overflow-x-auto text-sm tracking-widest uppercase font-medium">
          <li><a href="#nails" className="hover:text-primary transition-colors">{servicesContent.navigation.nails}</a></li>
          <li><a href="#hair" className="hover:text-primary transition-colors">{servicesContent.navigation.hair}</a></li>
          <li><a href="#skin" className="hover:text-primary transition-colors">{servicesContent.navigation.skin}</a></li>
        </ul>
      </nav>

      {/* 05 - 07. Category 1: Nail Artistry */}
      <section id="nails" className="py-24 px-6 max-w-5xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl border-b border-border pb-4 inline-block">{servicesContent.nails.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ul className="space-y-12">
            {servicesContent.nails.items.map((item, idx) => (
              <li key={idx} className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-medium tracking-wide">{item.name}</h3>
                  <span className="text-primary font-medium">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="bg-card border rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
             <FloatingBlobs colors={["var(--color-primary)", "transparent", "transparent"]} className="opacity-20" />
             <div className="relative z-10">
                <h4 className="font-heading text-2xl mb-4 text-primary">{servicesContent.nails.highlight.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{servicesContent.nails.highlight.text}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 08 - 10. Category 2: Hair Expertise */}
      <section id="hair" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-border">
        <div className="mb-16 text-right">
          <h2 className="font-heading text-4xl md:text-5xl border-b border-border pb-4 inline-block">{servicesContent.hair.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           <div className="order-2 md:order-1 relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
             <Image src={siteImages.services.hair.src} alt={siteImages.services.hair.alt} fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                 <div>
                    <h4 className="font-heading text-2xl mb-2 text-foreground">{servicesContent.hair.highlight.title}</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">{servicesContent.hair.highlight.text}</p>
                 </div>
             </div>
          </div>
          <ul className="space-y-12 order-1 md:order-2">
            {servicesContent.hair.items.map((item, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-medium tracking-wide">{item.name}</h3>
                  <span className="text-primary font-medium">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 - 12. Category 3: Skin & Grooming */}
      <section id="skin" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-border">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl border-b border-border pb-4 inline-block">{servicesContent.skin.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ul className="space-y-12">
            {servicesContent.skin.items.map((item, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-medium tracking-wide">{item.name}</h3>
                  <span className="text-primary font-medium">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 - 14. Bridal Packages */}
      <section className="py-32 px-6 bg-accent/10 relative overflow-hidden">
        <DotMatrixGrid className="opacity-20" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="font-heading text-4xl md:text-6xl text-primary">{servicesContent.bridal.heading}</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {servicesContent.bridal.description}
            </p>
            <Button variant="outline" size="lg" className="rounded-full mt-8 tracking-widest uppercase text-xs" asChild>
                <Link href={servicesContent.bridal.cta.href}>{servicesContent.bridal.cta.label}</Link>
            </Button>
        </div>
      </section>

      {/* 15. The Consultation Process */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
         <h2 className="font-heading text-4xl text-center mb-16">{servicesContent.process.heading}</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesContent.process.steps.map((step, idx) => (
                <div key={idx} className="text-center space-y-4">
                    <h3 className="font-semibold tracking-wider uppercase text-sm text-primary">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
            ))}
         </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="py-24 md:py-32 px-6 bg-foreground text-background text-center">
        <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl">{servicesContent.cta.heading}</h2>
            <CTAGlow className="inline-block">
                <Button size="lg" variant="secondary" className="rounded-full px-12" asChild>
                    <Link href={servicesContent.cta.href}>{servicesContent.cta.buttonLabel}</Link>
                </Button>
            </CTAGlow>
        </div>
      </section>
    </div>
  );
}

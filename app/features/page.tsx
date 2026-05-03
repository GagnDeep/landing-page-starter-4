import Link from "next/link";
import { CheckCircle2, ChevronRight, Stethoscope, Baby, ShieldCheck, Sparkles, Star } from "lucide-react";

import { featuresContent } from "@/content/features";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedHeroAurora,
  AnimatedTeethDiagram,
  AnimatedRCTProcess,
  CTAGlow,
} from "@/components/visuals";

export const metadata = featuresContent.metadata;

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-muted/20">
        <AnimatedHeroAurora className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
              {featuresContent.hero.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              {featuresContent.hero.subheadline}
            </p>
            <CTAGlow>
              <Button size="lg" className="rounded-full text-base px-8" asChild>
                <Link href={featuresContent.hero.primaryCta.href}>
                  {featuresContent.hero.primaryCta.label}
                </Link>
              </Button>
            </CTAGlow>
          </div>
        </AnimatedHeroAurora>
      </section>

      {/* 2. Categorized Service Overview (Navigation Aid) */}
      <section className="py-8 border-y bg-background sticky top-[72px] sm:top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 sm:pb-0 gap-4 snap-x snap-mandatory hide-scrollbar">
            {featuresContent.categories.map((category) => (
              <Button
                key={category.id}
                variant="secondary"
                className="rounded-full shrink-0 snap-start"
                asChild
              >
                <a href={`#${category.id}`}>{category.title}</a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category 1: General & Preventive Care */}
      <section id="general" className="py-24 scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 shrink-0 sticky top-48">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">{featuresContent.categories[0].title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {featuresContent.categories[0].intro}
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {featuresContent.categories[0].services.map((service, idx) => (
                <Card key={idx} className="bg-muted/10 border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Category 2: Pediatric Dentistry */}
      <section id="pediatric" className="py-24 bg-primary/5 scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
             <div className="md:w-1/3 shrink-0 sticky top-48">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-md">
                <Baby className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="mb-4 text-primary border-primary">Specialty</Badge>
              <h2 className="text-3xl font-heading font-bold mb-4">{featuresContent.categories[1].title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {featuresContent.categories[1].intro}
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {featuresContent.categories[1].services.map((service, idx) => (
                <Card key={idx} className="bg-background border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Category 3: Restorative & Painless Root Canals */}
      <section id="restorative" className="py-24 scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{featuresContent.categories[2].title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {featuresContent.categories[2].intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 p-8 lg:p-12 rounded-3xl bg-muted/30 border">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90">Pain-Free Protocol</Badge>
              <h3 className="text-2xl font-heading font-bold mb-6">The Modern Root Canal Experience</h3>
              <AnimatedRCTProcess />
            </div>
            <div className="relative aspect-square lg:aspect-auto h-full rounded-2xl bg-background border shadow-sm overflow-hidden flex items-center justify-center min-h-[400px]">
               <AnimatedTeethDiagram activeSection="root" className="w-full h-full max-h-[300px]" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
              {featuresContent.categories[2].services.map((service, idx) => (
                <Card key={idx} className="bg-background border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* 6. Category 4: Cosmetic Dentistry */}
      <section id="cosmetic" className="py-24 bg-muted/20 scroll-mt-32 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="md:w-1/3 shrink-0 sticky top-48">
              <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-sm border">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">{featuresContent.categories[3].title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {featuresContent.categories[3].intro}
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {featuresContent.categories[3].services.map((service, idx) => (
                <Card key={idx} className="bg-background border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technology & Comfort Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {featuresContent.technology.headline}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
             {featuresContent.technology.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-heading font-semibold mb-3">{item.name}</h3>
                   <p className="text-muted-foreground">{item.description}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. Patient Testimonial (Service Focused) */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden text-center">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
            <div className="flex justify-center gap-1 text-accent mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium leading-relaxed italic mb-8">
               "{featuresContent.serviceTestimonial.quote}"
            </blockquote>
            <div className="text-lg font-semibold text-primary-foreground/90 uppercase tracking-widest">
               — {featuresContent.serviceTestimonial.author}
            </div>
         </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-24 bg-muted/30 text-center">
        <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {featuresContent.finalCta.headline}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {featuresContent.finalCta.subheadline}
          </p>
          <CTAGlow>
            <Button size="lg" className="rounded-full text-lg px-8 h-14" asChild>
              <Link href={featuresContent.finalCta.cta.href}>
                {featuresContent.finalCta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>

    </div>
  );
}

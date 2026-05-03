import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, HeartPulse } from "lucide-react";

// Visual Components
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { TypewriterText } from "@/components/visuals/TypewriterText";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { AnimatedStatCounter } from "@/components/visuals/AnimatedStatCounter";
import { AvatarStack } from "@/components/visuals/AvatarStack";
import { SectionDivider } from "@/components/visuals/SectionDivider";
import { AnimatedDentalIconSet } from "@/components/visuals/AnimatedDentalIconSet";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">

      {/* 3. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
        <AnimatedGradientMesh className="absolute inset-0 -z-20" />
        <FloatingBlobs blobCount={4} className="opacity-70 dark:opacity-40" />

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20 backdrop-blur-md animate-fade-in">
            <HeartPulse className="w-4 h-4" />
            <span className="text-sm font-medium">{homeContent.hero.badge}</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground max-w-4xl tracking-tight mb-6">
            {homeContent.hero.heading}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            {homeContent.hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full">
              {homeContent.hero.primaryCta}
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary text-primary hover:bg-primary/10">
              {homeContent.hero.secondaryCta}
            </Button>
          </div>
        </div>

        {/* Bottom divider blending into next section */}
        <div className="absolute bottom-0 left-0 w-full translate-y-[1px]">
          <SectionDivider type="wave" color="var(--background)" />
        </div>
      </section>

      {/* 4. Trust & Credentials Bar */}
      <section className="bg-background py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-80">
            <div className="flex items-center gap-3">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-medium text-lg">{homeContent.trustBar.rating}</span>
            </div>
            <div className="w-px h-8 bg-border hidden md:block"></div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span className="font-medium text-lg">{homeContent.trustBar.experience}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Introduction */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imageRegistry.about.clinicInterior.src}
                alt={imageRegistry.about.clinicInterior.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                {homeContent.introduction.heading}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {homeContent.introduction.paragraph}
              </p>
              <div className="mt-4 font-serif text-3xl text-primary italic">
                - {homeContent.introduction.signature}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service Spotlight Grid */}
      <section className="py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{homeContent.servicesSummary.heading}</h2>
            <AnimatedDentalIconSet className="justify-center" activeIconIndex={0} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeContent.servicesSummary.cards.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-background">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link href="/services" className="inline-flex items-center text-primary font-medium hover:underline">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-full">
              {homeContent.servicesSummary.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Emergency Care Spotlight */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <FloatingBlobs blobCount={2} className="opacity-30 mix-blend-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
            <TypewriterText text={homeContent.emergencySpotlight.heading} speed={70} />
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            {homeContent.emergencySpotlight.description}
          </p>
          <Button variant="secondary" size="lg" className="h-16 px-10 text-xl rounded-full shadow-glow animate-pulse text-secondary-foreground font-bold">
            {homeContent.emergencySpotlight.cta}
          </Button>
        </div>
      </section>

      {/* 8. The Patient Experience (Features) & Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16">{homeContent.features.heading}</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {homeContent.features.items.map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-4">
                  <AnimatedStatCounter endValue={i+1} duration={1000} className="text-2xl" />
                </div>
                <h3 className="font-heading text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-8">{homeContent.testimonials.heading}</h2>
          <div className="flex justify-center mb-12">
             <AvatarStack avatars={imageRegistry.avatars} limit={4} />
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {homeContent.testimonials.reviews.map((review, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardHeader>
                  <div className="flex text-accent mb-2">
                    {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                  </div>
                  <CardDescription className="text-lg text-foreground italic">&quot;{review.quote}&quot;</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">{homeContent.faqBrief.heading}</h2>
          <Accordion type="single" collapsible className="w-full">
            {homeContent.faqBrief.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 18. Final CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{homeContent.finalCta.heading}</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">{homeContent.finalCta.subheading}</p>
          <Button size="lg" className="h-14 px-10 text-lg rounded-full">
            {homeContent.finalCta.primaryCta}
          </Button>
        </div>
      </section>

    </div>
  );
}

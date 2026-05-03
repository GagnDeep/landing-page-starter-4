import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Play, Star, MapPin, Phone, Clock } from "lucide-react";

import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  AnimatedHeroAurora,
  LogoMarquee,
  AnimatedTeethDiagram,
  AnimatedRCTProcess,
  AnimatedStatCounter,
  AvatarStack,
  CTAGlow,
  FloatingBlobs,
} from "@/components/visuals";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 3. Hero Section */}
      <section className="relative overflow-hidden">
        <AnimatedHeroAurora className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 max-w-2xl">
                <Badge variant="secondary" className="w-fit text-sm">
                  Top Rated Clinic in Chandigarh
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1]">
                  {homeContent.hero.headline}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {homeContent.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <CTAGlow>
                    <Button size="lg" className="w-full sm:w-auto rounded-full text-base" asChild>
                      <Link href={homeContent.hero.primaryCta.href}>
                        {homeContent.hero.primaryCta.label}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CTAGlow>
                  {homeContent.hero.secondaryCta && (
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base" asChild>
                      <Link href={homeContent.hero.secondaryCta.href}>
                        {homeContent.hero.secondaryCta.label}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border">
                <Image
                  src={siteImages.heroBackground.src}
                  alt={siteImages.heroBackground.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </AnimatedHeroAurora>
      </section>

      {/* 4. Trust/Social Proof Bar */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeContent.trustBar.stats.map((stat, idx) => (
              <AnimatedStatCounter
                key={idx}
                value={parseFloat(stat.value)}
                suffix={stat.value.includes("+") ? "+" : ""}
                label={stat.label}
              />
            ))}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex gap-1 text-primary mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                Google Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Introduction / Problem-Solution */}
      <section className="py-24 relative overflow-hidden">
        <FloatingBlobs />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {homeContent.introduction.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {homeContent.introduction.body}
          </p>
        </div>
      </section>

      {/* 6. Core Services Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {homeContent.servicesOverview.sectionTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.servicesOverview.services.map((service, idx) => (
              <Card key={idx} className="bg-background border-border shadow-sm hover:shadow-md transition-shadow group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {/* Fallback basic icon mapping based on string type */}
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={service.href} className="text-primary font-medium flex items-center hover:underline">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Spotlight: Pediatric Dentistry */}
      <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={siteImages.happyChildDentist.src}
                alt={siteImages.happyChildDentist.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <Badge variant="outline" className="w-fit text-primary border-primary">Specialty Focus</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                {homeContent.spotlightPediatric.headline}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {homeContent.spotlightPediatric.body}
              </p>
              <Button size="lg" className="w-fit mt-4 rounded-full" asChild>
                <Link href={homeContent.spotlightPediatric.cta.href}>
                  {homeContent.spotlightPediatric.cta.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Spotlight: Painless Root Canals */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="w-fit text-primary border-primary">Advanced Endodontics</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                {homeContent.spotlightRootCanal.headline}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {homeContent.spotlightRootCanal.body}
              </p>
              <AnimatedRCTProcess className="mt-8" />
              <Button size="lg" className="w-fit mt-4 rounded-full" asChild>
                <Link href={homeContent.spotlightRootCanal.cta.href}>
                  {homeContent.spotlightRootCanal.cta.label}
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-background border shadow-sm flex items-center justify-center p-8">
               <AnimatedTeethDiagram activeSection="root" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. The Clinic Experience (Video/Tour Placeholder) */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer border shadow-lg">
             <Image
                src={siteImages.clinicInterior1.src}
                alt={siteImages.clinicInterior1.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
                <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 10. Why Choose Us (Features) */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              {homeContent.whyChooseUs.sectionTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {homeContent.whyChooseUs.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Meet the Founder */}
      <section className="py-24 overflow-hidden relative">
        <FloatingBlobs colors={["var(--secondary)", "var(--primary)"]} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-background rounded-3xl border shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-2 relative aspect-square lg:aspect-auto bg-muted">
                <Image
                  src={siteImages.founderPortrait.src}
                  alt={siteImages.founderPortrait.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="lg:col-span-3 p-8 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  {homeContent.founder.headline}
                </h2>
                <div className="text-primary font-medium text-lg mb-6">{homeContent.founder.role}</div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {homeContent.founder.bio}
                </p>
                <Button variant="outline" className="w-fit rounded-full" asChild>
                  <Link href={homeContent.founder.cta.href}>{homeContent.founder.cta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Patient Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-secondary-foreground">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Stories of Perfect Smiles
              </h2>
              <p className="text-lg opacity-80">
                Don't just take our word for it. Hear from the families who trust us with their care.
              </p>
            </div>
            <AvatarStack
              avatars={[
                siteImages.avatar1,
                siteImages.avatar2,
                siteImages.avatar3,
                siteImages.avatar4,
              ]}
              limit={4}
              className="hidden md:flex"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {homeContent.testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-background border-none shadow-md">
                <CardHeader>
                  <div className="flex gap-1 text-accent mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold">{testimonial.author}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 14. How It Works (Patient Journey) */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              {homeContent.howItWorks.sectionTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeContent.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative">
                {idx !== homeContent.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold font-heading mb-6 relative z-10 shadow-lg">
                  {step.stepNumber}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Insurance & Financing Options */}
      <section className="py-16 bg-muted/50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {homeContent.insuranceBlock.headline}
              </h2>
              <p className="text-muted-foreground">
                {homeContent.insuranceBlock.body}
              </p>
            </div>
            <Button size="lg" variant="outline" className="rounded-full shrink-0" asChild>
              <Link href={homeContent.insuranceBlock.cta.href}>
                {homeContent.insuranceBlock.cta.label}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 16. FAQ Snippets */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Common Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {homeContent.faqSnippets.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 18. Final Call to Action & 19. Location Quick-View (Combined) */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Soft abstract background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
                {homeContent.finalCta.headline}
              </h2>
              <p className="text-xl text-primary-foreground/80">
                {homeContent.finalCta.subheadline}
              </p>
              <Button size="lg" variant="secondary" className="w-fit mt-4 rounded-full text-lg h-14 px-8" asChild>
                <Link href={homeContent.finalCta.cta.href}>
                  {homeContent.finalCta.cta.label}
                </Link>
              </Button>
            </div>

            <Card className="bg-background text-foreground border-none shadow-2xl p-6 md:p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Find Us</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Clinic Address</div>
                    <div className="text-muted-foreground">{homeContent.footer.contactInfo.address}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-muted-foreground">{homeContent.footer.contactInfo.phone}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Operating Hours</div>
                    <div className="text-muted-foreground whitespace-pre-line">{homeContent.footer.contactInfo.hours.replace(" | ", "\n")}</div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Logos Marquee placed at bottom before footer to show network trust */}
      <LogoMarquee
        logos={[
           <span className="font-heading text-2xl font-bold">ADA</span>,
           <span className="font-heading text-xl font-bold">Invisalign Provider</span>,
           <span className="font-heading text-xl font-bold">CareCredit</span>,
           <span className="font-heading text-xl font-bold">Chandigarh Dental</span>,
           <span className="font-heading text-xl font-bold">Indian Dental Assoc.</span>,
        ]}
      />
    </div>
  );
}

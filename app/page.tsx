import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatedHeroIllustration,
  AnimatedGradientMesh,
  LogoMarquee,
  DotMatrixGrid,
  FloatingBlobs,
  CTAGlow,
} from "@/components/visuals"; // Assuming an index.ts or we import directly

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. Hero Section (Immersive) */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12">
        <AnimatedGradientMesh className="z-0" />
        <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
              {homeContent.hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {homeContent.hero.subheading}
            </p>
            <CTAGlow>
              <Button size="lg" className="rounded-full px-8 text-sm tracking-widest uppercase font-medium" asChild>
                <Link href={homeContent.hero.cta.href}>{homeContent.hero.cta.label}</Link>
              </Button>
            </CTAGlow>
          </div>
          <div className="hidden lg:block w-full">
            <AnimatedHeroIllustration
              imageSrc={siteImages.hero.salonInterior.src}
              imageAltText={siteImages.hero.salonInterior.alt}
            />
          </div>
        </div>
      </section>

      {/* 04. Brand Ethos */}
      <section className="py-24 md:py-40 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-5xl">{homeContent.brandEthos.heading}</h2>
          <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-light">
            {homeContent.brandEthos.text}
          </p>
        </div>
      </section>

      {/* 05. Service Pillars */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
        <h2 className="font-heading text-4xl md:text-5xl text-center mb-16">{homeContent.servicesIntro.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeContent.servicesIntro.services.map((service, idx) => (
            <div key={idx} className="group relative bg-card p-10 rounded-[2rem] border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col items-center text-center">
              <DotMatrixGrid className="opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary font-heading text-2xl">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4 tracking-wide">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. Featured Artist/Stylist */}
      <section className="py-24 px-6 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
        <FloatingBlobs colors={["rgba(255,255,255,0.1)", "transparent", "rgba(0,0,0,0.1)"]} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
                src={siteImages.about.team.src}
                alt={siteImages.about.team.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl">{homeContent.featuredArtist.heading}</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              {homeContent.featuredArtist.text}
            </p>
            <Button variant="secondary" size="lg" className="rounded-full tracking-widest uppercase text-sm mt-4" asChild>
              <Link href={homeContent.featuredArtist.cta.href}>{homeContent.featuredArtist.cta.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 07. The Boho Experience Marquee */}
      <section className="py-12 border-b">
         {/* Using Logos as placeholders for the ambient moments */}
        <LogoMarquee
            logos={homeContent.marqueeLogos}
            speed={30}
        />
      </section>

      {/* 08. Signature Spotlight: Chrome Nails */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="font-heading text-4xl md:text-6xl">{homeContent.spotlightNails.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {homeContent.spotlightNails.text}
            </p>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href={homeContent.spotlightNails.cta.href}>{homeContent.spotlightNails.cta.label}</Link>
            </Button>
          </div>
          <div className="relative aspect-[3/4] rounded-t-full overflow-hidden order-1 lg:order-2 shadow-xl border p-2">
             <div className="relative w-full h-full rounded-t-full overflow-hidden bg-muted">
                <Image
                    src={siteImages.hero.nailArt.src}
                    alt={siteImages.hero.nailArt.alt}
                    fill
                    className="object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 09. Signature Spotlight: Curly Hair (Dark Mode Section) */}
      <section className="py-24 md:py-40 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-b-full overflow-hidden shadow-2xl border border-background/20 p-2">
            <div className="relative w-full h-full rounded-b-full overflow-hidden bg-muted">
                <Image
                    src={siteImages.services.hair.src}
                    alt={siteImages.services.hair.alt}
                    fill
                    className="object-cover"
                />
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl">{homeContent.spotlightHair.heading}</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              {homeContent.spotlightHair.text}
            </p>
            <Button variant="secondary" size="lg" className="rounded-full" asChild>
              <Link href={homeContent.spotlightHair.cta.href}>{homeContent.spotlightHair.cta.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Client Testimonials */}
      <section className="py-24 px-6 max-w-4xl mx-auto w-full text-center">
        <h2 className="text-xs tracking-widest uppercase text-muted-foreground mb-12">{homeContent.testimonialsHeading}</h2>
        <div className="space-y-16">
            {homeContent.testimonials.map((test, idx) => (
                <div key={idx} className="space-y-6">
                    <p className="font-heading text-2xl md:text-3xl leading-relaxed text-foreground">
                        &ldquo;{test.quote}&rdquo;
                    </p>
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-sm tracking-wider uppercase">{test.name}</span>
                        <span className="text-xs text-muted-foreground">{test.location} • {test.service}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 11. Instagram Feed / Gallery */}
      <section className="py-24 max-w-7xl mx-auto w-full px-6">
        <h2 className="font-heading text-4xl mb-12 text-center">{homeContent.galleryHeading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {/* Fallback to image registry since we don't have actual IG feed integration */}
           <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image src={siteImages.hero.nailArt.src} alt={siteImages.hero.nailArt.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
           </div>
           <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image src={siteImages.services.hair.src} alt={siteImages.services.hair.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
           </div>
           <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image src={siteImages.features.hygiene.src} alt={siteImages.features.hygiene.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
           </div>
           <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image src={siteImages.blog.post2.src} alt={siteImages.blog.post2.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
           </div>
        </div>
      </section>

      {/* 12. Mid-page CTA */}
      <section className="py-24 md:py-32 px-6 bg-accent/20 border-y">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl">{homeContent.midPageCTA.heading}</h2>
          <CTAGlow className="inline-block">
              <Button size="lg" className="rounded-full px-8 mt-4" asChild>
                <Link href={homeContent.midPageCTA.cta.href}>{homeContent.midPageCTA.cta.label}</Link>
              </Button>
          </CTAGlow>
        </div>
      </section>

      {/* 13. Location & 14. Luxury Products */}
      <section className="py-24 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16 border-b">
        <div className="space-y-8">
            <h2 className="font-heading text-3xl">{homeContent.location.heading}</h2>
            <address className="not-italic text-muted-foreground leading-relaxed">
                {homeContent.location.address}<br/><br/>
                {homeContent.location.hours}
            </address>
        </div>
        <div className="space-y-8">
            <h2 className="font-heading text-3xl">{homeContent.brandsHeading}</h2>
            <LogoMarquee
                logos={homeContent.marqueeLogos}
                speed={25}
            />
        </div>
      </section>

      {/* 15. FAQ Teaser */}
      <section className="py-24 max-w-3xl mx-auto w-full px-6">
        <div className="space-y-8">
             <h2 className="font-heading text-4xl text-center mb-12">{homeContent.faqTeaser.heading}</h2>
             <Accordion type="single" collapsible className="w-full">
                {homeContent.faqTeaser.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="text-center pt-8">
                <Link href={homeContent.faqTeaser.cta.href} className="text-sm font-medium tracking-wider text-primary hover:underline inline-block mt-4">
                    {homeContent.faqTeaser.cta.label} &rarr;
                </Link>
            </div>
        </div>
      </section>

      {/* 16. Newsletter */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl">{homeContent.newsletter.heading}</h2>
            <p className="text-muted-foreground">{homeContent.newsletter.description}</p>
            <form className="flex w-full max-w-md mx-auto items-center space-x-2 pt-4" action="/api/newsletter">
                <Input type="email" placeholder="Your email address" className="bg-background rounded-full" />
                <Button type="submit" className="rounded-full px-6">{homeContent.newsletter.buttonLabel}</Button>
            </form>
        </div>
      </section>

      {/* 17. Award/Press Recognition & 18. Pre-Footer / Final CTA */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-16">
          <div className="space-y-6">
              <h3 className="text-xs tracking-widest uppercase text-muted-foreground">{homeContent.awardsHeading}</h3>
               <LogoMarquee
                    logos={homeContent.marqueeLogos}
                    speed={50}
                />
          </div>
          <div className="space-y-8 pt-12 border-t">
               <h2 className="font-heading text-4xl md:text-5xl">{homeContent.preFooterCTA.heading}</h2>
               <Button size="lg" className="rounded-full px-12" asChild>
                   <Link href={homeContent.preFooterCTA.cta.href}>{homeContent.preFooterCTA.cta.label}</Link>
               </Button>
          </div>
      </section>
    </div>
  );
}

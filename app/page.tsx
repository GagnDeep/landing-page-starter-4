import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import {
  AnimatedHeroIllustration,
  AnimatedGradientMesh,
  LogoMarquee,
  DotMatrixGrid,
  FloatingBlobs,
  CTAGlow,
} from "@/components/visuals" // Assuming an index.ts or we import directly

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. Hero Section (Immersive) */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-24 md:px-12">
        <AnimatedGradientMesh className="z-0" />
        <div className="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex max-w-2xl flex-col items-start gap-8">
            <h1 className="font-heading text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              {homeContent.hero.heading}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              {homeContent.hero.subheading}
            </p>
            <CTAGlow>
              <Button
                size="lg"
                className="rounded-full px-8 text-sm font-medium tracking-widest uppercase"
                asChild
              >
                <Link href={homeContent.hero.cta.href}>
                  {homeContent.hero.cta.label}
                </Link>
              </Button>
            </CTAGlow>
          </div>
          <div className="hidden w-full lg:block">
            <AnimatedHeroIllustration
              imageSrc={siteImages.hero.salonInterior.src}
              imageAltText={siteImages.hero.salonInterior.alt}
            />
          </div>
        </div>
      </section>

      {/* 04. Brand Ethos */}
      <section className="bg-muted/30 px-6 py-24 md:py-40">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl">
            {homeContent.brandEthos.heading}
          </h2>
          <p className="text-lg leading-relaxed font-light text-muted-foreground md:text-2xl">
            {homeContent.brandEthos.text}
          </p>
        </div>
      </section>

      {/* 05. Service Pillars */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
        <h2 className="mb-16 text-center font-heading text-4xl md:text-5xl">
          {homeContent.servicesIntro.heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {homeContent.servicesIntro.services.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center overflow-hidden rounded-[2rem] border bg-card p-10 text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <DotMatrixGrid className="opacity-10 transition-opacity group-hover:opacity-20" />
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-heading text-2xl text-primary">
                0{idx + 1}
              </div>
              <h3 className="mb-4 text-xl font-semibold tracking-wide">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. Featured Artist/Stylist */}
      <section className="relative overflow-hidden bg-primary px-6 py-24 text-primary-foreground md:px-12">
        <FloatingBlobs
          colors={["rgba(255,255,255,0.1)", "transparent", "rgba(0,0,0,0.1)"]}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl md:aspect-[4/3]">
            <Image
              src={siteImages.about.team.src}
              alt={siteImages.about.team.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl">
              {homeContent.featuredArtist.heading}
            </h2>
            <p className="text-lg leading-relaxed opacity-90 md:text-xl">
              {homeContent.featuredArtist.text}
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="mt-4 rounded-full text-sm tracking-widest uppercase"
              asChild
            >
              <Link href={homeContent.featuredArtist.cta.href}>
                {homeContent.featuredArtist.cta.label}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 07. The Boho Experience Marquee */}
      <section className="border-b py-12">
        {/* Using Logos as placeholders for the ambient moments */}
        <LogoMarquee logos={homeContent.marqueeLogos} speed={30} />
      </section>

      {/* 08. Signature Spotlight: Chrome Nails */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:py-40">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 space-y-8 lg:order-1">
            <h2 className="font-heading text-4xl md:text-6xl">
              {homeContent.spotlightNails.heading}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {homeContent.spotlightNails.text}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href={homeContent.spotlightNails.cta.href}>
                {homeContent.spotlightNails.cta.label}
              </Link>
            </Button>
          </div>
          <div className="relative order-1 aspect-[3/4] overflow-hidden rounded-t-full border p-2 shadow-xl lg:order-2">
            <div className="relative h-full w-full overflow-hidden rounded-t-full bg-muted">
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
      <section className="bg-foreground px-6 py-24 text-background md:py-40">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-b-full border border-background/20 p-2 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-b-full bg-muted">
              <Image
                src={siteImages.services.hair.src}
                alt={siteImages.services.hair.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl">
              {homeContent.spotlightHair.heading}
            </h2>
            <p className="text-lg leading-relaxed opacity-80">
              {homeContent.spotlightHair.text}
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href={homeContent.spotlightHair.cta.href}>
                {homeContent.spotlightHair.cta.label}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Client Testimonials */}
      <section className="mx-auto w-full max-w-4xl px-6 py-24 text-center">
        <h2 className="mb-12 text-xs tracking-widest text-muted-foreground uppercase">
          {homeContent.testimonialsHeading}
        </h2>
        <div className="space-y-16">
          {homeContent.testimonials.map((test, idx) => (
            <div key={idx} className="space-y-6">
              <p className="font-heading text-2xl leading-relaxed text-foreground md:text-3xl">
                &ldquo;{test.quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-semibold tracking-wider uppercase">
                  {test.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {test.location} • {test.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Instagram Feed / Gallery */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center font-heading text-4xl">
          {homeContent.galleryHeading}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Fallback to image registry since we don't have actual IG feed integration */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={siteImages.hero.nailArt.src}
              alt={siteImages.hero.nailArt.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={siteImages.services.hair.src}
              alt={siteImages.services.hair.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={siteImages.features.hygiene.src}
              alt={siteImages.features.hygiene.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={siteImages.blog.post2.src}
              alt={siteImages.blog.post2.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 12. Mid-page CTA */}
      <section className="border-y bg-accent/20 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl">
            {homeContent.midPageCTA.heading}
          </h2>
          <CTAGlow className="inline-block">
            <Button size="lg" className="mt-4 rounded-full px-8" asChild>
              <Link href={homeContent.midPageCTA.cta.href}>
                {homeContent.midPageCTA.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>

      {/* 13. Location & 14. Luxury Products */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 border-b px-6 py-24 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-heading text-3xl">
            {homeContent.location.heading}
          </h2>
          <address className="leading-relaxed text-muted-foreground not-italic">
            {homeContent.location.address}
            <br />
            <br />
            {homeContent.location.hours}
          </address>
        </div>
        <div className="space-y-8">
          <h2 className="font-heading text-3xl">{homeContent.brandsHeading}</h2>
          <LogoMarquee logos={homeContent.marqueeLogos} speed={25} />
        </div>
      </section>

      {/* 15. FAQ Teaser */}
      <section className="mx-auto w-full max-w-3xl px-6 py-24">
        <div className="space-y-8">
          <h2 className="mb-12 text-center font-heading text-4xl">
            {homeContent.faqTeaser.heading}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {homeContent.faqTeaser.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="pt-8 text-center">
            <Link
              href={homeContent.faqTeaser.cta.href}
              className="mt-4 inline-block text-sm font-medium tracking-wider text-primary hover:underline"
            >
              {homeContent.faqTeaser.cta.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 16. Newsletter */}
      <section className="bg-muted px-6 py-24">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="font-heading text-3xl">
            {homeContent.newsletter.heading}
          </h2>
          <p className="text-muted-foreground">
            {homeContent.newsletter.description}
          </p>
          <form
            className="mx-auto flex w-full max-w-md items-center space-x-2 pt-4"
            action="/api/newsletter"
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-full bg-background"
            />
            <Button type="submit" className="rounded-full px-6">
              {homeContent.newsletter.buttonLabel}
            </Button>
          </form>
        </div>
      </section>

      {/* 17. Award/Press Recognition & 18. Pre-Footer / Final CTA */}
      <section className="mx-auto w-full max-w-7xl space-y-16 px-6 py-24 text-center md:py-32">
        <div className="space-y-6">
          <h3 className="text-xs tracking-widest text-muted-foreground uppercase">
            {homeContent.awardsHeading}
          </h3>
          <LogoMarquee logos={homeContent.marqueeLogos} speed={50} />
        </div>
        <div className="space-y-8 border-t pt-12">
          <h2 className="font-heading text-4xl md:text-5xl">
            {homeContent.preFooterCTA.heading}
          </h2>
          <Button size="lg" className="rounded-full px-12" asChild>
            <Link href={homeContent.preFooterCTA.cta.href}>
              {homeContent.preFooterCTA.cta.label}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { homeContent } from "@/content/home"
import { images } from "@/lib/images"

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh"
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration"
import { AnimatedStatCounter } from "@/components/visuals/AnimatedStatCounter"
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping"
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid"
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Header */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0" />
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-between gap-12 px-4 py-24 md:flex-row md:px-8">
          <div className="max-w-2xl flex-1 space-y-8">
            <h1 className="font-heading text-5xl leading-[1.1] font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {homeContent.hero.headline}
            </h1>
            <p className="text-xl leading-relaxed font-medium text-muted-foreground md:text-2xl">
              {homeContent.hero.subheadline}
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-none px-8 py-6 text-xs font-semibold tracking-wider uppercase"
              >
                {homeContent.hero.primaryCTA}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none px-8 py-6 text-xs font-semibold tracking-wider uppercase"
              >
                {homeContent.hero.secondaryCTA}
              </Button>
            </div>
          </div>
          <div className="hidden max-w-[500px] flex-1 md:block">
            <AnimatedHeroIllustration />
          </div>
        </div>
      </section>

      {/* 2. Brand Anthem */}
      <section className="relative overflow-hidden bg-background px-4 py-32">
        <FloatingBlobs className="opacity-50" />
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <SectionDivider type="diamond" className="mb-12" />
          <h2 className="font-heading text-4xl leading-tight text-foreground italic md:text-5xl lg:text-6xl">
            &ldquo;{homeContent.brandAnthem.quote}&rdquo;
          </h2>
          <p className="mt-8 text-sm font-semibold tracking-widest text-primary uppercase">
            {homeContent.brandAnthem.signature}
          </p>
        </div>
      </section>

      {/* 3. Services Overview (Salon) */}
      <section className="bg-secondary/50 px-4 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-12 md:flex-row">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
                {homeContent.servicesOverview.headline}
              </h2>
              <p className="text-lg text-muted-foreground">
                {homeContent.servicesOverview.subheadline}
              </p>
            </div>
            <Button
              variant="link"
              className="px-0 text-xs font-semibold tracking-widest text-primary uppercase"
            >
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
            {/* Bridal */}
            <div className="group relative">
              <div className="relative h-[600px] overflow-hidden rounded-md">
                <Image
                  src={images.services.bridalMakeup.url}
                  alt={images.services.bridalMakeup.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute right-8 bottom-8 left-8 translate-y-4 rounded-sm bg-background p-8 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="mb-2 font-heading text-2xl font-bold">
                  {homeContent.servicesOverview.services[0].title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {homeContent.servicesOverview.services[0].description}
                </p>
                <Link
                  href="/services#bridal"
                  className="text-xs font-semibold tracking-widest text-primary uppercase transition-colors hover:text-foreground"
                >
                  {homeContent.servicesOverview.services[0].linkText} &rarr;
                </Link>
              </div>
            </div>
            {/* Hair */}
            <div className="group relative md:mt-24">
              <div className="relative h-[600px] overflow-hidden rounded-md">
                <Image
                  src={images.services.hairStyling.url}
                  alt={images.services.hairStyling.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute right-8 bottom-8 left-8 translate-y-4 rounded-sm bg-background p-8 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="mb-2 font-heading text-2xl font-bold">
                  {homeContent.servicesOverview.services[1].title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {homeContent.servicesOverview.services[1].description}
                </p>
                <Link
                  href="/services#hair"
                  className="text-xs font-semibold tracking-widest text-primary uppercase transition-colors hover:text-foreground"
                >
                  {homeContent.servicesOverview.services[1].linkText} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Academy Intro (Forced Dark Mode Context manually applied for contrast) */}
      <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-32 text-white">
        <DotMatrixGrid animate={true} color="#d4af37" className="opacity-20" />
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="font-heading text-4xl font-bold text-white md:text-6xl">
                {homeContent.academyIntro.headline}
              </h2>
              <p className="text-xl font-medium text-zinc-400">
                {homeContent.academyIntro.subheadline}
              </p>

              <ul className="space-y-4 py-4">
                {homeContent.academyIntro.coursesList.map((course, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                    <span className="text-lg">{course}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="rounded-none bg-[#d4af37] px-8 py-6 text-xs font-semibold tracking-widest text-black uppercase hover:bg-[#d4af37]/90"
              >
                {homeContent.academyIntro.cta}
              </Button>
            </div>

            <div className="relative">
              <CodeWindowTyping />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ajay Sir Profile */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[800px] w-full overflow-hidden rounded-md">
              <Image
                src={images.about.founderPortrait.url}
                alt={images.about.founderPortrait.alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {homeContent.expertProfile.subheadline}
                </p>
                <h2 className="font-heading text-4xl font-bold md:text-5xl">
                  {homeContent.expertProfile.headline}
                </h2>
                <p className="pt-4 text-lg leading-relaxed text-muted-foreground">
                  {homeContent.expertProfile.bio}
                </p>
              </div>

              <SectionDivider type="line" className="py-4" />

              <div className="grid grid-cols-2 gap-8">
                <AnimatedStatCounter value={5.0} label="Star Rating" />
                <AnimatedStatCounter
                  value={1000}
                  label="Brides Styled"
                  suffix="+"
                />
                <AnimatedStatCounter
                  value={500}
                  label="Certified Students"
                  suffix="+"
                />
                <AnimatedStatCounter
                  value={10}
                  label="Years Experience"
                  suffix="+"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="bg-secondary/30 px-4 py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-16 text-center font-heading text-3xl font-bold md:text-4xl">
            {homeContent.testimonials.headline}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {homeContent.testimonials.reviews.map((review, idx) => (
              <Card
                key={idx}
                className="rounded-sm border-none bg-background shadow-sm"
              >
                <CardHeader>
                  <div className="mb-4 flex gap-1 text-primary">
                    {/* 5 Stars */}
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-1">
                  <p className="font-heading font-bold text-foreground">
                    {review.author}
                  </p>
                  <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {review.role}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Featured Work (Gallery) */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              {homeContent.featuredWork.headline}
            </h2>
            <Button
              variant="link"
              className="px-0 text-xs font-semibold tracking-widest text-primary uppercase"
            >
              {homeContent.featuredWork.cta}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2">
            {images.portfolio.gallery.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] overflow-hidden bg-muted"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="relative overflow-hidden bg-background px-4 py-32">
        <AnimatedGradientMesh
          className="absolute inset-0 z-0 opacity-50"
          speed={20}
        />
        <div className="relative z-10 container mx-auto max-w-3xl border border-border bg-background/60 p-12 text-center backdrop-blur-md md:p-20">
          <h2 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
            {homeContent.ctaBlock.headline}
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-muted-foreground">
            {homeContent.ctaBlock.subheadline}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-none px-8 py-6 text-xs font-semibold tracking-wider uppercase"
            >
              {homeContent.ctaBlock.primaryCTA}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none bg-transparent px-8 py-6 text-xs font-semibold tracking-wider uppercase"
            >
              {homeContent.ctaBlock.secondaryCTA}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

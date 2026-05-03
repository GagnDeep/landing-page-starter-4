import { servicesContent } from "@/content/services"
import { siteImages } from "@/lib/images"
import { Button } from "@/components/ui/button"
import {
  AnimatedGradientMesh,
  FloatingBlobs,
  DotMatrixGrid,
  CTAGlow,
} from "@/components/visuals"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: servicesContent.seo.title,
  description: servicesContent.seo.description,
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. Services Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-muted/20 px-6 pt-24 text-center md:px-12">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 mx-auto max-w-3xl space-y-6">
          <h1 className="font-heading text-5xl leading-tight tracking-tight md:text-7xl">
            {servicesContent.hero.heading}
          </h1>
          <p className="text-lg leading-relaxed font-light text-muted-foreground md:text-xl">
            {servicesContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 04. Menu Navigation (Sticky) */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <ul className="flex items-center justify-center gap-8 overflow-x-auto py-4 text-sm font-medium tracking-widest uppercase">
          <li>
            <a href="#nails" className="transition-colors hover:text-primary">
              {servicesContent.navigation.nails}
            </a>
          </li>
          <li>
            <a href="#hair" className="transition-colors hover:text-primary">
              {servicesContent.navigation.hair}
            </a>
          </li>
          <li>
            <a href="#skin" className="transition-colors hover:text-primary">
              {servicesContent.navigation.skin}
            </a>
          </li>
        </ul>
      </nav>

      {/* 05 - 07. Category 1: Nail Artistry */}
      <section id="nails" className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="mb-16">
          <h2 className="inline-block border-b border-border pb-4 font-heading text-4xl md:text-5xl">
            {servicesContent.nails.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <ul className="space-y-12">
            {servicesContent.nails.items.map((item, idx) => (
              <li key={idx} className="group">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-lg font-medium tracking-wide">
                    {item.name}
                  </h3>
                  <span className="font-medium text-primary">{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden rounded-[2rem] border bg-card p-8 shadow-sm">
            <FloatingBlobs
              colors={["var(--color-primary)", "transparent", "transparent"]}
              className="opacity-20"
            />
            <div className="relative z-10">
              <h4 className="mb-4 font-heading text-2xl text-primary">
                {servicesContent.nails.highlight.title}
              </h4>
              <p className="leading-relaxed text-muted-foreground">
                {servicesContent.nails.highlight.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 - 10. Category 2: Hair Expertise */}
      <section
        id="hair"
        className="mx-auto w-full max-w-5xl border-t border-border px-6 py-24"
      >
        <div className="mb-16 text-right">
          <h2 className="inline-block border-b border-border pb-4 font-heading text-4xl md:text-5xl">
            {servicesContent.hair.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl md:order-1">
            <Image
              src={siteImages.services.hair.src}
              alt={siteImages.services.hair.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-8">
              <div>
                <h4 className="mb-2 font-heading text-2xl text-foreground">
                  {servicesContent.hair.highlight.title}
                </h4>
                <p className="max-w-xs text-sm leading-relaxed text-foreground/80">
                  {servicesContent.hair.highlight.text}
                </p>
              </div>
            </div>
          </div>
          <ul className="order-1 space-y-12 md:order-2">
            {servicesContent.hair.items.map((item, idx) => (
              <li key={idx}>
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-lg font-medium tracking-wide">
                    {item.name}
                  </h3>
                  <span className="font-medium text-primary">{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 - 12. Category 3: Skin & Grooming */}
      <section
        id="skin"
        className="mx-auto w-full max-w-5xl border-t border-border px-6 py-24"
      >
        <div className="mb-16">
          <h2 className="inline-block border-b border-border pb-4 font-heading text-4xl md:text-5xl">
            {servicesContent.skin.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <ul className="space-y-12">
            {servicesContent.skin.items.map((item, idx) => (
              <li key={idx}>
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-lg font-medium tracking-wide">
                    {item.name}
                  </h3>
                  <span className="font-medium text-primary">{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 - 14. Bridal Packages */}
      <section className="relative overflow-hidden bg-accent/10 px-6 py-32">
        <DotMatrixGrid className="opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="font-heading text-4xl text-primary md:text-6xl">
            {servicesContent.bridal.heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {servicesContent.bridal.description}
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 rounded-full text-xs tracking-widest uppercase"
            asChild
          >
            <Link href={servicesContent.bridal.cta.href}>
              {servicesContent.bridal.cta.label}
            </Link>
          </Button>
        </div>
      </section>

      {/* 15. The Consultation Process */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <h2 className="mb-16 text-center font-heading text-4xl">
          {servicesContent.process.heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {servicesContent.process.steps.map((step, idx) => (
            <div key={idx} className="space-y-4 text-center">
              <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="bg-foreground px-6 py-24 text-center text-background md:py-32">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl">
            {servicesContent.cta.heading}
          </h2>
          <CTAGlow className="inline-block">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-12"
              asChild
            >
              <Link href={servicesContent.cta.href}>
                {servicesContent.cta.buttonLabel}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  )
}

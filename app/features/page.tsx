import { featuresContent } from "@/content/features"
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
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. Features Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-border bg-muted/10 px-6 pt-24 md:px-12">
        <AnimatedGradientMesh className="z-0 opacity-30" />
        <div className="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex max-w-2xl flex-col items-start gap-8">
            <h1 className="font-heading text-5xl leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {featuresContent.hero.heading}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              {featuresContent.hero.subheading}
            </p>
          </div>
          <div className="relative hidden aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl lg:block">
            <Image
              src={siteImages.hero.salonInterior.src}
              alt={siteImages.hero.salonInterior.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 04. The Boho Philosophy */}
      <section className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32">
        <h2 className="mb-8 text-center text-xs tracking-widest text-muted-foreground uppercase">
          {featuresContent.philosophy.heading}
        </h2>
        <p className="text-center font-heading text-2xl leading-relaxed md:text-3xl lg:text-4xl">
          {featuresContent.philosophy.text}
        </p>
      </section>

      {/* 05 - 07. Features List */}
      <section className="relative overflow-hidden bg-accent/5 px-6 py-24">
        <DotMatrixGrid className="opacity-10" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {featuresContent.features.map((feature, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 font-heading text-xl text-primary">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-semibold tracking-wide">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. The Ambience Gallery (Simulated via image grid) */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-lg">
            <Image
              src={siteImages.features.hygiene.src}
              alt={siteImages.features.hygiene.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg md:-mt-24">
            <Image
              src={siteImages.features.products.src}
              alt={siteImages.features.products.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 09. Technology & Tools */}
      <section className="border-y border-border px-6 py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl">
              {featuresContent.technology.heading}
            </h2>
          </div>
          <ul className="space-y-12">
            {featuresContent.technology.items.map((item, idx) => (
              <li
                key={idx}
                className="border-b border-border/50 pb-8 last:border-0 last:pb-0"
              >
                <h3 className="mb-2 text-lg font-semibold tracking-wide">
                  {item.name}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Sustainability Efforts & 15. Hygiene Guarantee */}
      <section className="relative overflow-hidden bg-foreground px-6 py-24 text-background md:py-32">
        <FloatingBlobs
          colors={[
            "rgba(255,255,255,0.05)",
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.05)",
          ]}
        />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl text-primary md:text-4xl">
              {featuresContent.sustainability.heading}
            </h2>
            <p className="max-w-md text-lg leading-relaxed opacity-80">
              {featuresContent.sustainability.text}
            </p>
          </div>
          <div className="space-y-8 rounded-[2rem] border border-background/10 bg-background/5 p-8 backdrop-blur-sm md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl">
              {featuresContent.hygieneGuarantee.heading}
            </h2>
            <ul className="space-y-4">
              {featuresContent.hygieneGuarantee.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-1 text-primary">✓</span>
                  <span className="opacity-90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="bg-accent/10 px-6 py-24 text-center md:py-40">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="font-heading text-4xl text-primary md:text-6xl">
            {featuresContent.cta.heading}
          </h2>
          <CTAGlow className="inline-block">
            <Button
              size="lg"
              className="rounded-full px-12 text-sm tracking-widest uppercase"
              asChild
            >
              <Link href={featuresContent.cta.cta.href}>
                {featuresContent.cta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  )
}

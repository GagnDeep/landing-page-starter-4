import { careersContent } from "@/content/careers"
import { siteImages } from "@/lib/images"
import { Button } from "@/components/ui/button"
import {
  AnimatedGradientMesh,
  DotMatrixGrid,
  CTAGlow,
} from "@/components/visuals"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: careersContent.seo.title,
  description: careersContent.seo.description,
}

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. Careers Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-b border-border bg-muted/20 px-6 pt-24 md:px-12">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex max-w-2xl flex-col items-start gap-8">
            <h1 className="font-heading text-5xl leading-tight tracking-tight md:text-7xl">
              {careersContent.hero.heading}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {careersContent.hero.subheading}
            </p>
          </div>
          <div className="relative hidden aspect-square w-full overflow-hidden rounded-[3rem] shadow-2xl lg:block">
            <Image
              src={siteImages.about.team.src}
              alt={siteImages.about.team.alt}
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* 04. Why Work With Us? */}
      <section className="mx-auto w-full max-w-3xl space-y-8 px-6 py-24 text-center md:py-32">
        <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
          {careersContent.pitch.heading}
        </h2>
        <p className="font-heading text-2xl leading-relaxed md:text-3xl lg:text-4xl">
          &ldquo;{careersContent.pitch.text}&rdquo;
        </p>
      </section>

      {/* 06. Benefits & Perks */}
      <section className="relative overflow-hidden border-y border-border bg-accent/5 px-6 py-24">
        <DotMatrixGrid className="opacity-10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <h2 className="mb-16 text-center font-heading text-4xl">
            {careersContent.benefits.heading}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {careersContent.benefits.items.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border bg-background/80 p-8 text-center shadow-sm backdrop-blur-sm"
              >
                <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✦
                </div>
                <h3 className="mb-3 font-semibold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 - 13. Current Openings */}
      <section className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="inline-block border-b border-border pb-4 font-heading text-4xl md:text-5xl">
            {careersContent.openings.heading}
          </h2>
        </div>
        <div className="space-y-8">
          {careersContent.openings.jobs.map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:flex-row md:items-center"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {job.title}
                  </h3>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs tracking-widest text-muted-foreground uppercase">
                    {job.type}
                  </span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
              <Button
                variant="outline"
                className="shrink-0 rounded-full"
                asChild
              >
                <Link
                  href={`mailto:careers@bohosalon.com?subject=Application: ${job.title}`}
                >
                  Apply Now
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 14. Application Process & 15. Apprenticeship */}
      <section className="bg-foreground px-6 py-24 text-background">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-12">
            <h2 className="font-heading text-4xl text-primary">
              {careersContent.applicationProcess.heading}
            </h2>
            <div className="space-y-8">
              {careersContent.applicationProcess.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-background/20 font-mono text-sm">
                    0{idx + 1}
                  </div>
                  <p className="pt-2 opacity-90">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6 rounded-[3rem] border border-background/10 bg-background/5 p-10 text-center md:p-16">
            <h2 className="font-heading text-3xl">
              {careersContent.apprenticeship.heading}
            </h2>
            <p className="text-lg leading-relaxed opacity-80">
              {careersContent.apprenticeship.text}
            </p>
          </div>
        </div>
      </section>

      {/* 18. Booking/Contact CTA */}
      <section className="px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl">
            {careersContent.cta.heading}
          </h2>
          <CTAGlow className="inline-block">
            <Button
              size="lg"
              className="mt-4 rounded-full px-12 text-sm tracking-widest uppercase"
              asChild
            >
              <Link href={careersContent.cta.cta.href}>
                {careersContent.cta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  )
}

import { aboutContent } from "@/content/about"
import { siteImages } from "@/lib/images"
import { Button } from "@/components/ui/button"
import {
  AnimatedGradientMesh,
  FloatingBlobs,
  DotMatrixGrid,
  CTAGlow,
  LogoMarquee,
} from "@/components/visuals"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { homeContent } from "@/content/home"

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. About Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-border bg-muted/20 px-6 pt-24 text-center md:px-12">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 mx-auto max-w-4xl space-y-6">
          <h1 className="font-heading text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
            {aboutContent.hero.heading}
          </h1>
          <p className="text-lg leading-relaxed font-light text-muted-foreground md:text-xl">
            {aboutContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 04 & 05. The Origin Story & Mission */}
      <section className="mx-auto w-full max-w-4xl px-6 py-24 md:py-32">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="mb-8 font-heading text-3xl text-primary md:text-4xl">
              {aboutContent.story.heading}
            </h2>
            <p className="columns-1 gap-8 text-justify text-lg leading-relaxed text-muted-foreground md:columns-2 md:text-xl">
              {aboutContent.story.text}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] border border-accent/20 bg-accent/10 px-8 py-16 text-center">
            <DotMatrixGrid className="opacity-10" />
            <p className="relative z-10 font-heading text-2xl leading-relaxed italic md:text-4xl">
              &ldquo;{aboutContent.mission.text}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 06 & 07. The Founders / Meet the Team */}
      <section className="relative overflow-hidden bg-foreground px-6 py-24 text-background">
        <FloatingBlobs
          colors={[
            "rgba(255,255,255,0.05)",
            "transparent",
            "rgba(255,255,255,0.02)",
          ]}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 font-heading text-4xl md:text-5xl">
              {aboutContent.team.heading}
            </h2>
            <p className="text-lg leading-relaxed opacity-80">
              {aboutContent.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {aboutContent.team.members.map((member, idx) => (
              <div key={idx} className="group space-y-6 text-center">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-2 border-background/20 transition-colors duration-500 group-hover:border-primary md:h-64 md:w-64">
                  <Image
                    src={siteImages.about.founder.src}
                    alt={siteImages.about.founder.alt}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-medium tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-background/60">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. Our Values */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
        <h2 className="mb-16 text-center font-heading text-4xl">
          {aboutContent.values.heading}
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {aboutContent.values.items.map((value, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-[2rem] border bg-card p-10 text-center shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 font-heading text-xl text-primary">
                0{idx + 1}
              </div>
              <h3 className="mb-4 text-xl font-semibold tracking-wide">
                {value.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 14. Partner Brands */}
      <section className="border-y border-border bg-muted/10 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <LogoMarquee logos={homeContent.marqueeLogos} speed={30} />
        </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="px-6 py-24 text-center md:py-40">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl">
            {aboutContent.cta.heading}
          </h2>
          <CTAGlow className="inline-block">
            <Button
              size="lg"
              className="mt-4 rounded-full px-12 text-sm tracking-widest uppercase"
              asChild
            >
              <Link href={aboutContent.cta.cta.href}>
                {aboutContent.cta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  )
}

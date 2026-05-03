import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { careersContent } from "@/content/careers"
import { images } from "@/lib/images"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export const metadata: Metadata = {
  title: careersContent.meta.title,
  description: careersContent.meta.description,
}

export default function CareersPage() {
  const content = careersContent

  return (
    <div className="w-full">
      {/* 1. Header */}
      <section className="relative overflow-hidden bg-background px-4 py-24">
        {/* Using studio interior as a backdrop with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.academy.studentsWorking.url}
            alt={images.academy.studentsWorking.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md dark:bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl py-12 text-center">
          <h1 className="mb-6 font-heading text-5xl font-bold md:text-6xl">
            {content.header.headline}
          </h1>
          <p className="text-xl text-muted-foreground">
            {content.header.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Culture / Why Join Us */}
      <section className="border-t border-border bg-background px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-heading text-3xl font-bold md:text-4xl">
            {content.culture.headline}
          </h2>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {content.culture.points.map((point, idx) => (
              <div key={idx} className="space-y-4">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold">
                  {point.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider type="line" />

      {/* 3. Open Positions */}
      <section className="bg-secondary/30 px-4 py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold">
            {content.openPositions.headline}
          </h2>
          <div className="flex flex-col gap-6">
            {content.openPositions.jobs.map((job, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-between gap-6 rounded-sm border border-border/50 bg-background p-8 shadow-sm transition-colors hover:border-primary/50 md:flex-row md:items-center"
              >
                <div className="space-y-2">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                      {job.department}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold">
                    {job.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {job.location}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="shrink-0 rounded-none text-xs font-semibold tracking-widest uppercase"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Application Process */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-16 text-center font-heading text-3xl font-bold">
            {content.process.headline}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {content.process.steps.map((step, idx) => (
              <div key={idx} className="relative px-4 text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-background font-heading text-xl font-bold text-primary">
                  {idx + 1}
                </div>
                {/* Connecting line for desktop */}
                {idx < content.process.steps.length - 1 && (
                  <div className="absolute top-6 left-[50%] -z-0 hidden h-px w-full bg-border md:block" />
                )}
                <p className="text-sm font-medium text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="border-t border-border bg-secondary/30 px-4 py-24 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-4 font-heading text-3xl font-bold">
            {content.cta.headline}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {content.cta.description}
          </p>
          <Button
            size="lg"
            className="rounded-none px-10 py-6 text-xs font-semibold tracking-wider uppercase"
          >
            {content.cta.buttonText}
          </Button>
        </div>
      </section>
    </div>
  )
}

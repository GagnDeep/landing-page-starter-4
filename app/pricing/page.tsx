import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { pricingContent } from "@/content/pricing"
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export const metadata: Metadata = {
  title: "Pricing & Investment | Hair Makeup Unisex Salon & Academy",
  description: pricingContent.meta.description,
}

export default function PricingPage() {
  const content = pricingContent

  return (
    <div className="w-full">
      {/* 1. Header */}
      <section className="relative overflow-hidden bg-background px-4 py-24 text-center">
        <AnimatedGradientMesh
          speed={25}
          className="absolute inset-0 z-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto border border-border bg-background/50 py-12 backdrop-blur-sm">
          <h1 className="mb-4 font-heading text-5xl font-bold md:text-6xl">
            {content.header.headline}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {content.header.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Bridal Packages */}
      <section className="bg-secondary/30 px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-heading text-3xl font-bold md:text-4xl">
            {content.bridalPackages.headline}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {content.bridalPackages.packages.map((pkg, idx) => (
              <Card
                key={idx}
                className="flex flex-col rounded-none border-border bg-background shadow-sm transition-colors hover:border-primary/50"
              >
                <CardHeader className="border-b border-border/50 pt-10 pb-8 text-center">
                  <CardTitle className="mb-2 font-heading text-2xl">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                    {pkg.price}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 pt-8">
                  <ul className="space-y-4">
                    {pkg.inclusions.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Academy Tuition & 4. A La Carte */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            {/* Academy Tuition */}
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold">
                {content.academyTuition.headline}
              </h2>
              <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
                {content.academyTuition.description}
              </p>

              <div className="space-y-6">
                {content.academyTuition.programs.map((program, idx) => (
                  <div
                    key={idx}
                    className="rounded-sm border border-border bg-secondary/20 p-6"
                  >
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="font-heading text-xl font-bold">
                        {program.name}
                      </h3>
                      <span className="font-semibold whitespace-nowrap text-primary">
                        {program.fee}
                      </span>
                    </div>
                    <div className="mb-4 text-xs tracking-widest text-muted-foreground uppercase">
                      {program.duration}
                    </div>
                    <p className="border-t border-border/50 pt-4 text-sm text-muted-foreground">
                      {program.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* A La Carte */}
            <div>
              <h2 className="mb-10 font-heading text-3xl font-bold">
                {content.aLaCarte.headline}
              </h2>
              <ul className="space-y-6">
                {content.aLaCarte.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline justify-between border-b border-border/50 pb-4"
                  >
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider type="wave" />

      {/* 5. FAQ (Pricing Specific) */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">
            {content.faq.headline}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {content.faq.questions.map((q, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left font-medium transition-colors hover:text-primary">
                  {q.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {q.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 6. Contact for Custom Quote */}
      <section className="border-t border-border bg-secondary/50 px-4 py-24 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {content.customQuote.headline}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {content.customQuote.description}
          </p>
          <Button
            size="lg"
            className="rounded-none px-10 py-6 text-xs font-semibold tracking-wider uppercase"
          >
            {content.customQuote.buttonText}
          </Button>
        </div>
      </section>
    </div>
  )
}

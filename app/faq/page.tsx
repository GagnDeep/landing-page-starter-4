import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { faqContent } from "@/content/faq"
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export const metadata: Metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
}

export default function FAQPage() {
  const content = faqContent

  return (
    <div className="w-full">
      {/* Header & Search */}
      <section className="relative overflow-hidden border-b border-border bg-background px-4 py-24 text-center">
        <AnimatedGradientMesh
          speed={30}
          className="absolute inset-0 z-0 opacity-20"
        />
        <div className="relative z-10 container mx-auto max-w-3xl">
          <h1 className="mb-6 font-heading text-5xl font-bold md:text-6xl">
            {content.header.headline}
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            {content.header.subheadline}
          </p>
          <div className="relative mx-auto max-w-md">
            <Input
              type="search"
              placeholder={content.searchPlaceholder}
              className="h-14 rounded-full border-border bg-background/80 pr-12 pl-6 text-base shadow-sm backdrop-blur-sm"
            />
            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories & Accordions */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto flex max-w-4xl flex-col gap-20">
          {content.categories.map((category, catIdx) => (
            <div key={catIdx} id={`cat-${catIdx}`}>
              <h2 className="mb-8 border-b border-border pb-4 font-heading text-3xl font-bold tracking-widest text-primary uppercase">
                {category.name}
              </h2>
              <Accordion type="multiple" className="w-full">
                {category.questions.map((q, qIdx) => (
                  <AccordionItem key={qIdx} value={`faq-${catIdx}-${qIdx}`}>
                    <AccordionTrigger className="py-6 text-left text-lg font-medium transition-colors hover:text-primary">
                      {q.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                      {q.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider type="diamond" />

      {/* CTA */}
      <section className="bg-secondary/30 px-4 py-24 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-4 font-heading text-4xl font-bold">
            {content.cta.headline}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {content.cta.description}
          </p>
          <Link href="/contact" passHref>
            <Button
              size="lg"
              className="rounded-none px-12 py-6 text-xs font-semibold tracking-wider uppercase"
            >
              {content.cta.buttonText}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

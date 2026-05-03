import { faqContent } from "@/content/faq";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with Search (mock search) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-30">
          <AnimatedGradientMesh />
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-primary mb-6 tracking-tight">
            {faqContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {faqContent.hero.subheading}
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder={faqContent.hero.searchPlaceholder}
              className="w-full pl-12 h-14 rounded-full bg-background shadow-sm text-lg"
            />
          </div>
        </div>
      </section>

      {/* 2, 3, 4, 5. Categories & Accordions */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">

          {Object.entries(faqContent.categories).map(([key, category]) => (
            <div key={key} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-heading font-medium text-foreground mb-8 pb-4 border-b border-border">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`${key}-item-${index}`} className="border border-border px-6 rounded-lg bg-card">
                    <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-heading font-semibold text-foreground">
              {faqContent.cta.heading}
            </h2>
            <p className="text-muted-foreground text-lg">
              {faqContent.cta.description}
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">
                {faqContent.cta.buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { faqContent } from "@/content/faq";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSearch() {
  const content = faqContent.sections.searchPrompt;
  return (
    <section className="py-12 border-b border-border bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={content.placeholder || "Search for a question..."}
            className="h-14 pl-12 rounded-full bg-background border-border text-lg"
          />
        </div>
      </div>
    </section>
  );
}

export function FAQAccordions() {
  const categories = faqContent.sections.categories;
  const sections = [categories.bookings, categories.treatments, categories.policies];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl space-y-20">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-heading font-bold mb-8 pb-4 border-b border-border">{section.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {section.faqs.map((faq: any, i: number) => (
                <AccordionItem key={i} value={`item-${idx}-${i}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2 pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQSupportCTA() {
  const content = faqContent.sections.supportCta;
  return (
    <section className="py-24 bg-secondary/20 border-t border-border text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-heading font-bold mb-4">{content.headline}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.body}</p>
        <Button size="lg" className="rounded-full px-10 h-14" asChild>
          <Link href={content.cta?.href || "/contact"}>{content.cta?.label || "Contact Support"}</Link>
        </Button>
      </div>
    </section>
  );
}

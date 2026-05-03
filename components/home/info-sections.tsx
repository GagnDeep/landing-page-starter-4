import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingTeaser() {
  const content = homeContent.sections.pricingTeaser;

  const samplePrices = [
    { service: "Hair Botox", price: "from ₹4,500" },
    { service: "Keratin Therapy", price: "from ₹5,000" },
    { service: "Global Color", price: "from ₹3,500" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">{content.headline}</h2>
          <Button variant="outline" className="rounded-full px-8 h-12" asChild>
            <Link href={content.cta?.href || "/pricing"}>{content.cta?.label || "View Pricing"}</Link>
          </Button>
        </div>

        <div className="bg-secondary/20 p-8 rounded-2xl border border-border">
          <ul className="divide-y divide-border">
            {samplePrices.map((item, idx) => (
              <li key={idx} className="py-6 flex justify-between items-center">
                <span className="text-lg font-medium">{item.service}</span>
                <span className="text-lg font-heading text-muted-foreground">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const content = homeContent.sections.faqSnippet;

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">{content.headline}</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg font-medium">{content.question1?.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              {content.question1?.a}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-medium">{content.question2?.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              {content.question2?.a}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export function PromotionalBanner() {
  const content = homeContent.sections.promotionalBanner;

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">{content.headline}</h2>
          <p className="text-primary-foreground/80 text-lg">{content.body}</p>
        </div>
        <Button variant="secondary" size="lg" className="rounded-full shrink-0" asChild>
          <Link href={content.cta?.href || "/contact"}>{content.cta?.label || "Claim Offer"}</Link>
        </Button>
      </div>
    </section>
  );
}

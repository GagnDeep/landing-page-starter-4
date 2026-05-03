import { Metadata } from "next";
import { pricingContent } from "@/content/pricing";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center py-20 px-4 md:px-8 bg-background">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-30" />
        <div className="container relative z-10 mx-auto text-center max-w-3xl pt-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            {pricingContent.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium text-balance">
            {pricingContent.hero.subheading}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-20">

            {/* 3. General Pricing Guidelines */}
            <section>
               <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <CreditCard className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold">
                    {pricingContent.pricingGuidelines.heading}
                 </h2>
               </div>
               <p className="text-lg text-muted-foreground mb-8">
                 {pricingContent.pricingGuidelines.description}
               </p>

               <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                 <div className="divide-y divide-border">
                   {pricingContent.pricingGuidelines.items.map((item, index) => (
                     <div key={index} className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                       <span className="text-lg font-medium text-foreground">{item.service}</span>
                       <span className="text-lg font-bold text-primary">{item.cost}</span>
                     </div>
                   ))}
                 </div>
                 <div className="bg-muted p-6">
                   <p className="text-sm text-muted-foreground italic">
                     {pricingContent.pricingGuidelines.disclaimer}
                   </p>
                 </div>
               </div>
            </section>

            {/* 4. Financing Options & 5. Membership/Loyalty Plan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative overflow-hidden">
                 <HeartHandshake className="w-12 h-12 text-primary mb-6 opacity-80" />
                 <h3 className="text-2xl font-heading font-bold mb-4">
                   {pricingContent.financing.heading}
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">
                   {pricingContent.financing.description}
                 </p>
               </div>

               <div className="bg-secondary/20 border border-secondary/40 rounded-3xl p-8 relative overflow-hidden">
                 <ShieldCheck className="w-12 h-12 text-secondary-foreground mb-6 opacity-80" />
                 <h3 className="text-2xl font-heading font-bold mb-4 text-secondary-foreground">
                   {pricingContent.membership.heading}
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">
                   {pricingContent.membership.description}
                 </p>
               </div>
            </div>

            {/* 6. FAQ (Financial) */}
            <section>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                {pricingContent.faq.heading}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {pricingContent.faq.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">

            {/* 2. Insurance Partners */}
             <div className="bg-card border border-border rounded-3xl p-8 sticky top-24 shadow-sm">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  {pricingContent.insurance.heading}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pricingContent.insurance.description}
                </p>

                {/* Simulated Insurance Logos Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 opacity-60">
                   <div className="h-12 bg-muted rounded flex items-center justify-center font-bold text-xs text-muted-foreground">Provider A</div>
                   <div className="h-12 bg-muted rounded flex items-center justify-center font-bold text-xs text-muted-foreground">Provider B</div>
                   <div className="h-12 bg-muted rounded flex items-center justify-center font-bold text-xs text-muted-foreground">Provider C</div>
                   <div className="h-12 bg-muted rounded flex items-center justify-center font-bold text-xs text-muted-foreground">Provider D</div>
                </div>

                <div className="flex gap-2 items-start text-sm text-muted-foreground bg-muted/50 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p>{pricingContent.insurance.acceptedNote}</p>
                </div>
             </div>

          </div>

        </div>
      </div>

      {/* 7. CTA */}
      <section className="py-24 px-4 md:px-8 bg-primary text-primary-foreground text-center relative z-10 mt-12">
        <FloatingBlobs className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            {pricingContent.cta.heading}
          </h2>
          <Button size="lg" variant="secondary" asChild className="rounded-full text-lg px-8 py-6">
            <Link href="/contact">
              {pricingContent.cta.buttonText}
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

import Link from "next/link";
import { CheckCircle2, ShieldCheck, CreditCard, HeartHandshake, ArrowRight } from "lucide-react";

import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedHeroAurora, CTAGlow } from "@/components/visuals";

export const metadata = pricingContent.metadata;

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-primary/5">
        <AnimatedHeroAurora className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
              {pricingContent.hero.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              {pricingContent.hero.subheadline}
            </p>
            <CTAGlow>
              <Button size="lg" className="rounded-full text-base px-8" asChild>
                <Link href={pricingContent.hero.primaryCta.href}>
                  {pricingContent.hero.primaryCta.label}
                </Link>
              </Button>
            </CTAGlow>
          </div>
        </AnimatedHeroAurora>
      </section>

      {/* 2 & 3. Insurance & Specials (Split Layout) */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Insurance Block */}
            <div className="flex flex-col gap-6 p-8 lg:p-12 rounded-3xl bg-muted/20 border shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold">{pricingContent.insurance.headline}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {pricingContent.insurance.body}
              </p>
              <div className="mt-auto">
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Accepted Networks Include</div>
                <div className="flex flex-wrap gap-2">
                  {pricingContent.insurance.acceptedNetworks.map((network, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1 font-medium bg-background border">
                      {network}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Specials Block */}
            <div className="flex flex-col gap-6 p-8 lg:p-12 rounded-3xl bg-primary text-primary-foreground shadow-xl h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 text-primary-foreground flex items-center justify-center mb-2 relative z-10">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold relative z-10">{pricingContent.specials.headline}</h2>
              <div className="flex flex-col gap-2 my-8 relative z-10">
                  <div className="text-lg font-medium opacity-90">{pricingContent.specials.offer}</div>
                  <div className="text-6xl font-heading font-bold">{pricingContent.specials.price}</div>
              </div>
              <div className="mt-auto relative z-10">
                 <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-full text-base mb-4" asChild>
                    <Link href="/contact">Claim Offer <ArrowRight className="w-4 h-4 ml-2" /></Link>
                 </Button>
                 <p className="text-xs opacity-70 leading-relaxed max-w-sm">
                   {pricingContent.specials.disclaimer}
                 </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. General Pricing Guidelines */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {pricingContent.guidelines.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {pricingContent.guidelines.intro}
            </p>
          </div>

          <Card className="bg-background border-none shadow-md overflow-hidden">
             <div className="divide-y divide-border">
                {pricingContent.guidelines.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4 hover:bg-muted/10 transition-colors">
                     <div>
                        <div className="font-heading font-semibold text-lg">{item.service}</div>
                        {item.note && <div className="text-sm text-muted-foreground mt-1">{item.note}</div>}
                     </div>
                     <div className="text-primary font-bold text-xl whitespace-nowrap">
                        {item.price}
                     </div>
                  </div>
                ))}
             </div>
             <div className="bg-muted/30 p-6 text-sm text-muted-foreground text-center border-t">
                {pricingContent.guidelines.disclaimer}
             </div>
          </Card>
        </div>
      </section>

      {/* 6. Membership Plan */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {pricingContent.membership.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {pricingContent.membership.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {pricingContent.membership.tiers.map((tier, idx) => (
                <Card key={idx} className={`relative flex flex-col ${idx === 1 ? 'border-primary shadow-xl ring-1 ring-primary/20' : 'border-border shadow-md'}`}>
                   {idx === 1 && (
                      <div className="absolute top-0 right-8 -translate-y-1/2">
                         <Badge className="bg-primary text-primary-foreground px-3 py-1 font-semibold shadow-sm">Most Popular</Badge>
                      </div>
                   )}
                   <CardHeader className="text-center pb-8 border-b bg-muted/10">
                      <CardTitle className="text-2xl font-heading mb-4">{tier.name}</CardTitle>
                      <div className="text-4xl font-bold font-heading text-primary">{tier.priceMonthly.split(' ')[0]}</div>
                      {tier.priceMonthly.includes('(') && (
                          <CardDescription className="mt-2 font-medium">
                              {tier.priceMonthly.match(/\((.*?)\)/)?.[1]}
                          </CardDescription>
                      )}
                   </CardHeader>
                   <CardContent className="pt-8 flex-1">
                      <ul className="flex flex-col gap-4">
                         {tier.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                               <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                               <span className="text-muted-foreground font-medium">{benefit}</span>
                            </li>
                         ))}
                      </ul>
                   </CardContent>
                   <CardFooter className="pt-4 pb-8">
                      <Button className="w-full rounded-full" variant={idx === 1 ? "default" : "outline"} size="lg" asChild>
                         <Link href="/contact">Join Now</Link>
                      </Button>
                   </CardFooter>
                </Card>
             ))}
          </div>
        </div>
      </section>

      {/* 5 & 7. Financing & FAQ */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <div className="flex flex-col md:flex-row gap-6 items-center p-8 bg-background border rounded-3xl shadow-sm mb-16 text-center md:text-left">
             <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <CreditCard className="w-8 h-8" />
             </div>
             <div>
                <h3 className="text-2xl font-heading font-bold mb-2">{pricingContent.financing.headline}</h3>
                <p className="text-muted-foreground">{pricingContent.financing.body}</p>
             </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {pricingContent.faq.headline}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full bg-background rounded-2xl border px-6">
            {pricingContent.faq.questions.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className={idx === pricingContent.faq.questions.length - 1 ? 'border-none' : ''}>
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {pricingContent.finalCta.headline}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            {pricingContent.finalCta.subheadline}
          </p>
          <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 h-14 shadow-xl" asChild>
            <Link href={pricingContent.finalCta.cta.href}>
              {pricingContent.finalCta.cta.label}
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

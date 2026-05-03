import { featuresContent } from "@/content/features";
import { ParallaxImageWrapper, DotMatrixGrid } from "@/components/visuals";
import { imageRegistry } from "@/lib/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CategoryNav() {
  const nav = featuresContent.sections.navigation;
  const links = [
    { label: nav.treatments, href: "#treatments" },
    { label: nav.color, href: "#color" },
    { label: nav.cuts, href: "#cuts" },
    { label: nav.spa, href: "#spa" },
  ];

  return (
    <div className="sticky top-[88px] z-40 bg-background/90 backdrop-blur-md border-b border-border py-4">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium whitespace-nowrap text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export function TreatmentServices() {
  const content = featuresContent.sections.treatments;
  return (
    <section id="treatments" className="py-24 relative overflow-hidden">
      <DotMatrixGrid opacity={0.3} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">{content.headline}</h2>
          <p className="text-xl text-muted-foreground">{content.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Botox */}
          <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-heading font-bold mb-4">{content.botox.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">{content.botox.description}</p>
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
              <ParallaxImageWrapper image={imageRegistry.treatmentBotox} />
            </div>
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Keratin & Nanoplastia */}
          <div className="space-y-8">
            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm h-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-4">{content.keratin.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{content.keratin.description}</p>
              <Button variant="link" className="px-0 text-primary self-start" asChild>
                <Link href="/pricing">Pricing Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="bg-secondary/20 border border-border p-8 rounded-3xl shadow-sm h-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-4">{content.nanoplastia.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{content.nanoplastia.description}</p>
              <Button variant="link" className="px-0 text-primary self-start" asChild>
                <Link href="/pricing">Pricing Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ColorServices() {
  const content = featuresContent.sections.color;
  const items = [content.balayage, content.globalColor, content.colorCorrection];

  return (
    <section id="color" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-heading font-bold mb-4">{content.headline}</h2>
          <p className="text-xl text-muted-foreground mb-12">{content.subheading}</p>

          <div className="space-y-10">
            {items.map((item, idx) => (
              <div key={idx} className="border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <Button className="mt-12 rounded-full px-8" asChild>
             <Link href="/pricing">Explore Color Pricing</Link>
          </Button>
        </div>
        <div className="lg:col-span-7 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden">
           <ParallaxImageWrapper image={imageRegistry.colorBalayage} />
        </div>
      </div>
    </section>
  );
}

export function CutSpaServices() {
  const cuts = featuresContent.sections.cuts;
  const spa = featuresContent.sections.spa;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        <div id="cuts">
          <h2 className="text-3xl font-heading font-bold mb-2">{cuts.headline}</h2>
          <p className="text-muted-foreground mb-10">{cuts.subheading}</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-bold mb-2">{cuts.precisionCut.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cuts.precisionCut.description}</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-bold mb-2">{cuts.blowout.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cuts.blowout.description}</p>
            </div>
          </div>
        </div>

        <div id="spa">
          <h2 className="text-3xl font-heading font-bold mb-2">{spa.headline}</h2>
          <p className="text-muted-foreground mb-10">{spa.subheading}</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-secondary/20 border border-border p-6 rounded-2xl">
              <h3 className="font-bold mb-2">{spa.hairSpa.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{spa.hairSpa.description}</p>
            </div>
            <div className="bg-secondary/20 border border-border p-6 rounded-2xl">
              <h3 className="font-bold mb-2">{spa.scalpTreatment.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{spa.scalpTreatment.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceFAQ() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Service FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg font-medium">Do I need a consultation before a color service?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              Yes, we highly recommend a complimentary consultation for all new color clients. This allows us to assess your hair health, discuss your goals, and formulate the perfect custom blend.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-medium">Can I get a smoothing treatment if I have colored hair?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              Absolutely. Our Hair Botox and Keratin treatments are safe for color-treated hair and can actually help seal the cuticle to lock in your color. We recommend scheduling the treatment immediately after or two weeks prior to your color service.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export function FeatureCTA() {
  const content = featuresContent.sections.consultationCta;
  return (
    <section className="py-32 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{content.headline}</h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">{content.body}</p>
        <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base" asChild>
          <Link href={content.cta?.href || "/contact"}>{content.cta?.label || "Book Consultation"}</Link>
        </Button>
      </div>
    </section>
  );
}

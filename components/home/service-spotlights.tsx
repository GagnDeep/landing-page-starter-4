import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import { ParallaxImageWrapper } from "@/components/visuals";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star, Droplets, Sparkles } from "lucide-react";

export function ServiceTreatments() {
  const content = homeContent.sections.serviceSpotlightTreatments;

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{content.headline}</h2>
          <p className="text-xl text-muted-foreground">{content.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Botox Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <ParallaxImageWrapper image={imageRegistry.treatmentBotox} />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-3">{content.botox.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{content.botox.description}</p>
              <Button variant="ghost" className="group/btn px-0 hover:bg-transparent text-primary">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Keratin Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 md:mt-12">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <ParallaxImageWrapper image={imageRegistry.treatmentKeratin} />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-3">{content.keratin.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{content.keratin.description}</p>
              <Button variant="ghost" className="group/btn px-0 hover:bg-transparent text-primary">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceColorStyling() {
  const colorContent = homeContent.sections.serviceSpotlightColor;
  const stylingContent = homeContent.sections.serviceSpotlightStyling;

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 space-y-32">

        {/* Color Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-[3/4] md:aspect-square w-full rounded-2xl overflow-hidden">
             <ParallaxImageWrapper image={imageRegistry.colorBalayage} />
          </div>
          <div className="order-1 md:order-2 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{colorContent.headline}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{colorContent.body}</p>
            <Button variant="outline" className="rounded-full px-8 h-12">
              <Link href="/features#color">View Color Services</Link>
            </Button>
          </div>
        </div>

        {/* Styling Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl md:pl-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{stylingContent.headline}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{stylingContent.body}</p>
            <Button variant="outline" className="rounded-full px-8 h-12">
               <Link href="/features#cuts">View Styling Services</Link>
            </Button>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square w-full rounded-2xl overflow-hidden">
             <ParallaxImageWrapper image={imageRegistry.stylingBlowout} />
          </div>
        </div>

      </div>
    </section>
  );
}

export function WhyUs() {
  const content = homeContent.sections.whyUs;

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-16">{content.headline}</h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-3">{content.expertStylists.title}</h3>
            <p className="text-primary-foreground/70 leading-relaxed">{content.expertStylists.body}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              <Droplets className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-3">{content.premiumProducts.title}</h3>
            <p className="text-primary-foreground/70 leading-relaxed">{content.premiumProducts.body}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-3">{content.relaxingAtmosphere.title}</h3>
            <p className="text-primary-foreground/70 leading-relaxed">{content.relaxingAtmosphere.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

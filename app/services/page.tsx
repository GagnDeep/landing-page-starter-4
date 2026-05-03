import { Metadata } from "next";
import { featuresContent } from "@/content/features";
import { imageRegistry } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { CheckCircle2, HeartPulse, Sparkles, Activity, ShieldCheck, Smile } from "lucide-react";

export const metadata: Metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

// Map icons to service categories based on ID
const getIconForService = (id: string) => {
  switch (id) {
    case "general": return <ShieldCheck className="h-10 w-10 text-primary" />;
    case "cosmetic": return <Sparkles className="h-10 w-10 text-primary" />;
    case "orthodontics": return <Smile className="h-10 w-10 text-primary" />;
    case "implants": return <Activity className="h-10 w-10 text-primary" />;
    case "pediatric": return <HeartPulse className="h-10 w-10 text-primary" />;
    case "emergency": return <HeartPulse className="h-10 w-10 text-destructive animate-pulse" />;
    default: return <ShieldCheck className="h-10 w-10 text-primary" />;
  }
};

// Map images to service categories based on ID
const getImageForService = (id: string) => {
  switch (id) {
    case "general": return imageRegistry.services.general;
    case "cosmetic": return imageRegistry.services.cosmetic;
    case "orthodontics": return imageRegistry.services.cosmetic; // Fallback
    case "implants": return imageRegistry.services.implants;
    case "pediatric": return imageRegistry.services.pediatric;
    case "emergency": return imageRegistry.hero.emergency;
    default: return imageRegistry.services.general;
  }
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20 px-4 md:px-8 bg-background">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-40" />
        <div className="container relative z-10 mx-auto text-center max-w-4xl pt-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            {featuresContent.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium text-balance">
            {featuresContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 2. Service Categories Nav (Sticky Sub-nav) */}
      <div className="sticky top-16 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto py-4">
            {featuresContent.services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary whitespace-nowrap transition-colors"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 3-8. Services Sections */}
      <div className="bg-background relative z-10">
        {featuresContent.services.map((service, index) => {
          const isEven = index % 2 === 0;
          const image = getImageForService(service.id);

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 px-4 md:px-8 ${isEven ? 'bg-muted/30' : 'bg-background'}`}
            >
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                  {/* Content */}
                  <div className={`space-y-8 ${isEven ? 'order-last lg:order-last' : 'order-last lg:order-first'}`}>
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-2">
                       {getIconForService(service.id)}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {service.id === 'emergency' && (
                       <div className="pt-4">
                         <Button variant="destructive" size="lg" className="rounded-full shadow-glow animate-pulse">
                           Call Emergency Line Now
                         </Button>
                       </div>
                    )}
                  </div>

                  {/* Image */}
                  <div className={`relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl ${isEven ? 'order-first lg:order-first' : 'order-first lg:order-last'}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Technology Highlight */}
      <section className="py-24 px-4 md:px-8 bg-primary/5 relative">
        <FloatingBlobs className="absolute inset-0 opacity-40 pointer-events-none" />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-primary">
            {featuresContent.technology.heading}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {featuresContent.technology.description}
          </p>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-24 px-4 md:px-8 bg-primary text-primary-foreground text-center relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            {featuresContent.cta.heading}
          </h2>
          <Button size="lg" variant="secondary" asChild className="rounded-full text-lg px-8 py-6">
            <Link href="/contact">
              {featuresContent.cta.buttonText}
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

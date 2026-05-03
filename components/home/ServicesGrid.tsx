import { homeContent } from "@/content/home";
import { HoverCard } from "@/components/visuals/HoverCard";
import { FadeIn } from "@/components/visuals/FadeIn";
import { ArrowRight, Stethoscope, Sparkles, Activity, Smile } from "lucide-react";
import Link from "next/link";

export function ServicesGrid() {
  const icons = [Stethoscope, Sparkles, Activity, Smile];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {homeContent.coreServices.title}
            </h2>
            <Link href="/features" className="group inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeContent.coreServices.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <HoverCard className="p-8 h-full flex flex-col bg-background">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </HoverCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

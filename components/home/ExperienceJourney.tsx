import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";

export function ExperienceJourney() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="mb-16 md:text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {homeContent.experienceJourney.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-border z-0" />

          {homeContent.experienceJourney.steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up" className="relative z-10 flex flex-col items-start lg:items-center">
              <div className="h-24 w-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-sm">
                <span className="font-heading text-3xl font-bold text-primary">{step.step}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground lg:text-center">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed lg:text-center">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

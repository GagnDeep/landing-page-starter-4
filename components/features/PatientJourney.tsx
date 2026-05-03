import { featuresContent } from "@/content/features";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Search, ClipboardList, Zap, HeartHandshake } from "lucide-react";

export function PatientJourney() {
  const steps = [
    { icon: Search, label: "Detailed Diagnostics" },
    { icon: ClipboardList, label: "Transparent Planning" },
    { icon: Zap, label: "Precision Execution" },
    { icon: HeartHandshake, label: "Dedicated Aftercare" },
  ];

  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {featuresContent.patientJourney.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-2xl mx-auto">
            {featuresContent.patientJourney.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-full bg-background border border-border shadow-sm flex items-center justify-center mb-6 relative">
                  <Icon className="h-8 w-8 text-primary" />
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-border -translate-y-1/2 -z-10" />
                  )}
                </div>
                <h4 className="font-semibold text-foreground/90">{step.label}</h4>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

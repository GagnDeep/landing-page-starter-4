import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Shield, Sparkles, HandHeart, Users } from "lucide-react";

export function WhyChooseUs() {
  const icons = [Shield, Sparkles, HandHeart, Users];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {homeContent.whyChooseUs.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeContent.whyChooseUs.reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-card">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg text-foreground">{reason}</h3>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

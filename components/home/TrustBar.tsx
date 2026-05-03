import { homeContent } from "@/content/home";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { ShieldCheck, Award, CheckCircle } from "lucide-react";

export function TrustBar() {
  const icons = [ShieldCheck, Award, CheckCircle];

  return (
    <section className="border-y border-border bg-muted/30 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          {homeContent.trustBar.title}
        </p>
        <LogoMarquee speed={30}>
          {homeContent.trustBar.logos.map((logo, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="flex items-center gap-3 text-foreground/70">
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-heading text-lg font-medium tracking-wide whitespace-nowrap">
                  {logo}
                </span>
              </div>
            );
          })}
        </LogoMarquee>
      </div>
    </section>
  );
}

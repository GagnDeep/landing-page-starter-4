import { aboutContent } from "@/content/about";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Award } from "lucide-react";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";

export function AboutAccreditations() {
  const dummyCertifications = ["ISO 9001:2015", "Indian Dental Association", "FDI World Dental", "NABH Guidelines"];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <FadeIn className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {aboutContent.accreditations.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {aboutContent.accreditations.description}
          </p>
        </FadeIn>

        <LogoMarquee speed={40}>
          {dummyCertifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-3 text-foreground/70">
              <Award className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-medium tracking-wide whitespace-nowrap">
                {cert}
              </span>
            </div>
          ))}
        </LogoMarquee>
      </div>
    </section>
  );
}

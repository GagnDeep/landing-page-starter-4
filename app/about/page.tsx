import { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { imageRegistry } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20 px-4 md:px-8">
        <AnimatedGradientMesh className="absolute inset-0 z-0" />
        <div className="container relative z-10 mx-auto text-center max-w-4xl pt-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            {aboutContent.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium text-balance">
            {aboutContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision & 3. Founder's Journey */}
      <section className="py-24 px-4 md:px-8 bg-background relative z-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                {aboutContent.missionVision.heading}
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                  <h3 className="text-xl font-heading font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutContent.missionVision.mission}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                  <h3 className="text-xl font-heading font-bold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutContent.missionVision.vision}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                {aboutContent.founderJourney.heading}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutContent.founderJourney.story}
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={imageRegistry.team.drKochar.src}
              alt={imageRegistry.team.drKochar.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

        </div>
      </section>

      {/* 4. The Team */}
      <section className="py-24 px-4 md:px-8 bg-muted/30 relative">
        <FloatingBlobs className="absolute inset-0 opacity-50 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              {aboutContent.team.heading}
            </h2>
            <p className="text-lg text-muted-foreground">
              {aboutContent.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.team.members.map((member, i) => (
              <div key={i} className="bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-3xl text-primary font-heading font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Clinic Tour & 6. Community Involvement */}
      <section className="py-24 px-4 md:px-8 bg-background relative z-10">
        <div className="container mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl order-last lg:order-first">
               <Image
                  src={imageRegistry.about.clinicInterior.src}
                  alt={imageRegistry.about.clinicInterior.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
             </div>
             <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                  {aboutContent.clinicTour.heading}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutContent.clinicTour.description}
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                  {aboutContent.community.heading}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutContent.community.description}
                </p>
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-muted">
                {/* Fallback image as there's no specific community image, using team group or generic clinic */}
                 <Image
                  src={imageRegistry.team.teamGroup.src}
                  alt={imageRegistry.team.teamGroup.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
             </div>
          </div>

        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 px-4 md:px-8 bg-primary text-primary-foreground text-center relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            {aboutContent.cta.heading}
          </h2>
          <Button size="lg" variant="secondary" asChild className="rounded-full text-lg px-8 py-6">
            <Link href="/contact">
              {aboutContent.cta.buttonText}
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

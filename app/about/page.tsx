import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Target, History, HeartHandshake, ShieldCheck, Zap, ArrowRight } from "lucide-react";

import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedHeroAurora, FloatingBlobs, CTAGlow } from "@/components/visuals";

export const metadata = aboutContent.metadata;

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden">
        <AnimatedHeroAurora className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
              {aboutContent.hero.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              {aboutContent.hero.subheadline}
            </p>
            <CTAGlow>
              <Button size="lg" className="rounded-full text-base px-8" asChild>
                <Link href={aboutContent.hero.primaryCta.href}>
                  {aboutContent.hero.primaryCta.label}
                </Link>
              </Button>
            </CTAGlow>
          </div>
        </AnimatedHeroAurora>
      </section>

      {/* 2 & 3. Mission & Legacy (Combined layout for better flow) */}
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Target className="w-6 h-6" />
                  <h2 className="text-2xl font-heading font-bold uppercase tracking-wider">{aboutContent.mission.headline}</h2>
                </div>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed text-foreground">
                  {aboutContent.mission.body}
                </p>
              </div>
              <div className="pl-6 border-l-4 border-primary/20">
                <div className="flex items-center gap-3 mb-3 text-muted-foreground">
                  <History className="w-5 h-5" />
                  <h3 className="text-lg font-heading font-bold uppercase tracking-wider">{aboutContent.history.headline}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutContent.history.body}
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={siteImages.teamCollaborating.src}
                alt={siteImages.teamCollaborating.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet the Founder (Deep Dive) */}
      <section className="py-24 relative overflow-hidden">
        <FloatingBlobs colors={["var(--secondary)", "var(--primary)"]} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-background rounded-3xl border shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-2 relative aspect-square lg:aspect-auto bg-muted">
                <Image
                  src={siteImages.founderPortrait.src}
                  alt={siteImages.founderPortrait.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="lg:col-span-3 p-8 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  {aboutContent.founderDeepDive.headline}
                </h2>
                <div className="text-primary font-medium text-lg mb-6">{aboutContent.founderDeepDive.role}</div>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {aboutContent.founderDeepDive.qualifications.map((qual, idx) => (
                    <li key={idx} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full font-medium">
                      {qual}
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {aboutContent.founderDeepDive.bio}
                </p>
                <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-foreground/90 font-heading">
                  {aboutContent.founderDeepDive.philosophyQuote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Team */}
      <section id="team" className="py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              {aboutContent.team.sectionTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.team.members.map((member, idx) => (
              <Card key={idx} className="bg-background border-none shadow-md overflow-hidden group">
                <div className="h-48 bg-secondary/50 relative">
                    {/* Placeholder for actual team photos, using avatar styling for now */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                        <HeartHandshake className="w-24 h-24 text-primary" />
                    </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              {aboutContent.coreValues.sectionTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.coreValues.values.map((value, idx) => {
                const Icon = idx === 0 ? HeartHandshake : idx === 1 ? ShieldCheck : idx === 2 ? Target : Zap;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/20 border border-transparent hover:border-border transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
            })}
          </div>
        </div>
      </section>

      {/* 7 & 8. Facility and Community (Split) */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-background rounded-3xl p-8 lg:p-12 border shadow-sm">
                 <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">{aboutContent.facility.headline}</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-8">{aboutContent.facility.body}</p>
                 <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image src={siteImages.clinicInterior2.src} alt={siteImages.clinicInterior2.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                 </div>
              </div>
              <div className="bg-background rounded-3xl p-8 lg:p-12 border shadow-sm">
                 <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">{aboutContent.community.headline}</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-8">{aboutContent.community.body}</p>
                 <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image src={siteImages.familySmiling.src} alt={siteImages.familySmiling.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-2xl flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            {aboutContent.finalCta.headline}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            {aboutContent.finalCta.subheadline}
          </p>
          <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 h-14" asChild>
            <Link href={aboutContent.finalCta.cta.href}>
              {aboutContent.finalCta.cta.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import { careersContent } from "@/content/careers";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh, DotMatrixGrid, CTAGlow } from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: careersContent.seo.title,
  description: careersContent.seo.description,
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. Careers Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12 bg-muted/20 border-b border-border">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <h1 className="font-heading text-5xl md:text-7xl leading-tight tracking-tight">
              {careersContent.hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {careersContent.hero.subheading}
            </p>
          </div>
          <div className="hidden lg:block relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
             <Image src={siteImages.about.team.src} alt={siteImages.about.team.alt} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 04. Why Work With Us? */}
      <section className="py-24 md:py-32 px-6 max-w-3xl mx-auto w-full text-center space-y-8">
          <h2 className="text-xs tracking-widest uppercase text-muted-foreground">{careersContent.pitch.heading}</h2>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl leading-relaxed">
             &ldquo;{careersContent.pitch.text}&rdquo;
          </p>
      </section>

      {/* 06. Benefits & Perks */}
      <section className="py-24 px-6 bg-accent/5 relative overflow-hidden border-y border-border">
         <DotMatrixGrid className="opacity-10" />
         <div className="max-w-7xl mx-auto w-full relative z-10">
            <h2 className="font-heading text-4xl text-center mb-16">{careersContent.benefits.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {careersContent.benefits.items.map((benefit, idx) => (
                   <div key={idx} className="bg-background/80 backdrop-blur-sm p-8 rounded-[2rem] border shadow-sm text-center">
                       <div className="h-10 w-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">✦</div>
                       <h3 className="font-semibold mb-3">{benefit.title}</h3>
                       <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                   </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10 - 13. Current Openings */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto w-full">
         <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl border-b border-border pb-4 inline-block">{careersContent.openings.heading}</h2>
         </div>
         <div className="space-y-8">
            {careersContent.openings.jobs.map((job, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 bg-card rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold tracking-wide">{job.title}</h3>
                            <span className="text-xs tracking-widest uppercase bg-muted text-muted-foreground px-3 py-1 rounded-full">{job.type}</span>
                        </div>
                        <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    <Button variant="outline" className="rounded-full shrink-0" asChild>
                        <Link href={`mailto:careers@bohosalon.com?subject=Application: ${job.title}`}>Apply Now</Link>
                    </Button>
                </div>
            ))}
         </div>
      </section>

      {/* 14. Application Process & 15. Apprenticeship */}
      <section className="py-24 px-6 bg-foreground text-background">
         <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
                <h2 className="font-heading text-4xl text-primary">{careersContent.applicationProcess.heading}</h2>
                <div className="space-y-8">
                    {careersContent.applicationProcess.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-6 items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full border border-background/20 flex items-center justify-center text-sm font-mono">0{idx + 1}</div>
                            <p className="pt-2 opacity-90">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-background/5 border border-background/10 rounded-[3rem] p-10 md:p-16 flex flex-col justify-center text-center space-y-6">
                <h2 className="font-heading text-3xl">{careersContent.apprenticeship.heading}</h2>
                <p className="text-lg opacity-80 leading-relaxed">{careersContent.apprenticeship.text}</p>
            </div>
         </div>
      </section>

      {/* 18. Booking/Contact CTA */}
      <section className="py-24 md:py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl">{careersContent.cta.heading}</h2>
            <CTAGlow className="inline-block">
                <Button size="lg" className="rounded-full px-12 tracking-widest uppercase text-sm mt-4" asChild>
                    <Link href={careersContent.cta.cta.href}>{careersContent.cta.cta.label}</Link>
                </Button>
            </CTAGlow>
        </div>
      </section>
    </div>
  );
}

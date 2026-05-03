import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh, FloatingBlobs, DotMatrixGrid, CTAGlow, LogoMarquee } from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. About Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12 bg-muted/20 border-b border-border text-center">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            {aboutContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            {aboutContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 04 & 05. The Origin Story & Mission */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto w-full">
        <div className="space-y-16">
            <div className="text-center">
                 <h2 className="font-heading text-3xl md:text-4xl mb-8 text-primary">{aboutContent.story.heading}</h2>
                 <p className="text-lg md:text-xl leading-relaxed text-muted-foreground columns-1 md:columns-2 gap-8 text-justify">
                    {aboutContent.story.text}
                 </p>
            </div>

            <div className="relative py-16 px-8 rounded-[3rem] bg-accent/10 border border-accent/20 text-center overflow-hidden">
                 <DotMatrixGrid className="opacity-10" />
                 <p className="font-heading text-2xl md:text-4xl leading-relaxed relative z-10 italic">
                     &ldquo;{aboutContent.mission.text}&rdquo;
                 </p>
            </div>
        </div>
      </section>

      {/* 06 & 07. The Founders / Meet the Team */}
      <section className="py-24 px-6 bg-foreground text-background relative overflow-hidden">
        <FloatingBlobs colors={["rgba(255,255,255,0.05)", "transparent", "rgba(255,255,255,0.02)"]} />
        <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <h2 className="font-heading text-4xl md:text-5xl mb-6">{aboutContent.team.heading}</h2>
                <p className="text-lg opacity-80 leading-relaxed">{aboutContent.team.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {aboutContent.team.members.map((member, idx) => (
                    <div key={idx} className="space-y-6 text-center group">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-2 border-background/20 group-hover:border-primary transition-colors duration-500">
                             <Image
                                src={siteImages.about.founder.src}
                                alt={siteImages.about.founder.alt}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                             />
                        </div>
                        <div>
                            <h3 className="text-xl font-medium tracking-wide mb-1">{member.name}</h3>
                            <p className="text-primary text-sm uppercase tracking-widest font-semibold">{member.role}</p>
                            <p className="text-background/60 mt-2 text-sm">{member.specialty}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 08. Our Values */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
         <h2 className="font-heading text-4xl text-center mb-16">{aboutContent.values.heading}</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutContent.values.items.map((value, idx) => (
                <div key={idx} className="bg-card p-10 rounded-[2rem] border shadow-sm flex flex-col items-center text-center">
                     <div className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center text-primary font-heading text-xl mb-6">
                        0{idx + 1}
                     </div>
                     <h3 className="text-xl font-semibold mb-4 tracking-wide">{value.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">{value.text}</p>
                </div>
            ))}
         </div>
      </section>

      {/* 14. Partner Brands */}
      <section className="py-24 border-y border-border bg-muted/10">
         <div className="max-w-7xl mx-auto text-center">
             <LogoMarquee logos={homeContent.marqueeLogos} speed={30} />
         </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="py-24 md:py-40 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl">{aboutContent.cta.heading}</h2>
            <CTAGlow className="inline-block">
                <Button size="lg" className="rounded-full px-12 tracking-widest uppercase text-sm mt-4" asChild>
                    <Link href={aboutContent.cta.cta.href}>{aboutContent.cta.cta.label}</Link>
                </Button>
            </CTAGlow>
        </div>
      </section>
    </div>
  );
}

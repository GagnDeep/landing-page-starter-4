"use client";

import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

const serviceImages: Record<string, string> = {
  veneers: images.treatments.veneers,
  implants: images.treatments.implants,
  invisalign: images.treatments.invisalign,
  whitening: images.treatments.whitening,
};

export function ServiceLayout() {
  const [activeSection, setActiveSection] = useState(featuresContent.services[0].id);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sectionRefs.current.forEach((ref) => {
        if (!ref) return;
        const top = ref.offsetTop;
        const height = ref.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(ref.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

          {/* Sticky Sidebar Navigation */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-6">
               <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">Clinical Services</p>
               {featuresContent.services.map((service) => (
                 <a
                   key={service.id}
                   href={`#${service.id}`}
                   className={cn(
                     "block text-sm transition-all duration-300 border-l-2 pl-4 py-1",
                     activeSection === service.id
                       ? "border-primary text-foreground font-medium"
                       : "border-border text-muted-foreground hover:text-foreground"
                   )}
                 >
                   {service.title}
                 </a>
               ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="lg:w-3/4 space-y-32 md:space-y-48">
            {featuresContent.services.map((service, idx) => (
              <article
                key={service.id}
                id={service.id}
                ref={(el) => { sectionRefs.current[idx] = el; }}
                className="scroll-mt-32"
              >
                <StaggeredReveal>
                  <StaggerItem>
                    <p className="text-primary text-sm uppercase tracking-widest font-medium mb-4">
                      {service.tagline}
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                      {service.title}
                    </h2>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-border">
                       <Image
                         src={serviceImages[service.id] || images.abstract.textureLight}
                         alt={service.title}
                         fill
                         className="object-cover"
                       />
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
                      {service.description}
                    </p>
                  </StaggerItem>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <StaggerItem className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <h3 className="font-medium text-foreground mb-6 uppercase tracking-widest text-xs">Technology Focus</h3>
                        <ul className="space-y-4">
                           {service.technology.map((tech) => (
                             <li key={tech} className="flex items-start gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                               <span className="text-sm text-muted-foreground">{tech}</span>
                             </li>
                           ))}
                        </ul>
                     </StaggerItem>
                     <StaggerItem className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <h3 className="font-medium text-foreground mb-6 uppercase tracking-widest text-xs">Clinical Benefits</h3>
                        <ul className="space-y-4">
                           {service.benefits.map((benefit) => (
                             <li key={benefit} className="flex items-start gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                               <span className="text-sm text-muted-foreground">{benefit}</span>
                             </li>
                           ))}
                        </ul>
                     </StaggerItem>
                  </div>
                </StaggeredReveal>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

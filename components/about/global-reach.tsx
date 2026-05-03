import { aboutContent } from "@/content/about";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { MapPin } from "lucide-react";

export function GlobalReach() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StaggeredReveal>
            <StaggerItem>
               <h2 className="font-heading text-4xl md:text-5xl mb-6 text-background">
                 {aboutContent.globalReach.title}
               </h2>
            </StaggerItem>
            <StaggerItem>
               <p className="text-lg text-background/80 leading-relaxed max-w-md">
                 {aboutContent.globalReach.description}
               </p>
            </StaggerItem>
            <StaggerItem className="mt-12 flex gap-4">
               <div className="flex flex-col gap-2 border-l border-background/20 pl-4">
                 <span className="text-3xl font-heading text-primary">UK</span>
                 <span className="text-xs uppercase tracking-widest text-background/60">Primary Base</span>
               </div>
               <div className="flex flex-col gap-2 border-l border-background/20 pl-4">
                 <span className="text-3xl font-heading text-primary">USA</span>
                 <span className="text-xs uppercase tracking-widest text-background/60">Secondary</span>
               </div>
               <div className="flex flex-col gap-2 border-l border-background/20 pl-4">
                 <span className="text-3xl font-heading text-primary">AU</span>
                 <span className="text-xs uppercase tracking-widest text-background/60">Emerging</span>
               </div>
            </StaggerItem>
          </StaggeredReveal>

          {/* Abstract Map Representation */}
          <div className="relative aspect-video w-full rounded-2xl border border-background/10 bg-background/5 overflow-hidden flex items-center justify-center">
             <div
               className="absolute inset-0 bg-cover bg-center grayscale opacity-10"
               style={{ backgroundImage: `url('${images.abstract.textureLight}')` }}
             />
             <div className="relative z-10 flex gap-12">
                <MapPin className="w-8 h-8 text-primary animate-pulse" />
                <MapPin className="w-8 h-8 text-primary/50 animate-pulse delay-75" />
                <MapPin className="w-8 h-8 text-primary/30 animate-pulse delay-150" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

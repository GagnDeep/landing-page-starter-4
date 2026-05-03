import { Award, Star, ShieldCheck } from "lucide-react";
import { homeContent } from "@/content/home";

export function Awards() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
          <div className="flex items-center gap-3">
             <Star className="w-6 h-6 text-primary" />
             <span className="font-heading text-xl font-medium">{homeContent.awards.items[0].title}</span>
          </div>
          <div className="flex items-center gap-3">
             <Award className="w-6 h-6 text-primary" />
             <span className="font-heading text-xl font-medium">{homeContent.awards.items[1].title}</span>
          </div>
          <div className="flex items-center gap-3">
             <ShieldCheck className="w-6 h-6 text-primary" />
             <span className="font-heading text-xl font-medium">{homeContent.awards.items[2].title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

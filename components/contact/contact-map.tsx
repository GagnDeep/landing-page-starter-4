import { contactContent } from "@/content/contact";
import { images } from "@/lib/images";
import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <section className="relative w-full h-[60vh] bg-muted/50 overflow-hidden flex items-center justify-center border-t border-border">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-10"
        style={{ backgroundImage: `url('${images.abstract.textureLight}')` }}
      />

      <div className="relative z-10 bg-background/90 backdrop-blur-md p-10 rounded-3xl shadow-xl max-w-sm text-center border border-border">
         <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <MapPin className="w-7 h-7" />
         </div>
         <h3 className="font-heading text-2xl font-medium mb-3">{contactContent.map.title}</h3>
         <p className="text-sm text-muted-foreground leading-relaxed">
           {contactContent.map.description}
         </p>
      </div>
    </section>
  );
}

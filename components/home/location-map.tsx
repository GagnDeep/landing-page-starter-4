import { MapPin } from "lucide-react";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import Image from "next/image";

export function LocationMap() {
  return (
    <section className="relative w-full h-[50vh] bg-muted/50 overflow-hidden flex items-center justify-center border-t border-border">
      {/* Placeholder for an actual interactive map component */}
      <Image src={images.clinic.interior} alt="Clinic Location" fill className="absolute inset-0 z-0 object-cover grayscale opacity-20" />

      <div className="relative z-10 bg-background/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-sm text-center border border-border">
         <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <MapPin className="w-6 h-6" />
         </div>
         <h3 className="font-heading text-2xl font-medium mb-2">{homeContent.locationMap.title}</h3>
         <p className="text-sm text-muted-foreground whitespace-pre-line">{homeContent.locationMap.address}</p>
      </div>
    </section>
  );
}

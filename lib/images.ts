export interface ImageAsset {
  src: string;
  alt: string;
  dimensions: { width: number; height: number };
  credit?: string;
}

export const imageRegistry: Record<string, ImageAsset> = {
  heroMain: {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2874&auto=format&fit=crop",
    alt: "Elegant woman with beautifully styled hair in a modern salon",
    dimensions: { width: 2874, height: 1916 },
    credit: "Unsplash - Aw Creative"
  },
  salonInterior: {
    src: "https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?q=80&w=2940&auto=format&fit=crop",
    alt: "Luxurious, modern salon interior with warm lighting and plush seating",
    dimensions: { width: 2940, height: 1960 },
    credit: "Unsplash - Jason Leung"
  },
  treatmentBotox: {
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2940&auto=format&fit=crop",
    alt: "Close up of healthy, incredibly shiny and smooth hair after a treatment",
    dimensions: { width: 2940, height: 1960 },
    credit: "Unsplash - Ali Pazani"
  },
  treatmentKeratin: {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop",
    alt: "Stylist applying keratin treatment to long, sleek hair",
    dimensions: { width: 2960, height: 1973 },
    credit: "Unsplash - Element5 Digital"
  },
  colorBalayage: {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2938&auto=format&fit=crop",
    alt: "Woman showing off flawless balayage hair color with soft waves",
    dimensions: { width: 2938, height: 1958 },
    credit: "Unsplash - Hai Phung"
  },
  stylingBlowout: {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2787&auto=format&fit=crop",
    alt: "Woman with a voluminous, bouncy salon blowout",
    dimensions: { width: 2787, height: 1858 },
    credit: "Unsplash - Ayo Ogunseinde"
  },
  productLux: {
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2787&auto=format&fit=crop",
    alt: "Premium salon hair care products arranged elegantly",
    dimensions: { width: 2787, height: 1858 },
    credit: "Unsplash - BENCE BOROS"
  },
  stylistTeam: {
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2938&auto=format&fit=crop",
    alt: "Team of professional hair stylists in a high-end salon",
    dimensions: { width: 2938, height: 1959 },
    credit: "Unsplash - Guilherme Petri"
  },
  avatar1: {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2938&auto=format&fit=crop",
    alt: "Portrait of a senior stylist",
    dimensions: { width: 2938, height: 1958 },
    credit: "Unsplash - Aiony Haust"
  },
  avatar2: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    alt: "Portrait of a color specialist",
    dimensions: { width: 2864, height: 1909 },
    credit: "Unsplash - Houcine Ncib"
  },
  avatar3: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop",
    alt: "Portrait of a master stylist",
    dimensions: { width: 2787, height: 1858 },
    credit: "Unsplash - Craig McKay"
  }
};

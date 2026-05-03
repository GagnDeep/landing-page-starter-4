// Image registry providing a centralized, typed source of truth for all external image assets.
// We use high-quality Unsplash imagery configured for optimal next/image performance.

export type ImageKey =
  | 'heroPrimary'
  | 'heroSecondary'
  | 'studioInterior'
  | 'doorstepService'
  | 'serviceHair'
  | 'serviceSkin'
  | 'serviceNails'
  | 'serviceBridal'
  | 'teamSimran'
  | 'teamRahul'
  | 'teamPooja'
  | 'blogMonsoon'
  | 'blogSkincare'
  | 'blogNails'
  | 'blogBridal';

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  authorName?: string;
  authorUrl?: string;
}

const buildUnsplashUrl = (id: string, width: number, height: number, blur = false): string => {
  const base = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
  return blur ? `${base}&blur=20` : base;
};

export const images: Record<ImageKey, ImageAsset> = {
  heroPrimary: {
    src: buildUnsplashUrl('1560066984-138dadb4c035', 1920, 1080),
    alt: "A serene, well-lit premium beauty studio",
    width: 1920,
    height: 1080,
  },
  heroSecondary: {
    src: buildUnsplashUrl('1515377905703-c4788e51af15', 1920, 1080),
    alt: "Professional makeup artist at work",
    width: 1920,
    height: 1080,
  },
  studioInterior: {
    src: buildUnsplashUrl('1522337660859-02fbefca4702', 1200, 800),
    alt: "Relaxing interior of Your Home Salon studio",
    width: 1200,
    height: 800,
  },
  doorstepService: {
    src: buildUnsplashUrl('1516975080665-220020626f60', 1200, 800),
    alt: "Professional beauty tools laid out cleanly on a mat",
    width: 1200,
    height: 800,
  },
  serviceHair: {
    src: buildUnsplashUrl('1562322140810-9aafb1efc91c', 800, 1000),
    alt: "Stylist washing and caring for a client's hair",
    width: 800,
    height: 1000,
  },
  serviceSkin: {
    src: buildUnsplashUrl('1570172619644-defd70cd0e28', 800, 1000),
    alt: "Aesthetician performing a facial treatment",
    width: 800,
    height: 1000,
  },
  serviceNails: {
    src: buildUnsplashUrl('1522337360788-8b13fee7a3af', 800, 1000),
    alt: "Detailed manicure and nail art process",
    width: 800,
    height: 1000,
  },
  serviceBridal: {
    src: buildUnsplashUrl('1595954605178-08b5e28a9bdf', 800, 1000),
    alt: "Elegant bridal makeup and hair styling",
    width: 800,
    height: 1000,
  },
  teamSimran: {
    src: buildUnsplashUrl('1573496359142-b8d87734a5a2', 600, 600),
    alt: "Portrait of Simran Kaur, Founder",
    width: 600,
    height: 600,
  },
  teamRahul: {
    src: buildUnsplashUrl('1537368910025-7001c08cb364', 600, 600),
    alt: "Portrait of Rahul Verma, Lead Aesthetician",
    width: 600,
    height: 600,
  },
  teamPooja: {
    src: buildUnsplashUrl('1580618672591-eb180b1a973f', 600, 600),
    alt: "Portrait of Pooja Sharma, Senior Hair Stylist",
    width: 600,
    height: 600,
  },
  blogMonsoon: {
    src: buildUnsplashUrl('1527799820374-dcf8d9d4a388', 800, 600),
    alt: "Woman with healthy hair standing near a window",
    width: 800,
    height: 600,
  },
  blogSkincare: {
    src: buildUnsplashUrl('1616683693504-3ea7e9ad6fec', 800, 600),
    alt: "Premium skincare products displayed elegantly",
    width: 800,
    height: 600,
  },
  blogNails: {
    src: buildUnsplashUrl('1519014816548-bf5fe459e366', 800, 600),
    alt: "Clean, minimalist nail art on well-groomed hands",
    width: 800,
    height: 600,
  },
  blogBridal: {
    src: buildUnsplashUrl('1597839352701-0bf41d9e79cf', 800, 600),
    alt: "Bride getting ready on her wedding day",
    width: 800,
    height: 600,
  },
};

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Helper to build unsplash URLs with optimization params
const buildUnsplashUrl = (id: string, width: number = 1920) => {
  return `https://images.unsplash.com/photo-${id}?auto=format,compress&w=${width}&q=80`;
};

export const siteImages = {
  // Hero and general clinic environment
  heroBackground: {
    src: buildUnsplashUrl("1606811841689-23dfddce3e95"), // Clean, bright medical environment
    alt: "Modern, clean Perfect Smile Dental Clinic interior",
    width: 1920,
    height: 1080,
  } as SiteImage,
  clinicInterior1: {
    src: buildUnsplashUrl("1516549655169-df83a0774514"), // Relaxing clinic setting
    alt: "Relaxing waiting area at Perfect Smile",
    width: 1200,
    height: 800,
  } as SiteImage,
  clinicInterior2: {
    src: buildUnsplashUrl("1629909613654-25e3e58c0de5"), // State of the art equipment
    alt: "State of the art dental equipment",
    width: 1200,
    height: 800,
  } as SiteImage,

  // Pediatric & Family Focus
  happyChildDentist: {
    src: buildUnsplashUrl("1588776814503-430ec094e8fc"), // Child smiling in dental chair
    alt: "Happy child smiling after pediatric dental care",
    width: 1200,
    height: 800,
  } as SiteImage,
  familySmiling: {
    src: buildUnsplashUrl("1600880292203-757bb62b4baf"), // Family smiling outdoors
    alt: "A happy family showing off their healthy smiles",
    width: 1200,
    height: 800,
  } as SiteImage,

  // Staff and Founder
  founderPortrait: {
    src: buildUnsplashUrl("1622253692010-3320558df338"), // Professional doctor portrait
    alt: "Portrait of Dr. Sarabjeet Singh, Lead Dentist",
    width: 800,
    height: 1000,
  } as SiteImage,
  teamCollaborating: {
    src: buildUnsplashUrl("1576091160399-112ba8d25d1d"), // Medical team talking
    alt: "The Perfect Smile dental team collaborating",
    width: 1200,
    height: 800,
  } as SiteImage,

  // Services
  rootCanalTech: {
    src: buildUnsplashUrl("1598256989814-fae3d06996ee"), // Close up of clean dental tool/tech
    alt: "Advanced technology for painless root canals",
    width: 800,
    height: 600,
  } as SiteImage,
  cosmeticMakeover: {
    src: buildUnsplashUrl("1534608386348-150608b68832"), // Perfect smile close up
    alt: "Beautiful, confident smile after cosmetic dentistry",
    width: 800,
    height: 600,
  } as SiteImage,

  // Blog / General
  brushingTips: {
    src: buildUnsplashUrl("1599839619722-39751411ea63"), // Toothbrush/sink setup
    alt: "Proper oral hygiene tools",
    width: 800,
    height: 600,
  } as SiteImage,

  // Placeholders for Testimonial Avatars
  avatar1: {
    src: buildUnsplashUrl("1544005313-94ddf0286df2", 200),
    alt: "Patient avatar",
    width: 200,
    height: 200,
  } as SiteImage,
  avatar2: {
    src: buildUnsplashUrl("1531123897727-8f129e1baf8a", 200),
    alt: "Patient avatar",
    width: 200,
    height: 200,
  } as SiteImage,
  avatar3: {
    src: buildUnsplashUrl("1580489944761-15a19d654956", 200),
    alt: "Patient avatar",
    width: 200,
    height: 200,
  } as SiteImage,
  avatar4: {
    src: buildUnsplashUrl("1554151228-14d9def656e4", 200),
    alt: "Patient avatar",
    width: 200,
    height: 200,
  } as SiteImage,
};

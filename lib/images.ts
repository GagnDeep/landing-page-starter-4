export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Utilizing Unsplash source URLs with standard parameters for quality/format
const unsplashBase = "https://images.unsplash.com/photo-";
const unsplashParams = "?auto=format&fit=crop&q=80";

export const siteImages = {
  hero: {
    salonInterior: {
      src: `${unsplashBase}1600948836101-f9ffda59d250${unsplashParams}&w=1600`, // Modern interior
      alt: "Boho Salon warm, modern interior showing plush seating and warm lighting",
      width: 1600,
      height: 900,
    },
    nailArt: {
      src: `${unsplashBase}1604902396830-aca29e19b067${unsplashParams}&w=1200`, // Artistic close up
      alt: "Close up of manicurist applying precise chrome gel polish",
      width: 1200,
      height: 800,
    },
  },
  services: {
    nails: {
      src: `${unsplashBase}1522337660859-02fbefca4702${unsplashParams}&w=1000`, // Manicure focus
      alt: "Beautifully shaped nails resting on a soft towel",
      width: 1000,
      height: 1000,
    },
    hair: {
      src: `${unsplashBase}1605980776564-cb4f4e11e924${unsplashParams}&w=1000`, // Curly hair focus
      alt: "Stylist working on voluminous, healthy curly hair",
      width: 1000,
      height: 1000,
    },
    spa: {
      src: `${unsplashBase}1570172619644-defd73715112${unsplashParams}&w=1000`, // Spa aesthetic
      alt: "Tranquil facial spa setup with warm lighting and aesthetic products",
      width: 1000,
      height: 1000,
    },
  },
  about: {
    team: {
      src: `${unsplashBase}1560066984-138dadb4c035${unsplashParams}&w=1400`,
      alt: "The Boho Salon team of expert stylists and technicians",
      width: 1400,
      height: 900,
    },
    founder: {
      src: `${unsplashBase}1580618672591-eb180b1a973f${unsplashParams}&w=800`,
      alt: "Portrait of the lead stylist in a well-lit studio environment",
      width: 800,
      height: 1000,
    },
  },
  features: {
    hygiene: {
      src: `${unsplashBase}1584433144859-1fc3ab64ae95${unsplashParams}&w=800`,
      alt: "Spotless, sanitized salon tools resting on a clean tray",
      width: 800,
      height: 800,
    },
    products: {
      src: `${unsplashBase}1629367142309-847e30fc9814${unsplashParams}&w=1000`,
      alt: "Lineup of luxury haircare and nail products on a minimalist shelf",
      width: 1000,
      height: 1000,
    },
  },
  blog: {
    post1: {
      src: `${unsplashBase}1596178060671-7a80b20755f1${unsplashParams}&w=1200`,
      alt: "Close up of textured natural hair",
      width: 1200,
      height: 600,
    },
    post2: {
      src: `${unsplashBase}1516975080665-220020626f84${unsplashParams}&w=1200`,
      alt: "Aesthetic display of metallic nail polish",
      width: 1200,
      height: 600,
    },
  },
} as const;

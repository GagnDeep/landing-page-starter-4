/**
 * Image Registry for 99 Institute
 * This acts as a centralized repository for all high-quality photography
 * used across the site. All URLs are from Unsplash and include specific
 * parameters for sizing, quality, and formatting.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  credit?: {
    name: string;
    link: string;
  };
};

export type ImageRegistry = {
  hero: {
    home: ImageAsset;
    about: ImageAsset;
    academy: ImageAsset;
    salon: ImageAsset;
  };
  salon: {
    bridalGlam: ImageAsset;
    partyMakeup: ImageAsset;
    hairStyling: ImageAsset;
    interior: ImageAsset;
  };
  academy: {
    masterclass: ImageAsset;
    students: ImageAsset;
    tools: ImageAsset;
  };
  portraits: {
    founder: ImageAsset;
    artist1: ImageAsset;
    artist2: ImageAsset;
  };
  misc: {
    textureDark: ImageAsset;
    textureLight: ImageAsset;
  };
};

// Base parameters for optimal loading and quality
const BASE_PARAMS = "?auto=format&fit=crop&q=80";

export const images: ImageRegistry = {
  hero: {
    home: {
      src: `https://images.unsplash.com/photo-1512413914834-c3c734b423cb${BASE_PARAMS}&w=2000`,
      alt: "Elegant bridal makeup setup with soft lighting",
      credit: { name: "Alesia Kazantceva", link: "https://unsplash.com/@alesia" },
    },
    about: {
      src: `https://images.unsplash.com/photo-1522337660859-02fbefca4702${BASE_PARAMS}&w=2000`,
      alt: "High-end makeup brushes and cosmetics spread on a table",
      credit: { name: "Siora Photography", link: "https://unsplash.com/@siora18" },
    },
    academy: {
      src: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f${BASE_PARAMS}&w=2000`,
      alt: "Students learning makeup techniques in a professional studio",
      credit: { name: "Camille Brodard", link: "https://unsplash.com/@camillebrodard" },
    },
    salon: {
      src: `https://images.unsplash.com/photo-1562322140-8baeececf3df${BASE_PARAMS}&w=2000`,
      alt: "Luxurious beauty salon interior with mirror stations",
      credit: { name: "Delbeautybox", link: "https://unsplash.com/@delbeautybox" },
    },
  },
  salon: {
    bridalGlam: {
      src: `https://images.unsplash.com/photo-1595055047863-71ab5e5a9538${BASE_PARAMS}&w=1000`,
      alt: "Close up of flawless bridal makeup",
      credit: { name: "Zoltan Tasi", link: "https://unsplash.com/@zoltantasi" },
    },
    partyMakeup: {
      src: `https://images.unsplash.com/photo-1515377905703-c4788e51af15${BASE_PARAMS}&w=1000`,
      alt: "Glamorous party makeup with bold lips",
      credit: { name: "Karly Jones", link: "https://unsplash.com/@karlyjones" },
    },
    hairStyling: {
      src: `https://images.unsplash.com/photo-1560066984-138dadb4c035${BASE_PARAMS}&w=1000`,
      alt: "Professional hair stylist working on an elegant updo",
      credit: { name: "Aw Creative", link: "https://unsplash.com/@awcreativeut" },
    },
    interior: {
      src: `https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388${BASE_PARAMS}&w=1000`,
      alt: "Detail of luxury salon seating area",
      credit: { name: "Evelina Friman", link: "https://unsplash.com/@evelinafriman" },
    },
  },
  academy: {
    masterclass: {
      src: `https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec${BASE_PARAMS}&w=1000`,
      alt: "Instructor demonstrating makeup application",
      credit: { name: "Tania Mousinho", link: "https://unsplash.com/@taniamousinho" },
    },
    students: {
      src: `https://images.unsplash.com/photo-1527202379767-17b5f58c734b${BASE_PARAMS}&w=1000`,
      alt: "Makeup artists working together in a class",
      credit: { name: "Siora Photography", link: "https://unsplash.com/@siora18" },
    },
    tools: {
      src: `https://images.unsplash.com/photo-1596462502278-27bfdc403348${BASE_PARAMS}&w=1000`,
      alt: "Professional makeup kit laid out",
      credit: { name: "Jamie Street", link: "https://unsplash.com/@jamie452" },
    },
  },
  portraits: {
    founder: {
      src: `https://images.unsplash.com/photo-1580618672591-eb180b1a973f${BASE_PARAMS}&w=800`,
      alt: "Portrait of Navjeet, Founder of 99 Institute",
      credit: { name: "Kareya Saleh", link: "https://unsplash.com/@kareyasaleh" },
    },
    artist1: {
      src: `https://images.unsplash.com/photo-1531746020798-e6953c6e8e04${BASE_PARAMS}&w=800`,
      alt: "Portrait of a senior makeup artist",
      credit: { name: "Jurica Koletić", link: "https://unsplash.com/@jblesly" },
    },
    artist2: {
      src: `https://images.unsplash.com/photo-1534528741775-53994a69daeb${BASE_PARAMS}&w=800`,
      alt: "Portrait of an academy instructor",
      credit: { name: "Christopher Campbell", link: "https://unsplash.com/@chrisjoelcampbell" },
    },
  },
  misc: {
    textureDark: {
      src: `https://images.unsplash.com/photo-1550684848-fac1c5b4e853${BASE_PARAMS}&w=1000`,
      alt: "Dark velvet texture background",
    },
    textureLight: {
      src: `https://images.unsplash.com/photo-1604147706283-d7119b5b822c${BASE_PARAMS}&w=1000`,
      alt: "Light champagne silk texture background",
    },
  },
};

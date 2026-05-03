// Registry of placeholder images curated for the "luxury-clinical" aesthetic.
// All images are sourced from Unsplash.

const UNSPLASH_BASE = "https://images.unsplash.com";
const PARAMS = "?auto=format&fit=crop&q=80";

export const images = {
  hero: {
    // A clean, serene, high-end abstract or architectural shot
    main: `${UNSPLASH_BASE}/photo-1600880292203-757bb62b4baf${PARAMS}&w=2000`,
    secondary: `${UNSPLASH_BASE}/photo-1579684385127-1ef15d508118${PARAMS}&w=1600`,
  },
  clinic: {
    // Pristine, modern interior spaces
    interior: `${UNSPLASH_BASE}/photo-1629909613654-28e377c37b09${PARAMS}&w=1600`,
    waitingRoom: `${UNSPLASH_BASE}/photo-1519494026892-80bbd2d6fd0d${PARAMS}&w=1600`,
    equipment: `${UNSPLASH_BASE}/photo-1584308666744-24d5e4a86b09${PARAMS}&w=1200`,
  },
  treatments: {
    // Abstract macro shots representing dental tech/materials (clean, white, bright)
    veneers: `${UNSPLASH_BASE}/photo-1606811841689-23dfddce3e95${PARAMS}&w=1200`,
    implants: `${UNSPLASH_BASE}/photo-1588776814546-1ffcf47267a5${PARAMS}&w=1200`,
    invisalign: `${UNSPLASH_BASE}/photo-1598256989800-fea5ce5146f2${PARAMS}&w=1200`,
    whitening: `${UNSPLASH_BASE}/photo-1536323760109-ca8c07450053${PARAMS}&w=1200`,
  },
  people: {
    // Professional, confident portraits
    drSethi: `${UNSPLASH_BASE}/photo-1622253692010-333f2da6031d${PARAMS}&w=800`,
    patient1: `${UNSPLASH_BASE}/photo-1534528741775-53994a69daeb${PARAMS}&w=800`,
    patient2: `${UNSPLASH_BASE}/photo-1507003211169-0a1dd7228f2d${PARAMS}&w=800`,
    patient3: `${UNSPLASH_BASE}/photo-1531746020798-e6953c6e8e04${PARAMS}&w=800`,
  },
  abstract: {
    // Soft, organic, luxurious textures (silk, marble, smooth waves)
    textureLight: `${UNSPLASH_BASE}/photo-1618005182384-a83a8bd57fbe${PARAMS}&w=1600`,
    textureDark: `${UNSPLASH_BASE}/photo-1550684848-fac1c5b4e853${PARAMS}&w=1600`,
  }
} as const;

// Type helper for the registry
export type ImageRegistry = typeof images;
export type ImageCategory = keyof ImageRegistry;

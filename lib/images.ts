export type ImageMetadata = {
  src: string;
  alt: string;
  credit: {
    name: string;
    url: string;
  };
};

const buildUnsplashUrl = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${width}`;

export const imageRegistry = {
  hero: {
    main: {
      src: buildUnsplashUrl("1606811841689-23dfddce3e95"), // warm modern clinic or smiling person
      alt: "Warm, welcoming dental clinic environment in Chandigarh",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
    emergency: {
      src: buildUnsplashUrl("1588776814503-4f91e92d83e2"), // night/medical cross/24-7 feel
      alt: "24/7 emergency dental care",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
  },
  services: {
    general: {
      src: buildUnsplashUrl("1606811841689-23dfddce3e95", 800),
      alt: "General dentistry and routine checkups",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
    cosmetic: {
      src: buildUnsplashUrl("1534422298391-e4f8c8712856", 800),
      alt: "Cosmetic dentistry and teeth whitening",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
    pediatric: {
      src: buildUnsplashUrl("1591583072223-28c0bc13ed22", 800), // happy child
      alt: "Pediatric dentistry for children",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
    implants: {
      src: buildUnsplashUrl("1588776814503-4f91e92d83e2", 800), // high tech dental
      alt: "Dental implants and restorative care",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
  },
  team: {
    drKochar: {
      src: buildUnsplashUrl("1622253692010-333f2da6031d", 600), // friendly male doctor
      alt: "Dr. Kochar, Principal Dentist",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
    teamGroup: {
      src: buildUnsplashUrl("1576091160399-112ba8d25d1d", 1200), // medical team
      alt: "The dedicated team at Dr. Kochar's House of Smiles",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
  },
  blog: {
    brushingTips: {
      src: buildUnsplashUrl("1550514101-789a5848bb22", 800),
      alt: "Oral hygiene and brushing tips",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
    emergencyGuide: {
      src: buildUnsplashUrl("1588776814503-4f91e92d83e2", 800),
      alt: "What to do in a dental emergency",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
  },
  about: {
    clinicInterior: {
      src: buildUnsplashUrl("1497366216548-37526070297c", 1200), // modern waiting room
      alt: "Comforting and modern clinic interior",
      credit: { name: "Unsplash", url: "https://unsplash.com" },
    },
  },
  avatars: [
    buildUnsplashUrl("1544005313-94ddf0286df2", 150),
    buildUnsplashUrl("1507003211169-0a1dd7228f2d", 150),
    buildUnsplashUrl("1438761681033-6461ffad8d80", 150),
    buildUnsplashUrl("1500648767791-00dcc994a43e", 150),
    buildUnsplashUrl("1534528741775-53994a69daeb", 150),
  ]
};

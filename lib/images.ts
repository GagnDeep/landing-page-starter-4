// Centralized, type-safe registry for all remote images used in the application.

type ImageReference = {
  url: string
  alt: string
  width?: number
  height?: number
}

type ImageRegistry = {
  hero: {
    salonMain: ImageReference
    academyMain: ImageReference
  }
  about: {
    founderPortrait: ImageReference
    studioInterior: ImageReference
  }
  services: {
    bridalMakeup: ImageReference
    hairStyling: ImageReference
    airbrush: ImageReference
    preBridal: ImageReference
  }
  academy: {
    classroom: ImageReference
    studentsWorking: ImageReference
    graduation: ImageReference
  }
  portfolio: {
    gallery: ImageReference[]
  }
  ui: {
    textureDark: ImageReference
    textureLight: ImageReference
  }
}

const UNSPLASH_BASE = "https://images.unsplash.com/"

// Helper to ensure consistent high-quality formatting
const formatUnsplash = (
  id: string,
  params: string = "auto=format&fit=crop&q=80"
) => `${UNSPLASH_BASE}${id}?${params}`

export const images: ImageRegistry = {
  hero: {
    // Luxury salon vibe
    salonMain: {
      url: formatUnsplash(
        "photo-1560066984-138dadb4c035",
        "w=1920&q=80&auto=format&fit=crop"
      ),
      alt: "Elegant bride preparing in a luxury salon",
      width: 1920,
      height: 1080,
    },
    // Professional training vibe
    academyMain: {
      url: formatUnsplash(
        "photo-1522337660859-02fbefca4702",
        "w=1920&q=80&auto=format&fit=crop"
      ),
      alt: "Master makeup artist teaching a student",
      width: 1920,
      height: 1080,
    },
  },
  about: {
    founderPortrait: {
      url: formatUnsplash(
        "photo-1507003211169-0a1dd7228f2d",
        "w=800&q=80&auto=format&fit=crop"
      ),
      alt: "Portrait of Ajay Sir, Founder and Master Educator",
      width: 800,
      height: 1000,
    },
    studioInterior: {
      url: formatUnsplash(
        "photo-1600948836101-f9ffda59d250",
        "w=1200&q=80&auto=format&fit=crop"
      ),
      alt: "Interior of the luxury salon and academy in Punjabi Bagh",
      width: 1200,
      height: 800,
    },
  },
  services: {
    bridalMakeup: {
      url: formatUnsplash(
        "photo-1595959183082-7b570b7e08e2",
        "w=800&q=80&auto=format&fit=crop"
      ),
      alt: "Close up of flawless bridal makeup",
      width: 800,
      height: 1000,
    },
    hairStyling: {
      url: formatUnsplash(
        "photo-1562322140-8baeececf3df",
        "w=800&q=80&auto=format&fit=crop"
      ),
      alt: "Precision hair styling and coloring",
      width: 800,
      height: 1000,
    },
    airbrush: {
      url: formatUnsplash(
        "photo-1512496015851-a1c868cb5309",
        "w=800&q=80&auto=format&fit=crop"
      ),
      alt: "Professional makeup tools and airbrush kit",
      width: 800,
      height: 1000,
    },
    preBridal: {
      url: formatUnsplash(
        "photo-1616394584738-fc6e612e71b9",
        "w=800&q=80&auto=format&fit=crop"
      ),
      alt: "Relaxing skincare and pre-bridal treatment",
      width: 800,
      height: 1000,
    },
  },
  academy: {
    classroom: {
      url: formatUnsplash(
        "photo-1519452635265-7b1fbfd1e4e0",
        "w=1200&q=80&auto=format&fit=crop"
      ),
      alt: "Modern academy classroom setting",
      width: 1200,
      height: 800,
    },
    studentsWorking: {
      url: formatUnsplash(
        "photo-1560066984-138dadb4c035",
        "w=1200&q=80&auto=format&fit=crop"
      ),
      alt: "Students practicing techniques on models",
      width: 1200,
      height: 800,
    },
    graduation: {
      url: formatUnsplash(
        "photo-1523580494112-071fb2b9d906",
        "w=1200&q=80&auto=format&fit=crop"
      ),
      alt: "Academy students receiving their certification",
      width: 1200,
      height: 800,
    },
  },
  portfolio: {
    gallery: [
      {
        url: formatUnsplash(
          "photo-1526510747491-58f1e8c148a0",
          "w=600&q=80&auto=format&fit=crop"
        ),
        alt: "Bridal look 1",
        width: 600,
        height: 800,
      },
      {
        url: formatUnsplash(
          "photo-1516975080661-46540db50b95",
          "w=600&q=80&auto=format&fit=crop"
        ),
        alt: "Editorial makeup look",
        width: 600,
        height: 800,
      },
      {
        url: formatUnsplash(
          "photo-1487412720507-e7ab37603c6f",
          "w=600&q=80&auto=format&fit=crop"
        ),
        alt: "Bridal hair styling",
        width: 600,
        height: 800,
      },
      {
        url: formatUnsplash(
          "photo-1515377905703-c4788e51af15",
          "w=600&q=80&auto=format&fit=crop"
        ),
        alt: "Student practice session",
        width: 600,
        height: 800,
      },
      {
        url: formatUnsplash(
          "photo-1494790108377-be9c29b29330",
          "w=600&q=80&auto=format&fit=crop"
        ),
        alt: "Natural glow makeup",
        width: 600,
        height: 800,
      },
      {
        url: formatUnsplash(
          "photo-1529626455594-4ff0802cfb7e",
          "w=600&q=80&auto=format&fit=crop"
        ),
        alt: "Creative color hair styling",
        width: 600,
        height: 800,
      },
    ],
  },
  ui: {
    textureDark: {
      url: formatUnsplash(
        "photo-1550684848-fac1c5b4e853",
        "w=1920&q=80&auto=format&fit=crop"
      ),
      alt: "Dark elegant texture",
      width: 1920,
      height: 1080,
    },
    textureLight: {
      url: formatUnsplash(
        "photo-1586075010923-2dd4570fb338",
        "w=1920&q=80&auto=format&fit=crop"
      ),
      alt: "Light marble texture",
      width: 1920,
      height: 1080,
    },
  },
}

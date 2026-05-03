import { SEOMetadata } from "./types";

export const blogContent = {
  seo: {
    title: "The Journal | Boho Salon",
    description: "Insights on nail trends, curly hair care, and the art of modern beauty from the experts at Boho Salon.",
  } as SEOMetadata,

  hero: {
    heading: "The Journal",
    subheading: "Notes on craft, care, and culture from the Boho Salon team.",
  },

  categories: ["All", "Nail Art", "Curl Care", "Skin Rituals", "Salon News"],

  featuredPost: {
    title: "Why We Swear by the Russian Manicure",
    excerpt: "Demystifying the technique that revolutionized our nail services and why it's the only standard we accept.",
    date: "October 12, 2024",
    category: "Nail Art",
    slug: "why-we-swear-by-the-russian-manicure",
  },

  posts: [
    {
      title: "The Transition: Embracing Your Natural Curls",
      excerpt: "A step-by-step guide to recovering from heat damage and chemical straightening.",
      date: "September 28, 2024",
      category: "Curl Care",
      slug: "embracing-natural-curls",
    },
    {
      title: "Chrome Nails: The Trend That Became a Classic",
      excerpt: "How metallic finishes evolved from a passing fad to a bridal staple.",
      date: "September 15, 2024",
      category: "Nail Art",
      slug: "chrome-nails-classic",
    },
    {
      title: "Pre-Wedding Skincare Timeline for the NRI Bride",
      excerpt: "When to start your facials and how to manage skin stress while traveling.",
      date: "August 30, 2024",
      category: "Skin Rituals",
      slug: "nri-bride-skincare-timeline",
    },
    {
      title: "The Importance of Autoclave Sterilization",
      excerpt: "Why UV boxes aren't enough, and how we guarantee clinical hygiene.",
      date: "August 10, 2024",
      category: "Salon News",
      slug: "autoclave-sterilization",
    },
  ],

  newsletter: {
    heading: "Get the latest from The Journal",
    description: "Trends and tips delivered straight to your inbox.",
    buttonLabel: "Subscribe",
  },
};

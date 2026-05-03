import { SEOMetadata, CTA } from "./types"

export const aboutContent = {
  seo: {
    title: "About Boho Salon | Our Story & Team",
    description:
      "Learn about the vision behind Boho Salon, our commitment to elevating Chandigarh's beauty standards, and meet our team of expert technicians.",
  } as SEOMetadata,

  hero: {
    heading: "Crafting the Standard",
    subheading: "A space where artistry, hygiene, and luxury converge.",
  },

  story: {
    heading: "The Origin",
    text: "Boho Salon was born from a simple observation: Chandigarh needed a space that offered international standards of beauty services without the sterile feel of a clinic. We wanted to create a sanctuary. A place where the techniques are rigorous, the products are elite, but the atmosphere remains warm, inviting, and inherently 'boho'.",
  },

  mission: {
    text: "To elevate the daily rituals of grooming into acts of self-care, utilizing the world's best techniques in an environment of total transparency and trust.",
  },

  values: {
    heading: "What Guides Us",
    items: [
      {
        title: "Artistry over Speed",
        text: "We book ample time for every client. Great work cannot be rushed.",
      },
      {
        title: "Uncompromising Hygiene",
        text: "We treat our salon with clinical strictness to ensure your absolute safety.",
      },
      {
        title: "Continuous Education",
        text: "The beauty industry evolves rapidly; our team is dedicated to lifelong learning.",
      },
    ],
  },

  team: {
    heading: "The Artists",
    description:
      "Our team is hand-selected not just for their skill, but for their passion for the craft.",
    members: [
      {
        name: "Priya S.",
        role: "Lead Nail Architect",
        specialty: "Russian Manicures & Chrome",
      },
      {
        name: "Rahul D.",
        role: "Senior Stylist",
        specialty: "Texture & Curl Architecture",
      },
      {
        name: "Meera T.",
        role: "Aesthetician",
        specialty: "Skin Barrier Restoration",
      },
    ],
  },

  location: {
    heading: "Rooted in Sector 17",
    text: "Located in the iconic Sector 17, our studio is designed to be an oasis amidst the city's pulse. Soft textures, ambient lighting, and curated music create a space where you can truly exhale.",
  },

  cta: {
    heading: "Experience Our Craft",
    cta: {
      label: "Book an Appointment",
      href: "/contact",
    } as CTA,
  },
}

import { SEOMetadata, CTA, Testimonial } from "./types"

export const homeContent = {
  seo: {
    title: "Boho Salon | Luxury Chrome Nails & Curly Hair in Chandigarh",
    description:
      "Experience Chandigarh's premier destination for luxury beauty. Specializing in bespoke chrome gel nails, expert curly hair styling, and high-end grooming in Sector 17.",
  } as SEOMetadata,

  preHeader: "Now taking NRI bridal bookings for Winter 2024",

  hero: {
    heading: "The Art of Refined Beauty",
    subheading:
      "Chandigarh’s premier destination for bespoke chrome nails, expert curly hair care, and luxury grooming.",
    cta: {
      label: "Book Your Appointment",
      href: "/contact",
    } as CTA,
  },

  brandEthos: {
    heading: "A Sanctuary of Style",
    text: "At Boho Salon, we believe beauty is a deeply personal craft. Located in the heart of Sector 17, our studio merges modern sophistication with organic warmth, offering an unparalleled experience tailored to the global citizen.",
  },

  servicesIntro: {
    heading: "Our Signature Pillars",
    services: [
      {
        title: "Chrome & Gel Artistry",
        description:
          "Intricate, lasting nail designs utilizing premium international gels.",
      },
      {
        title: "Curly Hair Expertise",
        description:
          "Specialized cutting and hydration treatments honoring natural texture.",
      },
      {
        title: "Luxury Grooming",
        description:
          "Elevated skincare and grooming rituals for the modern aesthete.",
      },
    ],
  },

  featuredArtist: {
    heading: "Meet the Masters",
    text: "Our technicians undergo rigorous international training, bringing global trends directly to Chandigarh. Precision, hygiene, and artistry define our approach.",
    cta: {
      label: "View Our Team",
      href: "/about",
    } as CTA,
  },

  marqueeLogos: [
    { src: "/placeholder-logo-1.svg", alt: "Premium Brands" },
    { src: "/placeholder-logo-2.svg", alt: "Luxury Care" },
    { src: "/placeholder-logo-3.svg", alt: "Artisan Skills" },
    { src: "/placeholder-logo-4.svg", alt: "Boho Modern" },
  ],

  spotlightNails: {
    heading: "The Chrome Standard",
    text: "Elevate your aesthetic with our signature chrome gel application. Flawless execution, mirror-like finish, and uncompromising durability.",
    cta: {
      label: "Explore Nail Services",
      href: "/services",
    } as CTA,
  },

  spotlightHair: {
    heading: "Embrace the Curl",
    text: "From tailored dry cuts to deep moisture restoration, our curly hair specialists understand the unique architecture of textured hair.",
    cta: {
      label: "Explore Hair Services",
      href: "/services",
    } as CTA,
  },

  testimonials: [
    {
      quote:
        "The only place I trust in India for my curly hair. The team at Boho understands texture perfectly.",
      name: "Aanya S.",
      location: "London, UK",
      service: "Curly Hair Cut & Spa",
    },
    {
      quote:
        "Their chrome gel nails survived a three-week wedding trip flawlessly. The hygiene standards are exceptional.",
      name: "Priya M.",
      location: "Toronto, CA",
      service: "Bridal Gel Nails",
    },
  ] as Testimonial[],

  testimonialsHeading: "Words from our clients",

  galleryHeading: "Our Work",

  midPageCTA: {
    heading: "Ready for Your Transformation?",
    cta: {
      label: "Schedule a Consultation",
      href: "/contact",
    } as CTA,
  },

  location: {
    heading: "Visit Us in Sector 17",
    address: "SCO 45-46, Sector 17C, Chandigarh 160017",
    hours: "Open Tuesday – Sunday, 10:00 AM – 8:00 PM",
  },

  brandsHeading: "Luxury Products We Use",

  faqTeaser: {
    heading: "Common Inquiries",
    faqs: [
      {
        question: "Do I need an appointment?",
        answer:
          "Yes, we operate strictly by appointment to ensure every client receives our full attention.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We kindly ask for 24 hours notice to avoid a 50% cancellation fee.",
      },
    ],
    cta: {
      label: "Read our full FAQ",
      href: "/faq",
    } as CTA,
  },

  newsletter: {
    heading: "Join the Inner Circle",
    description:
      "Exclusive access to seasonal bookings, new services, and styling guides.",
    buttonLabel: "Subscribe",
  },

  awardsHeading: "Recognized By",
  preFooterCTA: {
    heading: "Elevate Your Aesthetics",
    cta: {
      label: "Book Now",
      href: "/contact",
    } as CTA,
  },
}

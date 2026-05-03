import { CTA, LinkItem } from "./types"

export const globalContent = {
  header: {
    brand: "BOHO",
    navLinks: [
      { label: "Services", href: "/services" },
      { label: "The Experience", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ] as LinkItem[],
    cta: {
      label: "Book Now",
      href: "/contact",
    } as CTA,
  },
  footer: {
    brand: "BOHO",
    description:
      "Chandigarh’s premier destination for bespoke chrome nails, expert curly hair care, and luxury grooming.",
    socialLinks: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
    sections: [
      {
        heading: "Explore",
        links: [
          { label: "Services Menu", href: "/services" },
          { label: "The Experience", href: "/features" },
          { label: "Pricing & Tiers", href: "/pricing" },
          { label: "The Journal", href: "/blog" },
        ] as LinkItem[],
      },
      {
        heading: "Information",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ] as LinkItem[],
      },
    ],
    location: {
      heading: "Visit",
      address:
        "SCO 45-46, Sector 17C\nChandigarh 160017\n\nOpen Tuesday – Sunday\n10:00 AM – 8:00 PM",
    },
    legal: {
      copyright: "Boho Salon. All rights reserved.",
      links: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ] as LinkItem[],
    },
  },
  heroBadge: {
    rating: "4.7★",
    reviews: "800+ Reviews",
  },
}

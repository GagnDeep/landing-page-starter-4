import { siteConfig } from "./siteConfig";

export const homeContent = {
  seo: {
    title: "99 Institute | Premier Bridal Makeup & Beauty Academy in Patiala",
    description: "Experience elite makeup artistry or master your craft at 99 Institute. Patiala's top-rated destination for bespoke bridal glam and professional beauty education.",
  },
  hero: {
    headline: "Where Artistry Meets Elegance",
    subheadline: "The ultimate destination for elite bridal glam and world-class makeup education.",
    ctaPrimary: "Book an Appointment",
    ctaSecondary: "Explore the Academy",
  },
  trustBar: {
    text: "Trusted by 500+ Brides | 5.0 Star Rated Salon & Academy",
    logos: ["google", "facebook", "wedmegood", "instagram"],
  },
  corePhilosophy: {
    quote: "Beauty is not just about aesthetics; it's a profound expression of individuality and confidence.",
    author: "Navjeet, Founder",
    description: "At 99 Institute, we blend sophisticated technique with an intuitive understanding of personal style, ensuring every client and student realizes their highest potential.",
  },
  splitSalon: {
    label: "The Salon",
    headline: "Bespoke Bridal Elegance",
    description: "Step into a world of curated luxury. Our signature bridal and party makeup services are tailored to enhance your natural beauty with precision, using only the finest premium products.",
    cta: "View Salon Services",
  },
  splitAcademy: {
    label: "The Academy",
    headline: "Master Your Craft",
    description: "Transform your passion into a prestigious career. Learn cutting-edge techniques, industry secrets, and professional etiquette from top-tier artists in an immersive environment.",
    cta: "Discover the Curriculum",
  },
  founderSpotlight: {
    headline: "Meet Navjeet",
    subheadline: "Visionary Artist & Educator",
    description: "With years of profound experience in high-end bridal glam and professional education, Navjeet founded 99 Institute to create a sanctuary where luxury services and top-tier mentorship coexist.",
    signatureText: "Navjeet",
  },
  curriculumOverview: {
    headline: "Elevate Your Skillset",
    subheadline: "Comprehensive courses designed for absolute beginners and seasoned professionals alike.",
    cards: [
      { title: "Bridal Mastery", description: "Learn the secrets of flawless, long-lasting bridal glam.", icon: "crown" },
      { title: "Advanced Hairstyling", description: "Master contemporary and classic hair techniques.", icon: "scissors" },
      { title: "Professional Portfolio", description: "Build a striking portfolio that attracts premium clients.", icon: "camera" },
    ],
  },
  featuredArtists: {
    headline: "Our Rising Stars",
    subheadline: "Celebrating the exceptional talent emerging from our academy.",
  },
  bridalExperience: {
    headline: "The Bridal Journey",
    description: "From the initial consultation to the final touch-up, we provide a seamless, stress-free experience, ensuring you feel radiant, confident, and utterly glamorous on your special day.",
  },
  testimonials: {
    headline: "Words of Glamour",
    reviews: [
      { author: "Priya S.", text: "The team at 99 Institute made me feel like royalty on my wedding day. The makeup was flawless and lasted perfectly through all the ceremonies." },
      { author: "Simran K.", text: "Taking the Masterclass was the best decision of my career. The mentorship is unmatched and I now have the confidence to take high-profile bookings." },
    ]
  },
  statistics: {
    stats: [
      { number: "500+", label: "Radiant Brides" },
      { number: "50+", label: "Masterclasses" },
      { number: "5.0", label: "Star Rating" },
    ]
  },
  galleryTeaser: {
    headline: "Our Portfolio",
    cta: "View Full Gallery",
  },
  pricingTiers: {
    headline: "Invest in Excellence",
    subheadline: "Transparent pricing for unparalleled luxury and education.",
    cta: "View All Pricing",
  },
  process: {
    headline: "How It Works",
    steps: [
      { title: "Consultation", description: "Discuss your vision, style, and requirements." },
      { title: "Customization", description: "We tailor a bespoke plan, whether it's a bridal package or a curriculum." },
      { title: "Execution", description: "Experience the magic of expert artistry or comprehensive education." },
      { title: "The Reveal", description: "Step out with confidence and unparalleled glamour." },
    ]
  },
  faqTeaser: {
    headline: "Frequently Asked Questions",
    questions: [
      { q: "How far in advance should I book my bridal makeup?", a: "We recommend booking at least 3-6 months in advance to secure your dates." },
      { q: "Do I need prior experience to join the academy?", a: "No! We offer foundational courses for absolute beginners as well as advanced masterclasses." },
    ],
    cta: "Read All FAQs",
  },
  location: {
    headline: "The Studio",
    address: siteConfig.contact.address,
    phone: siteConfig.contact.phone,
    cta: "Get Directions",
  },
  newsletter: {
    headline: "The Insider List",
    description: "Subscribe for exclusive beauty tips, trend alerts, and academy news.",
    placeholder: "Enter your email address",
    cta: "Subscribe",
  },
  blogTeaser: {
    headline: "Latest Insights",
    cta: "Read the Blog",
  },
  finalCta: {
    headline: "Ready to Step into the Spotlight?",
    description: "Whether you are walking down the aisle or stepping into a new career, your journey starts here.",
    ctaPrimary: "Contact Us Today",
  },
  footer: {
    description: "Premium bridal makeup salon and professional beauty academy.",
    links: {
      services: ["Bridal Makeup", "Party Glam", "Hair Styling"],
      academy: ["Masterclass", "Beginner Courses", "Workshops"],
      company: ["About Us", "Careers", "Contact", "Blog"],
      legal: ["Terms of Service", "Privacy Policy"]
    },
    contact: {
      phone: siteConfig.contact.phone,
      address: siteConfig.contact.shortAddress,
    }
  }
};

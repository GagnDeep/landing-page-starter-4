import { PageMetadata, HeroData, CallToActionData, FAQData } from "./home";

export interface PricingItem {
  service: string;
  price: string;
  note?: string;
}

export interface MembershipTier {
  name: string;
  priceMonthly: string;
  benefits: string[];
}

export const pricingContent = {
  metadata: {
    title: "Pricing & Insurance | Perfect Smile Dental Clinic",
    description: "Transparent dental pricing, accepted insurances, and flexible financing options at Perfect Smile Dental Clinic in Chandigarh.",
  } as PageMetadata,

  hero: {
    headline: "Transparent Pricing, Accessible Care",
    subheadline: "We believe financial concerns should never stand in the way of a healthy, painless smile. We offer clear pricing and flexible payment options.",
    primaryCta: { label: "Book an Exam", href: "/contact" },
  } as HeroData,

  insurance: {
    headline: "Insurance Made Easy",
    body: "We accept most major dental insurance plans. Our dedicated patient coordinators will help you verify your benefits, file your claims, and maximize your coverage so you don't have to worry about the paperwork.",
    acceptedNetworks: ["LIC Health", "Star Health", "Max Bupa", "HDFC ERGO", "Apollo Munich", "And many more..."],
  },

  specials: {
    headline: "New Patient Welcome Offer",
    offer: "Comprehensive Exam & Digital X-Rays",
    price: "₹999",
    disclaimer: "*Valid for new patients only. Cannot be combined with insurance or other offers.",
  },

  guidelines: {
    headline: "General Pricing Guidelines",
    intro: "While every patient's needs are unique and require a customized treatment plan, here are starting prices for our most common procedures.",
    items: [
      { service: "Routine Cleaning & Polishing", price: "Starting at ₹1,500" },
      { service: "Tooth-Colored Fillings", price: "Starting at ₹1,200", note: "Per surface" },
      { service: "Painless Root Canal Treatment", price: "Starting at ₹4,000", note: "Depends on the tooth" },
      { service: "Ceramic Crowns", price: "Starting at ₹5,000" },
      { service: "Professional Teeth Whitening", price: "Starting at ₹7,000" },
    ] as PricingItem[],
    disclaimer: "Please note: These are baseline estimates. A precise quote will be provided in writing after your consultation and examination.",
  },

  financing: {
    headline: "Flexible Financing Options",
    body: "Need complex care like braces or implants? We offer convenient in-house payment plans and partner with third-party healthcare financing companies to provide 0% interest EMIs for up to 12 months.",
  },

  membership: {
    headline: "The Perfect Smile Membership Plan",
    intro: "No insurance? No problem. Our membership plan provides essential preventive care and significant discounts on all other treatments for a low annual fee.",
    tiers: [
      {
        name: "Child Plan (Under 12)",
        priceMonthly: "₹300/mo (₹3,600/yr)",
        benefits: ["2 Exams per year", "2 Cleanings per year", "Fluoride treatments", "15% off all other procedures"],
      },
      {
        name: "Adult Plan",
        priceMonthly: "₹450/mo (₹5,400/yr)",
        benefits: ["2 Exams per year", "2 Cleanings per year", "1 Set of routine X-rays", "15% off all other procedures"],
      },
    ] as MembershipTier[],
  },

  faq: {
    headline: "Financial FAQs",
    questions: [
      { question: "Do I need to pay upfront for my treatment?", answer: "We require payment at the time of service for the portion not covered by insurance. For larger treatments, we will establish a payment plan beforehand." },
      { question: "What if I don't have dental insurance?", answer: "Many of our patients don't have insurance! Our Perfect Smile Membership Plan and flexible EMI options ensure you can still afford top-quality care." },
      { question: "Are braces covered by insurance?", answer: "Coverage for orthodontics varies wildly by policy. We will gladly check your specific plan to see if pediatric or adult braces are included." },
    ] as FAQData[],
  },

  finalCta: {
    headline: "Let's discuss your custom treatment plan.",
    subheadline: "Schedule a consultation to receive a precise, transparent estimate.",
    cta: { label: "Schedule Now", href: "/contact" },
  } as CallToActionData,
};

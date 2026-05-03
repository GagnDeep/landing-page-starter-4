import { SeoMetadata, Section } from './types';

export const seo: SeoMetadata = {
  title: "Pricing & Patient Information | Dr. Bansal's Dental Care",
  description: "Transparent pricing, insurance information, and payment options for your dental care in Patiala.",
};

export const hero: Section = {
  heading: "Transparent care, no surprises.",
  subheading: "We believe you should fully understand your treatment options and their associated costs before we begin."
};

export const consultationInfo: Section = {
  heading: "General Consultation",
  content: "Your initial visit includes a comprehensive examination by Dr. Bansal, a discussion of your dental history, and a tailored treatment plan. Digital X-rays, if required, are billed separately."
};

export const insuranceAndPayment: Section = {
  heading: "Insurance & Financing",
  content: "We accept major dental insurance plans. For out-of-pocket expenses and larger treatment plans, we offer flexible payment options to ensure that exceptional dental care remains accessible."
};

export const valueProp: Section = {
  heading: "An investment in your health.",
  content: "Quality dentistry is an investment that pays off over a lifetime. We use premium, durable materials and advanced techniques to ensure that our restorative and cosmetic work lasts, saving you time and discomfort in the long run."
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const billingFaq: FaqItem[] = [
  {
    question: "Do you provide estimates before treatment?",
    answer: "Absolutely. After your consultation, we provide a detailed, itemized treatment plan outlining all costs so you can make an informed decision."
  },
  {
    question: "Are payment plans available?",
    answer: "Yes, we offer structured payment plans for extensive procedures like orthodontics and implants. Please speak to our front desk for details."
  }
];

export const bottomCta: Section = {
  heading: "Ready to discuss your treatment plan?",
  cta: {
    label: "Book a Consultation",
    href: "/contact"
  }
};

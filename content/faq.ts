import { SeoMetadata, Section } from './types';
import { FaqItem } from './pricing'; // Reusing the interface

export const seo: SeoMetadata = {
  title: "Frequently Asked Questions | Dr. Bansal's Dental Care",
  description: "Find answers to common questions about our dental services, booking procedures, and what to expect during your visit.",
};

export const hero: Section = {
  heading: "How can we help?",
  subheading: "Quick answers to the most common questions our patients ask."
};

export const generalFaq: FaqItem[] = [
  {
    question: "Are you accepting new patients?",
    answer: "Yes, we are always happy to welcome new patients to our practice in SST Nagar."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend a routine check-up and professional cleaning (scaling and polishing) every six months. However, Dr. Bansal may suggest a different schedule based on your individual oral health needs."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid ID, any previous dental records or X-rays you might have, and a list of your current medications."
  }
];

export const proceduresFaq: FaqItem[] = [
  {
    question: "Do root canals hurt?",
    answer: "Modern root canals are highly effective and relatively painless. We use advanced local anesthetics and modern endodontic techniques to ensure your comfort throughout the procedure. Most patients report it feels similar to getting a standard filling."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, when performed by a professional. Our supervised whitening treatments are safe, effective, and designed to minimize tooth sensitivity."
  },
  {
    question: "At what age should a child first visit the dentist?",
    answer: "The Indian Dental Association recommends that a child’s first dental visit should occur when their first tooth appears, or no later than their first birthday."
  }
];

export const bottomCta: Section = {
  heading: "Didn't find your answer?",
  cta: {
    label: "Contact Us directly",
    href: "/contact"
  }
};

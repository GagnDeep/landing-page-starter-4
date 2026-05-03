import { PageMetadata, FAQData, CallToActionData } from "./home";

export interface FAQCategory {
  title: string;
  faqs: FAQData[];
}

export const faqContent = {
  metadata: {
    title: "Frequently Asked Questions | Perfect Smile Dental Clinic",
    description: "Find answers to common questions about pediatric braces, painless root canals, billing, and general dental care at Perfect Smile in Chandigarh.",
  } as PageMetadata,

  hero: {
    headline: "Frequently Asked Questions",
    subheadline: "We believe in complete transparency. Here are the answers to the questions we hear most often from our patients.",
  },

  categories: [
    {
      title: "General Clinic Questions",
      faqs: [
        { question: "Are you accepting new patients?", answer: "Yes! We are always excited to welcome new individuals and families to the Perfect Smile clinic." },
        { question: "What should I bring to my first appointment?", answer: "Please bring a valid ID, your dental insurance information (if applicable), and any previous dental records or X-rays if you have them. Arriving 10 minutes early to fill out new patient forms is appreciated." },
        { question: "Where are you located and is there parking?", answer: "We are located at 123 Healthcare Sector, Chandigarh. There is ample free parking available directly in front of the clinic." },
      ],
    },
    {
      title: "Treatments & Painless Care",
      faqs: [
        { question: "Is a root canal really painless?", answer: "Yes. Using advanced rotary endodontics and highly effective local anesthesia, a root canal at our clinic feels very similar to having a routine cavity filled. We ensure you are completely numb and comfortable before beginning." },
        { question: "Are X-rays safe?", answer: "We use exclusively digital X-rays, which emit up to 90% less radiation than traditional film X-rays. They are highly safe and an essential diagnostic tool." },
        { question: "How long does a typical checkup take?", answer: "A routine checkup and cleaning usually takes about 45 to 60 minutes." },
      ],
    },
    {
      title: "Pediatric Care",
      faqs: [
        { question: "When should I bring my child for their first visit?", answer: "The American Dental Association recommends that a child visit the dentist by their first birthday, or within six months after their first tooth appears." },
        { question: "Can I stay in the room with my child?", answer: "Absolutely. We encourage parents to stay in the room, especially during initial visits, to help children feel secure and relaxed." },
        { question: "At what age do you recommend braces?", answer: "We suggest an initial orthodontic evaluation by age 7. While braces are usually applied between ages 10 and 14, early evaluation helps us spot and intercept developmental issues early." },
      ],
    },
    {
      title: "Billing & Insurance",
      faqs: [
        { question: "Do you take my insurance?", answer: "We accept most major dental insurance networks. Please call our office with your insurance details, and our team will verify your specific coverage." },
        { question: "What payment methods do you accept?", answer: "We accept cash, all major credit/debit cards, UPI, and offer financing options for larger treatments." },
      ],
    },
  ] as FAQCategory[],

  contactFallback: {
    headline: "Still Have Questions?",
    subheadline: "If you couldn't find the answer you were looking for, our friendly team is just a phone call away.",
    cta: { label: "Contact Us directly", href: "/contact" },
  } as CallToActionData,
};

import { PageContent } from "./types";

export const faqContent: PageContent = {
  seo: {
    title: "FAQ | Amil's Hair Lounge",
    description:
      "Frequently asked questions about our salon services, treatments, bookings, and policies.",
  },
  sections: {
    hero: {
      headline: "Frequently Asked Questions",
      subheading: "Everything you need to know about your visit to Amil's Hair Lounge.",
    },
    searchPrompt: {
      placeholder: "Search for a question...",
    },
    categories: {
      bookings: {
        title: "Booking & Appointments",
        faqs: [
          { q: "Do I need an appointment or do you take walk-ins?", a: "While we do accommodate walk-ins when possible, we highly recommend booking an appointment in advance to guarantee your preferred time and stylist, especially for specialized treatments and color services." },
          { q: "What is your cancellation policy?", a: "We value your time and ours. We ask for at least 24 hours' notice if you need to cancel or reschedule your appointment. Late cancellations may incur a fee." },
          { q: "How long should I expect my appointment to take?", a: "Duration varies greatly by service. A standard haircut takes about 45-60 minutes, while complex color services or specialized treatments like Keratin can take anywhere from 2 to 4 hours. We will give you a time estimate during your consultation." },
        ]
      },
      treatments: {
        title: "Specialized Treatments",
        faqs: [
          { q: "What is the difference between Hair Botox and Keratin?", a: "Hair Botox is primarily a deep conditioning and repairing treatment that restores youthfulness and shine without altering the hair's structure. Keratin is a smoothing treatment designed to eliminate frizz and straighten the hair semi-permanently." },
          { q: "Will Hair Botox change my curl pattern?", a: "No, Hair Botox will not permanently straighten your hair. It will deeply hydrate, reduce frizz, and make your natural texture much more manageable." },
          { q: "How soon after a color service can I get a smoothing treatment?", a: "We typically recommend getting your color done *before* a Keratin or Botox treatment, often in the same visit, as the treatment can actually help seal in the color. If done after, we recommend waiting at least 2 weeks." },
        ]
      },
      policies: {
        title: "Salon Policies",
        faqs: [
          { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI payments, and cash." },
          { q: "What if I am unhappy with my service?", a: "Client satisfaction is our top priority. If you are not completely satisfied, please contact us within 48 hours of your service, and we will gladly arrange a complimentary adjustment." },
        ]
      }
    },
    supportCta: {
      headline: "Still have questions?",
      body: "Our team is always here to help you find the right answers.",
      cta: { label: "Contact Support", href: "/contact" },
    },
  },
};

import { PageContent } from "./types";

export const contactContent: PageContent = {
  seo: {
    title: "Contact Us | Amil's Hair Lounge",
    description:
      "Get in touch with Amil's Hair Lounge in Leela Bhawan, Patiala. Book your appointment, ask a question, or find directions to our premium salon.",
  },
  sections: {
    hero: {
      headline: "Get in Touch",
      subheading: "We're here to help you begin your transformation.",
    },
    details: {
      phone: { title: "Phone", value: "+91 98765 43210", link: "tel:+919876543210" },
      email: { title: "Email", value: "hello@amilshairlounge.com", link: "mailto:hello@amilshairlounge.com" },
      address: { title: "Address", value: "SCO 123, Leela Bhawan Market, Patiala, Punjab 147001" },
      social: { title: "Social", instagram: "@AmilsHairLounge", facebook: "AmilsHairLounge" },
    },
    form: {
      headline: "Send us a Message",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      serviceLabel: "Service of Interest",
      messageLabel: "Your Message",
      submitLabel: "Send Message",
    },
    location: {
      headline: "Visit the Lounge",
      directionsCta: { label: "Get Directions" },
    },
    hours: {
      headline: "Opening Hours",
      weekdays: "Monday - Saturday: 10:00 AM - 8:00 PM",
      weekends: "Sunday: 11:00 AM - 7:00 PM",
    },
    faqTeaser: {
      headline: "Looking for quick answers?",
      cta: { label: "Check our FAQ", href: "/faq" },
    },
  },
};

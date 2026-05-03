import { SEOMetadata } from "./types";

export const contactContent = {
  seo: {
    title: "Contact Us | Boho Salon Chandigarh",
    description: "Book your appointment, find our location in Sector 17, or get in touch with the Boho Salon team for inquiries.",
  } as SEOMetadata,

  hero: {
    heading: "Get in Touch",
    subheading: "We're here to answer your questions and help you schedule your next visit.",
  },

  contactInfo: {
    address: {
      label: "The Studio",
      value: "SCO 45-46, Sector 17C, Chandigarh 160017",
    },
    phone: {
      label: "Call or WhatsApp",
      value: "+91 98765 43210",
    },
    email: {
      label: "General Inquiries",
      value: "hello@bohosalon.com",
    },
    hours: {
      label: "Hours of Operation",
      value: "Tuesday – Sunday: 10:00 AM – 8:00 PM\nMonday: Closed",
    },
  },

  form: {
    heading: "Send a Message",
    fields: {
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number (Optional)",
      subject: "Subject (e.g., Booking Inquiry, Bridal Package)",
      message: "How can we help you?",
    },
    submitLabel: "Send Message",
  },

  practicalInfo: {
    parking: {
      heading: "Parking",
      text: "Paid municipal parking is available directly behind the SCO block.",
    },
    transit: {
      heading: "Public Transit",
      text: "We are a 5-minute walk from the Sector 17 Bus Stand.",
    },
  },
};

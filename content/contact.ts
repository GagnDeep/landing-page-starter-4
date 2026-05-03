import { siteConfig } from "./siteConfig";

export const contactContent = {
  seo: {
    title: "Contact Us | 99 Institute",
    description: "Get in touch with 99 Institute in Patiala for bridal makeup bookings, academy enrollments, or general inquiries.",
  },
  hero: {
    headline: "Let's Connect",
    subheadline: "Whether you're planning your dream wedding or taking the first step in your beauty career, we're here for you.",
  },
  contactDetails: {
    cards: [
      {
        type: "Visit Us",
        icon: "map-pin",
        primaryText: siteConfig.contact.shortAddress,
        secondaryText: siteConfig.contact.address.split(',').slice(1).join(',').trim()
      },
      {
        type: "Call Us",
        icon: "phone",
        primaryText: siteConfig.contact.phone,
        secondaryText: siteConfig.contact.hours
      },
      {
        type: "Email Us",
        icon: "mail",
        primaryText: siteConfig.contact.email,
        secondaryText: "We typically reply within 24 hours"
      }
    ]
  },
  inquiryForm: {
    headline: "Send an Inquiry",
    fields: {
      intent: {
        label: "What can we help you with?",
        options: ["Bridal Booking", "Academy Enrollment", "General Inquiry"]
      },
      name: { label: "Full Name", placeholder: "Jane Doe" },
      email: { label: "Email Address", placeholder: "jane@example.com" },
      phone: { label: "Phone Number", placeholder: "+91 xxxxx xxxxx" },
      date: { label: "Event / Preferred Start Date", placeholder: "Select a date (Optional)" },
      message: { label: "Message", placeholder: "Tell us more about your needs..." }
    },
    submitButton: "Send Message"
  },
  socials: {
    headline: "Follow the Glamour",
    links: [
      { platform: "Instagram", url: siteConfig.socials.instagram.url, handle: siteConfig.socials.instagram.handle },
      { platform: "Facebook", url: siteConfig.socials.facebook.url, handle: siteConfig.socials.facebook.handle },
      { platform: "YouTube", url: siteConfig.socials.youtube.url, handle: siteConfig.socials.youtube.handle }
    ]
  }
};

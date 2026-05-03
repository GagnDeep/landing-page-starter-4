import { PageMetadata } from "./home";

export const contactContent = {
  metadata: {
    title: "Contact Us | Perfect Smile Dental Clinic",
    description: "Get in touch with Perfect Smile Dental Clinic in Chandigarh. Book an appointment, find our location, or call us for emergency dental care.",
  } as PageMetadata,

  hero: {
    headline: "Get in Touch",
    subheadline: "We're here to help you achieve the perfect smile. Reach out to schedule a visit or ask any questions.",
  },

  contactInfo: {
    phone: {
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      description: "Call us for appointments or immediate assistance.",
    },
    email: {
      label: "Email",
      value: "hello@perfectsmilechandigarh.com",
      href: "mailto:hello@perfectsmilechandigarh.com",
      description: "Send us an email and we'll reply within 24 hours.",
    },
    address: {
      label: "Address",
      value: "123 Healthcare Sector, Chandigarh, 160001",
      href: "https://maps.google.com/?q=123+Healthcare+Sector,+Chandigarh",
      description: "Conveniently located with ample free parking.",
    },
  },

  bookingForm: {
    headline: "Request an Appointment",
    labels: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Interested Service",
      serviceOptions: ["General Checkup", "Pediatric Care", "Root Canal/Restorative", "Cosmetic/Whitening", "Other"],
      date: "Preferred Date",
      message: "Additional Notes or Questions",
      submit: "Request Appointment",
    },
    successMessage: "Thank you! Your request has been received. Our team will contact you shortly to confirm your appointment time.",
  },

  operatingHours: {
    headline: "Clinic Hours",
    schedule: [
      { days: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
      { days: "Saturday", hours: "9:00 AM - 5:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },

  emergency: {
    headline: "Need Emergency Dental Care?",
    body: "Dental emergencies (like severe pain, a knocked-out tooth, or severe swelling) require immediate attention. If you are experiencing a dental emergency during our operating hours, please call us immediately and we will fit you in.",
    callOut: "Call +91 98765 43210 immediately.",
  },
};

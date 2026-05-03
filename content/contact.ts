import { SeoMetadata, Section } from './types';

export const seo: SeoMetadata = {
  title: "Contact Us & Directions | Dr. Bansal's Dental Care",
  description: "Get in touch with Dr. Bansal's Dental Care. Find our location in SST Nagar, Patiala, view our opening hours, or book an appointment online.",
};

export const hero: Section = {
  heading: "We're here for you.",
  subheading: "Reach out to schedule an appointment or ask any questions. We look forward to welcoming you to our clinic."
};

export interface ContactDetails {
  phone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pin: string;
  };
  hours: string[];
}

export const clinicInfo: ContactDetails = {
  phone: "+91 XXXXX XXXXX",
  email: "hello@bansaldentalpatiala.com",
  address: {
    line1: "SST Nagar",
    line2: "Rajpura Road",
    city: "Patiala",
    state: "Punjab",
    pin: "147001"
  },
  hours: [
    "Monday - Saturday: 10:00 AM - 2:00 PM, 4:30 PM - 8:00 PM",
    "Sunday: By Appointment Only"
  ]
};

export const emergencyInfo: Section = {
  heading: "Dental Emergency?",
  content: "If you are experiencing severe dental pain, swelling, or a knocked-out tooth, please call us immediately at our emergency number. We accommodate urgent cases as quickly as possible."
};

export const formLabels = {
  name: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  reason: "Reason for Visit",
  message: "Message (Optional)",
  submit: "Send Message"
};

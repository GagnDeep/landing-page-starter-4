import { PageContent } from "./types";

export const careersContent: PageContent = {
  seo: {
    title: "Careers | Amil's Hair Lounge",
    description:
      "Join the team at Amil's Hair Lounge. We are looking for passionate stylists and salon professionals in Patiala to grow with our affordable luxury brand.",
  },
  sections: {
    hero: {
      headline: "Join the Lounge",
      subheading: "Elevate your career in a premium, supportive, and creative environment.",
    },
    whyWorkWithUs: {
      headline: "Why Amil's?",
      body: "We believe in nurturing talent. At Amil's Hair Lounge, you aren't just an employee; you are an artisan. We provide continuous education, a beautiful workspace, and a high-end clientele that appreciates quality.",
      benefits: [
        { title: "Continuous Education", desc: "Regular workshops on the latest global techniques and product training." },
        { title: "Premium Environment", desc: "Work in the most luxurious and well-equipped salon space in Patiala." },
        { title: "Growth Opportunities", desc: "Clear paths for career advancement from Assistant to Senior Stylist." },
        { title: "Competitive Compensation", desc: "Excellent base pay plus rewarding commission structures." },
      ]
    },
    openPositions: {
      headline: "Current Openings",
      positions: [
        { title: "Senior Hair Stylist", type: "Full-Time", experience: "5+ Years" },
        { title: "Color Specialist", type: "Full-Time", experience: "3+ Years" },
        { title: "Salon Assistant", type: "Full-Time", experience: "0-2 Years" },
        { title: "Front Desk Coordinator", type: "Full/Part-Time", experience: "1+ Years in Hospitality/Retail" },
      ]
    },
    applicationForm: {
      headline: "Apply Now",
      body: "Don't see your perfect role listed? We are always open to meeting exceptional talent. Send us your details.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      positionLabel: "Position Applied For",
      portfolioLabel: "Link to Portfolio / Instagram",
      resumeLabel: "Upload Resume",
      submitLabel: "Submit Application",
    },
    testimonials: {
      headline: "Hear from our Team",
      quote: "\"Working at Amil's has completely transformed my career. The focus on high-end treatments and the support from management is unmatched in Patiala.\"",
      author: "Sarah, Senior Colorist",
    },
  },
};

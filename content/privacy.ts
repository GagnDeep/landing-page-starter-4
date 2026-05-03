import { PageMetadata } from "./home";
import { LegalSection } from "./terms";

export const privacyContent = {
  metadata: {
    title: "Privacy Policy | Perfect Smile Dental Clinic",
    description: "Privacy policy detailing how Perfect Smile Dental Clinic collects, uses, and protects your personal information.",
  } as PageMetadata,

  header: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: October 2023",
  },

  intro: "At Perfect Smile Dental Clinic, we are committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and in our clinic.",

  sections: [
    {
      heading: "1. Information We Collect",
      body: [
        "We collect information you voluntarily provide to us when you fill out forms on our website, such as appointment requests or contact inquiries. This may include your name, email address, phone number, and any health-related notes you include.",
        "We also collect standard technical data automatically when you visit our website, such as your IP address, browser type, and pages visited, through the use of cookies.",
      ],
    },
    {
      heading: "2. How We Use Your Information",
      body: [
        "We use your personal information primarily to schedule appointments, respond to your inquiries, and provide you with requested dental services.",
        "We may also use your contact information to send appointment reminders, post-treatment care instructions, or important clinic updates. You may opt out of non-essential communications at any time.",
      ],
    },
    {
      heading: "3. Data Security Measures",
      body: [
        "Protecting patient data is a top priority. We employ robust physical, electronic, and administrative safeguards to secure your personal and medical information against unauthorized access, alteration, or disclosure.",
        "While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet or method of electronic storage is 100% secure.",
      ],
    },
    {
      heading: "4. Third-Party Sharing",
      body: [
        "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties for marketing purposes.",
        "We may share your information with trusted third parties who assist us in operating our clinic (e.g., insurance providers, secure billing software, specialist referrals), provided those parties agree to keep this information confidential and comply with applicable healthcare privacy laws.",
      ],
    },
    {
      heading: "5. Patient Rights regarding Medical Records",
      body: [
        "You have the right to request access to the personal and medical information we hold about you. You may also request that we correct any inaccuracies or delete your non-medical personal data from our marketing systems.",
      ],
    },
    {
      heading: "6. Changes to this Policy",
      body: [
        "We may update this Privacy Policy periodically to reflect changes in our practices or relevant laws. We encourage you to review this page occasionally.",
      ],
    },
  ] as LegalSection[],

  contactInfo: {
    heading: "7. Contacting the Privacy Officer",
    body: "If you have questions or concerns regarding this Privacy Policy or the handling of your data, please contact our clinic directly:",
    email: "privacy@perfectsmilechandigarh.com",
    address: "123 Healthcare Sector, Chandigarh, 160001",
    phone: "+91 98765 43210",
  },
};

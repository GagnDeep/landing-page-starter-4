import { PageMetadata } from "./home";

export interface LegalSection {
  heading: string;
  body: string[];
}

export const termsContent = {
  metadata: {
    title: "Terms of Service | Perfect Smile Dental Clinic",
    description: "Terms and conditions for using the Perfect Smile Dental Clinic website.",
  } as PageMetadata,

  header: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: October 2023",
  },

  intro: "Please read these Terms of Service carefully before using the Perfect Smile Dental Clinic website. By accessing or using our website, you agree to be bound by these terms.",

  sections: [
    {
      heading: "1. Medical Disclaimer",
      body: [
        "The content provided on the Perfect Smile Dental Clinic website, including text, graphics, images, and other material, is for informational purposes only.",
        "The website is NOT a substitute for professional medical or dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.",
        "Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a dental or medical emergency, call your doctor or emergency services immediately.",
      ],
    },
    {
      heading: "2. Use of the Website",
      body: [
        "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.",
        "You may not use this website to transmit any unsolicited commercial communications or engage in any data extraction or data harvesting activities.",
      ],
    },
    {
      heading: "3. Intellectual Property",
      body: [
        "All content, logos, graphics, and design elements on this website are the property of Perfect Smile Dental Clinic or its content suppliers and are protected by applicable copyright and intellectual property laws.",
        "You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms.",
      ],
    },
    {
      heading: "4. Appointments and Communications",
      body: [
        "Requesting an appointment through our website does not guarantee the appointment time until it is confirmed by our staff via phone or email.",
        "By providing your phone number and email address, you consent to receive communications from us regarding your appointments and dental care.",
      ],
    },
    {
      heading: "5. Limitation of Liability",
      body: [
        "Perfect Smile Dental Clinic will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special or consequential loss.",
        "We make no representations or warranties in relation to this website or the information and materials provided on this website.",
      ],
    },
    {
      heading: "6. Changes to Terms",
      body: [
        "We reserve the right to modify these terms of service at any time. We will notify users of any changes by updating the 'Last Updated' date at the top of this page.",
      ],
    },
  ] as LegalSection[],

  contactInfo: {
    heading: "7. Contact Us",
    body: "If you have any questions about these Terms of Service, please contact us at:",
    email: "legal@perfectsmilechandigarh.com",
    address: "123 Healthcare Sector, Chandigarh, 160001",
  },
};

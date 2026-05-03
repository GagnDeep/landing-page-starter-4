import { PageContent } from "./types";

export const featuresContent: PageContent = {
  seo: {
    title: "Services & Treatments | Amil's Hair Lounge",
    description:
      "Explore our comprehensive range of premium salon services, specializing in hair botox, keratin treatments, expert color, and precision styling.",
  },
  sections: {
    hero: {
      headline: "Our Services",
      subheading: "Expert care tailored to your unique style and hair health.",
    },
    navigation: {
      treatments: "Treatments",
      color: "Color & Highlights",
      cuts: "Cuts & Styling",
      spa: "Spa & Add-ons",
    },
    treatments: {
      headline: "Signature Treatments",
      subheading: "Rebuild, restore, and radiate.",
      botox: {
        title: "Hair Botox",
        description: "An intensive smoothing and repairing treatment that fills in damaged areas of the cuticle. Perfect for over-processed, frizzy, or aging hair. Restores youthfulness and incredible shine.",
      },
      keratin: {
        title: "Keratin Therapy",
        description: "A transformative smoothing treatment that seals liquid keratin into the hair. Significantly reduces styling time, eliminates frizz, and provides a sleek, polished finish lasting months.",
      },
      nanoplastia: {
        title: "Nanoplastia",
        description: "An innovative, chemical-free smoothing system using nanotechnology to straight and heal hair from within, offering brilliant gloss and high resilience.",
      }
    },
    color: {
      headline: "Color & Highlights",
      subheading: "Dimension, depth, and vibrant health.",
      balayage: {
        title: "Bespoke Balayage",
        description: "Hand-painted highlights tailored to seamlessly blend with your natural base, creating a beautiful, sun-kissed dimension.",
      },
      globalColor: {
        title: "Global Color",
        description: "Rich, uniform color application from root to tip, using premium, ammonia-free options to ensure optimal hair integrity.",
      },
      colorCorrection: {
        title: "Color Correction",
        description: "Expert recalibration of unwanted tones or fixing uneven color jobs, restoring your hair to a beautiful, balanced shade safely.",
      }
    },
    cuts: {
      headline: "Cuts & Styling",
      subheading: "The foundation of a great look.",
      precisionCut: {
        title: "Precision Haircut",
        description: "A tailored cut designed to flatter your face shape and suit your lifestyle, complete with a professional blowout.",
      },
      blowout: {
        title: "Signature Blowout",
        description: "A luxurious wash and styling session that leaves you with voluminous, bouncy, and effortlessly elegant hair for days.",
      },
      eventStyling: {
        title: "Event & Bridal Styling",
        description: "Sophisticated updos, elegant waves, and intricate styling for your most important occasions.",
      }
    },
    spa: {
      headline: "Spa & Add-ons",
      subheading: "The ultimate relaxation experience.",
      hairSpa: {
        title: "Luxury Hair Spa",
        description: "A deeply relaxing, nourishing treatment combining a rejuvenating scalp massage with high-performance hydrating masks.",
      },
      scalpTreatment: {
        title: "Purifying Scalp Treatment",
        description: "An exfoliating and balancing therapy to soothe irritation, remove buildup, and promote healthy hair growth.",
      }
    },
    consultationCta: {
      headline: "Not sure what you need?",
      body: "Book a complimentary consultation with one of our expert stylists to discuss your hair goals.",
      cta: { label: "Book Consultation", href: "/contact" },
    },
  },
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: {
    name: string;
    link: string;
  };
};

export const images = {
  hero: {
    clinicInterior: {
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2800&auto=format&fit=crop",
      alt: "Pristine, modern dental clinic interior showing high-tech equipment in a sterile environment",
      width: 2800,
      height: 1867,
      credit: { name: "Daniel Frank", link: "https://unsplash.com/@daniel_frank" },
    },
    smilingPatient: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2800&auto=format&fit=crop",
      alt: "Confident patient smiling after painless dental treatment",
      width: 2800,
      height: 1867,
      credit: { name: "Josephine Bredehoft", link: "https://unsplash.com/@josephinebredehoft" },
    },
  },
  services: {
    implants: {
      src: "https://images.unsplash.com/photo-1598256989800-fea5ce5146c2?q=80&w=1200&auto=format&fit=crop",
      alt: "Macro view of high-quality dental implant model",
      width: 1200,
      height: 800,
      credit: { name: "Rudi Fargo", link: "https://unsplash.com/@rudifargo" },
    },
    endodontics: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      alt: "Dentist using surgical microscope for precise root canal therapy",
      width: 1200,
      height: 800,
      credit: { name: "Ani Kolleshi", link: "https://unsplash.com/@anikolleshi" },
    },
    cosmetic: {
      src: "https://images.unsplash.com/photo-1544507851-bc015243af96?q=80&w=1200&auto=format&fit=crop",
      alt: "Perfect smile showcasing aesthetic dentistry results",
      width: 1200,
      height: 800,
      credit: { name: "Atikah Akhtar", link: "https://unsplash.com/@atikahakhtar" },
    },
    pediatric: {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      alt: "Child smiling happily during pediatric dental checkup",
      width: 1200,
      height: 800,
      credit: { name: "Siavash Ghanbari", link: "https://unsplash.com/@siavashghanbari" },
    },
  },
  about: {
    teamShot: {
      src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=2400&auto=format&fit=crop",
      alt: "Dr. Abhishek Tayal and Dr. Suruchi with their expert clinical team",
      width: 2400,
      height: 1600,
      credit: { name: "Bruno Rodrigues", link: "https://unsplash.com/@bruno_n_rodrigues" },
    },
    clinicLounge: {
      src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2400&auto=format&fit=crop",
      alt: "Comfortable and reassuring patient lounge at Dental Lifeline Clinic",
      width: 2400,
      height: 1600,
      credit: { name: "Ani Kolleshi", link: "https://unsplash.com/@anikolleshi" },
    },
    sterilizationRoom: {
      src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=2400&auto=format&fit=crop",
      alt: "Advanced hospital-grade sterilization equipment at Dental Lifeline Clinic",
      width: 2400,
      height: 1600,
      credit: { name: "National Cancer Institute", link: "https://unsplash.com/@nci" },
    },
  },
  blog: {
    placeholder1: {
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
      alt: "Dental tools arranged neatly on a sterile tray",
      width: 1200,
      height: 800,
      credit: { name: "Diana Polekhina", link: "https://unsplash.com/@diana_pole" },
    },
    placeholder2: {
      src: "https://images.unsplash.com/photo-1598256989800-fea5ce5146c2?q=80&w=1200&auto=format&fit=crop",
      alt: "Close up of modern dental equipment",
      width: 1200,
      height: 800,
      credit: { name: "Rudi Fargo", link: "https://unsplash.com/@rudifargo" },
    },
    placeholder3: {
      src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
      alt: "Smiling person looking confident outdoors",
      width: 1200,
      height: 800,
      credit: { name: "Vince Fleming", link: "https://unsplash.com/@vincefleming" },
    },
  }
} as const;

export type ImageRegistryKey = keyof typeof images;

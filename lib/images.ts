export interface ImageConfig {
  src: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

export type ImageKey =
  | 'heroClinic'
  | 'drBansalHeadshot'
  | 'pediatricCare'
  | 'cosmeticSmile'
  | 'clinicInterior'
  | 'dentalTools'
  | 'happyPatient';

export const images: Record<ImageKey, ImageConfig> = {
  heroClinic: {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern, clean dental clinic waiting area with warm lighting',
    photographer: 'Daniel Frank',
    photographerUrl: 'https://unsplash.com/@daniel_frank'
  },
  drBansalHeadshot: {
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    alt: 'Friendly professional dentist in a clinical setting',
    photographer: 'Ani Kolleshi',
    photographerUrl: 'https://unsplash.com/@anikolleshi'
  },
  pediatricCare: {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Child smiling happily in a dental chair',
    photographer: 'Caroline Hernandez',
    photographerUrl: 'https://unsplash.com/@carolinehernandez'
  },
  cosmeticSmile: {
    src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    alt: 'Close up of a bright, healthy, and natural smile',
    photographer: 'Lesly Juarez',
    photographerUrl: 'https://unsplash.com/@jblesly'
  },
  clinicInterior: {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80',
    alt: 'High-tech, comfortable modern dental operating room',
    photographer: 'Jonathan Borba',
    photographerUrl: 'https://unsplash.com/@jonathanborba'
  },
  dentalTools: {
    src: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sterile, modern dental examination tools on a tray',
    photographer: 'Daniel Frank',
    photographerUrl: 'https://unsplash.com/@daniel_frank'
  },
  happyPatient: {
    src: 'https://images.unsplash.com/photo-1536622285121-69212dbd11a6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Patient having a relaxed and positive conversation with dental staff',
    photographer: 'National Cancer Institute',
    photographerUrl: 'https://unsplash.com/@nci'
  }
};

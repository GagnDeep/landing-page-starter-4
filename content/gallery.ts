export interface GalleryItem {
  city: string
  size: string
  type: string
  a: string
}

export const gallery: GalleryItem[] = [
  { city: "Patiala", size: "5 kW", type: "Residential", a: "4/5" },
  { city: "Sangrur", size: "10 kW", type: "Farm pump", a: "1/1" },
  { city: "Ludhiana", size: "25 kW", type: "Factory rooftop", a: "5/4" },
  { city: "Amritsar", size: "3 kW", type: "Residential", a: "4/5" },
  { city: "Bathinda", size: "7.5 kW", type: "Residential + battery", a: "1/1" },
]

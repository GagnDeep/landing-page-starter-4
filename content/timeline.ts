export type TimelineIconName =
  | "book"
  | "survey"
  | "quote"
  | "forms"
  | "install"
  | "inspect"
  | "poweron"
  | "money"

export interface TimelineDay {
  d: string
  t: string
  s: string
  icon: TimelineIconName
}

export const timeline: TimelineDay[] = [
  { d: "Day 0", t: "You book", s: "Online or WhatsApp. Two clicks.", icon: "book" },
  { d: "Day 1–2", t: "Site survey", s: "Engineer, drone shot, structural check.", icon: "survey" },
  { d: "Day 3", t: "Quote locked", s: "Subsidy confirmed in writing.", icon: "quote" },
  { d: "Day 4–7", t: "Forms filed", s: "PM Surya Ghar + DISCOM.", icon: "forms" },
  { d: "Day 10–14", t: "Install", s: "Panels, inverter, earthing.", icon: "install" },
  { d: "Day 15–17", t: "PSPCL inspection", s: "Officials verify the work.", icon: "inspect" },
  { d: "Day 18–21", t: "Power-on", s: "Net-meter installed. You export to grid.", icon: "poweron" },
  { d: "Day 30–50", t: "Subsidy paid", s: "MNRE deposits straight to your bank.", icon: "money" },
]

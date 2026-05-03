import { ContactHero } from "@/components/contact/contact-hero";
import { ContactLayout } from "@/components/contact/contact-layout";
import { ContactMap } from "@/components/contact/contact-map";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactLayout />
      <ContactMap />
    </div>
  );
}

import { contactContent } from "@/content/contact";
import { PageHero } from "@/components/ui/page-hero";
import { ContactLayout, ContactMap } from "@/components/contact";

export const metadata = {
  title: contactContent.seo.title,
  description: contactContent.seo.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline={contactContent.sections.hero.headline || "Get in Touch"}
        subheading={contactContent.sections.hero.subheading}
      />
      <ContactLayout />
      <ContactMap />
    </>
  );
}

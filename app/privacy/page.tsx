import { privacyContent } from "@/content/privacy";
import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";

export const metadata = {
  title: privacyContent.seo.title,
  description: privacyContent.seo.description,
};

// Fix parser to ensure valid HTML structure without nesting block elements in <p>
function parseMarkdown(text: string) {
  let html = text.replace(/### (.*)/g, "<h3>$1</h3>");
  html = html.replace(/\n\n/g, "<br/><br/>");
  return `<div>${html}</div>`;
}

export default function PrivacyPage() {
  const content = privacyContent.sections.content;

  return (
    <>
      <PageHero
        headline={privacyContent.sections.hero.headline || "Privacy Policy"}
        subheading={privacyContent.sections.hero.subheading}
      />
      <Prose dangerouslySetInnerHTML={{ __html: parseMarkdown(content.body || "") }} />
    </>
  );
}

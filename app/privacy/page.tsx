import { privacyContent } from "@/content/privacy";
import { LegalLayout } from "@/components/legal/legal-layout";

export default function PrivacyPage() {
  return <LegalLayout content={privacyContent} />;
}

import { termsContent } from "@/content/terms";
import { LegalLayout } from "@/components/legal/legal-layout";

export default function TermsPage() {
  return <LegalLayout content={termsContent} />;
}

import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("privacy-policy");

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage slug="privacy-policy" />;
}

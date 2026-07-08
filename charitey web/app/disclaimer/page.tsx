import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("disclaimer");

export default function DisclaimerPage() {
  return <LegalDocumentPage slug="disclaimer" />;
}

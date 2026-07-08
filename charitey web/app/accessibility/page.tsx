import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("accessibility");

export default function AccessibilityPage() {
  return <LegalDocumentPage slug="accessibility" />;
}

import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("terms-and-conditions");

export default function TermsPage() {
  return <LegalDocumentPage slug="terms-and-conditions" />;
}

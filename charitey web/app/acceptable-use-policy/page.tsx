import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("acceptable-use-policy");

export default function AcceptableUsePolicyPage() {
  return <LegalDocumentPage slug="acceptable-use-policy" />;
}

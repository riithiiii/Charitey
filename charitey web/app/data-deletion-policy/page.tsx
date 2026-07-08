import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("data-deletion-policy");

export default function DataDeletionPolicyPage() {
  return <LegalDocumentPage slug="data-deletion-policy" />;
}

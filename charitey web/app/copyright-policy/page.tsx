import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("copyright-policy");

export default function CopyrightPolicyPage() {
  return <LegalDocumentPage slug="copyright-policy" />;
}

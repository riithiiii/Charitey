import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("cookie-policy");

export default function CookiePolicyPage() {
  return <LegalDocumentPage slug="cookie-policy" />;
}

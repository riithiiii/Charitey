import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("community-guidelines");

export default function CommunityGuidelinesPage() {
  return <LegalDocumentPage slug="community-guidelines" />;
}

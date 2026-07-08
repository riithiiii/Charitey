import { screenshotPaths } from "@/lib/generated/screenshots";

/**
 * Centralised asset paths for the Charitey landing page.
 * Source files live in `/Assets`; web-ready copies are in `/public`.
 */
export const assets = {
  logo: {
    /** Full lockup — marketing / Open Graph */
    normal: "/images/logo/normal-logo.png",
    /** Bird mark — navbar & footer (line art on light background) */
    mark: "/images/logo/logo-white.jpeg",
    white: "/images/logo/logo-white.jpeg",
  },
  favicon: "/favicon.png",
  screenshots: [...screenshotPaths],
  documents: {
    acceptableUse: "/acceptable-use-policy",
    accessibility: "/accessibility",
    communityGuidelines: "/community-guidelines",
    cookiePolicy: "/cookie-policy",
    copyright: "/copyright-policy",
    dataDeletion: "/data-deletion-policy",
    disclaimer: "/disclaimer",
    privacy: "/privacy-policy",
    terms: "/terms-and-conditions",
  },
  team: {
    document: "/documents/meet-the-team.docx",
  },
} as const;

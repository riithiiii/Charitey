import type { Metadata } from "next";
import { brand } from "./brand";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://charitey.com";

export const seo = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "Charitey",
    "charity app",
    "donation app",
    "mobile giving",
    "nonprofit",
    "philanthropy",
    "track donations",
    "transparent giving",
    "charitable giving",
    "donate",
  ],
  creator: brand.name,
  publisher: brand.name,
  category: "technology",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: brand.name }],
  creator: seo.creator,
  publisher: seo.publisher,
  category: seo.category,
  applicationName: brand.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: brand.name,
    title: seo.title.default,
    description: seo.description,
    images: [
      {
        url: "/images/logo/normal-logo.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title.default,
    description: seo.description,
    images: ["/images/logo/normal-logo.png"],
    creator: `@${brand.name.toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: siteUrl,
  },
  appleWebApp: {
    capable: true,
    title: brand.name,
    statusBarStyle: "default",
  },
};

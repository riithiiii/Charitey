import type { Viewport } from "next";
import { brand } from "./brand";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brand.colors.primary },
    { media: "(prefers-color-scheme: dark)", color: brand.colors.primaryDark },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

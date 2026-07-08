"use client";

import { ScreenshotCarousel } from "./ScreenshotCarousel";

export function PhoneMockup() {
  return (
    <ScreenshotCarousel
      variant="phone"
      floating
      showArrows
      autoPlayInterval={4000}
    />
  );
}

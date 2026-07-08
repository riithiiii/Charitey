import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

export function AppShowcaseSection() {
  return (
    <SectionContainer id="showcase" size="wide">
      <FadeIn>
        <SectionHeader
          eyebrow="App Showcase"
          title="See Charitey in action"
          description="A beautifully crafted experience designed to make giving feel effortless — browse, connect, and impact from anywhere."
        />
      </FadeIn>

      <FadeIn delay={0.15}>
        <ScreenshotCarousel
          variant="showcase"
          showArrows
          showDots
          enablePreview
          autoPlayInterval={4000}
        />
      </FadeIn>
    </SectionContainer>
  );
}

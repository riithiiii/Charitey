import {
  AboutSection,
  AppShowcaseSection,
  ContactSection,
  DownloadSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppShowcaseSection />
      <DownloadSection />
      <ContactSection />
    </main>
  );
}

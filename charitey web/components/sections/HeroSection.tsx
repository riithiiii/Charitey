"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { brand } from "@/config/brand";
import { PLAY_STORE_URL } from "@/config/app";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhoneMockup } from "./PhoneMockup";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-gradient-subtle pt-28 pb-24 md:min-h-screen md:pt-32 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-primary-light/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-primary-muted/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 md:gap-12 lg:grid-cols-2 lg:gap-16 md:px-8">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <FadeIn>
            <p className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-secondary/80 px-4 py-1.5 text-sm font-medium text-primary shadow-soft backdrop-blur-sm">
              Official Charitey App
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              {brand.tagline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg lg:mx-0 lg:mt-7">
              Charitey connects verified NGOs with generous donors across India.
              Discover real needs, give with confidence, and see your impact reach
              the communities who need it most — all from one beautifully simple
              mobile app.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button href={PLAY_STORE_URL} size="lg" className="w-full sm:w-auto">
                Download App
              </Button>
              <Button href="#about" variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.2}
          direction="left"
          className="flex justify-center lg:justify-end"
        >
          <PhoneMockup />
        </FadeIn>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:bottom-8"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 text-primary" />
      </motion.a>
    </section>
  );
}

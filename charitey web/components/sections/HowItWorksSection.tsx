"use client";

import { motion } from "framer-motion";
import { Building2, Gift, Heart, Search } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    icon: Building2,
    step: "01",
    title: "NGOs create requests",
    description:
      "Verified NGOs post specific resource needs — from food and clothing to medical supplies and volunteer support.",
  },
  {
    icon: Search,
    step: "02",
    title: "Donors browse requests",
    description:
      "Donors explore real needs in their area, choose causes they care about, and connect directly with organisations.",
  },
  {
    icon: Gift,
    step: "03",
    title: "Resources reach the NGO",
    description:
      "Donated goods and support are coordinated and delivered to the NGO, ready to be distributed to those in need.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Communities benefit",
    description:
      "Essential resources reach the people and communities who need them most — creating lasting, meaningful impact.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works" className="bg-primary-muted/40">
      <FadeIn>
        <SectionHeader
          eyebrow="How It Works"
          title="From need to impact in four simple steps"
          description="Charitey streamlines the entire giving journey — so generosity moves faster and reaches further."
        />
      </FadeIn>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:block md:-translate-x-px" />

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <motion.div
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1 md:text-right">
                  <div
                    className={`rounded-2xl border border-border/70 bg-secondary p-6 shadow-soft md:inline-block md:max-w-md md:text-left ${
                      index % 2 === 1 ? "md:text-right" : ""
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex shrink-0 justify-center md:w-16">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-secondary shadow-elevated"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <step.icon className="h-6 w-6" />
                  </motion.div>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, staggerItemVariants } from "@/components/ui/FadeIn";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified NGOs",
    description:
      "Every organisation on Charitey goes through a verification process, so you can give with complete confidence.",
  },
  {
    icon: HandHeart,
    title: "Easy Requests",
    description:
      "NGOs post clear, specific resource requests. Donors browse real needs and respond in just a few taps.",
  },
  {
    icon: Sparkles,
    title: "Smart Matching",
    description:
      "Intelligent matching connects the right donors with the right requests, reducing waste and maximising impact.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a growing community of givers, volunteers, and changemakers united by a shared purpose.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your data and interactions are protected with industry-standard security practices and privacy controls.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Impact",
    description:
      "Track how your contributions reach beneficiaries and see the difference your generosity makes.",
  },
];

export function FeaturesSection() {
  return (
    <SectionContainer id="features">
      <FadeIn>
        <SectionHeader
          eyebrow="Why Charitey"
          title="Everything you need to give with purpose"
          description="Purpose-built features that make charitable giving feel as good as it should — simple, secure, and deeply rewarding."
        />
      </FadeIn>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            variants={staggerItemVariants}
            whileHover={{ y: -4 }}
            className="group flex h-full flex-col rounded-2xl border border-border/70 bg-secondary p-7 shadow-soft transition-shadow duration-300 hover:border-primary/15 hover:shadow-elevated"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-secondary">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mb-2.5 text-lg font-semibold leading-snug text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted md:text-[0.9375rem]">
              {feature.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

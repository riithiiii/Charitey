import { Eye, Heart, Target, Users } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const cards = [
  {
    icon: Heart,
    title: "What Charitey Is",
    description:
      "A mobile platform that bridges the gap between verified NGOs and people who want to give. Charitey makes charitable giving simple, transparent, and deeply human.",
  },
  {
    icon: Target,
    title: "Why It Exists",
    description:
      "Too often, good intentions don't reach the right hands. Charitey was built to remove friction, build trust, and ensure every donation creates real, measurable impact.",
  },
  {
    icon: Users,
    title: "Who It Serves",
    description:
      "Donors seeking meaningful ways to give, NGOs working on the ground, volunteers ready to help, and communities across India who deserve dignity and support.",
  },
  {
    icon: Eye,
    title: "Mission & Vision",
    description:
      "Our mission is to make giving effortless and accountable. Our vision is a world where every act of generosity reaches those who need it — because it's we who donated.",
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-secondary">
      <FadeIn>
        <SectionHeader
          eyebrow="About Charitey"
          title="Giving made simple, transparent, and human"
          description="Charitey is more than an app — it's a movement to connect generosity with genuine need, powered by trust and technology."
        />
      </FadeIn>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {cards.map((card, index) => (
          <FadeIn key={card.title} delay={index * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-border/70 bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-elevated md:p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-secondary">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted md:text-base md:leading-relaxed">
                {card.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}

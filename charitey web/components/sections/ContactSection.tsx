import { Mail } from "lucide-react";
import { contact, getContactMailto } from "@/config/app";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="bg-secondary">
      <FadeIn>
        <SectionHeader
          eyebrow="Contact"
          title="We'd love to hear from you"
          description="Have a question, partnership idea, or feedback? Reach out to our team — we're here to help."
        />
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className="mx-auto max-w-xl">
          <a
            href={getContactMailto()}
            className="group flex items-center gap-5 rounded-2xl border border-border/70 bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:p-8"
            aria-label={`Email Charitey at ${contact.email}`}
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-muted text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-secondary"
              aria-hidden="true"
            >
              <Mail className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-muted">Email us at</p>
              <p className="truncate text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                {contact.email}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Opens your email app with a pre-filled message
              </p>
            </div>
          </a>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}

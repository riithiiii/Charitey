import { brand } from "@/config/brand";
import { PLAY_STORE_URL } from "@/config/app";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

function GooglePlayBadge() {
  return (
    <a
      href={PLAY_STORE_URL}
      className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black px-5 py-3 text-white shadow-elevated transition-transform hover:scale-[1.02]"
      aria-label="Get Charitey on Google Play"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3.6 1.8c-.3.2-.5.6-.5 1.1v18.2c0 .5.2.9.5 1.1l.1.1 10.2-10.2v-.2L3.7 1.7l-.1.1zm12.3 8.5-2.5-2.5-8.7 8.7 10.7-6.1.5-.1zm2.8-1.6-2.2-1.3-2.8 2.8 2.8 2.8 2.2-1.3c1.2-.7 1.2-2.5 0-3.2zM5.9 2.7l8.7 8.7 2.5-2.5L5.9 2.7z"
        />
      </svg>
      <div className="text-left">
        <p className="text-[10px] uppercase leading-none tracking-wide opacity-80">
          Get it on
        </p>
        <p className="text-base font-semibold leading-tight">Google Play</p>
      </div>
    </a>
  );
}

export function DownloadSection() {
  return (
    <SectionContainer id="download" className="bg-gradient-primary text-secondary">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-16 text-center md:px-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/10 blur-2xl" />

        <FadeIn>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
            Download {brand.name}
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Start giving with purpose today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Join thousands of changemakers using Charitey to connect with verified
            NGOs and make a real difference in communities across India.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={PLAY_STORE_URL}
              variant="secondary"
              size="lg"
              className="min-w-[200px] bg-secondary text-primary hover:bg-white"
            >
              Download App
            </Button>
            <GooglePlayBadge />
          </div>

          <p className="mt-6 text-sm text-white/60">
            Available on Google Play soon.
          </p>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}

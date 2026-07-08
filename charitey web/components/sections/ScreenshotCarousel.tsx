"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

type ScreenshotCarouselProps = {
  className?: string;
  variant?: "phone" | "showcase";
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  enablePreview?: boolean;
  floating?: boolean;
};

const PHONE_WIDTH = {
  phone: "w-[260px] sm:w-[280px] lg:w-[300px]",
  showcase: "w-[240px] sm:w-[260px]",
} as const;

export function ScreenshotCarousel({
  className,
  variant = "showcase",
  autoPlayInterval = 4000,
  showArrows = true,
  showDots = true,
  enablePreview = true,
  floating = false,
}: ScreenshotCarouselProps) {
  const screenshots = assets.screenshots;
  const [current, setCurrent] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + screenshots.length) % screenshots.length;
      setCurrent(next);
    },
    [screenshots.length]
  );

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (previewOpen) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, goNext, previewOpen]);

  useEffect(() => {
    if (!previewOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewOpen(false);
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewOpen, goNext, goPrev]);

  const screenInner = (
    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-[#f8f4f5]">
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-2.5">
        {screenshots.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-2 flex items-center justify-center sm:inset-2.5"
            initial={false}
            animate={{
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1 : 0.985,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden={index !== current}
          >
            <Image
              src={src}
              alt={`Charitey app screenshot ${index + 1}`}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 260px, 300px"
              priority={index === 0}
              loading={index <= 1 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>

      {enablePreview && (
        <button
          type="button"
          className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          onClick={() => setPreviewOpen(true)}
          aria-label={`Open screenshot ${current + 1} of ${screenshots.length} in preview`}
        />
      )}
    </div>
  );

  const frame = (
    <div className={cn("relative mx-auto shrink-0", PHONE_WIDTH[variant])}>
      {variant === "phone" && (
        <>
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-primary/20 via-primary-light/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -right-6 top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          <div className="pointer-events-none absolute -left-4 bottom-16 h-20 w-20 rounded-full bg-primary-muted blur-xl" />
        </>
      )}

      <motion.div
        className={cn(
          variant === "phone" &&
            "relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground p-2 shadow-elevated",
          variant === "showcase" &&
            "relative rounded-[2.5rem] border-[5px] border-foreground/85 bg-foreground p-2 shadow-elevated",
          floating && "will-change-transform"
        )}
        animate={floating ? { y: [0, -10, 0] } : undefined}
        transition={
          floating
            ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        {variant === "phone" && (
          <div
            className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground"
            aria-hidden="true"
          />
        )}
        {screenInner}
      </motion.div>
    </div>
  );

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="flex items-center justify-center gap-4 md:gap-6"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const diff = touchStart - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) {
            if (diff > 0) {
              goNext();
            } else {
              goPrev();
            }
          }
          setTouchStart(null);
        }}
      >
        {showArrows && (
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-primary shadow-soft transition-all duration-300 hover:scale-105 hover:bg-primary-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:h-11 md:w-11"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {frame}

        {showArrows && (
          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-primary shadow-soft transition-all duration-300 hover:scale-105 hover:bg-primary-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:h-11 md:w-11"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {showDots && (
        <div
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Screenshot navigation"
        >
          {screenshots.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={current === index}
              aria-label={`Go to screenshot ${index + 1}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                current === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/25 hover:bg-primary/45"
              )}
            />
          ))}
        </div>
      )}

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot preview"
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-secondary/10 p-2 text-secondary transition-colors hover:bg-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setPreviewOpen(false)}
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-secondary/10 p-3 text-secondary transition-colors hover:bg-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:block"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              className={cn(
                "relative w-full max-w-[300px] overflow-hidden rounded-[2.5rem] border-[5px] border-secondary/20 bg-[#f8f4f5] shadow-elevated",
                "aspect-[9/19.5]"
              )}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[current]}
                alt={`Charitey app screenshot ${current + 1} preview`}
                fill
                className="object-contain p-3"
                sizes="300px"
              />
            </motion.div>

            <button
              type="button"
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-secondary/10 p-3 text-secondary transition-colors hover:bg-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:block"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

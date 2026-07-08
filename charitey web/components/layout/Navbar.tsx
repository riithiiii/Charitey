"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PLAY_STORE_URL } from "@/config/app";
import { navLinks } from "@/config/navigation";
import { useActiveSection } from "@/lib/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";

const sectionIds = navLinks.map((link) => link.href);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection([...sectionIds]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className={cn(
          "transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-primary/10 bg-secondary/75 shadow-[0_8px_32px_-8px_rgba(124,62,70,0.12)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        )}
        initial={false}
        animate={{ paddingTop: scrolled ? 0 : 12 }}
      >
        <div className="mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between gap-8 px-5 sm:px-6 md:h-[5.5rem] md:gap-10 md:px-8">
          <BrandLogo size="md" className="shrink-0" />

          <nav
            className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    isActive
                      ? "bg-primary-muted text-primary shadow-sm"
                      : "text-muted hover:bg-primary-muted/60 hover:text-primary"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button
              href={PLAY_STORE_URL}
              size="sm"
              className="min-w-[8.75rem] shadow-[0_4px_16px_-4px_rgba(124,62,70,0.35)] hover:shadow-[0_8px_24px_-6px_rgba(124,62,70,0.4)]"
            >
              Download App
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-xl p-2.5 text-primary transition-all duration-300 hover:bg-primary-muted hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-primary/10 bg-secondary/95 px-5 py-5 shadow-elevated backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          isActive
                            ? "bg-primary-muted text-primary"
                            : "text-muted hover:bg-primary-muted/70 hover:text-primary"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 border-t border-border/80 pt-5">
                <Button href={PLAY_STORE_URL} className="w-full">
                  Download App
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

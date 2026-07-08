import Link from "next/link";
import { brand } from "@/config/brand";
import { contact, getContactMailto } from "@/config/app";
import { footerLinks } from "@/config/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-foreground text-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-[minmax(0,1.5fr)_1fr_1fr] lg:gap-20">
          <div className="space-y-6 md:max-w-md">
            <BrandLogo size="md" textClassName="text-white group-hover:text-white" />
            <div className="space-y-3">
              <p className="text-lg font-medium leading-snug text-white/95">
                {brand.tagline}
              </p>
              <p className="text-sm leading-relaxed text-white/55 md:text-[0.9375rem] md:leading-relaxed">
                {brand.description}
              </p>
            </div>
            <a
              href={getContactMailto()}
              className="inline-flex items-center text-sm font-medium text-primary-light transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              {contact.email}
            </a>
          </div>

          <div className="md:pt-1">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              Explore
            </h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm leading-none text-white/55 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-1">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              Legal
            </h3>
            <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-1">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-snug text-white/55 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:mt-20 md:flex-row">
          <p className="text-center text-sm text-white/45 md:text-left">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-center text-sm text-white/45 md:text-right">
            Made with purpose. Give with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}

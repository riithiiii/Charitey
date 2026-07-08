import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  size?: "sm" | "md";
};

const sizes = {
  sm: {
    shell: "h-11 w-11",
    image: 28,
    gap: "gap-2",
    wordmark: "text-[0.8125rem] tracking-[0.18em]",
  },
  md: {
    shell: "h-[3.375rem] w-[3.375rem]",
    image: 34,
    gap: "gap-2.5",
    wordmark: "text-[0.9375rem] tracking-[0.2em] sm:text-base sm:tracking-[0.22em]",
  },
} as const;

export function BrandLogo({
  className,
  showText = true,
  textClassName,
  size = "md",
}: BrandLogoProps) {
  const config = sizes[size];

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-opacity duration-300 hover:opacity-95",
        config.gap,
        className
      )}
      aria-label={`${brand.name} home`}
    >
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(124,62,70,0.18)] ring-1 ring-primary/10 transition-all duration-300 group-hover:scale-[1.04] group-hover:shadow-[0_8px_28px_-6px_rgba(124,62,70,0.22)]",
          config.shell
        )}
      >
        <Image
          src={assets.logo.mark}
          alt=""
          width={config.image}
          height={config.image}
          className="h-[68%] w-[68%] object-contain object-center"
          priority
        />
      </span>

      {showText && (
        <span
          className={cn(
            "font-semibold uppercase leading-none transition-colors duration-300",
            config.wordmark,
            textClassName ?? "text-primary group-hover:text-primary-dark"
          )}
        >
          CHARITEY
        </span>
      )}
    </Link>
  );
}

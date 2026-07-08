import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  size?: "default" | "narrow" | "wide";
};

const sizeStyles = {
  default: "max-w-6xl",
  narrow: "max-w-4xl",
  wide: "max-w-7xl",
} as const;

export function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
  size = "default",
}: SectionContainerProps) {
  return (
    <Component id={id} className={cn("w-full", className)}>
      <div
        className={cn(
          "mx-auto w-full px-5 py-16 sm:px-6 md:px-8 md:py-24 lg:py-28",
          sizeStyles[size]
        )}
      >
        {children}
      </div>
    </Component>
  );
}

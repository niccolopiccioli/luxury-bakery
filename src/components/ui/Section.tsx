import { cn } from "@/lib/utils";
import { forwardRef, type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "champagne";
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className, id, variant = "default" },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "px-6 py-20 md:px-12 md:py-28 lg:px-20",
        variant === "champagne" && "bg-champagne",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
});

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <h2 className="font-display text-4xl font-light tracking-tight text-espresso md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-espresso/70 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

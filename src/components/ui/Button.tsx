import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type LinkHref = ComponentProps<typeof Link>["href"];

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  href?: LinkHref;
};

const variants = {
  primary:
    "bg-copper text-cream hover:bg-espresso border border-copper hover:border-espresso",
  secondary:
    "bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-cream",
  ghost: "bg-transparent text-espresso hover:text-copper underline-offset-4 hover:underline",
};

export function Button({
  variant = "primary",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide uppercase transition-colors duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

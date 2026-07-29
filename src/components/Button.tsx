import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "on-dark";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const base =
  "inline-flex items-center justify-center rounded-[var(--radius-default)] px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-150 ease-out";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-on-dark)] hover:bg-[var(--color-primary-light)] hover:shadow-[var(--shadow-hover)]",
  secondary:
    "border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-[var(--color-on-dark)]",
  "on-dark":
    "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-white hover:shadow-[var(--shadow-hover)]",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

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

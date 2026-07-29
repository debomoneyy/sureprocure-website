import Image from "next/image";
import Button from "./Button";

type CTABandProps = {
  eyebrow?: string;
  headline: string;
  supporting?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "dark" | "light";
  bgImage?: string;
  size?: "default" | "compact";
};

export default function CTABand({
  eyebrow,
  headline,
  supporting,
  ctaLabel,
  ctaHref,
  variant = "dark",
  bgImage,
  size = "default",
}: CTABandProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={`relative overflow-hidden ${size === "compact" ? "py-14 md:py-16" : "py-16 md:py-24"} ${
        isDark
          ? "bg-[var(--color-primary)] text-[var(--color-on-dark)]"
          : "bg-white text-[var(--color-text-primary)]"
      }`}
    >
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/85" aria-hidden />
        </>
      )}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {eyebrow && (
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isDark ? "text-[var(--color-accent-light)]" : "text-[var(--color-accent)]"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-3 text-2xl font-semibold md:text-4xl ${
            isDark ? "text-[var(--color-on-dark)]" : ""
          }`}
        >
          {headline}
        </h2>
        {supporting && (
          <p
            className={`mx-auto mt-4 max-w-lg text-base ${
              isDark ? "text-[var(--color-border)]" : "text-[var(--color-text-secondary)]"
            }`}
          >
            {supporting}
          </p>
        )}
        <div className="mt-8">
          <Button href={ctaHref} variant={isDark ? "on-dark" : "primary"}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

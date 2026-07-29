import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

const HEX_CLIP = "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)";

export default function Home() {
  return (
    <>
      {/* ============ SCENE 1 — HERO ============ */}
      <section className="relative -mt-16 flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-primary)] md:-mt-20 md:min-h-screen md:items-center">
        <Image
          src="/images/hero.jpg"
          alt="SureProcure-sourced industrial equipment being serviced on site"
          fill
          preload
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,15,29,0.55) 0%, rgba(6,15,29,0.35) 35%, rgba(6,15,29,0.88) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,15,29,0.75) 0%, rgba(6,15,29,0.25) 55%, transparent 85%)",
          }}
          aria-hidden
        />

        <div className="relative w-full px-6 pb-14 md:pb-0">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Procurement, Simplified
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-4 text-5xl font-extrabold leading-[1.03] text-white sm:text-6xl md:text-7xl">
                  One Partner.
                  <br />
                  Every Category.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-sm text-base text-white/80 md:text-lg">
                  Sourced, delivered, and installed — worldwide.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/request-a-quote" variant="on-dark">
                    Request a Quote
                  </Button>
                  <Link
                    href="/why-sureprocure"
                    className="inline-flex items-center gap-1.5 rounded-[var(--radius-button)] border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Explore <ArrowRight size={15} aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCENE 2 — TRUST STATEMENT (pure type, no image) ============ */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] text-[var(--color-primary)] sm:text-4xl md:text-6xl">
              Complexity isn&rsquo;t the cost of
              <span className="text-[var(--color-accent)]"> doing business.</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 flex gap-12 border-t border-[var(--color-border)] pt-10 md:mt-24 md:gap-24">
              <div>
                <p className="font-[family-name:var(--font-heading)] text-6xl font-extrabold text-[var(--color-primary)] md:text-7xl">
                  11
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Categories, one partner
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-6xl font-extrabold text-[var(--color-primary)] md:text-7xl">
                  1
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Point of contact, always
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SCENE 3 — PHOTOGRAPHY MOMENT (image-dominant, near-wordless) ============ */}
      <section className="relative h-[70svh] w-full overflow-hidden md:h-[90vh]">
        <Image
          src="/images/split-worker.jpg"
          alt="A SureProcure-sourced technician servicing industrial equipment"
          fill
          className="object-cover object-[75%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, rgba(6,15,29,0.7) 0%, transparent 45%)",
          }}
          aria-hidden
        />
        <Reveal className="absolute bottom-8 left-6 md:bottom-12 md:left-12">
          <p className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white md:text-2xl">
            Sourced. Delivered. Installed.
          </p>
        </Reveal>
      </section>

      {/* ============ SCENE 4 — CAPABILITY MOSAIC (hex wall, minimal copy) ============ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-end justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                What We Procure
              </p>
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
              >
                View all <ArrowUpRight size={14} aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* Mobile: horizontal scroll-snap strip. Desktop: static grid. Two different builds, not one reflowed. */}
          <div className="mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:mt-12 md:grid md:grid-cols-5 md:gap-x-4 md:gap-y-10 md:overflow-visible md:px-0 md:pb-0">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex w-24 shrink-0 snap-start flex-col items-center text-center md:w-auto"
                >
                  <span
                    className="flex h-20 w-20 items-center justify-center border border-[var(--color-border)] bg-[var(--color-secondary)] transition-colors duration-150 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent-tint)] md:h-24 md:w-24"
                    style={{ clipPath: HEX_CLIP }}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-3 text-[11px] font-medium leading-snug text-[var(--color-text-primary)] md:text-xs">
                    {service.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SCENE 5 — LEADERSHIP (dark, asymmetric split, monogram not photo) ============ */}
      <section className="bg-[var(--color-primary)] py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[auto_1fr] md:gap-20">
          <Reveal>
            <div
              className="flex h-40 w-40 shrink-0 items-center justify-center border border-[var(--color-accent)]/40 md:h-56 md:w-56"
              style={{ clipPath: HEX_CLIP }}
            >
              <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-accent)] md:text-6xl">
                TA
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Founder
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold text-white md:text-4xl">
                Tolu-Lope James Agibuye
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-[var(--color-border)]">
                Tolu-Lope founded SureProcure after building procurement
                infrastructure across Transport for London, the NHS, Public
                Health England, and Curo Group — experience that shaped one
                conviction: procurement should have one owner, not a dozen.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-7">
                <Button href="/leadership" variant="on-dark">
                  Learn More
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SCENE 6 — FINAL CTA (symmetric, gradient close) ============ */}
      <section
        className="relative overflow-hidden py-24 text-center md:py-36"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(199,154,59,0.12), transparent), linear-gradient(180deg, #0b1f3a 0%, #060f1d 100%)",
        }}
      >
        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Every Category. One Conversation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              Let&rsquo;s simplify your procurement.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <Button href="/request-a-quote" variant="on-dark">
                Request a Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why SureProcure",
  description:
    "SureProcure consolidates sourcing, quality control, and logistics under one accountable partner, led by procurement professionals with major UK organisation experience.",
};

export default function WhySureProcurePage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] py-20 text-[var(--color-on-dark)] md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h1 className="text-4xl font-semibold md:text-5xl">
              One Partner. <span className="accent-italic">No Compromise.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[var(--color-border)]">
              Managing multiple vendors costs time, money, and consistency.
              SureProcure removes that burden.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                The Problem
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Too Many Vendors, Too Little Consistency
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Mechanical equipment from one supplier. Electrical from
                another. IT from a third. Each relationship needs its own
                negotiation and its own quality checks.
              </p>
              <p className="mt-4 font-medium text-[var(--color-primary)]">
                SureProcure replaces all of it with a single point of
                contact, across every category.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-media)]">
              <Image
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=80"
                alt="Warehouse storage racks, representing the consolidated sourcing and logistics SureProcure manages"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
          <Reveal className="order-2 md:order-1">
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                Leadership
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                Led By Procurement Professionals
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Direct experience managing sourcing and supply chains across
                Transport for London, the NHS, Public Health England, and
                Curo Group shapes how we vet suppliers and structure
                procurement for our clients.
              </p>
              <Link
                href="/leadership"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                Read the full background <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 md:order-2">
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-media)]">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
                alt="Solar panel field, representing the infrastructure and energy projects SureProcure's leadership has sourced for"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
              Global Sourcing
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              One Network, Every Category
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              We work with a global network of suppliers, so you source
              across categories without managing individual relationships.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        headline="Work With a Partner Who Understands Procurement"
        ctaLabel="Request a Quote"
        ctaHref="/request-a-quote"
      />
    </>
  );
}

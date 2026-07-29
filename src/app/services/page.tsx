import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Procurement Services",
  description:
    "Explore SureProcure's procurement categories, from mechanical equipment to IT hardware and facility management. One partner, every category.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] py-20 text-[var(--color-on-dark)] md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h1 className="text-4xl font-semibold md:text-5xl">Our Services</h1>
            <p className="mt-4 text-[var(--color-border)]">
              One partner, many categories.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-hover)]"
                  >
                    <Icon size={28} strokeWidth={1.5} className="text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]" aria-hidden />
                    <h2 className="mt-4 text-base font-semibold text-[var(--color-primary)]">
                      {service.name}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                      {service.shortDescription}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        headline="Not Sure Which Category Fits?"
        supporting="Tell us what you need. We'll help you find the right path."
        ctaLabel="Request a Quote"
        ctaHref="/request-a-quote"
      />
    </>
  );
}

import type { Metadata } from "next";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About",
  description: "SureProcure is a procurement company based in Nigeria, helping organisations source products and services from trusted suppliers worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] py-16 text-[var(--color-on-dark)] md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">About SureProcure</h1>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[var(--color-text-secondary)]">
            SureProcure is a procurement company based in Nigeria, helping
            organisations source products and services from trusted
            suppliers worldwide. Rather than managing dozens of individual
            vendors, our clients work with a single procurement partner
            across mechanical equipment, electrical systems, IT hardware,
            facility management, staffing, and more.
          </p>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            SureProcure offers both procurement-only and procurement-plus-
            installation engagement models, with air freight and standard
            shipment logistics options, so clients can choose the approach
            that fits their timeline and their team&apos;s capacity.
          </p>
        </div>
      </section>

      <CTABand
        headline="Ready to Simplify Your Procurement?"
        ctaLabel="Request a Quote"
        ctaHref="/request-a-quote"
      />
    </>
  );
}

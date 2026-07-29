import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership behind SureProcure.",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] py-20 text-[var(--color-on-dark)] md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="mx-auto h-28 w-28 rounded-full bg-white/10" aria-hidden />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-3xl font-semibold md:text-4xl">
              Leadership
            </h1>
            <p className="mt-2 text-[var(--color-border)]">
              Chief Executive, SureProcure
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                UK Procurement Experience
              </p>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Procurement and supply chain experience from major UK public
                and private sector organisations, including Transport for
                London, the NHS, Public Health England, and Curo Group.
                Spans vendor management, supply chain quality control, and
                large-scale procurement processes, directly shaping how
                SureProcure vets suppliers and structures its service.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                Nigerian Market Experience
              </p>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Prior to founding SureProcure, roles at Melrose Publishers,
                Samsung Electronics, Simba Group of Companies, Somotex
                Nigeria Ltd, and Cloud Energy Photo Electric, gaining
                experience across regional market management and marketing
                leadership. Combined with UK procurement expertise, this
                shapes how SureProcure operates locally.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        headline="Speak With Our Team"
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}

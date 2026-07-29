import type { Metadata } from "next";
import Image from "next/image";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How SureProcure Works",
  description:
    "SureProcure's procurement process, from enquiry to delivery. Clear engagement models, logistics options, and payment terms.",
};

const steps = [
  {
    title: "Tell Us What You Need",
    body: "Submit a request through our quote form, or contact us directly. Include as much detail as you can: specifications, quantities, and timeline.",
  },
  {
    title: "We Source and Quote",
    body: "We identify suppliers matched to your requirements and provide a clear quotation, including cost and estimated timeline.",
  },
  {
    title: "You Approve and We Procure",
    body: "Once you approve the quote, we handle sourcing and logistics on your behalf.",
  },
  {
    title: "We Deliver — With Installation, If You Need It",
    body: "Choose procurement only, or procurement plus installation. For highly technical equipment, installation is carried out by your own engineering team; SureProcure is not liable for damage caused by unprofessional installation from external engineers.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-[var(--color-primary)]">
        <Image
          src="https://images.unsplash.com/photo-1640529494825-4add7eed660e?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h1 className="text-4xl font-semibold text-[var(--color-on-dark)] md:text-5xl">
              A Clear Process, From Enquiry to Delivery
            </h1>
            <p className="mt-4 text-[var(--color-border)]">
              No hidden steps. No surprise vendors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ol className="space-y-10">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="flex gap-6">
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--color-primary)]">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold">Engagement Models</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 transition-shadow duration-150 hover:shadow-[var(--shadow-hover)]">
                <h3 className="font-semibold text-[var(--color-primary)]">Procurement Only</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>We source, quote, and deliver</li>
                  <li>Your team handles installation</li>
                  <li>Best for organisations with in-house engineering capacity</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 transition-shadow duration-150 hover:shadow-[var(--shadow-hover)]">
                <h3 className="font-semibold text-[var(--color-primary)]">Procurement + Installation</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>We source, quote, deliver, and coordinate installation</li>
                  <li>Installation coordinated as part of the service</li>
                  <li>Best for organisations that want a single end-to-end partner</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="mt-16 text-2xl font-semibold">Logistics Options</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 transition-shadow duration-150 hover:shadow-[var(--shadow-hover)]">
                <h3 className="font-semibold text-[var(--color-primary)]">Air Freight</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>Faster delivery</li>
                  <li>Higher cost</li>
                  <li>Best for urgent needs</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 transition-shadow duration-150 hover:shadow-[var(--shadow-hover)]">
                <h3 className="font-semibold text-[var(--color-primary)]">Standard Shipment</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>Longer delivery window</li>
                  <li>Lower cost</li>
                  <li>Best for planned procurement</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 rounded-[var(--radius-card)] bg-[var(--color-secondary)] p-6">
              <h2 className="text-lg font-semibold text-[var(--color-primary)]">Payment Terms</h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                70% of the total cost is due upfront to initiate procurement.
                The remaining 30% is due upon completion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        headline="Ready to Start?"
        ctaLabel="Request a Quote"
        ctaHref="/request-a-quote"
      />
    </>
  );
}

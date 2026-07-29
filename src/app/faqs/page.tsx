import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about how SureProcure sources, delivers, and installs procurement categories.",
};

const groups = [
  {
    category: "General",
    items: [
      {
        q: "What does SureProcure do?",
        a: "SureProcure sources products and services across multiple procurement categories from trusted global suppliers, acting as a single procurement partner instead of many separate vendors.",
      },
      {
        q: "What categories do you procure?",
        a: "Mechanical equipment, automobile parts, electrical equipment and solar systems, CCTV and security systems, HVAC, lift installation and maintenance, gates and access control, facility management, IT procurement, and HR staffing and recruitment.",
      },
      {
        q: "Do you work with government agencies?",
        a: "Yes, alongside corporate organisations, manufacturers, and facility operators.",
      },
    ],
  },
  {
    category: "Process",
    items: [
      {
        q: "How does the quotation process work?",
        a: "You submit your requirements, we source suppliers and provide a quotation, and once approved, we handle procurement and delivery.",
      },
      {
        q: "How long does procurement take?",
        a: "Timelines vary by category and logistics option. Air freight is faster and costs more; standard shipment takes longer and costs less.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "How does payment work?",
        a: "70% of the total cost is due upfront to initiate procurement, with the remaining 30% due upon completion.",
      },
      {
        q: "Do you offer procurement-only pricing separate from installation?",
        a: "Yes. You can choose procurement only, or procurement plus installation, depending on your project.",
      },
    ],
  },
  {
    category: "Logistics",
    items: [
      {
        q: "What's the difference between air freight and standard shipment?",
        a: "Air freight is faster but costs more, and is best for urgent needs. Standard shipment costs less but takes longer, and is best for planned procurement.",
      },
      {
        q: "Can I choose my shipping method?",
        a: "Yes, you can specify your preferred logistics option when requesting a quote.",
      },
    ],
  },
  {
    category: "Installation & Liability",
    items: [
      {
        q: "Do you handle installation?",
        a: "Yes, if you choose the procurement plus installation option.",
      },
      {
        q: "Who is responsible if installation is done incorrectly?",
        a: "For highly technical equipment, installation is carried out by the client's own engineers. SureProcure is not liable for damage resulting from unprofessional installation by external engineers.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] py-16 text-[var(--color-on-dark)] md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h1 className="text-4xl font-semibold md:text-5xl">Frequently Asked Questions</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <FaqAccordion groups={groups} />
          </Reveal>
        </div>
      </section>

      <CTABand
        headline="Still Have Questions?"
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}

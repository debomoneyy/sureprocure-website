import type { Metadata } from "next";
import { Suspense } from "react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Tell SureProcure what you need. Submit your project details and receive a quotation.",
};

export default function RequestQuotePage() {
  return (
    <section className="bg-[var(--color-secondary)] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-semibold md:text-4xl">Request a Quote</h1>
        <p className="mt-3 text-[var(--color-text-secondary)]">
          Tell us what you need. We&apos;ll review your request and respond
          with a quotation or a request for more detail within 1-2 business
          days.
        </p>

        <div className="mt-10">
          <Suspense fallback={null}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

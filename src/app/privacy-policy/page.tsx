import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[var(--color-secondary)] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-semibold md:text-4xl">Privacy Policy</h1>
        <p className="mt-6 text-sm text-[var(--color-text-secondary)]">
          This page is a placeholder. Per the Phase 8 content plan, the
          Privacy Policy will be drafted once the Request a Quote form
          fields and any analytics tools are finalized, so it accurately
          describes what data is collected.
        </p>
      </div>
    </section>
  );
}

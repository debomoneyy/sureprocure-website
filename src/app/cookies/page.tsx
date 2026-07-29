import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
};

export default function CookiesPage() {
  return (
    <section className="bg-[var(--color-secondary)] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-semibold md:text-4xl">Cookie Policy</h1>
        <p className="mt-6 text-sm text-[var(--color-text-secondary)]">
          This page is a placeholder pending final legal review.
        </p>
      </div>
    </section>
  );
}

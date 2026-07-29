import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SureProcure.",
};

export default function ContactPage() {
  return (
    <section className="bg-[var(--color-secondary)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Let&apos;s Talk About What You Need
        </h1>
        <p className="mt-3 max-w-xl text-[var(--color-text-secondary)]">
          Whether you have a specific request or just want to understand how
          we work, we&apos;re here.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Contact Details
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-primary)]">
              <li>Phone: [placeholder]</li>
              <li>Email: [placeholder]</li>
              <li>Address: [placeholder]</li>
            </ul>
          </div>

          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium text-[var(--color-text-primary)]" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-white px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[var(--color-text-primary)]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-white px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[var(--color-text-primary)]" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-white px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-on-dark)] transition-colors duration-150 hover:bg-[#132a4d]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

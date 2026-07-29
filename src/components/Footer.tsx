import Link from "next/link";
import Image from "next/image";

// lucide-react no longer ships brand icons, so LinkedIn is a small inline SVG
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const explore = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Leadership", href: "/leadership" },
];

const company = [
  { label: "Why SureProcure", href: "/why-sureprocure" },
  { label: "Request a Quote", href: "/request-a-quote" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-on-dark)]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-10">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/mark-on-dark.png"
              alt="SureProcure"
              width={40}
              height={34}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-[22ch] text-sm text-[var(--color-border)]">
              One partner. Every category. Worldwide.
            </p>
            <a
              href="https://www.linkedin.com/company/sureprocure"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SureProcure on LinkedIn"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[var(--color-border)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          <nav aria-label="Explore">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-border)]">
              Explore
            </p>
            <ul className="mt-4 flex list-none flex-col gap-2 p-0">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-[var(--color-accent)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-border)]">
              Company
            </p>
            <ul className="mt-4 flex list-none flex-col gap-2 p-0">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-[var(--color-accent)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-border)]">
              Contact
            </p>
            <ul className="mt-4 flex list-none flex-col gap-2 p-0 text-sm text-[var(--color-border)]">
              <li>[phone placeholder]</li>
              <li>[email placeholder]</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[var(--color-border)] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} SureProcure.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[var(--color-accent)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-accent)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

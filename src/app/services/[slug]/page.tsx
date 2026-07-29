import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} Procurement Nigeria`,
    description: `${service.name} sourcing and procurement for Nigerian organisations. Procurement only, or procurement plus installation. Request a quote today.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const Icon = service.icon;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pb-24">
        <Reveal>
          <div className="flex items-start gap-4">
            <Icon size={40} strokeWidth={1.5} className="text-[var(--color-accent)]" aria-hidden />
            <div>
              <h1 className="text-3xl font-semibold md:text-4xl">{service.name}</h1>
              <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <Reveal delay={0.06} className="md:col-span-2">
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-[var(--color-text-secondary)]">{service.overview}</p>

            <h2 className="mt-10 text-xl font-semibold">Benefits</h2>
            <ul className="mt-3 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden />
                  <span className="text-sm text-[var(--color-text-secondary)]">{b}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold">How It Works</h2>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              You tell us what you need. We source and quote. Once approved,
              we procure and arrange delivery. Choose procurement only, or
              procurement plus installation.{" "}
              <Link href="/how-it-works" className="text-[var(--color-accent)] underline">
                See the full process.
              </Link>
            </p>

            <h2 className="mt-10 text-xl font-semibold">Typical Use Cases</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {service.useCases.map((u) => (
                <li key={u} className="text-sm text-[var(--color-text-secondary)]">
                  {u}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>

          <Reveal delay={0.12}>
          <aside>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                Related Services
              </h3>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                    >
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          </Reveal>
        </div>
      </section>

      <CTABand
        headline={`Need ${service.name}?`}
        ctaLabel="Request a Quote"
        ctaHref={`/request-a-quote?category=${service.slug}`}
      />
    </>
  );
}

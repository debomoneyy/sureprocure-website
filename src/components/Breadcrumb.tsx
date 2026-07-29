import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--color-text-secondary)]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} className="mx-1" aria-hidden />}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--color-accent)]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--color-text-primary)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

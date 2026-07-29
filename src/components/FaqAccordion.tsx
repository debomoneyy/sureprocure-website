"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };
type FaqGroup = { category: string; items: FaqItem[] };

export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.category}>
          <h2 className="text-xl font-semibold text-[var(--color-primary)]">
            {group.category}
          </h2>
          <div className="mt-4 space-y-3">
            {group.items.map((item) => {
              const key = `${group.category}-${item.q}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={key}
                  className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white"
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`shrink-0 text-[var(--color-accent)] transition-transform duration-150 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-4 text-sm text-[var(--color-text-secondary)]">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

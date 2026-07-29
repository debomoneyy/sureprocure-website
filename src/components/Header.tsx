"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/services";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why SureProcure", href: "/why-sureprocure" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only the homepage has a dark hero to be transparent over; every other
  // page starts in the "scrolled" glass state immediately.
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          transparent
            ? "bg-transparent"
            : "border-b border-white/10 bg-[var(--color-primary)]/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
          <Link href="/" aria-label="SureProcure home" className="relative z-10">
            <Image
              src="/mark-on-dark.png"
              alt="SureProcure"
              width={166}
              height={140}
              className="h-8 w-auto md:h-9"
              priority
            />
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/request-a-quote"
              className="hidden rounded-[var(--radius-button)] border border-white/30 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[var(--color-primary)] sm:inline-block"
            >
              Request a Quote
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="relative z-10 text-white"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-primary)]/[0.98] backdrop-blur-lg"
          >
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-20">
              <Image
                src="/mark-on-dark.png"
                alt="SureProcure"
                width={166}
                height={140}
                className="h-8 w-auto md:h-9"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            <nav
              className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-2 px-6 md:gap-3"
              aria-label="Primary"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-[family-name:var(--font-heading)] text-4xl font-semibold text-white transition-colors hover:text-[var(--color-accent)] md:text-6xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mx-auto w-full max-w-6xl px-6 pb-10">
              <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6 text-sm text-[var(--color-border)]">
                {services.slice(0, 5).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-[var(--color-accent)]"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { asset } from "@/lib/asset";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold">
          <Image src={asset("/media/brand/logo.png")} alt="Think Audio Visual" width={32} height={32} className="h-8 w-8 rounded-full object-contain" />
          <span className="leading-tight">
            THINK AUDIO VISUAL
            <small className="block text-[0.65rem] font-medium tracking-widest text-muted uppercase">
              Durban · South Africa
            </small>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-text ${
                  pathname === l.href ? "text-text" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3.5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul className="flex flex-col gap-4 border-t border-[var(--border)] bg-surface px-6 py-5 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-muted" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavOverlay from "@/components/NavOverlay";
import ThemeToggle from "@/components/ThemeToggle";
import { asset } from "@/lib/asset";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wide text-text"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            Menu
          </button>

          <Link href="/" className="relative h-14 aspect-[12/5.5] overflow-hidden rounded-md bg-[#070708] px-1">
            <Image
              src={asset("/media/brand/logo.png")}
              alt="Think Audio Visual"
              fill
              className="scale-[1.45] object-cover"
            />
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      <NavOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}

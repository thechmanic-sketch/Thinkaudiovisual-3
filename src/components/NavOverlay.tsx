"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const items = linksRef.current?.querySelectorAll("li");
    if (!panel) return;

    if (open) {
      gsap.set(panel, { display: "flex" });
      gsap.fromTo(
        panel,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power4.inOut" }
      );
      if (items) {
        gsap.fromTo(
          items,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.7, stagger: 0.06, delay: 0.15, ease: "power4.out" }
        );
      }
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(panel, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[110] hidden flex-col bg-bg [clip-path:inset(0_0_100%_0)]"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-text"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <span className="font-display text-lg font-bold uppercase tracking-wide">
          Think Audio Visual
        </span>
        <Link
          href="/contact"
          onClick={onClose}
          className="hidden rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#06110E] sm:inline-flex"
        >
          Get a Quote
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <ul ref={linksRef} className="flex flex-col items-center gap-2 text-center">
          {links.map((l) => (
            <li key={l.href} className="overflow-hidden">
              <Link
                href={l.href}
                onClick={onClose}
                className="block font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-text transition-colors hover:text-accent sm:text-6xl"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-6 font-mono text-xs uppercase tracking-wide text-muted">
        <a href="tel:+27318111311" className="hover:text-accent">
          +27 31 811 1311
        </a>
        <a href="mailto:admin@thinkaudiovisual.co.za" className="hover:text-accent">
          admin@thinkaudiovisual.co.za
        </a>
      </div>
    </div>
  );
}

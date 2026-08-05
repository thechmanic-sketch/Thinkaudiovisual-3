"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const icons: Record<string, ReactNode> = {
  Sound: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M4 9v6h4l5 4V5L8 9H4z" strokeLinejoin="round" />
      <path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12" strokeLinecap="round" />
    </svg>
  ),
  Lighting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M9 18h6M10 21h4" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" strokeLinejoin="round" />
    </svg>
  ),
  "Stage & Rigging": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M3 20h18M5 20V8l7-4 7 4v12" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6" strokeLinejoin="round" />
    </svg>
  ),
  "Audio Visual": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  ),
};

export default function DisciplinesCarousel({
  items,
}: {
  items: { idx: string; title: string; copy: string; lines?: string[] }[];
}) {
  return (
    <section className="overflow-hidden px-6 py-24">
      <Reveal className="mx-auto mb-14 max-w-xl text-center">
        <span className="eyebrow justify-center">Four Disciplines, One Crew</span>
        <h2>Built By A Crew That Covers Everything.</h2>
        <p className="mx-auto max-w-md">
          One technical build, no handoffs between suppliers — sound, lighting, staging and AV
          run by the same crew from load-in to teardown.
        </p>
      </Reveal>

      <div
        className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((d, i) => (
          <Reveal
            key={d.title}
            delay={i * 0.06}
            className="w-[280px] shrink-0 snap-start rounded-md border border-[var(--border)] bg-surface p-8 sm:w-[320px]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] text-accent">
              {icons[d.title]}
            </div>
            <h3>{d.title}</h3>
            <p>{d.copy}</p>
            {d.lines && (
              <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
                {d.lines.map((line) => (
                  <li key={line} className="relative pl-4 text-sm text-muted">
                    <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
        <div className="w-px shrink-0" aria-hidden />
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-block rounded-full bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
        >
          See how we solve every setup
        </Link>
      </div>
    </section>
  );
}

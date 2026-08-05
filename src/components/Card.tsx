import type { ReactNode } from "react";

export default function Card({
  idx,
  title,
  children,
}: {
  idx?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
      {idx && <span className="mb-4 block font-display text-sm text-accent tracking-wide">{idx}</span>}
      <h3>{title}</h3>
      {children}
    </div>
  );
}

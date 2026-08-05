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
    <div className="border-t border-[var(--border)] pt-6 transition-colors">
      {idx && <span className="mb-4 block font-mono text-xs uppercase tracking-wide text-accent">{idx}</span>}
      <h3>{title}</h3>
      {children}
    </div>
  );
}

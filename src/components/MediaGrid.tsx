import Reveal from "@/components/Reveal";

export default function MediaGrid({ items }: { items: { cat: string; title: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m, i) => (
        <Reveal
          key={m.title + i}
          delay={(i % 6) * 0.06}
          className="relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-surface to-bg transition-transform hover:scale-[1.02] hover:border-accent"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent-glow-soft),transparent_60%)]" />
          <div className="relative z-10 p-5">
            <span className="mb-1 block text-xs uppercase tracking-wider text-accent">{m.cat}</span>
            <span className="font-semibold">{m.title}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

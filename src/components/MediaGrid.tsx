import Image from "next/image";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import { asset } from "@/lib/asset";

export default function MediaGrid({ items }: { items: { cat: string; title: string; img: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m, i) => (
        <Reveal
          key={m.title + i}
          delay={(i % 6) * 0.06}
          className="relative flex aspect-[4/3] items-end overflow-hidden rounded-md border border-[var(--border)] transition-transform hover:scale-[1.02] hover:border-accent"
        >
          <Parallax fill strength={10}>
            <Image src={asset(m.img)} alt={m.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw" />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/15 to-transparent" />
          <div className="relative z-10 p-5">
            <span className="mb-1 block font-mono text-xs uppercase tracking-wide text-accent">{m.cat}</span>
            <span className="font-bold">{m.title}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

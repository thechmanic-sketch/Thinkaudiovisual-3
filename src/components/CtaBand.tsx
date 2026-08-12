import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import { asset } from "@/lib/asset";

export default function CtaBand({
  heading,
  copy,
  primaryLabel = "Start a Booking",
}: {
  heading: string;
  copy: string;
  primaryLabel?: string;
}) {
  return (
    <section className="section-light relative overflow-hidden border-y border-[var(--border)] px-6 py-28 text-center">
      <Parallax fill strength={12}>
        <Image
          src={asset("/media/gallery/concert-stage.avif")}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </Parallax>
      <div className="absolute inset-0 bg-[var(--bg)]/85" />
      <div className="glow left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 opacity-70" />

      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <h2 className="[text-shadow:0_1px_0_rgba(255,255,255,0.6)] drop-shadow-[0_2px_24px_var(--accent-glow)]">
          {heading}
        </h2>
        <p className="mx-auto max-w-xl">{copy}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-[var(--accent-contrast)] shadow-[0_10px_30px_-8px_var(--accent-glow)] transition-transform hover:-translate-y-0.5"
          >
            {primaryLabel}
          </Link>
          <a
            href="https://wa.me/27834180085"
            target="_blank"
            rel="noopener"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-7 py-3.5 text-xs font-bold uppercase tracking-wide backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
          >
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

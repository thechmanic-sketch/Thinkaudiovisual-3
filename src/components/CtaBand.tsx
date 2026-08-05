import Link from "next/link";
import Reveal from "@/components/Reveal";

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
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-gradient-to-b from-surface to-bg px-6 py-24 text-center">
      <div className="glow left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2" />
      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <h2>{heading}</h2>
        <p className="mx-auto max-w-xl">{copy}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#06110E] transition-transform hover:-translate-y-0.5"
          >
            {primaryLabel}
          </Link>
          <a
            href="https://wa.me/27834180085"
            target="_blank"
            rel="noopener"
            className="rounded-full border border-[var(--border)] px-7 py-3.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-accent hover:text-accent"
          >
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

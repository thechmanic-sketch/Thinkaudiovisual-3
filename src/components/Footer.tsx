import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-surface px-6 py-20">
      <div className="glow -bottom-40 -left-40 h-[420px] w-[420px] opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="relative h-16 aspect-[12/5.5] overflow-hidden">
            <Image
              src={asset("/media/brand/logo.png")}
              alt="Think Audio Visual"
              fill
              className="scale-[1.45] object-cover"
            />
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-3xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl">
            {links.map((l, i) => (
              <li key={l.href} className="flex items-center gap-3">
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
                {i < links.length - 1 && <span className="text-muted">/</span>}
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-8 font-mono text-xs uppercase tracking-wide text-muted">
            <a href="tel:+27318111311" className="hover:text-accent">+27 31 811 1311</a>
            <span>78 Carnforth Avenue, Bonela, Durban, 4091</span>
            <a href="mailto:admin@thinkaudiovisual.co.za" className="hover:text-accent">admin@thinkaudiovisual.co.za</a>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-2 text-[0.7rem] text-muted">
            <span>© 2026 Think Audio Visual. All rights reserved.</span>
            <span>Privacy respected under POPIA.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

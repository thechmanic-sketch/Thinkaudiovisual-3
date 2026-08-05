import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5 font-display font-bold">
              <Image src="/media/brand/logo.png" alt="Think Audio Visual" width={28} height={28} className="h-7 w-7 rounded-full object-contain" />
              <span>THINK AUDIO VISUAL</span>
            </div>
            <p className="text-sm text-muted">
              Stage, sound, lighting and AV production for events across South Africa.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-muted hover:text-accent">About</Link></li>
              <li><Link href="/services" className="text-muted hover:text-accent">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted hover:text-accent">Portfolio</Link></li>
              <li><Link href="/gallery" className="text-muted hover:text-accent">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><a href="tel:+27318111311" className="hover:text-accent">+27 31 811 1311</a></li>
              <li><a href="https://wa.me/27834180085" className="hover:text-accent">+27 83 418 0085</a></li>
              <li><a href="mailto:admin@thinkaudiovisual.co.za" className="hover:text-accent">admin@thinkaudiovisual.co.za</a></li>
              <li>78 Carnforth Avenue, Bonela, Durban, 4091</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 border-t border-[var(--border)] pt-6 text-xs text-muted">
          <span>© 2026 Think Audio Visual. All rights reserved.</span>
          <span>Privacy respected under POPIA.</span>
        </div>
      </div>
    </footer>
  );
}

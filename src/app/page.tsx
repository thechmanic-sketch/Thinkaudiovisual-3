import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import { asset } from "@/lib/asset";

const disciplines = [
  { idx: "01 — Sound", title: "Professional Sound Systems", copy: "PA systems, live performance audio, backline, DJ'ing and conference microphones tuned to the room." },
  { idx: "02 — Lighting", title: "Lighting Design", copy: "Stage lighting, uplighting and décor lighting, designed to set the tone of your event from entrance to exit." },
  { idx: "03 — Stage", title: "Stage & Rigging", copy: "Performance stages, trussing and podium builds engineered for safety and built to spec." },
  { idx: "04 — AV", title: "Audio Visual", copy: "LED screens, projection and live streaming for conferences, meetings and brand activations." },
];

const recentWork = [
  { cat: "Corporate", title: "Ballroom Conference Setup", img: "/media/gallery/gallery-01.jpg" },
  { cat: "Live Event", title: "Concert Lighting Rig", img: "/media/gallery/concert-stage.avif" },
  { cat: "Broadcast", title: "SABC Screen Activation", img: "/media/gallery/gallery-08.jpg" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-36">
        <HeroVideo />
        <div className="glow left-1/2 top-[-220px] h-[620px] w-[620px] -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Stage · Sound · Lighting · AV</span>
            <h1>We Build Extraordinary Live Experiences.</h1>
            <p className="mb-9 max-w-xl text-lg">
              Precision-run stage, sound, lighting and AV production — built to hold up under
              pressure, from corporate galas and conferences to concerts and broadcast activations
              across South Africa.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link href="/contact" className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#06110E] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-6px_var(--accent-glow)]">Get a Quote</Link>
              <Link href="/portfolio" className="rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">View Our Work</Link>
              <a href="https://wa.me/27834180085" target="_blank" rel="noopener" className="rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">WhatsApp Us</a>
            </div>
          </div>

          <Reveal className="mt-16 grid grid-cols-2 divide-x divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)] md:grid-cols-4 md:divide-y-0">
            {[
              ["10+", "Years Experience"],
              ["200+", "Events Delivered"],
              ["50+", "Corporate Clients"],
              ["SA", "Nationwide — Guests Entertained"],
            ].map(([num, label]) => (
              <div key={label} className="bg-surface px-5 py-7 text-center">
                <div className="font-display text-3xl font-bold text-accent [text-shadow:0_0_24px_var(--accent-glow-soft)]">{num}</div>
                <div className="mt-1.5 text-sm text-muted">{label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <span className="eyebrow justify-center">What We Do</span>
            <h2>Four disciplines. One production crew.</h2>
            <p>From the screen to the speaker stack to the light rig above the stage, we handle the full technical build so your event runs without a hitch.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <Card idx={d.idx} title={d.title}>
                  <p>{d.copy}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why Clients Return</span>
            <h2>If something goes wrong, you won&apos;t know it.</h2>
            <p>
              Under the management of owner-director T. Masango, we bring over a decade of
              hands-on experience to every event — recommending the right equipment for your
              goals and building a relationship that lasts beyond one booking.
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-7">
              <p className="font-display text-xl italic text-text">
                &ldquo;Our vision is to become the most renowned professional audio visual company
                in South Africa.&rdquo;
              </p>
              <cite className="mt-2.5 block text-sm not-italic text-accent">— T. Masango, Owner &amp; Director</cite>
            </blockquote>
          </Reveal>
          <Reveal className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image
              src={asset("/media/gallery/event-onsite-1.jpg")}
              alt="Think Audio Visual crew running an event on site"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent-glow-soft),transparent_60%)]" />
            <div className="absolute bottom-6 left-6">
              <span className="mb-1 block text-xs uppercase tracking-wider text-accent">On Site</span>
              <span className="font-semibold">Running the room, start to finish</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <span className="eyebrow justify-center">Recent Work</span>
            <h2>A few rooms we&apos;ve run.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {recentWork.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08} className="relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl border border-[var(--border)] transition-transform hover:scale-[1.02]">
                <Image src={asset(m.img)} alt={m.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 90vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent-glow-soft),transparent_60%)]" />
                <div className="relative z-10 p-5">
                  <span className="mb-1 block text-xs uppercase tracking-wider text-accent">{m.cat}</span>
                  <span className="font-semibold">{m.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-11 text-center">
            <Link href="/portfolio" className="rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Tell us what's at stake. We'll make sure it runs perfectly."
        copy="Tell us your date, venue and vision — we'll put together the sound, stage, lighting and AV to match."
      />
    </>
  );
}

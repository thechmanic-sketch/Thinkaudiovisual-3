import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sound, Lighting, Staging & AV Hire Durban | Think Audio Visual Services",
  description:
    "Stage hire, professional sound systems, lighting design, LED screens, trussing and rigging, DJ equipment and full event production in Durban and South Africa.",
};

const services = [
  {
    idx: "01 — Sound",
    title: "Sound",
    copy: "Live audio and sound reinforcement for performances, functions and conferences alike.",
    items: ["PA systems", "Live performances", "Backline (bands)", "DJ'ying", "Audio recording", "Conference microphones"],
  },
  {
    idx: "02 — Lighting",
    title: "Lighting",
    copy: "Stage and decorative lighting design that sets the tone for every kind of event.",
    items: ["Stage lights", "Up lights", "Décor lights", "Disco lights"],
  },
  {
    idx: "03 — Stage & Rigging",
    title: "Stage & Rigging",
    copy: "Staging, trussing and podiums built to spec for performances, shows and formal proceedings.",
    items: ["Performance stage", "Fashion show stage", "Trussing & rigging", "Podium raising", "Main table stage"],
  },
  {
    idx: "04 — Audio Visual",
    title: "Audio Visual",
    copy: "Screens, projection and LED walls for conferences, meetings and brand activations.",
    items: ["LED screens", "Fastfold & daylight screens", "Data projectors & laptops", "Presentation aids", "Video recording & live streaming"],
  },
];

const matched = [
  { title: "Corporate Events", copy: "Data projectors, LED screens, conference microphones and live streaming for professional proceedings." },
  { title: "Festivals & Live Performances", copy: "Full PA systems, backline, stage lighting and rigging — run by a crew that knows the room." },
  { title: "Weddings", copy: "Elegant staging, uplighting and sound, tuned to the size and feel of your celebration." },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <div className="glow left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="eyebrow">Services</span>
          <h1>Full production, one crew.</h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="rounded-2xl border border-[var(--border)] bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
              <span className="mb-4 block font-display text-sm text-accent tracking-wide">{s.idx}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <ul className="mt-4 space-y-0">
                {s.items.map((item) => (
                  <li key={item} className="relative border-t border-[var(--border)] py-1.5 pl-4.5 text-sm text-muted">
                    <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_6px_var(--accent-glow)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <span className="eyebrow justify-center">Matched To Your Event</span>
            <h2>What each event usually needs.</h2>
            <p>A quick guide — every setup is still built around your specific brief.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {matched.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08} className="rounded-md border border-[var(--border)] bg-surface p-8">
                <h3>{m.title}</h3>
                <p>{m.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Tell us the event. We'll recommend the setup."
        copy="Send through your event date, venue and guest count, and we'll put together the right combination of sound, stage, lighting and AV."
      />
    </>
  );
}

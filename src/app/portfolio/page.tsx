import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MediaGrid from "@/components/MediaGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Event Portfolio & Clients | Think Audio Visual Durban",
  description:
    "See Think Audio Visual's work across corporate galas, broadcast activations, festivals and weddings in Durban and South Africa — and the clients who trust us to run their events.",
};

const items = [
  { cat: "Corporate", title: "Ballroom Conference Setup" },
  { cat: "Corporate Gala", title: "Awards Evening Staging" },
  { cat: "Live Event", title: "Concert Lighting Rig" },
  { cat: "Live Event", title: "DJ Set-Up" },
  { cat: "Outdoor Event", title: "Marquee Tent Setup" },
  { cat: "Corporate", title: "Presentation & Podium" },
  { cat: "Brand Activation", title: "Nedbank Screen Activation" },
  { cat: "Community Event", title: "Hall PA & Stage Setup" },
  { cat: "Broadcast", title: "SABC Screen Activation" },
  { cat: "Corporate Gala", title: "Stage & Podium Styling" },
  { cat: "Live Performance", title: "Theatre Stage Show" },
  { cat: "Festival", title: "Outdoor Concert Stage" },
];

export default function Portfolio() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <div className="glow left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="eyebrow">Portfolio</span>
          <h1>Every event. Zero surprises.</h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <MediaGrid items={items} />
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Trusted to run the room</span>
          <blockquote className="font-display text-xl italic text-text">
            &ldquo;Think Audio Visual handled our full conference AV without a single hiccup —
            professional, punctual and easy to work with.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm">Corporate, broadcast &amp; community.</p>
        </Reveal>
      </section>

      <CtaBand
        heading="Tell us what's at stake. We'll make sure it runs perfectly."
        copy="Tell us the date, venue and vibe — we'll handle the sound, stage, lighting and AV."
      />
    </>
  );
}

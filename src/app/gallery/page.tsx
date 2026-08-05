import type { Metadata } from "next";
import MediaGrid from "@/components/MediaGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Event Photo Gallery | Think Audio Visual Stage & Sound Setups",
  description:
    "Photo gallery of Think Audio Visual event setups — stage builds, sound systems, lighting rigs and AV production for events across South Africa.",
};

const items = [
  { cat: "Corporate Gala", title: "Stage & Podium Styling" },
  { cat: "Live Event", title: "Club Lighting Rig" },
  { cat: "Live Event", title: "DJ Set-Up" },
  { cat: "Brand Activation", title: "Nedbank Screen Activation" },
  { cat: "Community Event", title: "Hall PA & Stage Setup" },
  { cat: "Corporate", title: "Presentation & Podium" },
  { cat: "Live Performance", title: "Theatre Stage Show" },
  { cat: "Outdoor Event", title: "Marquee Tent Setup" },
  { cat: "Festival", title: "Outdoor Concert Stage" },
  { cat: "Corporate", title: "Boardroom Conferencing" },
];

export default function Gallery() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <div className="glow left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="eyebrow">Gallery</span>
          <h1>More from the rig.</h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <MediaGrid items={items} />
        </div>
      </section>

      <CtaBand
        heading="Tell us what's at stake. We'll make sure it runs perfectly."
        copy="Tell us the date, venue and vibe — we'll handle the sound, stage, lighting and AV."
      />
    </>
  );
}

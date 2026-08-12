import type { Metadata } from "next";
import Image from "next/image";
import MediaGrid from "@/components/MediaGrid";
import CtaBand from "@/components/CtaBand";
import Parallax from "@/components/Parallax";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Event Photo Gallery | Think Audio Visual Stage & Sound Setups",
  description:
    "Photo gallery of Think Audio Visual event setups — stage builds, sound systems, lighting rigs and AV production for events across South Africa.",
};

const items = [
  { cat: "Corporate Gala", title: "Stage & Podium Styling", img: "/media/gallery/gallery-08.jpg" },
  { cat: "Live Event", title: "Club Lighting Rig", img: "/media/gallery/gallery-09.jpg" },
  { cat: "Live Event", title: "DJ Set-Up", img: "/media/gallery/dj-setup.jpg" },
  { cat: "Brand Activation", title: "Nedbank Screen Activation", img: "/media/gallery/gallery-10.jpg" },
  { cat: "Community Event", title: "Hall PA & Stage Setup", img: "/media/gallery/pa-system.webp" },
  { cat: "Corporate", title: "Presentation & Podium", img: "/media/gallery/gallery-11.jpg" },
  { cat: "Live Performance", title: "Theatre Stage Show", img: "/media/gallery/stage-monitor.webp" },
  { cat: "Outdoor Event", title: "Marquee Tent Setup", img: "/media/gallery/gallery-12.jpg" },
  { cat: "Festival", title: "Outdoor Concert Stage", img: "/media/gallery/concert-stage.avif" },
  { cat: "Corporate", title: "Boardroom Conferencing", img: "/media/gallery/gallery-13.jpg" },
];

export default function Gallery() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <Parallax fill strength={14}>
          <Image
            src={asset("/media/gallery/gallery-13.jpg")}
            alt="Think Audio Visual event"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/85 to-bg" />
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

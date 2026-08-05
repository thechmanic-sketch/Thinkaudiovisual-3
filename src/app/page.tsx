import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import SplitHeadline from "@/components/SplitHeadline";
import { asset } from "@/lib/asset";

const disciplines = [
  { idx: "01", title: "Sound", copy: "PA systems, live performance audio, backline, DJ'ing and conference microphones tuned to the room." },
  { idx: "02", title: "Lighting", copy: "Stage lighting, uplighting and décor lighting, designed to set the tone of your event from entrance to exit." },
  { idx: "03", title: "Stage & Rigging", copy: "Performance stages, trussing and podium builds engineered for safety and built to spec." },
  { idx: "04", title: "Audio Visual", copy: "LED screens, projection and live streaming for conferences, meetings and brand activations." },
];

const pillTags = [
  "10+ Years Experience",
  "200+ Events Delivered",
  "Corporate & Live Events",
  "Nationwide Coverage",
];

const strip = [
  { label: "Honest Service", copy: "Skilled professionals passionate about unsurpassed quality." },
  { label: "Fair Pricing", copy: "Cost-effective solutions without cutting corners." },
  { label: "Fast Turnaround", copy: "Results in the shortest time possible, on your date." },
];

const eventTypes = [
  { title: "Corporate Events", copy: "Data projectors, LED screens, conference microphones and live streaming for professional proceedings." },
  { title: "Festivals & Live Performances", copy: "Full PA systems, backline, stage lighting and rigging — run by a crew that knows the room." },
  { title: "Weddings", copy: "Elegant staging, uplighting and sound, tuned to the size and feel of your celebration." },
  { title: "Broadcast & Brand Activations", copy: "Technical AV builds for screen activations, product launches and on-site broadcast." },
];

const recentWork = [
  { cat: "Corporate", title: "Ballroom Conference Setup", img: "/media/gallery/gallery-01.jpg" },
  { cat: "Live Event", title: "Concert Lighting Rig", img: "/media/gallery/concert-stage.avif" },
  { cat: "Broadcast", title: "SABC Screen Activation", img: "/media/gallery/gallery-08.jpg" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden px-6 pb-16 pt-36">
        <HeroVideo />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <span className="eyebrow">Where Sound Meets Engineering</span>
          <SplitHeadline className="max-w-4xl">We Build Extraordinary Live Experiences.</SplitHeadline>
          <p className="mb-8 max-w-xl text-lg">
            Precision-run stage, sound, lighting and AV production — built to hold up under
            pressure, from corporate galas and conferences to concerts and broadcast activations
            across South Africa.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/contact" className="rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#06110E] transition-transform hover:-translate-y-0.5">
              Get a Quote
            </Link>
            <Link href="/portfolio" className="rounded-full border border-[var(--border)] px-7 py-3.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-accent hover:text-accent">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Method-style section: image + pill tags + CTA — light beat */}
      <section className="section-light px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--border)]">
            <Image
              src={asset("/media/gallery/event-onsite-1.jpg")}
              alt="Think Audio Visual crew running an event on site"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">Four Disciplines, One Crew</span>
            <h2>What We Do.</h2>
            <p className="mb-6 max-w-md">
              From the screen to the speaker stack to the light rig above the stage, we handle
              the full technical build so your event runs without a hitch.
            </p>
            <div className="mb-8 flex flex-wrap gap-2.5">
              {pillTags.map((tag) => (
                <span key={tag} className="pill-tag">{tag}</span>
              ))}
            </div>
            <Link href="/services" className="rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-white">
              See Our Services
            </Link>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-6 border-t border-[var(--border)] pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <span className="mb-4 block font-mono text-xs uppercase tracking-wide text-accent">{d.idx}</span>
              <h3>{d.title}</h3>
              <p>{d.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Second full-bleed hero with 3-col strip */}
      <section className="relative overflow-hidden px-6 py-32">
        <Image
          src={asset("/media/gallery/concert-crowd.jpg")}
          alt="Think Audio Visual live event"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg/80" />
        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <h2>Think Audio Visual Is Your Technical Partner For Live Production.</h2>
          <p className="mx-auto mb-8 max-w-xl">
            Every event is treated as a technical operation, not a favour — with the focus on
            reliability, the right equipment, and results delivered on your timeline.
          </p>
          <Link href="/contact" className="inline-block rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#06110E]">
            Get a Quote
          </Link>
        </Reveal>
        <div className="relative z-10 mx-auto mt-20 grid max-w-6xl gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          {strip.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-accent">{s.label}</span>
              <p className="text-sm text-[var(--muted)]">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Light contrast section: accordion of event types */}
      <section className="section-light px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Matched To Your Event</span>
            <h2>Built Around Every Kind Of Room.</h2>
            <p className="max-w-sm">
              Cryox-grade precision, applied to stage and sound. Every setup is still built
              around your specific brief.
            </p>
            <Link href="/services" className="mt-6 inline-block rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-white">
              Applications By Event
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={eventTypes} />
          </Reveal>
        </div>
      </section>

      {/* Recent work */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <span className="eyebrow justify-center">Recent Work</span>
            <h2>A Few Rooms We&apos;ve Run.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {recentWork.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08} className="relative flex aspect-[4/3] items-end overflow-hidden rounded-md border border-[var(--border)]">
                <Image src={asset(m.img)} alt={m.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 90vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wide text-accent">{m.cat}</span>
                  <span className="font-semibold">{m.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-11 text-center">
            <Link href="/portfolio" className="rounded-full border border-[var(--border)] px-7 py-3.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-accent hover:text-accent">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Tell Us What's At Stake. We'll Make Sure It Runs Perfectly."
        copy="Tell us your date, venue and vision — we'll put together the sound, stage, lighting and AV to match."
      />
    </>
  );
}

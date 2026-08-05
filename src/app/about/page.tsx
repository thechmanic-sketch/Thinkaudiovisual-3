import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Think Audio Visual | Event Production Company Durban",
  description:
    "Meet the team behind Think Audio Visual. Owner-director T. Masango brings 10+ years of stage, sound and AV production experience to events across South Africa.",
};

const promises = [
  { idx: "01", title: "Reliable at all times", copy: "Event timelines don't wait, and neither do we." },
  { idx: "02", title: "The right gear for your goals", copy: "We achieve our clients' goals by recommending the correct equipment for their events, not just what's on the shelf." },
  { idx: "03", title: "Relationships that last", copy: "We ensure good relationships with our clients, no matter how big or small their event is." },
];

const reasons = [
  { title: "Honest, from quote to teardown", copy: "You're assured your event is handled by honest, friendly and skilled professionals who are passionate about providing unsurpassed quality service that keeps you coming back." },
  { title: "Fair pricing, without cutting corners", copy: "We find the most cost-effective solutions for ourselves and our clients, ensuring quality service at a reasonable price." },
  { title: "The right setup, within your budget", copy: "We pride ourselves on our research and planning capability, ensuring the best service possible within a particular budget." },
  { title: "Results, in the shortest time possible", copy: "We always strive to provide services that yield the desired results in the shortest possible time — because your event date isn't moving." },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <div className="glow left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="eyebrow">About Us</span>
          <h1>Ten years of getting the show right.</h1>
          <p className="text-lg">Managed by T. Masango, Owner &amp; Director.</p>
          <blockquote className="mt-6 border-l-2 border-accent pl-7">
            <p className="font-display text-xl italic text-text">
              &ldquo;To become the most renowned professional audio visual company in South
              Africa.&rdquo;
            </p>
            <cite className="mt-2.5 block text-sm not-italic text-accent">Our Vision</cite>
          </blockquote>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <span className="eyebrow justify-center">Our Promise</span>
            <h2>What we promise on every job.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Card idx={p.idx} title={p.title}>
                  <p>{p.copy}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <span className="eyebrow justify-center">Why Us</span>
            <h2>Four reasons we keep getting the call back.</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <Card title={r.title}>
                  <p>{r.copy}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="px-6 pb-24 text-center">
        <span className="eyebrow justify-center">Reach</span>
        <h2>Based in Durban. Working across Southern Africa.</h2>
      </Reveal>

      <CtaBand
        heading="Tell us what you're planning."
        copy="We'll tell you exactly what it takes to run it without a hitch — the sound, stage, lighting and AV setup built for your goals and your budget."
      />
    </>
  );
}

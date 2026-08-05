"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { idx: "01 — Sound", title: "Sound systems tuned to every room, every performance." },
  { idx: "02 — Lighting", title: "Lighting that sets the tone, from entrance to exit." },
  { idx: "03 — Stage & AV", title: "Staging, rigging and AV built to run without a hitch." },
];

export default function ServiceScroller() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const pinEl = pinRef.current;
    if (!section || !pinEl) return;

    const n = items.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: pinEl,
        scrub: true,
        onUpdate: (self) => {
          const t = self.progress * n;
          textRefs.current.forEach((el, i) => {
            if (!el) return;
            const dist = Math.abs(t - (i + 0.5));
            const opacity = Math.max(0, 1 - dist);
            el.style.opacity = String(opacity);
            el.style.transform = `translateY(${(1 - opacity) * 20}px)`;
          });
          barRefs.current.forEach((el, i) => {
            if (!el) return;
            const fill = Math.min(1, Math.max(0, t - i));
            el.style.width = `${fill * 100}%`;
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} style={{ height: `${items.length * 100}vh` }} className="relative">
      <div
        ref={pinRef}
        className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6"
      >
        <div className="glow left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-50" />

        <div className="relative z-10 mx-auto min-h-[240px] w-full max-w-4xl sm:min-h-[220px]">
          {items.map((item, i) => (
            <div
              key={item.idx}
              ref={(el) => {
                textRefs.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0"
            >
              <span className="eyebrow justify-center">{item.idx}</span>
              <h2 className="max-w-3xl">{item.title}</h2>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-14 z-10 mx-auto flex w-full max-w-xs gap-2 px-6">
          {items.map((item, i) => (
            <div key={item.idx} className="h-[3px] flex-1 overflow-hidden rounded-full bg-[var(--border)]">
              <div
                ref={(el) => {
                  barRefs.current[i] = el;
                }}
                className="h-full w-0 bg-accent"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

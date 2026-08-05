"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { asset } from "@/lib/asset";

const images = [
  "/media/gallery/event-onsite-1.jpg",
  "/media/gallery/dj-setup.jpg",
  "/media/gallery/stage-monitor.webp",
  "/media/gallery/sound-tile.jpg",
];

const CLOSED = "inset(50% 50% 50% 50%)";
const OPEN = "inset(0% 0% 0% 0%)";

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.body.style.overflow = "hidden";
    gsap.set(frameRefs.current, { clipPath: CLOSED });

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setMounted(false);
      },
    });

    images.forEach((_, i) => {
      const frame = frameRefs.current[i];
      if (!frame) return;
      tl.to(frame, { clipPath: OPEN, duration: 0.55, ease: "power3.out" })
        .to(frame, { clipPath: CLOSED, duration: 0.45, ease: "power3.in" }, "+=0.25");
    });

    tl.to(
      counter,
      {
        value: 100,
        duration: tl.duration(),
        ease: "power1.inOut",
        onUpdate: () => {
          if (countRef.current) countRef.current.textContent = String(Math.round(counter.value));
          if (barRef.current) barRef.current.style.width = `${counter.value}%`;
        },
      },
      0
    );

    // Reverse the same reveal effect, at full-screen scale, to dismiss the loader.
    tl.to(root, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.01 }, "-=0.01")
      .to(root, { clipPath: "inset(50% 50% 50% 50%)", duration: 0.85, ease: "power4.inOut" }, "+=0.1");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-bg">
      <div className="relative aspect-[3/4] w-[76vw] max-w-[340px] overflow-hidden rounded-sm border border-[var(--border)]">
        {images.map((src, i) => (
          <div
            key={src}
            ref={(el) => {
              frameRefs.current[i] = el;
            }}
            className="absolute inset-0"
          >
            <Image src={asset(src)} alt="" fill priority={i === 0} className="object-cover" sizes="340px" />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-14 flex flex-col items-center gap-4">
        <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-text">
          Think Audio Visual
        </span>
        <div className="flex items-baseline gap-1 font-mono text-text">
          <span ref={countRef}>0</span>
          <span className="text-xs text-muted">%</span>
        </div>
        <div className="h-px w-40 overflow-hidden bg-[var(--border)]">
          <div ref={barRef} className="h-full w-0 bg-accent" />
        </div>
      </div>
    </div>
  );
}

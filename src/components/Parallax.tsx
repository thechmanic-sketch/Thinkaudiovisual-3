"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Parallax({
  children,
  className,
  strength = 18,
  fill = false,
}: {
  children: ReactNode;
  className?: string;
  /** How far the layer travels, in percent of its own height, over the scroll range. */
  strength?: number;
  /** Use as an absolute inset-0 background layer inside a relative parent, instead of sizing to its own content. */
  fill?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const layer = layerRef.current;
    if (!wrap || !layer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        layer,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [strength]);

  return (
    <div
      ref={wrapRef}
      className={`${fill ? "absolute inset-0" : "relative"} overflow-hidden ${className ?? ""}`}
    >
      <div ref={layerRef} className="absolute inset-0 h-[136%] -top-[18%]">
        {children}
      </div>
    </div>
  );
}

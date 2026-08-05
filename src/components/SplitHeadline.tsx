"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function SplitHeadline({
  children,
  className,
  delay = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      split = SplitText.create(el, { type: "lines,words", mask: "lines" });
      gsap.fromTo(
        split.words,
        { yPercent: 130, rotate: 4 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          delay,
          stagger: 0.035,
          ease: "power4.out",
        }
      );
    }, ref);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [delay]);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}

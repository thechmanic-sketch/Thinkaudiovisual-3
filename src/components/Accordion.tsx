"use client";

import { useState } from "react";

export default function Accordion({
  items,
}: {
  items: { title: string; copy: string }[];
}) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <ul>
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <li key={item.title} className="border-t border-[var(--border)] last:border-b">
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg font-bold uppercase tracking-tight">
                {item.title}
              </span>
              <span
                className={`shrink-0 font-mono text-xl text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-sm">{item.copy}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };
  const stop = () => (dragging.current = false);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow eyebrow-accent">Transformation</p>
          <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
            SEE THE DIFFERENCE
          </h2>
        </Reveal>

        <Reveal delay={130} variant="zoom" className="mt-12">
          <div
            ref={trackRef}
            role="slider"
            aria-label="Before and after comparison"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stop}
            onPointerLeave={stop}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
            }}
            className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl shadow-soft md:aspect-[21/9]"
          >
            {/* AFTER (base) */}
            <Image
              src="/images/ba-after.jpg"
              alt="After — ZAQONE wrapped vehicle"
              fill
              sizes="(max-width:1360px) 100vw, 1360px"
              className="object-cover"
              draggable={false}
            />
            {/* BEFORE (clipped) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Image
                src="/images/ba-before.jpg"
                alt="Before — standard vehicle"
                fill
                sizes="(max-width:1360px) 100vw, 1360px"
                className="object-cover"
                draggable={false}
              />
            </div>

            {/* divider + handle */}
            <div className="absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden>
              <div className="absolute inset-y-0 -left-px w-[2px] bg-white" />
              <div className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent shadow-lift">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8 7l-4 5 4 5m8-10l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* labels */}
            <span className="absolute left-5 top-5 rounded-full bg-black/60 px-4 py-1.5 font-heading text-[11px] font-bold tracking-[0.2em] text-white">
              BEFORE
            </span>
            <span className="absolute right-5 top-5 rounded-full bg-accent px-4 py-1.5 font-heading text-[11px] font-bold tracking-[0.2em] text-ink">
              AFTER
            </span>
          </div>
        </Reveal>

        <Reveal delay={210}>
          <p className="mt-6 text-sm text-grey">Drag to see the transformation.</p>
        </Reveal>
      </div>
    </section>
  );
}

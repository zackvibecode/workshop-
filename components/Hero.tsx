"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Reveal from "./Reveal";
import { WA_LINK } from "@/lib/data";

// Dynamic import for 3D component (client-side only)
const Car3D = dynamic(() => import("./Car3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-ink">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent" />
        <p className="text-sm text-white/60">Loading 3D Experience...</p>
      </div>
    </div>
  ),
});

const MARQUEE = [
  "VEHICLE WRAP",
  "AUTOMOTIVE BRANDING",
  "CUSTOM GRAPHICS",
  "PRINTING",
  "INSTALLATION",
];

export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* cinematic full-bleed visual with 3D car */}
      <div className="relative h-[100svh] min-h-[36rem] w-full overflow-hidden bg-ink">
        {/* 3D Car Scene */}
        <div className="absolute inset-0">
          <Suspense
            fallback={
              <Image
                src="/images/hero-main.jpg"
                alt="Premium wrapped vehicle — ZAQONE"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            }
          >
            <Car3D />
          </Suspense>
        </div>
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* copy */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-[1360px] px-5 pb-24 sm:px-8 md:pb-0">
            <Reveal>
              <p className="eyebrow text-white/60">ZAQONE Automotive Studio</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="h-display mt-5 text-[13vw] leading-[0.95] text-white sm:text-7xl md:text-8xl">
                WE MAKE CARS
                <br />
                HARD TO <span className="text-accent">IGNORE.</span>
              </h1>
            </Reveal>
            <Reveal delay={190}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                Premium vehicle wraps, automotive branding and custom graphics
                designed to make every vehicle stand out.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#work" className="btn btn-accent">
                  Explore Projects <span className="arr">→</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                  Get a Quote <span className="arr">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="overflow-hidden border-y border-line bg-white py-4">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {MARQUEE.map((m) => (
                <span key={`${dup}-${m}`} className="flex items-center">
                  <span className="px-6 font-heading text-[13px] font-bold tracking-[0.3em] text-charcoal">
                    {m}
                  </span>
                  <span className="h-2 w-2 bg-accent" aria-hidden />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

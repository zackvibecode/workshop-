import Image from "next/image";
import Reveal from "./Reveal";
import { WA_LINK } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="relative">
      <div className="relative min-h-[32rem] w-full overflow-hidden md:h-[75vh]">
        <Image
          src="/images/cta-dark.jpg"
          alt="Your car, your identity — ZAQONE"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1360px] px-5 py-20 sm:px-8">
            <Reveal>
              <h2 className="h-display max-w-3xl text-5xl text-white sm:text-6xl md:text-7xl">
                YOUR CAR.
                <br />
                YOUR <span className="text-accent">IDENTITY.</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                Tell us what you want to create and let&apos;s bring the idea
                to life.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn btn-accent">
                  Start Your Project <span className="arr">→</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

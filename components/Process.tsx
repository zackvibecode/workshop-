import Reveal from "./Reveal";
import { PROCESS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow eyebrow-accent">Process</p>
          <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
            FROM IDEA TO ROAD
          </h2>
        </Reveal>

        {/* horizontal desktop / vertical mobile */}
        <div className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" aria-hidden />
          {PROCESS.map((p, i) => (
            <Reveal key={p.no} delay={i * 100}>
              <div className="relative flex items-start gap-5 md:block">
                <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink bg-white">
                  <span className="font-heading text-[13px] font-bold text-ink">
                    {p.no}
                  </span>
                </div>
                <div className="md:mt-6">
                  <h3 className="font-heading text-base font-bold text-ink md:text-lg">
                    {p.title}
                  </h3>
                  <div className="mt-2 hidden h-1 w-8 bg-accent md:block" aria-hidden />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

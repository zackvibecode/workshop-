import Reveal from "./Reveal";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow eyebrow-accent">Services</p>
          <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
            WHAT WE DO
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 60}>
              <div className="group grid items-baseline gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-white sm:grid-cols-[100px_1fr_auto] sm:gap-8 md:py-10">
                <span className="font-heading text-sm font-bold tracking-widest text-grey transition-colors group-hover:text-ink">
                  {s.no}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-ink transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-grey">
                    {s.desc}
                  </p>
                </div>
                <span
                  className="hidden font-heading text-2xl text-line transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent sm:block"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

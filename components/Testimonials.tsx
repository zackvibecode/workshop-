import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow eyebrow-accent">Testimonials</p>
          <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
            WHAT CLIENTS SAY
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft md:p-8">
                <p className="flex-1 leading-relaxed text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-line pt-5">
                  <p className="font-heading text-sm font-bold text-ink">
                    {t.name}
                  </p>
                  <p className="mt-1 text-[13px] text-grey">{t.vehicle}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

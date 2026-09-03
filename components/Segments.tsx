import Image from "next/image";
import Reveal from "./Reveal";
import { PERSONAL_POINTS, BUSINESS_POINTS } from "@/lib/data";

const SEGMENTS = [
  {
    title: "PERSONAL VEHICLES",
    points: PERSONAL_POINTS,
    img: "/images/seg-personal.jpg",
  },
  {
    title: "BUSINESS VEHICLES",
    points: BUSINESS_POINTS,
    img: "/images/seg-business.jpg",
  },
];

export default function Segments() {
  return (
    <section className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow eyebrow-accent">Who We Work With</p>
          <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
            BUILT FOR PERSONAL
            <br />&amp; BUSINESS
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 130} variant={i === 0 ? "left" : "right"}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-soft">
                <div className="img-reveal relative aspect-[16/10]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <h3 className="font-heading text-xl font-bold tracking-wide text-ink md:text-2xl">
                    {s.title}
                  </h3>
                  <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-charcoal">
                        <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";
import { WHY_POINTS } from "@/lib/data";

export default function Why() {
  return (
    <section id="about" className="bg-soft py-20 md:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* left — editorial copy */}
        <div>
          <Reveal variant="left">
            <p className="eyebrow eyebrow-accent">Why ZAQONE</p>
            <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
              PRECISION
              <br />
              MATTERS.
            </h2>
          </Reveal>
          <Reveal variant="left" delay={100}>
            <p className="mt-6 max-w-md leading-relaxed text-grey">
              Great vehicle branding is not just about design. The quality of
              the installation determines the final result.
            </p>
          </Reveal>
          <Reveal variant="left" delay={180}>
            <ul className="mt-10 space-y-0 border-t border-line">
              {WHY_POINTS.map((w) => (
                <li
                  key={w.no}
                  className="group flex items-center gap-6 border-b border-line py-5"
                >
                  <span className="font-heading text-sm font-bold text-grey">
                    {w.no}
                  </span>
                  <span className="font-heading text-lg font-bold text-ink transition-transform duration-300 group-hover:translate-x-2 md:text-xl">
                    {w.title}
                  </span>
                  <span className="ml-auto h-2 w-2 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* right — workshop photo */}
        <Reveal variant="right" delay={120}>
          <div className="img-reveal relative h-[24rem] rounded-2xl lg:h-full lg:min-h-[32rem]">
            <Image
              src="/images/workshop.jpg"
              alt="ZAQONE workshop — precision installation"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

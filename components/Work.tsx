import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/data";

function ProjectCard({
  p,
  aspect,
  delay,
}: {
  p: (typeof PROJECTS)[number];
  aspect: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link href={`/work/${p.slug}`} className="group block cursor-pointer">
        <div className={`img-reveal relative ${aspect} rounded-2xl`}>
          <Image
            src={p.img}
            alt={`${p.title} — ${p.type}`}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
          {/* arrow chip */}
          <span className="absolute right-5 top-5 grid h-11 w-11 translate-y-1 place-items-center rounded-full bg-white text-ink opacity-0 shadow-lift transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <p className="font-heading text-[11px] font-bold tracking-[0.25em] text-white/65">
              {p.type.toUpperCase()}
            </p>
            <h3 className="mt-1.5 font-heading text-xl font-bold text-white md:text-2xl">
              {p.title}
            </h3>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Work() {
  const [hero, a, b, wide] = PROJECTS;
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow eyebrow-accent">Selected Work</p>
            <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
              SELECTED WORK
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xs text-sm leading-relaxed text-grey">
              A selection of vehicles transformed by ZAQONE.
            </p>
          </Reveal>
        </div>

        {/* asymmetric editorial grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {/* large feature */}
          <div className="md:col-span-7">
            <ProjectCard p={hero} aspect="aspect-[4/3] md:aspect-[4/3] md:h-full" delay={0} />
          </div>
          {/* two stacked */}
          <div className="grid gap-6 md:col-span-5">
            <ProjectCard p={a} aspect="aspect-[4/3]" delay={90} />
            <ProjectCard p={b} aspect="aspect-[4/3]" delay={160} />
          </div>
          {/* wide bottom */}
          <div className="md:col-span-12">
            <ProjectCard p={wide} aspect="aspect-[16/10] md:aspect-[21/9]" delay={220} />
          </div>
        </div>
      </div>
    </section>
  );
}

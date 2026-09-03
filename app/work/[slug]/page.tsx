import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, WA_LINK } from "@/lib/data";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-ink">
        <Image
          src={project.img}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute left-0 right-0 top-0 z-10">
          <div className="mx-auto max-w-[1360px] px-5 py-8 sm:px-8">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-all hover:gap-3"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 12H5M5 12l7 7M5 12l7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>BACK TO PROJECTS</span>
            </Link>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-[1360px] px-5 pb-12 sm:px-8 md:pb-16">
            <Reveal>
              <p className="eyebrow eyebrow-accent mb-3 text-white/80">
                {project.type.toUpperCase()}
              </p>
              <h1 className="h-display text-5xl text-white md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Description */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="h-display mb-6 text-3xl text-ink md:text-4xl">
                  Project Overview
                </h2>
                <p className="text-lg leading-relaxed text-grey">
                  {project.description}
                </p>
              </Reveal>

              {/* Image Gallery */}
              <div className="mt-12 space-y-6">
                {project.gallery.map((img, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <Image
                        src={img}
                        alt={`${project.title} - Image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar - Project Details */}
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <Reveal delay={100}>
                  <div className="rounded-2xl bg-soft p-8 md:p-10">
                    <h3 className="mb-6 font-heading text-xl font-bold text-ink">
                      Project Details
                    </h3>
                    
                    <div className="space-y-5">
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-grey">
                          Vehicle
                        </p>
                        <p className="font-heading text-base font-semibold text-ink">
                          {project.details.vehicle}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-grey">
                          Service
                        </p>
                        <p className="font-heading text-base font-semibold text-ink">
                          {project.details.service}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-grey">
                          Material
                        </p>
                        <p className="font-heading text-base font-semibold text-ink">
                          {project.details.material}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-grey">
                          Duration
                        </p>
                        <p className="font-heading text-base font-semibold text-ink">
                          {project.details.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-line pt-8">
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-grey">
                        Features
                      </p>
                      <ul className="space-y-2">
                        {project.details.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-grey">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark w-full justify-center"
                      >
                        <span>Get A Quote</span>
                        <span className="arr">→</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-line bg-soft py-16 md:py-24">
          <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow eyebrow-accent mb-4">More Projects</p>
              <h2 className="h-display mb-12 text-4xl text-ink md:text-5xl">
                RELATED WORK
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((proj, idx) => (
                <Reveal key={proj.slug} delay={idx * 100}>
                  <Link href={`/work/${proj.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={proj.img}
                        alt={proj.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                      
                      <span className="absolute right-5 top-5 grid h-11 w-11 translate-y-1 place-items-center rounded-full bg-white text-ink opacity-0 shadow-lift transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/70">
                          {proj.type}
                        </p>
                        <h3 className="font-heading text-xl font-bold text-white">
                          {proj.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

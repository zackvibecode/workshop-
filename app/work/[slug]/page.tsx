import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, WA_LINK } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
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

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative">
          <div className="relative h-[72svh] min-h-[32rem] w-full overflow-hidden">
            <Image
              src={project.img}
              alt={`${project.title} — ${project.type}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-[1360px] px-5 pb-16 sm:px-8 md:pb-20">
                <Reveal>
                  <p className="eyebrow text-accent">{project.type.toUpperCase()}</p>
                  <h1 className="h-display mt-4 text-5xl text-white sm:text-6xl md:text-7xl">
                    {project.title}
                  </h1>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow eyebrow-accent">Project Overview</p>
                  <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
                    THE TRANSFORMATION
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-grey">
                    A premium {project.type.toLowerCase()} executed with precision
                    and attention to detail. ZAQONE transformed this{" "}
                    {project.title} with high-quality materials and clean finishing,
                    delivering a result that stands out on the road.
                  </p>
                </Reveal>

                <Reveal delay={120}>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                      Start Your Project <span className="arr">→</span>
                    </a>
                    <Link href="/#work" className="link-arrow">
                      Back to Projects
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={100}>
                  <div className="rounded-2xl bg-soft p-8 md:p-10">
                    <h3 className="font-heading text-xl font-bold text-ink">
                      Project Details
                    </h3>
                    <dl className="mt-6 space-y-5">
                      <div>
                        <dt className="font-heading text-[11px] font-bold tracking-[0.25em] text-grey">
                          VEHICLE
                        </dt>
                        <dd className="mt-1 font-heading text-base font-semibold text-ink">
                          {project.title}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-heading text-[11px] font-bold tracking-[0.25em] text-grey">
                          SERVICE
                        </dt>
                        <dd className="mt-1 font-heading text-base font-semibold text-ink">
                          {project.type}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-8">
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark w-full justify-center"
                      >
                        Get a Quote <span className="arr">→</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Related Work */}
        {related.length > 0 && (
          <section className="bg-soft py-20 md:py-28">
            <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
              <Reveal>
                <p className="eyebrow eyebrow-accent">More Work</p>
                <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
                  OTHER PROJECTS
                </h2>
              </Reveal>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {related.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 100}>
                    <Link href={`/work/${r.slug}`} className="group block">
                      <div className="img-reveal relative aspect-[4/3] rounded-2xl">
                        <Image
                          src={r.img}
                          alt={`${r.title} — ${r.type}`}
                          fill
                          sizes="(max-width:768px) 100vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <p className="font-heading text-[11px] font-bold tracking-[0.25em] text-white/65">
                            {r.type.toUpperCase()}
                          </p>
                          <h3 className="mt-1.5 font-heading text-xl font-bold text-white">
                            {r.title}
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
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

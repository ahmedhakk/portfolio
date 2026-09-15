import { ArrowUpRight, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-elevated/42 py-20 sm:py-28"
    >
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Frontend and full-stack delivery across production web applications."
            description="A concise view of the engineering work behind product interfaces, responsive systems, API-backed features, and production delivery."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.dates}`}
              delay={index * 0.06}
            >
              <article className="group grid grid-cols-1 gap-6 rounded-2xl border border-border bg-elevated p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift lg:grid-cols-[0.34fr_1fr]">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted">
                    <Calendar size={16} />
                    {experience.dates}
                  </div>
                  {experience.location ? (
                    <p className="mt-2 text-sm font-semibold text-muted">
                      {experience.location}
                    </p>
                  ) : null}
                  <h3 className="mt-4 text-2xl font-semibold">
                    {experience.role}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    {experience.url ? (
                      <Link
                        href={experience.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-brand-cyan"
                      >
                        {experience.company}
                        <ArrowUpRight size={16} />
                      </Link>
                    ) : (
                      <span className="font-semibold text-brand-cyan">
                        {experience.company}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {experience.context}
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-3 rounded-xl bg-surface p-4"
                      >
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-brand-teal"
                          size={18}
                        />
                        <p className="text-sm leading-6 text-muted">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-elevated px-3 py-1 text-xs font-semibold text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Languages, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { education } from "@/data/education";

export function CredentialsSection() {
  return (
    <section className="mt-16">
      <div className="container-shell">
        <Reveal>
          <div className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-elevated p-6 shadow-soft md:grid-cols-[1fr_0.7fr]">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface text-brand-teal">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                  Education
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  {education.degree}
                </h2>
                <p className="mt-2 text-muted">{education.focus}</p>
                <p className="mt-3 font-semibold">{education.school}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-muted">
                  <span className="rounded-full border border-border bg-surface px-3 py-1">
                    {education.dates}
                  </span>
                  <span className="rounded-full border border-border bg-surface px-3 py-1">
                    GPA {education.gpa}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-xl bg-surface p-4">
                <MapPin className="text-brand-cyan" size={20} />
                <p className="mt-3 text-sm font-semibold">
                  {education.location}
                </p>
              </div>
              <div className="rounded-xl bg-surface p-4">
                <Languages className="text-brand-amber" size={20} />
                <p className="mt-3 text-sm font-semibold">Arabic and English</p>
                <p className="mt-1 text-sm text-muted">
                  Native proficiency listed in CV.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

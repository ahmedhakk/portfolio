import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="pb-20 sm:pb-28">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-ink text-surface shadow-lift dark:bg-white dark:text-slate-950">
            <div className="fine-grid grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.82fr] lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Contact</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                  Let&apos;s build something great.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-surface/72 dark:text-slate-600">
                  I&apos;m open to Senior Frontend Engineer, Frontend Developer, and relevant Full-Stack Engineer
                  opportunities where strong UI, clean architecture, and product thinking matter.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={`mailto:${profile.email}`} variant="secondary" className="dark:border-slate-300 dark:bg-slate-950 dark:text-white">
                    Email Me
                    <Mail size={18} />
                  </ButtonLink>
                  <ButtonLink href={profile.resumeUrl} variant="ghost" download className="text-surface hover:bg-white/10 hover:text-white dark:text-slate-700 dark:hover:bg-slate-100 dark:hover:text-slate-950">
                    Download CV
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur dark:border-slate-200 dark:bg-slate-100">
                <div className="space-y-4">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10 dark:hover:bg-white">
                    <Mail className="text-brand-teal" size={20} />
                    <span className="min-w-0 break-all text-sm font-semibold">{profile.email}</span>
                  </a>
                  <a href={`tel:${profile.phone}`} className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10 dark:hover:bg-white">
                    <Phone className="text-brand-cyan" size={20} />
                    <span className="text-sm font-semibold">{profile.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl p-3">
                    <MapPin className="text-brand-amber" size={20} />
                    <span className="text-sm font-semibold">{profile.location}</span>
                  </div>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10 dark:hover:bg-white">
                    <Linkedin className="text-brand-cyan" size={20} />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </a>
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10 dark:hover:bg-white">
                    <Github className="text-brand-teal" size={20} />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

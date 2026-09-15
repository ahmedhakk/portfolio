import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { HeroVisual } from "@/components/hero-visual";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="container-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/75 px-3 py-2 text-sm font-semibold text-muted shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-brand-teal" />
            Senior Frontend Developer - Cairo, Egypt
          </div>
          <h1 className="text-balance text-3xl md:text-5xl font-semibold leading-[1.02] tracking-normal text-ink">
            <span className="gradient-title">Senior Frontend Engineer</span>{" "}
            building scalable, high-quality digital products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I have 5+ years of experience building scalable, responsive web
            applications and complex product interfaces with React, Vue,
            TypeScript, Nuxt, Next.js, Tailwind CSS, and modern frontend
            architecture.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#experience">
              View My Work
              <ArrowDown size={18} />
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="secondary" download prefetch={false}>
              Download CV
              <Download size={18} />
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="ghost">
              Contact Me
              <Mail size={18} />
            </ButtonLink>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-muted transition hover:bg-elevated hover:text-ink"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-muted transition hover:bg-elevated hover:text-ink"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

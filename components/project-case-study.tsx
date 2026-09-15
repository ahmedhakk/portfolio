import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type ProjectCaseStudyProps = {
  project: Project;
  index: number;
};

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <CheckCircle2
              className="mt-0.5 shrink-0 text-brand-teal"
              size={17}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  if (project.status === "todo") {
    return (
      <div className="flex min-h-[240px] w-full min-w-0 items-center justify-center rounded-xl border border-dashed border-border bg-surface p-6 text-center sm:min-h-[280px] sm:p-8">
        <div className="min-w-0">
          <Sparkles className="mx-auto text-brand-teal" size={28} />
          <p className="mt-4 break-words font-semibold">
            TODO: add a verified project screenshot
          </p>
          <p className="mt-2 break-words text-sm leading-6 text-muted">
            Place the image in public/images and update data/projects.ts.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0d1422] p-2 shadow-lift">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs font-semibold text-white/58">
          Dreams workflow builder
        </span>
      </div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-left-top"
          priority
        />
      </div>
    </div>
  );
}

export function ProjectCaseStudy({ project, index }: ProjectCaseStudyProps) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article
        className={cn(
          "grid grid-cols-1 gap-8 rounded-2xl border border-border bg-elevated p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7 lg:grid-cols-[1.08fr_0.92fr]",
          reversed && "lg:grid-cols-[0.92fr_1.08fr]",
        )}
      >
        <div className={cn("min-w-0", reversed && "lg:order-2")}>
          <ProjectImage project={project} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Featured case study
          </p>
          <h3 className="text-balance text-3xl font-semibold leading-tight">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-muted">
            {project.shortDescription}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-surface p-4">
              <Layers3 className="text-brand-cyan" size={20} />
              <h4 className="mt-3 font-semibold">Problem</h4>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.problem}
              </p>
            </div>
            <div className="rounded-xl bg-surface p-4">
              <Code2 className="text-brand-teal" size={20} />
              <h4 className="mt-3 font-semibold">My role</h4>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.role}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-surface p-4">
            <h4 className="font-semibold">Engineering impact</h4>
            <p className="mt-2 text-sm leading-6 text-muted">
              {project.impact}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-surface p-5 sm:p-6 lg:grid-cols-3">
            <DetailList title="Challenges" items={project.challenges} />
            <DetailList title="Technical solution" items={project.solutions} />
            <DetailList title="Features shipped" items={project.features} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="h-full min-w-0 rounded-2xl border border-border bg-elevated p-5 shadow-soft">
        <ProjectImage project={project} />
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            {project.liveDemo ? (
              <ArrowUpRight className="shrink-0 text-brand-cyan" size={20} />
            ) : null}
          </div>
          <p className="break-words text-sm leading-6 text-muted">
            {project.shortDescription}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

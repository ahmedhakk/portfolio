import { ProjectCaseStudy } from "@/components/project-case-study";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Case studies that show product thinking, architecture, and real interface complexity."
            description="A case-study format for work that needs more than a title and a repository link: product context, role, implementation choices, and engineering impact."
          />
        </Reveal>

        <div className="mt-12 space-y-10">
          {featuredProjects.map((project, index) => (
            <ProjectCaseStudy
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* <div className="mt-14">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 border-t border-border pt-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">More work</p>
                <h3 className="mt-3 text-2xl font-semibold">Reusable project slots ready for your next verified case studies.</h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-muted">
                TODO: replace this slot with confirmed project details, screenshots, links, and impact notes.
              </p>
            </div>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {additionalProjects.map((project) => (
              <CompactProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

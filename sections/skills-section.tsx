import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-border bg-elevated/42 py-20 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A focused frontend toolkit, organized around how modern products are built."
            description="Grouped by the way I use these tools in real product work: UI systems, state and data, backend collaboration, and delivery practices."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index * 0.04}
              className="rounded-2xl border border-border bg-elevated p-5 shadow-soft"
            >
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

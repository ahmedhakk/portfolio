import { BrainCircuit, Component, Gauge, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  { title: "Frontend architecture", icon: Component },
  { title: "Production dashboards", icon: Workflow },
  { title: "Performance-minded UI", icon: Gauge },
  { title: "AI-assisted workflows", icon: BrainCircuit }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A frontend engineer who cares about the product shape and the code behind it."
            description="I build production web applications with React, Vue, Nuxt, Next.js, TypeScript, JavaScript, and Tailwind CSS. My work spans frontend architecture, REST API integrations, TanStack React Query, Zustand, React Flow, performance, reusable component systems, and interfaces that need to stay maintainable after the first release."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.7fr]">
          <Reveal className="rounded-2xl border border-border bg-elevated p-6 shadow-soft sm:p-8">
            <p className="text-lg leading-8 text-muted">
              I like building the kind of UI that feels calm to use even when the product is complex: clear states,
              predictable data flows, responsive layouts, and reusable patterns that make future features easier to ship.
              I am comfortable with modern AI-assisted development workflows, while staying responsible for architecture,
              code quality, reviews, testing, and production releases.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-xl border border-border bg-elevated p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-teal/60"
              >
                <item.icon className="text-brand-teal" size={22} />
                <p className="mt-4 font-semibold">{item.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

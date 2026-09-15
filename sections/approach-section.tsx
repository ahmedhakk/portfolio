import { Compass, Gauge, GitPullRequest, Network } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { approachItems } from "@/data/approach";

const icons = [Network, Gauge, Compass, GitPullRequest];

export function ApproachSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering approach"
            title="How I think about senior frontend work."
            description="The strongest frontend work is part product judgment, part systems thinking, and part taste for simple code that keeps surviving real production pressure."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {approachItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-2xl border border-border bg-elevated p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-cyan/60"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-surface">
                  <Icon className="text-brand-teal" size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

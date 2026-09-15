"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, GitBranch, Layers3, Zap } from "lucide-react";

const pipeline = [
  { label: "Design", icon: Layers3, color: "text-brand-cyan" },
  { label: "Build", icon: Code2, color: "text-brand-teal" },
  { label: "Review", icon: GitBranch, color: "text-brand-amber" },
  { label: "Ship", icon: Zap, color: "text-brand-violet" }
];

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      aria-label="Frontend product engineering workflow preview"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-teal/20 via-brand-cyan/10 to-brand-amber/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-elevated/86 shadow-lift backdrop-blur">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted">Product UI System</span>
        </div>
        <div className="fine-grid grid min-h-[430px] grid-cols-1 gap-4 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_0.78fr]">
            <div className="rounded-xl border border-border bg-elevated p-4 shadow-soft">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">Architecture</p>
                  <h3 className="mt-2 text-xl font-semibold">Reusable dashboard patterns</h3>
                </div>
                <span className="rounded-lg bg-brand-teal/12 px-2.5 py-1 text-xs font-bold text-brand-teal">TS</span>
              </div>
              <div className="space-y-3">
                {["Feature queries", "Shared UI states", "Responsive RTL/LTR", "Review-ready releases"].map((item, index) => (
                  <motion.div
                    key={item}
                    animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                    transition={{ duration: 4, delay: index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface/70 px-3 py-3"
                  >
                    <span className="text-sm font-medium text-muted">{item}</span>
                    <ArrowRight size={16} className="text-brand-cyan" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-xl border border-border bg-ink p-4 text-surface shadow-soft dark:bg-white dark:text-slate-950">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">Focus</p>
                <p className="mt-3 text-2xl font-semibold leading-tight">Scalable frontend systems, not one-off screens.</p>
              </div>
              <div className="rounded-xl border border-border bg-elevated p-4 shadow-soft">
                <div className="grid grid-cols-2 gap-3">
                  {pipeline.map((step) => (
                    <div key={step.label} className="rounded-lg bg-surface p-3">
                      <step.icon className={step.color} size={18} />
                      <p className="mt-3 text-sm font-semibold">{step.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-elevated p-4 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold">Release readiness</p>
              <span className="text-xs font-semibold text-brand-teal">Healthy</span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Typed APIs", "Accessible states", "Cache strategy"].map((item) => (
                <div key={item} className="h-20 rounded-lg border border-border bg-surface p-3">
                  <div className="mb-3 h-2 w-16 rounded-full bg-brand-cyan/60" />
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

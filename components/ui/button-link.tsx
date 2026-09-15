import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-ink text-surface shadow-soft hover:-translate-y-0.5 hover:shadow-lift dark:bg-white dark:text-slate-950",
  secondary:
    "border border-border bg-elevated/80 text-ink shadow-soft hover:-translate-y-0.5 hover:border-brand-teal/60",
  ghost: "text-muted hover:bg-elevated hover:text-ink"
};

export function ButtonLink({ className, variant = "primary", children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-brand-cyan",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

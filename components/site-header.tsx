"use client";

import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        isScrolled ? "border-b border-border bg-surface/78 shadow-sm backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link href="#top" className="group flex items-center gap-3" aria-label="Ahmed Mohamed home">
          <span className="flex size-10 items-center justify-center rounded-lg bg-ink text-sm font-black text-surface dark:bg-white dark:text-slate-950">
            AM
          </span>
          <span className="hidden text-sm font-semibold leading-tight sm:block">
            Ahmed Mohamed
            <span className="gradient-title block text-xs font-semibold">Senior Frontend Engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-elevated hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            title="GitHub"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-elevated/80 text-ink transition hover:-translate-y-0.5 hover:border-brand-teal/60"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            title="LinkedIn"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-elevated/80 text-ink transition hover:-translate-y-0.5 hover:border-brand-teal/60"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-surface transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
          >
            <Download size={16} />
            Download CV
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-elevated/80 text-ink"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="container-shell pb-4 lg:hidden">
          <div className="rounded-xl border border-border bg-elevated p-2 shadow-soft">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-muted hover:bg-surface hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-2">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="rounded-lg bg-surface px-3 py-3 text-center text-sm font-semibold">
                GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="rounded-lg bg-surface px-3 py-3 text-center text-sm font-semibold">
                LinkedIn
              </a>
              <a href={profile.resumeUrl} download className="rounded-lg bg-ink px-3 py-3 text-center text-sm font-semibold text-surface dark:bg-white dark:text-slate-950">
                CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

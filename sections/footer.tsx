import { ArrowUp, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          {profile.name} - {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition hover:bg-elevated hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition hover:bg-elevated hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <Link
            href="#top"
            aria-label="Back to top"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-elevated text-ink transition hover:-translate-y-0.5"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

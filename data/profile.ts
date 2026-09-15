import type { SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Ahmed Mohamed",
  title: "Senior Frontend Engineer",
  resumeTitle: "Front End Developer | React | Vue | TypeScript",
  location: "Cairo, Egypt",
  email: "ahmad.mohamed.me@gmail.com",
  phone: "+201211119412",
  siteUrl: "https://TODO-your-domain.com",
  resumeUrl: "/AhmedMohamedResume.pdf",
  summary:
    "Frontend Developer with 5+ years of experience building scalable, responsive web applications and complex product interfaces across workflow automation, messaging, payments, and booking platforms.",
  socials: {
    github: "https://github.com/ahmedhakk",
    linkedin: "https://www.linkedin.com/in/ahmed-mohamed-a022041b3/",
  } satisfies Record<string, string>,
};

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
];

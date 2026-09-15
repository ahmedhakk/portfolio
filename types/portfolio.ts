export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  context: string;
  highlights: string[];
  achievements: string[];
  technologies: string[];
  url?: string;
};

export type Project = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  role: string;
  problem: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  impact: string;
  github?: string;
  liveDemo?: string;
  status?: "featured" | "todo";
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Education = {
  degree: string;
  school: string;
  focus: string;
  dates: string;
  location: string;
  gpa?: string;
};

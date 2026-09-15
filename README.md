# Ahmed Mohamed Portfolio

Production-ready personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

## Run Locally

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
```

The production files are generated in `out`.

## Content Editing

- Personal info and social links: `data/profile.ts`
- Employment history: `data/experience.ts`
- Featured and additional projects: `data/projects.ts`
- Skill categories: `data/skills.ts`
- Senior engineering approach cards: `data/approach.ts`
- Project screenshots and assets: `public/images`
- Downloadable CV: `public/AhmedMohamedResume.pdf`

## TODO Before Deploying

- Add verified live demo and GitHub links for projects when available.
- Add more verified project screenshots to `public/images`.
- Replace the TODO additional project entry with real project data.

## Deploy To Netlify

This project is configured as a static Next.js export for Netlify.

- Install command: `pnpm install`
- Build command: `pnpm build`
- Publish directory: `out`
- Config file: `netlify.toml`

## Deploy To Vercel

Push the repository to GitHub, import it in Vercel, and use the static export output:

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `out` with the current static export config

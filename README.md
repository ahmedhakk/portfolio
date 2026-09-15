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
pnpm start
```

## Content Editing

- Personal info and social links: `data/profile.ts`
- Employment history: `data/experience.ts`
- Featured and additional projects: `data/projects.ts`
- Skill categories: `data/skills.ts`
- Senior engineering approach cards: `data/approach.ts`
- Project screenshots and assets: `public/images`
- Downloadable CV: `public/AhmedMohamedResume.pdf`

## TODO Before Deploying

- Replace `https://TODO-your-domain.com` in `data/profile.ts` and `app/layout.tsx`.
- Add verified live demo and GitHub links for projects when available.
- Add more verified project screenshots to `public/images`.
- Replace the TODO additional project entry with real project data.

## Deploy

Push the repository to GitHub, import it in Vercel, and keep the default Next.js build settings:

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `.next`

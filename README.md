<p align="center">
  <h1 align="center">rosareyes.dev (v3)</h1>
  <a href="https://rosareyes.vercel.app/"><p align="center">www.rosareyes.dev</p></a>
</p>

Personal portfolio site. Dark-only, minimal, built to last.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rosaareyesc/)
[![Upwork](https://img.shields.io/badge/UpWork-6FDA44?style=for-the-badge&logo=Upwork&logoColor=white)](https://www.upwork.com/freelancers/~01bcf3b51bb38b47a8)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rosareyes)

## stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** — `@theme` tokens, no config file
- **clsx** — conditional class merging

## design

| Token        | Value                               |
| ------------ | ----------------------------------- |
| Background   | `#0B0D10` (ink)                     |
| Surface      | `#14171C`                           |
| Text         | `#E9ECEF`                           |
| Accent       | `oklch(0.74 0.18 45)` — warm orange |
| Secondary    | `oklch(0.72 0.15 330)` — plum       |
| Display font | Fraunces 300/400                    |
| Body font    | Geist 300–500                       |
| Mono font    | JetBrains Mono 400/500              |

## structure

```
src/
  app/
    components/
      atoms/        # CursorHalo, SectionHeader
      molecules/    # Navbar, HeroSection, AboutSection, WorkSection,
                    # StackSection, ContactSection, Cards/Project,
                    # BgGrain, Footer
    hooks/          # useScrollProgress, useActiveSection
  types/            # Job, Project, Stack interfaces
data/
  profile.ts        # jobs + projects — edit here to update content
  stack.ts          # tech stack categories
public/             # portrait, CV PDF, project screenshots/GIFs
```

## running locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

## adding content

**New project** — add an entry to `data/profile.ts`:

```ts
{
  title: 'Project name',
  kind: 'Work' | 'Personal' | 'University' | 'Bachelor thesis',
  year: '2025',
  description: 'One or two sentences.',
  tags: ['React', 'TypeScript'],
  url: 'https://...',
  github: 'https://github.com/...',  // optional
  image: '/screenshot.png',          // optional — drop file in public/
}
```

**New job** — add an entry to the `jobs` array in `data/profile.ts`.

**Project image** — drop a `.png`, `.jpg`, or `.gif` in `public/` and set `image: '/filename.ext'` on the project. GIFs play natively.

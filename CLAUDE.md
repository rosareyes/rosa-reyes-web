# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
npm run test     # Run Vitest in watch mode
```

To run a single test file: `npx vitest run src/path/to/file.test.tsx`

## Architecture

Personal portfolio site built with **Next.js App Router** + TypeScript + Tailwind CSS v4. Deployed on Vercel (see [Deployment](#deployment)).

**Key directories:**
- `src/app/` — Next.js App Router pages and root layout
- `src/app/components/atoms/` — smallest reusable UI pieces (CursorHalo, SectionHeader)
- `src/app/components/molecules/` — composed section components (Navbar, HeroSection, AboutSection, WorkSection, StackSection, ContactSection, Cards/Project, BgGrain, Footer)
- `src/app/hooks/` — custom hooks (useScrollProgress, useActiveSection)
- `src/types/index.ts` — shared TypeScript interfaces (Job, Project, Stack)
- `data/profile.ts` — jobs and projects content; edit here to update portfolio without touching components
- `data/stack.ts` — tech stack categories
- `public/` — static assets (About photos, project media, CV PDF). Animated project media is MP4 (`ProjectCard` renders `.mp4` as a muted looping `<video>`), stills are WebP/JPG; don't add GIFs or multi-MB PNGs. Strip EXIF/GPS from personal photos before adding them.

**Single-page layout:** `src/app/page.tsx` is the only route (~55 lines) and composes all sections.

**Theme:** Dark-only. Design tokens defined as `@theme` variables in `src/app/globals.css` (oklch-based ink/surface/accent palette). No light mode.

**Fonts:** Fraunces (display), Geist (body), JetBrains Mono (mono) — imported in `src/app/fonts.ts`, applied as CSS variables.

**`'use client'` boundaries:** Only components with state or browser effects carry it. Server components: page.tsx, HeroSection, AboutSection, BgGrain, Footer, StackSection, SectionHeader. AboutSection is a thin server wrapper around `AboutStory` (client), where phrases in the bio swap the photo.

**Component pattern:** Inline styles replaced with Tailwind utility classes. `clsx` used for conditional class merging. No Framer Motion or external animation libraries.

## Deployment

- **Vercel** (project `rosa-reyes-ogru`), connected to GitHub: every push to `master` deploys to production at rosareyes.dev. There is no GitHub Actions workflow.
- Vercel builds on **Node 22.x / npm 10** with the default `npm install`. Local npm may be newer, so a change can install fine locally and still fail there. To reproduce Vercel's install, run npm 10 on Node 22 in a clean folder.
- Not a static export: `next.config.js` uses `rewrites` (Umami analytics proxy) and `next/image` optimization, both of which need the Vercel runtime.

## Lockfile

**`package-lock.json` is committed and must stay committed.** Always commit it together with any `package.json` change.

- History: in May 2026 it was gitignored as a workaround, because npm 11 on macOS wrote versionless entries for Linux-only optional binaries (`@next/swc-linux-x64-musl`, Tailwind oxide, rollup) and Vercel failed with `Invalid Version:`. Without a lockfile Vercel re-resolved everything on each deploy, until a new upstream release (vitest 5) crashed npm 10 with `Cannot read properties of null (reading 'edgesOut')` (Nov 2026).
- If `Invalid Version:` shows up again, regenerate the lockfile (delete `package-lock.json` and `node_modules`, run `npm install`) and check that no entry under `packages` lacks a `version`. Never gitignore it again.
- Avoid `overrides` that target a direct dependency; npm rejects or mishandles them.

## Tailwind Spacing Convention

**Never use hardcoded pixel values in Tailwind spacing classes.** Use the scale number instead (1 unit = 4px):

```
px-1   →  4px      px-6   →  24px     px-20  →  80px
px-4.5 →  18px     px-25  →  100px    px-30  →  120px
px-48  →  192px    px-65  →  260px    px-80  →  320px
```

- `py-[100px]` ✗ → `py-25` ✓
- `mt-[18px]`  ✗ → `mt-4.5` ✓
- `ml-[192px]` ✗ → `ml-48` ✓

**Exceptions — keep as `[Xpx]`:**
- Font sizes (`text-[11px]`) — font scale ≠ spacing scale
- Blur (`backdrop-blur-[14px]`), letter-spacing (`tracking-[0.16em]`), line-height (`leading-[1.6]`)
- Duration values (`duration-[240ms]`) — these are milliseconds, not pixels
- Complex arbitrary values (`bg-[radial-gradient(...)]`, `text-[clamp(...)]`)
- Layout max-widths with non-standard values (`max-w-[1180px]`)

## Code Style

Prettier with `prettier-plugin-tailwindcss` (auto-sorts Tailwind classes). Single quotes. ESLint uses `next/core-web-vitals` + `vitest` plugin.

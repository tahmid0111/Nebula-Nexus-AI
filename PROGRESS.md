# Nebula Nexus AI — Progress Log

_Last updated: 2026-05-09_

## Project snapshot

- **Name**: Nebula Nexus AI — landing page
- **Stack**: Vite 5 + React 18 + TypeScript + Tailwind + shadcn/ui
- **Extras**: Framer Motion, React Three Fiber / Drei (3D), React Router 7, React Query, react-hook-form + zod
- **Origin**: Lovable-generated project, extracted into a local folder
- **Git**: Not a git repo yet (only a stray `gitignore` file with no leading dot)

## What we just did

### 1. Audited the codebase
- Confirmed the source is **complete and self-contained**: no env vars, no backend, no API keys, no missing assets.
- All landing-page content lives in [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx) (translation map).
- Logo present at [public/nebulalogo.jpeg](public/nebulalogo.jpeg) and [src/assets/nebulalogo.jpeg](src/assets/nebulalogo.jpeg).
- Routing wired in [src/App.tsx](src/App.tsx): `/`, `/privacy-policy`, `/terms-conditions`, `*` (NotFound).
- Landing sections wired in [src/pages/Index.tsx](src/pages/Index.tsx): Header → Hero → Services → HowItWorks → Testimonials → Pricing → CTA → Contact → Footer.

### 2. Identified issues
- `node_modules/` was missing → resolved (see step 3).
- **Duplicate orphan components** in [src/components/ui/](src/components/ui/): `HeroSection.tsx`, `ServicesSection.tsx`, `HowItWorks.tsx`, `PricingSection.tsx`, `TestimonialsSection.tsx`, `ContactSection.tsx`, `ServicesOverview.tsx` — all unused (`Index.tsx` only imports from `src/components/sections/`).
- `README.md` still has Lovable boilerplate (`REPLACE_WITH_PROJECT_ID`).
- PowerShell execution policy blocks `npm.ps1` on this machine — fixed by using `npm.cmd` instead.

### 3. Installed and ran the project
- Ran `npm.cmd install --no-audit --no-fund` → success.
- Started Vite dev server with `npm.cmd run dev`.
- Site live at **http://localhost:8080/** (network: http://192.168.0.101:8080/).
- Original design renders correctly: dark theme, traveling-letter hero title, "In 7 days." stamp, square-grid backdrop, drifting orbs, Services two-card section, etc.

## Next steps

### Immediate cleanup (low risk)
1. **Delete the duplicate orphan components** in [src/components/ui/](src/components/ui/) (the seven section files listed above) so future edits don't accidentally hit dead files.
2. **Rename `gitignore` → `.gitignore`** so it actually works.
3. **Initialize git** (`git init`) and make a baseline commit so further changes are tracked.
4. **Replace the Lovable boilerplate in [README.md](README.md)** with a real project description.

### Quality / hardening
5. Run `npm run lint` and fix any reported issues.
6. Run `npm run build` to confirm a clean production build.
7. Consider removing the `lovable-tagger` dev plugin from [vite.config.ts](vite.config.ts) and [package.json](package.json) if you no longer use Lovable.
8. Consider trimming unused shadcn/ui components in [src/components/ui/](src/components/ui/) (only the ones the landing page actually imports need to stay).

### Deploy
9. Pick a host (Vercel, Netlify, Cloudflare Pages — any static host works since `vite build` outputs `dist/`).
10. Wire up a custom domain.
11. Replace the placeholder `og:image` URL in [index.html:13](index.html#L13) (currently points to `lovable.dev/opengraph-image-p98pqg.png`) with your own social-share image.

### Open questions to confirm with the team
- Should the `/privacy-policy` and `/terms-conditions` page content be reviewed/updated?
- Is the contact form supposed to send anywhere (currently no backend wired)?
- Any analytics/tracking to add (the code already pushes to `window.dataLayer` in [ServicesSection.tsx](src/components/sections/ServicesSection.tsx) — needs GTM to actually capture it)?

## How to run (cheat sheet)

```powershell
# Install (once)
npm.cmd install

# Dev server → http://localhost:8080/
npm.cmd run dev

# Production build → ./dist
npm.cmd run build

# Lint
npm.cmd run lint
```

> Note: use `npm.cmd` instead of `npm` on this machine — PowerShell's execution policy blocks the `npm.ps1` shim.

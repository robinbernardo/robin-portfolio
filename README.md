# Robin Bernardo — Portfolio

Next.js (App Router) + TypeScript + Material UI portfolio site.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then paste your GA4 Measurement ID
npm run dev                        # http://localhost:3000
```

## Deploy to Vercel

Push this repo to GitHub, import it in Vercel — it auto-detects Next.js.
Add `NEXT_PUBLIC_GA_ID` in Vercel → Project → Settings → Environment Variables.

## Analytics

Google Analytics 4 via `@next/third-parties`. GA4 reports **average engagement
time** automatically. Custom events (see `src/lib/`):

| Event           | Fires when                                   |
|-----------------|----------------------------------------------|
| `section_view`  | a section scrolls into view (first time)     |
| `time_milestone`| visitor stays 30s / 60s / 3min               |
| `project_click` | a project card / featured link is clicked    |
| `contact_click` | email, phone, LinkedIn, or feedback clicked  |

If `NEXT_PUBLIC_GA_ID` is unset, tracking silently no-ops.

## Project structure

```
src/
├── app/                  # App Router: layout (theme, fonts, GA), page
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, FeaturedWork, ProjectsGrid, About, Contact
│   └── ui/               # ProjectCard + primitives (Aperture, NdaBadge, Reveal…)
├── data/content.ts       # ← ALL page content lives here (edit projects/bio/links)
├── lib/                  # analytics helpers + AnalyticsTracker
└── theme/theme.ts        # MUI theme = the design system (colors, type)
```

## Editing content

Everything on the page renders from `src/data/content.ts` — add a project,
change your bio, or update contact details there without touching components.
Projects are a discriminated union: `kind: 'live'` (has `href`) or `kind: 'nda'`
(renders the NDA badge, no link). Images go in `public/images/`.

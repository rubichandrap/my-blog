# my-blog

Personal site and blog of Rubi Chandraputra, a software engineer. The site
is a static export hosted on GitHub Pages at
https://rubichandrap.github.io/my-blog.

## Stack

- Next.js 15 (App Router, `output: "export"`)
- Tailwind CSS
- shadcn-style UI components (Radix primitives)
- lucide-react icons
- next-themes for light/dark mode
- Static export deployed to GitHub Pages via gh-pages

## Requirements

- Node.js 18.18 or later
- pnpm

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000/my-blog.

## Build and deploy

```bash
pnpm build      # static export to out/
pnpm run deploy:pages   # publish out/ to GitHub Pages
```

The site is served under the `/my-blog` base path. The contact form sends
mail through EmailJS; its keys are read from environment variables (see
`.env.example`) and never committed.

## Content

Blog posts live in `lib/blog.ts`. The blog publishes only posts the author
wrote: one on Gleam's concurrency model, and one on the CAP theorem in
distributed systems.

<!-- Copilot / AI agent instructions for advarts.com -->

## Quick context
- Tech: Next.js 13 (app router), React 19, TypeScript, Tailwind CSS, Radix UI primitives.
- Repo layout: key work happens in `app/` (routes + layouts) and `components/` (UI + page parts).
- Primary entry points: `app/layout.tsx` (global layout + fonts), `app/page.tsx` (home), `components/` for UI and pages.

## What to know before editing
- This is an App Router project — files in `app/` are route segments and server components by default.
- Interactive pieces must be client components (`"use client"`) and typically live under `components/` (e.g. `components/contact/contact-form.tsx`).
- Use `lib/utils.ts`'s `cn(...)` helper to merge Tailwind classes consistently.

## Architecture & patterns (concrete)
- UI primitives: `components/ui/` contains small, reusable primitives (`button.tsx`, `input.tsx`, `label.tsx`, `select.tsx`, `textarea.tsx`, `card.tsx`, `checkbox.tsx`). Prefer composing these.
- Page sections: `components/home/`, `components/portfolio/`, `components/pricing/` contain page-specific blocks and previews — keep them small and stateless where possible.
- Forms: `react-hook-form` + `@hookform/resolvers` + `zod` are available in dependencies; validation likely happens client-side inside contact form components.
- Styles: Tailwind v4 and `tailwind-merge`/`clsx` pattern used — always combine classes with `cn(...)` to avoid class duplication.
- Fonts & meta: global fonts and metadata are set in `app/layout.tsx` — change site title/OG data there.

## Build / dev / lint
- Development: `npm run dev` (Next dev server on `http://localhost:3000`).
- Build: `npm run build` then `npm run start` for production preview.
- Lint: `npm run lint` runs ESLint across the repo.

## Tests and CI
- No test runner or test scripts detected in `package.json`. If adding tests, follow the repo's TypeScript / Next conventions and wire tests into package scripts.

## Integration points & external deps
- Vercel Analytics is installed (`@vercel/analytics`) and used in `app/layout.tsx`.
- No other external API connectors are present in the repo root — check individual components for fetch calls when making cross-service changes.

## Conventions & guardrails for AI edits
- Preserve `app/` server component semantics: do not add client-only code to route files without `"use client"`.
- When adding interactive UI, add `"use client"` at top and keep DOM-only hooks (state/effects) localized to client components.
- Use primitives from `components/ui/` instead of creating ad-hoc inputs/buttons.
- Use `lib/utils.ts` `cn(...)` for class merging: `import { cn } from 'lib/utils'`.
- Keep TypeScript types narrow and prefer explicit prop types for shared components.

## Helpful file references (examples)
- Layout / global meta: `app/layout.tsx`
- Utility class merging: `lib/utils.ts`
- UI primitives: `components/ui/button.tsx`, `components/ui/input.tsx`
- Contact form: `components/contact/contact-form.tsx`
- Portfolio modal: `components/portfolio/portfolio-modal.tsx`

## When uncertain
- If a change affects routing, rendering, or metadata, run `npm run dev` and verify pages render on `http://localhost:3000`.
- Ask the repo owner for API keys or backend endpoints before adding network calls.

---
If you want, I can refine any section (e.g., add code snippets for `"use client"` usage, or expand on form validation examples). Feedback welcome.

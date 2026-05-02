# AGENTS.md

This file is the source of truth for agents and developers working in this repository. Follow these rules for every change unless the user explicitly asks for a different approach.

## Project Snapshot

- Framework: Next.js App Router with TypeScript.
- UI stack: React, Tailwind CSS v4, `next-themes`, Storybook.
- Data/API stack: Axios, TanStack Query, server-side `fetch` helpers.
- Locale defaults: Persian UI, RTL layout, IRANYekanX local font.
- Package manager: pnpm is preferred because `pnpm-lock.yaml` is present.

## Current Folder Contract

```txt
src/
├── app/                 # Next.js routes and route-specific code
├── components/
│   ├── ui/              # shared UI primitives
│   └── modules/         # reusable feature modules
├── config/              # runtime configuration such as fonts
├── data/                # static/display data
├── hooks/               # shared hooks
├── lib/                 # shared helpers and utilities
├── providers/           # global React providers
├── services/            # API config, axios client, server API
└── types/               # shared global types
```

## Route Architecture

- Put route-specific files inside that route only.
- Use this structure for non-trivial routes:

```txt
src/app/<route>/
├── page.tsx
├── _components/
├── _hooks/
└── _types/
```

- Do not move route-specific logic to global folders unless at least two routes need it.
- Keep `page.tsx` focused on composition; move large route-only UI pieces into `_components`.
- Prefer colocated route types in `_types` before adding global types.

## Components

- Shared primitive UI components belong in `src/components/ui`.
- Reusable feature-level modules belong in `src/components/modules`.
- Business/application-level shared components should go in `src/components/app` when such a layer is needed.
- Existing UI primitive locations:
  - `src/components/ui/button`
  - `src/components/ui/input`
  - `src/components/ui/textarea`
  - `src/components/ui/modal`
  - `src/components/ui/loaders`
- Existing reusable modules:
  - `src/components/modules/ThemeToggle.tsx`
  - `src/components/modules/calendar`
- Keep Storybook stories next to reusable UI components as `*.stories.tsx`.

## Styling Rules

- Always use `cn` from `src/lib/utils.tsx` to merge class names.
- Do not manually concatenate class names with template strings unless the dynamic value cannot be represented cleanly through `cn`.
- Do not use inline styles unless Tailwind/global CSS cannot express the style.
- Do not introduce raw hex, rgb, hsl or arbitrary color values inside React components.
- Prefer project color tokens defined in `src/app/globals.css`, such as:
  - `bg-primary`
  - `text-primary`
  - `text-primary-text`
  - `border-primary-border`
  - `bg-background`
  - `text-text-*`
  - `bg-primary-blue`, `bg-primary-green`, `bg-primary-red`
- Existing older files may still contain raw Tailwind palette classes such as `text-gray-*` or `bg-blue-*`; do not refactor unrelated styling only to clean this up, but avoid adding more when editing or creating code.
- Global reusable CSS utilities should be added to `src/app/globals.css` only when they are truly shared.

## Icons

- First check `src/components/Icons.tsx` for project-specific icons.
- Add reusable custom SVG icons to `src/components/Icons.tsx`.
- If an icon does not exist there and does not need to be custom, use `lucide-react`.
- Keep icon components typed with `{ className?: string }`.

## Hooks

- Shared hooks belong in `src/hooks`.
- Route-specific hooks belong in `src/app/<route>/_hooks`.
- Existing shared hooks:
  - `src/hooks/useSearchQueries.tsx`
  - `src/hooks/useScrollEvent.ts`
  - `src/hooks/useIsClient.tsx`
- Hooks that use browser APIs must be client-safe and should avoid SSR hydration mismatches.

## Utilities

- Shared helper functions belong in `src/lib`.
- Current utility split:
  - `src/lib/utils.tsx`: `cn`, generic app/UI helpers, logout.
  - `src/lib/api.ts`: API URL helpers and API error handling.
  - `src/lib/number.ts`: number formatting and Persian/Arabic digit conversion.
  - `src/lib/server-utils.ts`: server cookie helpers.
- Before adding a helper, check the existing files to avoid duplicates.
- Keep server-only helpers out of client components unless they are already exposed as server actions.

## API and React Query

- Define endpoint paths in `src/services/api-config.ts`.
- Use `apiService` from `src/services/axios-client.ts` for client-side API calls.
- Use `serverApi` from `src/services/server-api.ts` for server-side API calls.
- Use helpers from `src/lib/api.ts` for URL building and API error messages.
- If adding React Query hooks, create folders as needed:

```txt
src/services/queries/<domain>/useSomething.ts
src/services/mutations/<domain>/useSomethingMutation.ts
```

- Query keys should be stable arrays, e.g. `["userInfo"]` or `["orders", filters]`.
- Mutation hooks should expose named mutation objects, e.g. `{ login }`.
- API request/response types should live near their domain when domain-specific, or in `src/types` only if shared.

## Types and Enums

- Shared global types belong in `src/types/types.ts`.
- Shared global enums belong in `src/enums.ts`.
- Route-specific types belong in `src/app/<route>/_types`.
- Domain-specific API types should be colocated with the related domain if they are not globally reusable.
- Prefer explicit exported types over inline `any` for new public APIs, props and service contracts.

## Providers and App Shell

- `src/app/layout.tsx` owns HTML-level settings, font wiring and global providers.
- `src/providers/providers.tsx` owns React Query, theme provider and Sonner toaster setup.
- Do not create a second `QueryClientProvider` or `ThemeProvider` at feature level unless there is a strong reason.
- Keep `Providers` as a client component.

## Storybook

- Storybook config lives in `.storybook`.
- Add stories for new shared UI primitives and reusable visual modules.
- Use existing story style and colocate stories next to components.
- Storybook already imports `src/app/globals.css` and applies RTL/Persian decorator in `.storybook/preview.tsx`.

## Documentation

- Keep `PROJECT_STRUCTURE.md` updated whenever folders are moved, new top-level areas are added, or architecture conventions change.
- Keep this `AGENTS.md` updated when rules or folder contracts change.
- Prefer concise, practical documentation that reflects the actual repository, not intended future structure.

## Files to Avoid Editing Manually

- Do not edit `node_modules/`.
- Do not edit `.next/`.
- Do not edit `next-env.d.ts`.
- Do not edit `pnpm-lock.yaml` unless dependency changes require it.
- Do not edit generated Storybook output such as `storybook-static/`.

## Validation

- For docs-only changes, no test run is required.
- For component changes, prefer at least `pnpm lint`; use Storybook for visual verification when practical.
- For API or hook changes, validate TypeScript/lint and add or update usage examples when helpful.
- Do not fix unrelated lint or build issues unless the user asks.

## General Development Expectations

- Check existing patterns before adding files.
- Prefer small, focused changes over broad refactors.
- Reuse existing components, hooks and helpers before creating new ones.
- Respect route boundaries and shared module boundaries.
- Keep Persian/RTL behavior in mind for UI work.
- Do not add comments that merely restate obvious code.
- Do not commit, branch or publish unless explicitly asked.

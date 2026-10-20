# AGENTS.md

FITLOG is a Next.js 16 App Router workout library. It is UI-only: exercises come from a remote read-only API, and user selections live in React state. There is no database, auth, or local API route.

## Commands

- `npm install` — use npm; `package-lock.json` is the lockfile.
- `npm run dev`
- `npm run lint` — runs ESLint over the repo (`eslint`), not `next lint`.
- `npx tsc --noEmit` — typecheck; there is no `typecheck` script.
- `npm run build` — also runs TypeScript. No test suite or CI exists, so lint + tsc + build is the full verification.

## Architecture

- Routes in `src/app`: `/` (banner + library), `/workouts/[exerciseId]`, `/my-plan`; 404 in `not-found.tsx`.
- Root layout (`src/app/layout.tsx`) wires `Navbar`, `Footer`, `ExerciesProvider`, and the react-hot-toast `<Toaster>`.
- Data fetching is direct and hardcoded: `src/components/homepage/TheLibrary.tsx` and `src/app/workouts/[exerciseId]/page.tsx` call `https://api.api-store.workers.dev/api/fitlog` in async server components. No env vars, no error handling, no shared fetch helper.
- `/` is statically prerendered at build time, so library changes require a rebuild in production; workouts are server-rendered on demand. Both need network access to the API.
- Shared shape is `IExercise` in `src/types/exercise.type.ts`; components rely on all its fields.
- `ExerciesContext` holds `todaysPlan` and `savedExercies` in memory only. Navbar counts, My Plan tabs, and add/remove/mark-done buttons all depend on it; state is lost on refresh (no persistence).
- Next 16: route `params` is a Promise and must be awaited. Layout uses the generated `LayoutProps<"/">` type.

## Conventions and gotchas

- Misspellings are established repo-wide: `ExerciesContext`, `savedExercies`, `reamining...`, `src/components/exercies-remove-button/`. Keep them consistent; renaming requires updating every import.
- My Plan copy says "Cap of five lifts", but no cap is enforced.
- Tailwind v4 (`@import "tailwindcss"`) plus daisyUI in `src/app/globals.css`. Components use hardcoded hex colors, not theme tokens; reuse the existing dark palette (`#0C0D10`, `#15171D`, `#C2F800`). daisyUI classes are used sparingly (`btn`, `card`, `badge`, `select`).
- Icons come from `react-icons`; toasts use `react-hot-toast`. `lucide-react` and `react-toastify` are installed but unused; do not introduce a second icon or toast system.
- Remote images use `next/image`; `next.config.ts` allows any HTTPS host. Local images are imported from `src/assets`.
- React Compiler is enabled in `next.config.ts`; avoid adding manual memoization unless profiling shows it is needed.
- Path alias `@/*` maps to `src/*`. There is no Prettier config; match existing formatting.

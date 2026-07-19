# CLAUDE.md

Guidance for Claude Code (and future sessions) working in this repository.

## What this project is

**xsnap** (a.k.a. Crystal Code / CrystalCode in older metadata) is a **code-snippet-to-image
studio** — a ray.so-style tool for creating beautiful, shareable images of code. The main
product is the visual editor at the **`/studio`** route. It renders a resizable canvas with a
code block you customize (language, syntax theme, font, corner radius, glow/neon,
glassmorphism, background) and export/share.

- Repo dir: `/Users/simpleneeraj/Ideas/x-code`
- Package name: `crystalcode`; app display name: `xsnap` (`src/constants/site.ts`)
- Author: simpleneeraj

## Project direction (IMPORTANT — decided by the owner)

The project is being **open-sourced** and will be **sponsorship-based, everything free**.
Because of that, three whole subsystems were **removed** and must NOT be reintroduced without
the owner's say-so:

1. **Clerk authentication** — removed. No accounts, no sign-in.
2. **Dodo Payments billing + plan gating** — removed. All features are free (see caveat below).
3. **Prisma / Postgres database** — removed. Persistence is meant to be **localStorage only**.

Rationale (owner's words): "go with everything free mode, later we will think — let's build the
community first."

## Tech stack

- **Next.js 16.1.4** (App Router, Turbopack, RSC) · **React 19** · **TypeScript 5.9**
- **Tailwind CSS v4** (config-less; theme tokens live in `src/styles/globals.css` `@theme`/`:root`)
- **coss UI** — the component library. Local kit at `src/app-kit/ui/*`, built on **Base UI**
  (`@base-ui/react`). shadcn-like DX. This **replaced HeroUI** (see migration below).
- **Zustand** editor store (`src/store/*`, hook `useSlideEditor` at `src/store/hooks/use-editor`)
- **next-themes** (light/dark) · **motion** (framer-motion) · **react-dnd** (element drag-drop)
- **CodeMirror** (`@uiw/react-codemirror`) for the code block · **Tiptap** for rich text
- Package manager: **yarn** (`yarn@1.22.22`). Node 22.

## History: HeroUI → coss migration (DONE)

HeroUI (`@heroui/react`) was fully removed — both components AND its Tailwind theme plugin
(`hero.ts`, deleted). All HeroUI color/sizing tokens were rewritten to coss/shadcn tokens
across the codebase. Key mappings that were applied (know these when reading old-looking code):

- `default-50/100`→`muted`, `default-200/300`→`border`, `default-400/500/600`→`muted-foreground`,
  `default-700/800/900`→`foreground`, bare `default`→`muted-foreground`
- `danger`→`destructive`, `success`→`emerald-500`, `warning`→`amber-500`, `divider`→`border`
- `primary`/`secondary` kept (coss has them)
- `text-tiny/small/medium/large`→`text-xs/sm/base/lg`; `rounded-small/medium/large`→`rounded-sm/md/lg`;
  `shadow-small/medium`→`shadow-sm/md`; `border-small/medium/large`→`border/border-2/border-4`

### coss component API cheatsheet (verified during migration)

- **Card**: `CardContent` (=CardPanel), `CardHeader`, `CardFooter`
- **Dialog**: `DialogContent` (=DialogPopup), `DialogHeader`, `DialogTitle`, `DialogFooter`
- **AlertDialog**: `AlertDialogTrigger`/`AlertDialogPopup`/`AlertDialogHeader`/`Title`/`Description`/`Footer`/`AlertDialogClose`; triggers use the `render={<Button/>}` prop
- **Tabs**: `Tabs`/`TabsList`/`TabsTab`/`TabsPanel` — `value`/`onValueChange` (NOT Radix's `TabsTrigger`/`TabsContent`)
- **Select**: `Select`/`SelectTrigger`/`SelectValue`/`SelectContent`/`SelectItem`, items-first, `value`/`onValueChange`
- **Combobox**: `Combobox`/`ComboboxInput`/`ComboboxPopup`/`ComboboxList`/`ComboboxItem`/`ComboboxEmpty`; `items` + `value` + `onValueChange`; `ComboboxList` takes a render-fn child
- **Menu**: `DropdownMenu*` aliases; `align`/`side` on the content
- **Switch**: `checked`/`onCheckedChange`. **Sheet**: `side`, `render` for triggers
- **Frame**: `Frame`/`FramePanel`/`FrameFooter` (used for the studio side panels)
- **Field**: `Field`/`FieldLabel`. **Slider**: `Slider`/`SliderValue`
- **Toast**: `toastManager.add({ title, description, type })` — NOT Sonner

There are two skills installed for this — **`coss`** and **`coss-particles`** (in `.claude/skills/`).
Use them when picking/writing coss components. Particle catalog: <https://coss.com/ui/particles>,
JSON at `https://coss.com/ui/r/<particle-name>.json`.

## Studio architecture (the main product)

Route: `src/app/(private)/studio/`
- `page.tsx` → `client.tsx` (`EditorPageClient`)
- **`client.tsx`** renders (top→bottom): `AppHeader` + an editor body containing the canvas
  (`DotPattern` bg, `ResizableFrame` → `ContainerWidget`) and floating panels (`ToolbarWidget`,
  `PrimaryAsideWidget`, `SecondaryAsideWidget`).
- **The whole editor is client-only** — `client.tsx` has a `mounted` guard (`if (!mounted)
  return null`) because Base UI `useId` + the in-memory store cause SSR hydration mismatches.
  Keep this guard.

Key pieces:
- **`src/components/app/layout/header.tsx`** (`AppHeader`) — top bar: back button, title editor
  (`edit-title`), `ResizeMenu`, the **`SegmentWidget`** (Edit / Images / Icons / Options tab
  switcher, from `widget/aside/controller-segment.tsx`), history/undo-redo, beautify, share,
  export, theme switch.
- **`src/components/app/widget/aside/primary/`** — left panel: draggable element palette + Reset.
- **`src/components/app/widget/aside/secondary/`** — right panel: renders the screen for the
  active segment (`EditScreens`, `BackgroundScreens`, `IconsScreen`, etc.) via `useSegment` store.
- **`src/components/app/screens/edit/code.tsx`** — the "Customize your code block" controls
  (language, theme, corner radius, font, effects). Segment store: `src/store/segment`.
- **`src/components/app/widget/code/elements/index.tsx`** — renders CodeMirror/text/image
  elements on the canvas.

## Conventions

- `UIView` (`src/app-kit/source/UIView`) is the base flex container used everywhere.
- Layout utilities in `globals.css`: `layout-fill` = `flex flex-1 flex-col min-h-0`;
  `layout-scroll` = same + `overflow-auto`.
- Icons: local components under `src/app-kit/icons/*` (Solar set) and `lucide-react`.
- Many `.txt` files scattered in `src/` are **inactive scratch/backup versions** — not compiled.

## Known follow-ups / caveats (not yet done)

- **SECURITY**: `.env` is tracked in git and its history contains **real Clerk/Dodo test
  secrets**. Before publishing: rotate those secrets, `git rm --cached .env`, add `.env.example`.
  Current `.env` is stripped to `APP_NAME`, `BASE_URL`, `API_URL`, `NEXT_PUBLIC_GRAPHQL_ENDPOINT`.
- Plan gating is removed at the app level, but some **leftover "Pro"/plan references remain** in
  data — e.g. `APP_PLAN_TYPE` in `widget/aside/primary/values.ts` still marks some elements
  `isPro` (shows a "Pro" badge and blocks click). FAQ/pricing copy may still mention paid plans.
  These should be cleaned to match "everything free."
- `yarn install` should be re-run to prune `node_modules`/lockfile of the removed deps.
- **localStorage persistence** for the editor is the intended model but may not be fully wired.
- A few decorative components still call `Math.random()` during render (`UIFireflies`,
  `UIMeteors`, `UIBackgroundLines`, `UIBackgroundBeams`, `UICursorPointer`) — potential
  hydration warnings if SSR'd. Fix pattern: generate randomness in `useEffect` after mount
  (see `UIFeatureCard`'s `Grid`).

## Commands

```bash
yarn dev      # next dev (Turbopack) — http://localhost:3000, studio at /studio
yarn build    # next build
yarn start    # next start
yarn lint     # eslint --fix .
npx tsc --noEmit   # typecheck (should be clean)
```

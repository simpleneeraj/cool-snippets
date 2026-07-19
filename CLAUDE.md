# CLAUDE.md

Guidance for Claude Code (and future sessions) working in this repository.

## What this project is

**Cool Snippets** is a **code-snippet-to-image studio** — a ray.so-style tool for creating
beautiful, shareable images of code. The main product is the visual editor at the
**`/studio`** route. It renders a resizable canvas with a code block you customize
(language, syntax theme, font, corner radius, glow/neon, glassmorphism, background) and
export/share.

- Repo dir: `/Users/simpleneeraj/Ideas/x-code` — note the directory name is stale
- Package name: `cool-snippets`; app display name: `Cool Snippets` (`src/constants/site.ts`)
- GitHub: `simpleneeraj/cool-snippets` — **still PRIVATE, deliberately**. See Publishing below.
- Author: simpleneeraj

**Naming**: earlier names (`xsnap`, `Crystal Code`, `CrystalCode`, `crystalcode`) are all
dead. If you find one, it is a leftover — fix it.

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

- **Next.js 16.2.10** (App Router, Turbopack, RSC) · **React 19.2** · **TypeScript 5.9**
  - **Do not upgrade to TypeScript 7.** It is the native Go port and ships no programmatic
    compiler API (its package exports only `lib/version.cjs`). `next build` crashes in the
    type-check step with `The "id" argument must be of type string`. `npx tsc --noEmit`
    still passes, which hides it — always verify with `yarn build`.
- **Tailwind CSS v4** (config-less; theme tokens live in `src/styles/globals.css` `@theme`/`:root`)
- **coss UI** — the component library. Local kit at `src/app-kit/ui/*`, built on **Base UI**
  (`@base-ui/react`). shadcn-like DX. This **replaced HeroUI** (see migration below).
- **Zustand** editor store (`src/store/*`, hook `useSlideEditor` at `src/store/hooks/use-editor`)
- **next-themes** (light/dark) · **motion** (framer-motion) · **react-dnd** (element drag-drop)
- **CodeMirror** (`@uiw/react-codemirror`) for the code block · **Tiptap** for rich text
- Package manager: **yarn** (`yarn@1.22.22`). Node 22.
- `resolutions` pins `prosemirror-model` — Tiptap otherwise resolves two copies and their
  `Node` types stop being assignable to each other (12 phantom type errors).

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

## Fonts (migrated to next/font — do not reintroduce @font-face)

Code-block typefaces live in **`src/app-kit/fonts/code.ts`**. UI fonts are in
`src/app-kit/fonts/index.ts`. The old `src/json/fonts.json` + `src/styles/code-fonts.css`
pair is **deleted** — do not recreate it.

- 15 faces load via `next/font/google`, the rest via `next/font/local` from
  `src/app-kit/fonts/code/`. **Local font files must not live in `public/`** — files there
  are served verbatim and cannot be fingerprinted.
- **Every loader call must be fully literal at module scope.** A helper function wrapping
  `localFont()` fails with *"Font loaders must be called and assigned to a const in the
  module scope"*; spreading a shared options object fails with *"Unexpected spread"*. The
  repetition in that file is required, not sloppiness.
- `preload: false` throughout — these are picker options, one is used at a time.
- **next/font generates the family name at build time, so it cannot be persisted.** The
  store keeps a stable id (`'JetBrainsMono'`); `resolveCodeFontFamily(id)` maps it to the
  real family at render. Never change an existing `value` id — a persisted store holding an
  unknown id falls back to the default.
- **Image export depends on this.** `src/app-kit/fonts/source.ts` `resolveFontSource()`
  reads the font URL back out of the emitted `@font-face` rule at runtime, because export
  inlines the font as base64 and the fingerprinted path is not known statically.
- `src/plugins/capture/usedfont/index.ts` is **dead code** with a hardcoded IBM Plex path.
  Nothing imports it but `filereader`. The live path is `plugins/capture/main/fonts.ts`.

## Publishing (the repo is not public yet)

Order matters and has been deliberate:

1. ✅ `.env` purged from all history with `git filter-repo --path-glob '.env*'`; owner
   rotated the leaked Clerk/Dodo/Better-Auth/Postgres credentials.
2. ✅ Repo renamed `cool-snippets`, description + 20 topics set, README/LICENSE/NOTICE added.
3. ✅ Commercial fonts (MonoLisa, Operator Mono, SF Mono) removed from HEAD.
4. ⬜ **Not done — flip to public.** Do not do this without the owner saying so.

Still outstanding before that flip:
- Font files removed in step 3 **remain in git history**; a `filter-repo` pass on
  `public/fonts/{Monolisa,OperatorMono,SFMono}` would finish the job.
- `public/backgrounds/` is 353 `dddepth-*` JPGs, ~240 MB, third-party wallpapers of
  unverified provenance. **Owner has parked this deliberately — keep it, do not delete.**
- OFL fonts ship without their licence files (a real violation, easy fix).
- Ask GitHub Support to purge cached views — force-pushed objects stay fetchable by SHA.
- A `git stash` entry still holds pre-purge history locally; `git stash drop` + `gc` clears it.

**`NOTICE.md` is the asset-licensing record.** Keep it honest and current — it carries a
standing offer to remove anything on request.

## Conventions

- `UIView` (`src/app-kit/source/UIView`) is the base flex container used everywhere.
- Layout utilities in `globals.css`: `layout-fill` = `flex flex-1 flex-col min-h-0`;
  `layout-scroll` = same + `overflow-auto`.
- Icons: local components under `src/app-kit/icons/*` (Solar set) and `lucide-react`.
- Many `.txt` files scattered in `src/` are **inactive scratch/backup versions** — not compiled.
- **Do not invent user-facing contact details.** A fake phone number, WhatsApp link and
  office address were removed; support is GitHub Issues only. Same for social links.

## Known follow-ups / caveats

- **Routes were pruned.** `(premium)/` (dashboard/settings/snippets), `/templates`,
  `/legal/*`, `/change-log` and `/issues-report` are **deleted**. Live routes: `/`,
  `/about-us`, `/contact`, `/features`, `/studio`, `/preview`. Do not resurrect the deleted
  ones without asking — they were mock/stub pages that contradicted "everything free".
- **`yarn lint` is broken** and always has been: `eslint.config.mjs` uses `FlatCompat`
  without the required `recommendedConfig`. ESLint 10 + TS 5.9 peer ranges also disagree.
  Nobody has fixed this; `npx tsc --noEmit` and `yarn build` are the real gates.
- Leftover "Pro" references in data — `APP_PLAN_TYPE` in `widget/aside/primary/values.ts`
  still marks some elements `isPro` (shows a badge and blocks the click). Contradicts
  everything-free and should be cleaned.
- A few decorative components call `Math.random()` during render (`UIFireflies`,
  `UIMeteors`, `UIBackgroundLines`, `UIBackgroundBeams`, `UICursorPointer`) — potential
  hydration warnings if SSR'd. Fix pattern: generate randomness in `useEffect` after mount
  (see `UIFeatureCard`'s `Grid`).
- localStorage persistence **is** wired (`zustand/persist`, key `COOL_SNIPPETS_STORE`).

## Commands

```bash
yarn dev      # next dev (Turbopack) — http://localhost:3000, studio at /studio
yarn build    # next build
yarn start    # next start
yarn lint     # eslint --fix .  — BROKEN, see caveats above
npx tsc --noEmit   # typecheck (should be clean)
```

**Verify with `yarn build`, not just `tsc`.** The TypeScript 7 breakage above passed
`tsc --noEmit` cleanly while failing the build. Stale `.next` codegen also produces phantom
errors about deleted routes — `rm -rf .next` before believing them.

## Working style (owner's stated preferences)

- **No `Co-Authored-By` trailer on commits.** Explicitly asked for.
- Conventional-commit prefixes, with a body explaining *why*, not just what.
- Be decisive: recommend and act rather than presenting option menus.
- Report failures honestly — the owner has explicitly valued being told when something did
  not work (e.g. `git gc` not actually purging secrets) over a clean-sounding summary.

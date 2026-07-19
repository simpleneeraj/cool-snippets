AI Don't Read it

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

Note `client.tsx` does **not** render `AppHeader` — the header comes from the studio's own
`layout.tsx` → `components/app/layout/index.tsx` (`AppLayout`).

Key pieces:

- **`src/components/app/layout/header.tsx`** (`AppHeader`) — top bar: back button, title editor
  (`edit-title`), `ResizeMenu`, the **`SegmentWidget`** (Edit / Images / Icons / Options tab
  switcher, from `widget/aside/controller-segment.tsx`), history/undo-redo, beautify, share,
  export, theme switch.
- **`src/components/app/widget/aside/primary/`** — left panel: element palette (All tab) +
  **Layers** panel (`primary/layers/`) + Reset.
- **`src/components/app/widget/aside/secondary/`** — right panel: renders the screen for the
  active segment (`EditScreens`, `BackgroundScreens`, `IconsScreen`, etc.) via `useSegment` store.
- **`src/components/app/screens/edit/`** — `index.tsx` is a five-item Accordion; each section
  lives in `edit/sections/` (code-basics, typography, appearance, effects, editor-options).
  Section ids/labels/slider ranges are enums+consts in `edit/sections/values.ts`.
- **`src/components/app/widget/code/elements/index.tsx`** — one dispatcher rendering every
  element type. Per-type renderers are siblings (`code`, `text`, `image`, `qr-code`,
  `user-info`, `watermark`).
- **`src/components/app/widget/selection-manager.tsx`** — the single source of deselection.

### Selection & the element toolbar (read before touching canvas events)

Selection lives in `useActiveElement` (`store/slides/current-element.ts`). Deselection is
handled **only** by `SelectionManager`, a capture-phase `pointerdown` listener on `document`
mounted once in `client.tsx`. It clears the selection unless the event path hits
`[data-selection-keep]`, `[id^="element-"]`, `.moveable-control-box`, or an open
dialog/menu/listbox/tooltip.

- Any panel that operates on the current selection must spread **`keepSelectionProps`**
  (exported from `selection-manager.tsx`) or clicking it will deselect. Already applied to:
  both asides, the header, `ToolbarWidget`, and the portalled `ElementToolbar`.
- **Never restore a per-frame `requestAnimationFrame` loop for toolbar positioning.** The
  toolbar uses `useAnchorPosition` (`app-kit/hooks/use-anchor-position`), which is
  ResizeObserver + scroll/resize driven and only falls back to a rAF loop while
  `interacting` is true (a Moveable drag mutates `style.transform` directly, firing no
  observer). The old implementation re-rendered the portal at 60fps while idle.

## Store (schema v2 — read before changing state shape)

`useSlide` (`src/store/slides/index.ts`) is the only persisted store, wrapped
**`persist(temporal(...))`** — `temporal` (zundo) sits _inside_ `persist` so undo history
never reaches localStorage. Both layers `partialize` down to `{ slides }`.

- **Versioned.** `STORE_VERSION = 2` (`typings/editor.ts`) with `migrate: migrateSlides`
  (`store/slides/migrations.ts`). Bump the version and extend that migration whenever the
  persisted shape changes — a v1 store must keep loading.
- **Z-order is array order.** `slide.elements[i]` renders with `zIndex: i + 1`. The old
  string `style.zIndex` ±1 arithmetic is gone and the v2 migration sorts by it once, then
  strips it. Reorder via `moveSlideElement(slideId, id, LAYER_DIRECTION)` /
  `reorderSlideElement`. Do not reintroduce a numeric zIndex field.
- **Undo/redo** via `useHistory` (`store/hooks/use-history.ts`). Rapid writes (slider
  scrubs, typing) collapse into one entry through zundo's `handleSet` debounced with
  `leading: true, trailing: false` — leading-edge so the snapshot is the state _before_ the
  burst. `setInteracting(true|false)` pauses/resumes history around drags.
- **`onChangeSlide` replaces `background` rather than deep-merging it.** Each background
  type owns a different `properties` key, so merging leaves the previous type's value behind
  with only `type` disambiguating. Use `onReplaceElementProperties` for whole-bag element
  writes (editor options, asset refs) where merge semantics would strand stale keys.
- **CodeMirror toggles** live at `element.properties.editor` and are read through
  `resolveEditorOptions` (`store/slides/editor-options.ts`). Its defaults reproduce the
  previously-hardcoded setup, so elements saved without the block look unchanged.
- `element.hidden` renders `display:none` (respected by export). Toggled from Layers, and
  from the element toolbar's eye button (which also deselects, since a `display:none` node
  has no box for the toolbar to anchor to).

## Uploaded images live in IndexedDB, not the store

`src/lib/assets/` — `store.ts` (`putAsset`/`getAsset`/`deleteAsset` over `idb-keyval`),
`use-asset.ts` (asset ref → displayable URL, with a module-level object-URL cache so URLs
are created once per session), `use-image-upload.ts` (file picker → `putAsset` → asset ref
with natural dimensions).

Elements store only `{ source: ASSET_SOURCE.IDB, assetId }`. **Do not inline base64 image
data into the slide store** — it is persisted to localStorage, which caps around 5MB across
the origin, and a couple of screenshots would evict the user's work.

## Fonts (migrated to next/font — do not reintroduce @font-face)

Code-block typefaces live in **`src/app-kit/fonts/code.ts`**. UI fonts are in
`src/app-kit/fonts/index.ts`. The old `src/json/fonts.json` + `src/styles/code-fonts.css`
pair is **deleted** — do not recreate it.

- 15 faces load via `next/font/google`, the rest via `next/font/local` from
  `src/app-kit/fonts/code/`. **Local font files must not live in `public/`** — files there
  are served verbatim and cannot be fingerprinted.
- **Every loader call must be fully literal at module scope.** A helper function wrapping
  `localFont()` fails with _"Font loaders must be called and assigned to a const in the
  module scope"_; spreading a shared options object fails with _"Unexpected spread"_. The
  repetition in that file is required, not sloppiness.
- `preload: false` on every face **except DM Mono**, which is the studio default and so is
  the one face worth preloading.
- **DM Mono is the default** (`DEFAULT_CODE_FONT = 'DMMono'`, id also seeded at
  `store/slides/state.ts` and `aside/primary/values.ts`). It is a **static** face — its
  loader must use `weight: ['300','400','500']`; `weight: 'variable'` fails the build.
- **next/font generates the family name at build time, so it cannot be persisted.** The
  store keeps a stable id (`'DMMono'`); `resolveCodeFontFamily(id)` maps it to the
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
- **Pro gating is gone.** The palette, export dialog presets/formats and element templates no
  longer reference `APP_PLAN_TYPE`. The enum still exists in `typings/enums.ts` but nothing
  in the studio reads it. Do not reintroduce gating — everything is free.
- A few decorative components call `Math.random()` during render (`UIFireflies`,
  `UIMeteors`, `UIBackgroundLines`, `UIBackgroundBeams`, `UICursorPointer`) — potential
  hydration warnings if SSR'd. Fix pattern: generate randomness in `useEffect` after mount
  (see `UIFeatureCard`'s `Grid`).
- localStorage persistence **is** wired (`zustand/persist`, key `COOL_SNIPPETS_STORE`).

## Studio wiring effort — status (last session)

Plan file: `~/.claude/plans/var-folders-st-55gh2mpn52z1d9d-03xc5tth-tingly-rabbit.md`.
Deps added this round: `zundo`, `idb-keyval`, `qrcode.react`,
`@replit/codemirror-indentation-markers`. `tsc --noEmit` and `yarn build` were both clean at
the end of the session; nothing was manually verified in a browser yet.

**Done**

- _Store v2_ — versioned persist + migration, array-order z-index, `hidden` flag, new
  element property shapes, narrower selectors in `use-editor`, replace-not-merge background
  writes. Undo/redo wired end-to-end (header buttons, `⌘Z`/`⌘⇧Z`, burst grouping).
- _Edit panel_ — split into five Accordion sections. **All seven CodeMirror toggles now
  work** (they were checkboxes with no state and no render path). Added padding, font size,
  line height, letter spacing, block background. Fixed the language/font comboboxes
  rendering `[object Object]` by supplying `itemToStringLabel`. Removed the duplicate
  "Customize your code block" accordion item and its `Other things Here` placeholder.
- _DM Mono_ added and made the default.
- _Bugs_ — outside-click deselection (`SelectionManager`); toolbar 60fps idle loop replaced
  with `useAnchorPosition`; **background patterns now apply** (they were stored as
  `background-image: …;` declaration blocks and injected as the _value_ of the `background`
  shorthand → invalid CSS, silently dropped; now normalised through `utils/background-css.ts`,
  shared with the picker previews); Mesh backgrounds now write to the store (they never did);
  `UIVirtualizeGrid` self-measures via ResizeObserver instead of `windowHeight − 80` guesses;
  `UIResizableFrame` dead handlers removed, `width:"undefinedpx"` fixed, bigger handles,
  stuck-cursor fix, `framer-motion` → `motion/react`; canvas artboard now has a visible
  ring + shadow; icons tab bar no longer clips; Moveable guidelines memoised instead of
  `querySelectorAll` per render.
- _Elements_ — QR Code, User Info and Watermark built (they previously had no template and
  no renderer, so dropping them silently did nothing). Image/Icon render properly with an
  upload flow into IndexedDB. Icon picker selection re-enabled (it was commented out).
  Layers panel built: reorder, visibility, duplicate, delete, select-on-click.
- _Cleanup_ — export dialog Pro locks removed and toasts restored; nine dead `.txt` scratch
  files, the `widget/code/index.tsx` stub, `elements/icon.tsx` and the `use-dynamic-height`
  hook deleted; `console.log`s removed from background content; share's dead buttons
  disabled with a "Coming soon" title.

**Remaining**

1. **Nothing has been exercised in a browser.** Highest-value next step, in order: confirm an
   existing `COOL_SNIPPETS_STORE` blob still loads looking identical (the v2 migration is the
   main regression risk), then multi-element stacking after the zIndex migration, then that
   history arrays never appear in localStorage.
2. **JSON design import/export** (plan Phase 6) — not started. Intended: versioned envelope
   `{app, kind, schemaVersion, exportedAt, design:{slides}}`, zod-validated in
   `src/lib/design-io/`, IDB assets inlined as data URLs on export and re-`putAsset`ed on
   import.
3. **Auth + sharing** (plan Phase 7) — deliberately deferred; the share dialog is still a
   preview-only stub. Reintroducing auth or a database needs the owner's explicit say-so
   (see Project direction above).
4. Text/image/QR/user-info/watermark elements have **no property editors** in the right
   panel — the Edit panel shows a "select a code block" empty state for them. Their defaults
   are only changeable via the canvas (image upload) for now.
5. Orphaned but harmless: `useScreen.screen.aside` + `ASIDE_SCREEN` have no consumers;
   `APP_PLAN_TYPE` is unreferenced by the studio; `background.style.size/position/repeat` are
   stripped by the v2 migration and hardcoded at render.
6. Three `.txt` scratch files remain (`styles/_resiable-frame.txt`,
   `server/icons/hooks/use-twitter-emoji.txt`, `app-kit/components/UIShinyText/index.txt`) —
   left alone as they were outside this effort's scope.

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
- Conventional-commit prefixes, with a body explaining _why_, not just what.
- Be decisive: recommend and act rather than presenting option menus.
- Report failures honestly — the owner has explicitly valued being told when something did
  not work (e.g. `git gc` not actually purging secrets) over a clean-sounding summary.

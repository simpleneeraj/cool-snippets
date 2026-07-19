⏺ User approved Claude's plan
⎿  Plan saved to:
~/.claude/plans/var-folders-st-55gh2mpn52z1d9d-03xc5tth-tingly-rabbit.md ·
/plan to edit
Cool Snippets Studio — Full Feature Wiring & Bug-Fix Plan

     ═══════════════════════════════════════════════════════════════════
     SHIPPED — session 2026-07-19 (read first; the plan below is backlog)
     ═══════════════════════════════════════════════════════════════════

     Ad-hoc fixes landed outside the phased plan. All gated on
     `npx tsc --noEmit` + `rm -rf .next && yarn build` (both clean).

     NOTE: `yarn lint` used to be described here as "broken by design". It was
     not — it was a missing `@eslint/eslintrc` plus `eslint: ^10`, which is
     ahead of what eslint-plugin-react supports. Both are fixed; lint runs and
     is now a real gate. It reports 51 pre-existing errors and 39 warnings
     (34 of them react-hooks/* correctness findings) that predate the structure
     work and still need their own pass — so treat a NEW lint error as yours,
     and do not treat the existing count as permission to ignore the tool.

     ═══════════════════════════════════════════════════════════════════
     PROJECT STRUCTURE (read before adding a file)
     ═══════════════════════════════════════════════════════════════════

     Feature-sliced. Dependencies point downward only:

         app shell (app/, layouts/, providers/)
              v
         features/  studio · editor-rte · marketing   (siblings independent)
              v
         shared/    ui · uikit · motion · fonts · hooks · lib · config ·
                    types · icons
              v
         vendor/ (third-party) + data/ (static datasets)

     Every layer has its own alias — @features/*, @shared/*, @vendor/*,
     @data/*, @layouts/*, @providers/*, @styles/*. There is deliberately NO
     @/* catch-all: it could reach any layer and would let imports bypass the
     boundary rule. eslint.config.mjs enforces the direction via
     no-restricted-imports, matching on the alias in the import string.

     Where new code goes:
       - Studio behaviour            -> features/studio/{canvas,panels,aside,
                                        toolbar,layout,store,model,lib,ui}
       - Reusable, feature-agnostic  -> shared/*
       - Used by exactly one feature -> that feature, NOT shared/
       - Static datasets / presets   -> data/

     THREE UI SYSTEMS — pick deliberately:
       - shared/ui     coss/Base UI primitives. THE DEFAULT for new code (77
                       consumers). components.json points the coss CLI here.
       - shared/uikit  UIView, the layout primitive (61 consumers), plus legacy
                       UIButton/UIColorPicker. Keep using UIView; prefer
                       shared/ui/button over UIButton in new code.
       - shared/motion Decorative/animated components only.
       - features/editor-rte/primitives is a FOURTH set — vendored Tiptap
         internals, private to that feature. Never import it from outside;
         it is intentionally absent from the barrel.

     Cross-feature: only studio -> editor-rte, only via
     `import { … } from '@features/editor-rte'`. Deep paths are a lint error.

     Paths in the backlog below predate this migration: components/app/* is now
     features/studio/*, app-kit/ui is shared/ui, app-kit/fonts is shared/fonts,
     src/typings is split between shared/types and features/studio/model,
     src/store is features/studio/store, src/plugins is vendor/, and src/json
     plus src/server are data/.

     Header system — registry refactor (the big one). Replaced the switch +
     three near-identical template components with a data-driven registry, so
     adding a style is one object, not edits across a switch, the palette and
     the store:
       - widget/code/templates/registry.tsx — HEADER_TEMPLATES (single source of
         truth: name, decoration, decorationSide, colors, defaultStyle, picker
         preview) + HEADER_TEMPLATE_LIST.
       - widget/code/templates/window-chrome.tsx — one shared frame (background +
         justify-content alignment + filename); caller slots a `decoration`.
       - widget/code/templates/decorations.tsx — TrafficLights / WindowsButtons /
         UnixIcons (the only parts that differ between styles).
       - widget/code/headers.tsx — now a registry lookup (~40 lines).
       - aside/primary/ui-templates.tsx — derives from the registry, so new
         styles auto-appear in the header-type picker.
       - Deleted: ios-terminal.tsx, windows-terminal.tsx, unix-neon.tsx, and dead
         aside/primary/templates.tsx + templates-preview.tsx.
       - Two new styles added: macOS Graphite (mono traffic lights), Minimal
         (chrome-less, filename only). src/json/templates.json gained macos +
         minimal keys. Cheap next adds: VS Code tab, browser URL bar, prompt.

     Header enum typing. SlideHeaderType (typings/editor.ts) variant/input/
     position narrowed from `…|string` to HeaderVariants/HeaderInputType/
     HeaderPositions; removed the `as` casts in headers.tsx; seed state.ts uses
     enums — fixed a latent variant:'outline' that matched NO enum value
     (OUTLINE is 'outline-solid'), now HeaderVariants.OUTLINE. Narrowing is
     compile-time only; old localStorage 'outline' still renders (decorations
     branch on .includes()).

     Header toolbar (screens/edit/toolbar/header-toolbar.tsx). Icon picker &
     filename input are now contextual to the input type (icon only for
     Icon/Icon+Input; filename only for Input/Icon+Input); alignment can't be
     emptied. Replaced the full-screen icon Dialog with an inline Popover
     (toolbar/icon-popover.tsx, vscode-symbols only, fetch scoped to open state);
     deleted orphaned toolbar/modal.tsx.

     Header font consistency. Filename <input> tagged .code-header-filename
     (templates/style/index.ts) and driven by resolveCodeFontFamily in
     styles/element.tsx, so the header uses the same dynamic code font as lines.

     Export font bug (was rendering serif). Root cause: resolveCodeFontFamily
     returns next/font's family LIST ('__Font_x', '__Font_Fallback_x'); the
     export path fed the whole list to resolveFontSource, which matches a single
     @font-face name → never matched → empty embed → serif. Fix: primaryFontFamily()
     in app-kit/fonts/source.ts reduces to the first name, used in export.tsx
     exportFonts() for both the lookup and the @font-face declaration. Earlier
     hardening: removed cacheBust (corrupts blob/data URLs) + added
     awaitFontsReady() in lib/export/use-capture.ts; real error surfaced in toast.

     Resize collapse (both entry points). onChangeSlide REPLACES `background`
     wholesale (not merge) — so any partial {background:{style:{width}}} write
     wiped type/properties/padding and collapsed the artboard. Fixed in
     studio/client.tsx onWidthChange (drag handle) and layout/resize-menu.tsx
     onSubmit (preset/custom) by spreading the existing background first.
     RULE: every onChangeSlide({background}) caller must spread the current
     background — grep before adding new ones.

     Selection / Moveable positioning. Toolbar re-measures on store-driven moves
     (elements/toolbar.tsx — useAnchorPosition.refresh() keyed on position/size
     style deps). Moveable frame re-syncs via moveableRef.updateRect() in a
     useLayoutEffect (elements/moveable.tsx); removed non-existent snapCenter/
     snapElement props; bounds.position:'css' so drag isn't clamped mid-canvas by
     the viewport offset.

     ═══════════════════════════════════════════════════════════════════

     Context

     The studio (/studio) was migrated from HeroUI to coss UI (Base UI). The
     migration left many
     right-panel controls as visual stubs, several palette elements have no
     implementation at all, and
     a handful of event/measurement bugs shipped along the way. The goal is to
     wire every feature
     production-ready: Edit panel first, all palette elements (everything free —
     no Pro gating), a real
     Layers tab, the specific bugs below, DM Mono as the default code font, and
     undo/redo. JSON
     import/export and auth/sharing come last.

     Owner decisions captured during planning:
     - Build QR Code, User Info and Watermark elements fully now.
     - Uploaded images/branding go to IndexedDB via idb-keyval; elements store a
     stable asset id.
     - Undo/redo now, via zundo temporal middleware.

     Verification gate: npx tsc --noEmit and yarn build after each phase (yarn
     lint is
     broken by design — ignore it). rm -rf .next before believing stale route
     errors.

     New dependencies (4, all small): zundo, idb-keyval, qrcode.react,
     @replit/codemirror-indentation-markers. Install with yarn 1.x.

     Verified root causes

     1. Element toolbar won't close on outside click — deselect only fires from
     onPointerDown on
     the inner .center slide container (widget/code/container.tsx:89-103).
     Clicks on the padded
     canvas, DotPattern or header never reach it, and no document-level listener
     exists.
     2. Toolbar burns a frame budget — elements/toolbar.tsx:61-74 runs an
     unbounded
     requestAnimationFrame loop (getBoundingClientRect + setState at 60fps) the
     entire time an
     element is selected.
     3. 7 Edit-panel checkboxes are dead — no checked/onCheckedChange, no
     backing store fields;
     the render side (widget/code/elements/code.tsx:33-48) hardcodes basicSetup
     and always
     applies EditorView.lineWrapping.
     4. Background patterns don't apply — 657 of ~1731 entries in
     server/patterns/gradients.ts
     have a source starting with background-image: …; (a declaration, not a
     value). It is stored
     raw and injected verbatim as background: <source> (styles/slide.tsx:24 via
     background-purify.ts) → invalid CSS, silently dropped. The preview works
     because it parses
     through cssToStyle(validateGradient()). Patterns also sort/key by a name
     field that does not
     exist, and the Mesh screen never writes the store at all.
     5. QR / User Info / Watermark are ghosts — palette entries exist but
     templates are undefined
     (drops no-op), no canvas renderers (switch falls to default: null), QR is
     wrongly mapped to
     ELEMENTS.USERINFO (values.ts:53), and all three are Pro-gated so clicks are
     blocked.
     6. Image / Graphic Icon render blank — template properties:{} carries no
     src, the renderer
     is a bare <img>, and no upload UI exists. Icon selection is fully commented
     out
     (screens/icons/index.tsx:25-39), so picking an emoji adds nothing.
     7. Layers tab is decorative — tabs render with no panel switch. A full
     implementation exists
     only as dead scratch layers-preview.txt importing removed HeroUI.
     8. UIVirtualizeGrid height — VirtuosoGrid receives a fixed pixel height
     from
     useDynamicHeight (measures once on mount, 0 before measurement) minus magic
     constants
     (80/80/90). The correct ResizeObserver pattern already exists in
     background/virtual-grid.tsx:33-45.
     9. UIResizableFrame — dead duplicated handlers that are never attached;
     width can be
     undefined → width:"undefinedpx"; "Set to auto width" actually resets to
     minWidth; 24px
     handles with no hover affordance; handles (z-10) sit under selected
     elements (zIndex 999); body
     cursor sticks if pointerup is missed; imports framer-motion while the app
     uses motion/react.
     10. Undo/redo — header buttons have no handlers and no history store
     exists.
     11. Icons tab bar clipped — four long non-wrapping labels overflow the w-80
     aside.
     12. Store hygiene — no persist version/migrate; additive deep-merge leaves
     stale background
     props; slide.watermark, aspectRatio and glassmorphism.alpha are written but
     never read;
     z-order is string zIndex ±1 math; console.logs in background/content.tsx;
     dead .txt
     scratch files throughout; client.tsx has an unused AppHeader import and
     body slot;
     PrimaryAsideWidget destructures a nonexistent resetState.

     ---
     Phase 1 — Store foundation (schema v2, migration, history)

     Everything downstream depends on this. Keep it tight and land it first.

     Enums (src/typings/enums.ts) — add ELEMENTS.QRCODE, WATERMARK_MODE
     {TEXT,IMAGE},
     ASSET_SOURCE {URL,IDB}. No new hardcoded strings anywhere.

     properties.editor on CODE elements — the 7 toggles, with defaults chosen to
     reproduce
     today's hardcoded render exactly, so migrated stores look identical:
     lineNumbers:false,
     wrapLongLines:true, highlightActiveLine:false, matchBrackets:true,
     syntaxHighlighting:true,
     indentationGuides:false, monospaceFont:true. A
     resolveEditorOptions(properties.editor) helper
     supplies defaults so absent fields need no migration. Add padding here too
     (default 16, matching
     the hardcoded .cm-editor padding in styles/element.tsx:27).

     Z-order — decision: array order, drop numeric zIndex. Render zIndex from
     the element's index
     in slide.elements; delete the string math in elements/toolbar.tsx:80-88;
     stop forcing selected
     elements to 999 (the Moveable outline is the selection affordance). New
     actions moveElement(id, 'up'|'down'|'top'|'bottom') and reorderElement(id,
     toIndex).

     New element property shapes — IMAGE/ICON {source, assetId?, src?,
     naturalWidth?, naturalHeight?, alt?}; QRCODE {value, size, fgColor,
     bgColor, level, marginSize}; USERINFO
     {name, handle, avatar:{source,assetId?,src?}, showAvatar}; WATERMARK {mode,
     text, image?, opacity}. Add hidden?: boolean to the base element type for
     the Layers eye toggle (render as
     display:none so export respects it).

     Persist hardening (src/store/slides/index.ts) — wrap as
     persist(temporal(creator, …), {name, version: 2, partialize: s => ({slides:
     s.slides}), migrate: migrateSlides}). temporal goes
     inside persist so history never reaches localStorage. New
     src/store/slides/migrations.ts
     handles v0/v1 → v2: sort elements by Number(style.zIndex) then strip it,
     drop stale
     watermark/aspectRatio/background.style.{size,position,repeat}, and repair
     broken pattern
     backgrounds (Phase 3c).

     Undo/redo wiring — setInteracting(true) pauses the temporal store,
     setInteracting(false)
     resumes it (called before the final commit in Moveable's
     onDragEnd/onResizeEnd) so a whole
     drag collapses into one history entry. Wire layout/history-manager.tsx
     buttons to undo()/
     redo() with disabled states from pastStates/futureStates, plus mod+z /
     mod+shift+z via
     the already-installed react-hotkeys-hook.

     Merge semantics (src/store/hooks/use-editor.ts) — background,
     properties.editor and
     background.properties become replace-whole-object writes so stale keys stop
     lingering; keep deep
     merge for element style patches. Switch useSlideEditor to narrow selectors
     (current slide by id)
     instead of subscribing to the whole slides array — this is what makes every
     keystroke re-render
     the container, moveable and both toolbars today.

     Phase 2 — Edit panel (priority #1) + DM Mono

     DM Mono (src/app-kit/fonts/code.ts) — add a literal module-scope loader
     (helper functions and
     spreads break the next/font build): DM_Mono({weight:['300','400','500'],
     subsets:['latin'], display:'swap', preload:false}). DM Mono is static, not
     variable — weight:'variable' fails
     the build. Register font('DM Mono','DMMono',dmMono) in CODE_FONTS, set
     DEFAULT_CODE_FONT='DMMono' (code.ts:327), and update the seeds at
     store/slides/state.ts:56 and
     values.ts:112. The export pipeline (fonts/source.ts) picks it up
     automatically. Existing
     persisted stores keep their saved id — that is intended.

     Regroup screens/edit/index.tsx into one Accordion with five sections, split
     into
     screens/edit/sections/: Code basics (language, theme, window header) ·
     Typography (font
     family, size, line height, letter spacing) · Appearance (corner radius,
     background
     opacity/color, padding) · Effects (Neon, Glassmorphism) · Editor options
     (the 7 toggles).
     Default code-basics open, multiple allowed. Delete the duplicate second
     "Customize your code block" item and its Other things Here placeholder.

     Render side (widget/code/elements/code.tsx) — drive basicSetup and
     extensions from
     resolveEditorOptions: flags for line numbers / active line / bracket
     matching, conditional
     EditorView.lineWrapping, conditional language extension for syntax
     highlighting,
     indentationMarkers() for indent guides, and a .cm-content font-family
     override for the
     monospace toggle. Also fix the language and font comboboxes, which bind
     object values without a
     string-label resolver (add itemToStringLabel or bind by string id) — the
     theme combobox is fine.

     Phase 3 — Bug sweep (independent items, parallelizable)

     3a. Outside-click selection — a SelectionManager client component mounted
     once in the editor
     layout, with a capture-phase document pointerdown listener. It clears
     selection unless
     event.composedPath() contains [data-selection-keep], [id^="element-"], or
     .moveable-control-box; tag the portaled ElementToolbar, both asides, the
     header ToolbarWidget and
     coss popover/dialog portal content with data-selection-keep. Early-return
     while interacting.

     3b. Toolbar repositioning — delete the rAF loop; reposition from Moveable's
     drag/resize
     callbacks, a ResizeObserver on the target, and window scroll/resize,
     skipping setState when the
     rect is unchanged.

     3c. Background patterns — normalize at write time in content.tsx
     onUpdateBackground: run
     PATTERN sources through the same cssToStyle(validateGradient()) pipeline
     the preview already
     uses, storing a valid CSS value. Existing broken stores are repaired in the
     v2 migration. Key
     patterns by index/source hash instead of the nonexistent name. Wire Mesh's
     onSelect
     (content.tsx:65). Remove the console.logs at lines 19, 59, 82.

     3d. UIResizableFrame + canvas visibility — delete the dead handler block;
     guard
     width ?? defaultWidth; rename the affordance to "Reset width" (it resets to
     minWidth); enlarge
     handles with a hover ring; add pointercancel/window pointerup so the body
     cursor cannot stick;
     swap framer-motion → motion/react. Add the border + shadow the owner asked
     for on the frame
     slot in client.tsx's tv() block, and remove the unused AppHeader import and
     body slot.

     3e. UIVirtualizeGrid + icons — rewrite the grid to self-measure via a
     layout-fill wrapper +
     ResizeObserver (copying background/virtual-grid.tsx:33-45), dropping
     useDynamicHeight and the
     80/80/90 constants at icons/grid.tsx:27, emoji-picker.tsx:23, solid.tsx:16.
     Make the icons
     tab list wrap/scroll with shorter labels (per-instance classes — do not
     fork app-kit/ui/tabs.tsx).
     Re-enable icon selection so a click creates an ELEMENTS.ICON element.
     Render the ~16–100 color
     swatches as a plain CSS grid (virtualization buys nothing at that size) and
     move the hardcoded
     UIColorPicker palette into a shared constant.

     Phase 4 — Elements, uploads, Layers

     4a. Remove Pro gating — strip plan fields from values.ts, the isPro
     computation, the
     click gate and the Pro badge in primary/index.tsx; fix the nonexistent
     resetState destructure;
     point the QR entry at ELEMENTS.QRCODE.

     4b. Asset layer — new src/lib/assets/: store.ts
     (putAsset/getAsset/deleteAsset over
     idb-keyval) and use-asset.ts (resolves {source,assetId,src} to a
     displayable URL, with a
     module-level Map<assetId, objectURL> cache so URLs are created once per
     session and revoked only
     on delete). Upload UX: clicking/dropping Image opens a file dialog →
     putAsset → element created
     with natural dimensions. The capture pipeline fetches blob URLs fine
     through the existing
     blobfromurl.

     4c. New renderers (widget/code/elements/) with real templates in values.ts
     — qr-code.tsx
     using qrcode.react's QRCodeSVG (SVG is resolution-independent and has no
     async draw race
     during capture, unlike canvas), user-info.tsx (avatar + name + @handle
     card), watermark.tsx
     (text or image mode with opacity), and proper image.tsx/icon.tsx via
     use-asset. Register all
     in the canvas switch so nothing falls through to null.

     4d. Layers panel — wire the Layers tab to a real panel under
     primary/layers/, porting the
     concepts from layers-preview.txt to coss before deleting the .txt. Rows
     list
     currentSlide.elements top-most first: type icon, label from
     elementLabelMapper, eye toggle
     (hidden), overflow menu (duplicate/delete); clicking a row selects the
     element and highlights it.
     Reordering uses up/down/top/bottom buttons calling moveElement —
     drag-reorder is deliberately
     deferred.

     Phase 5 — Polish, perf, dead code

     Remove the dead locked:true flags on PNG/SVG and Portfolio/Print presets
     plus the hardcoded
     isPremium=true in export.tsx, and re-enable the commented-out toasts via
     toastManager.
     Memoize Moveable's elementGuidelines (derive from element ids once per
     selection change instead
     of querySelectorAll every render) and recompute container guidelines in an
     effect keyed on frame
     width. Delete dead files: layers-preview.txt, secondary/index.txt,
     share/index.txt,
     share/webgl.txt, icons/symbols-picker.txt, icons/material-icons.txt,
     widget/code/old.txt,
     widget/code/elements/index.txt, templates/previews/device-templates.txt,
     and the
     widget/code/index.tsx stub. For plugins/capture/usedfont, verify before
     deleting —
     capture/main/fonts.ts imports filereader from it, so keep what fonts.ts
     needs.

     Phase 6 — JSON import/export

     Versioned envelope {app:'cool-snippets', kind:'design', schemaVersion:2,
     exportedAt, design:{slides}},
     validated with zod (already a dependency) in src/lib/design-io/schema.ts.
     Import runs
     migrateSlides for older versions, then parses, rejecting with a toast on
     failure. Images: export
     resolves every IDB asset to an embedded base64 data URL so the file is
     self-contained; import
     re-putAssets them and rewrites to fresh ids. Fonts export as ids only,
     falling back through
     resolveCodeFontFamily. UI: "Export design (.json)" and "Import design"
     entries alongside the
     existing export dialog; import is a single temporal write, so it is
     undoable.

     Phase 7 — Auth + sharing (placeholder)

     No implementation this round. Disable the dead share buttons with a "Coming
     soon" tooltip rather
     than leaving silent no-ops. Intended shape, for later: auth provider TBD,
     designs persisted per
     user, share = uploaded design JSON plus an OG image generated by the
     existing capture pipeline.
     Note this contradicts nothing in CLAUDE.md's "no Clerk / no DB" stance only
     because it is deferred
     — reintroducing either subsystem needs the owner's explicit say-so.

     ---
     Critical files

     - src/store/slides/index.ts — persist v2, temporal, z-order actions
     - src/store/slides/migrations.ts — new
     - src/store/hooks/use-editor.ts — merge semantics, narrow selectors
     - src/components/app/screens/edit/index.tsx + new sections/
     - src/components/app/widget/code/elements/code.tsx — editor options render
     - src/components/app/widget/code/elements/toolbar.tsx — rAF removal
     - src/components/app/widget/aside/primary/values.ts — templates, enums,
     gating removal
     - src/app-kit/components/UIVirtualizeGrid/index.tsx,
     UIResizableFrame/index.tsx
     - src/app-kit/fonts/code.ts — DM Mono
     - src/lib/assets/, src/lib/design-io/ — new

     Verification

     Run yarn dev and check at /studio, per phase:
     1. Store — existing localStorage blob loads visually unchanged (biggest
     regression risk);
     multi-element stacks keep their order after the zIndex migration; DevTools
     → Application shows
     no history arrays in COOL_SNIPPETS_STORE; undo/redo works and a full drag
     is one step.
     2. Edit panel — each of the 7 toggles visibly changes CodeMirror;
     language/theme/font labels
     render correctly in the combobox trigger; DM Mono is the default in a fresh
     profile.
     3. Bugs — clicking empty canvas, the header, or outside the frame closes
     the element toolbar,
     while clicking the toolbar itself does not; the toolbar no longer pegs a
     core when idle (check
     the Performance profiler); patterns apply to the canvas; icon/color grids
     fill their panel at
     several window heights; frame handles are grabbable and the canvas has a
     visible boundary.
     4. Elements — every palette item drags and click-adds a visible element;
     QR/User Info/
     Watermark render and export; uploaded images survive a reload (IndexedDB)
     and appear in exports.
     5. Export — PNG/WEBP/JPEG/SVG all download with correct fonts and no Pro
     locks.
     6. Round-trip — export JSON, reset storage, import, and confirm the design
     is identical.

     Gate each phase on npx tsc --noEmit and yarn build.

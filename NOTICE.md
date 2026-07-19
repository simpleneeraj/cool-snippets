# Notice on third-party assets

Cool Snippets started as a personal learning project, and a lot of the assets in
`public/` were gathered along the way without a careful record of where each one came
from or what its licence allowed. The application **code** is MIT licensed (see
[LICENSE](./LICENSE)) and is my own work. **The bundled assets are a separate matter, and
some of them I have no right to redistribute.**

This file is an honest account of what is in here and what I am unsure about.

**If you own any asset listed below and object to it being distributed here, open an
issue or email me and I will remove it immediately — no argument, no delay.** I would
much rather ship a smaller project than one built on someone else's work without their
permission.

## Fonts (`public/fonts/`)

**None of the bundled fonts ship with their licence text, which is a requirement even for
the permissively licensed ones.** That is a bug and is being corrected.

### Removed — commercial, not redistributable

These were deleted from the repository, from the font picker and from the stylesheet.
They were never licensed for redistribution and should not have been committed.

| Font | Why |
| --- | --- |
| **MonoLisa** | Commercial, per-seat licence. Redistributing the font file is not permitted. |
| **Operator Mono** | Commercial (Hoefler&Co). Redistribution not permitted. |
| **SF Mono** | Apple. Licence restricts use to Apple platforms; redistribution not permitted. |

They remain in the git history of earlier commits. If you are the rights holder and want
them expunged from history as well, say so in an issue and the history will be rewritten.

### Still under review

**Ligaturized** is a patched derivative of other typefaces; whichever licence governs the
base font governs it too, and that is unrecorded here. Some of its variants are derived
from the commercial fonts listed above.

### Open licences — permitted, but the licence text must ship with them

Fira Code, JetBrains Mono, Cascadia Code, IBM Plex Mono, Source Code Pro, Ubuntu Mono,
Roboto Mono, Inconsolata, Victor Mono, Hasklig, Monoid, Iosevka, Comic Mono, Major Mono,
Syne Mono, Xanh Mono, Hachi Maru Pop.

These are OFL, MIT, Apache-2.0 or the Ubuntu Font Licence. Redistribution is fine; the
omission of their licence files is a bug and is being corrected.

### Provenance unknown

Almamono, Anomaly, Sweet16, Input Mono. Input Mono in particular is commercial for most
uses. Treat these as unverified.

## Background images (`public/backgrounds/`)

353 JPG wallpapers, roughly 240 MB, named after a third-party wallpaper series
(`dddepth-*`). **I did not create these and cannot establish that they are licensed for
redistribution.** They are the single largest liability in the repository and also the
reason a clone is so heavy.

They are slated for removal. The intended replacement is generated gradients and patterns,
plus letting you load your own image — which is the only part that ever mattered.

## Other assets

- `public/ai/unsplash.webp` — an Unsplash image. Unsplash's licence is permissive but
  attribution to the photographer is expected, and I no longer know who took it.
- `public/patterns/*.svg` — 19 decorative patterns of unrecorded origin.
- `public/snippets/*.svg` — Mintlify, Prisma and Tailwind logos. These are trademarks of
  their respective owners, used as illustrative examples only. No affiliation or
  endorsement is implied.
- Interface icons come from the [Solar icon set](https://www.figma.com/community/file/1166831539721848736)
  (CC BY 4.0) via `@solar-icons/react`, and from [Lucide](https://lucide.dev) (ISC).
- Language icons are loaded at runtime from public VS Code icon-theme repositories and are
  the property of their authors.

## What this project is

This is an educational and learning project, built in the open and given away for free. It
makes no money — there is no paywall, no subscription and no advertising. That is context,
not a legal defence: "educational use" is not a blanket exemption, and where an asset
should not be here, the fix is to remove it rather than to justify it.

## Reporting a problem

Open an issue at
<https://github.com/simpleneeraj/cool-snippets/issues>. Takedown requests are treated as
the highest priority in this project and do not need to be formal.

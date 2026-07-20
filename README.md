# Cool Snippets

<div align="center">

**Turn code into beautiful, shareable images.** <br />
A free and open-source alternative to ray.so, Carbon and snappify — no account, no paywall, no upload. Everything runs in your browser.

[![Stars](https://img.shields.io/github/stars/simpleneeraj/cool-snippets?style=flat-square&logo=github&color=ffdd00)](https://github.com/simpleneeraj/cool-snippets/stargazers)
[![Forks](https://img.shields.io/github/forks/simpleneeraj/cool-snippets?style=flat-square&logo=github&color=007acc)](https://github.com/simpleneeraj/cool-snippets/network/members)
[![Issues](https://img.shields.io/github/issues/simpleneeraj/cool-snippets?style=flat-square&logo=github&color=ea4335)](https://github.com/simpleneeraj/cool-snippets/issues)
[![Last Commit](https://img.shields.io/github/last-commit/simpleneeraj/cool-snippets?style=flat-square&logo=git&color=34a853)](https://github.com/simpleneeraj/cool-snippets/commits/main)
[![License](https://img.shields.io/github/license/simpleneeraj/cool-snippets?style=flat-square&color=8a2be2)](https://github.com/simpleneeraj/cool-snippets/blob/main/LICENSE)
[![Sponsors](https://img.shields.io/github/sponsors/simpleneeraj?style=flat-square&logo=github-sponsors&color=ff69b4)](https://github.com/sponsors/simpleneeraj)

<br />

![Cool Snippets Studio Preview](/public/screenshot/app-screenshot-1.png)

</div>

---

## What it does

Paste a snippet, style it, export it. Drop the result into a blog post, a slide, a README,
or a tweet.

- **43 languages** with real syntax highlighting, powered by CodeMirror 6
- **17 syntax themes** — Dracula, Nord, One Dark, Gruvbox, Solarized, Material, Sublime and more
- **25 coding fonts** bundled — Fira Code, Cascadia, Hasklig, Comic Mono, and others
- **Window chrome** — macOS, Windows and Unix terminal headers with editable titles and file icons
- **Effects** — glow, glassmorphism, blur, corner radius, custom padding
- **Backgrounds** — solid colours, gradients, patterns and your own images
- **A real canvas** — drag in text, images and icons alongside the code block, not just one fixed frame
- **Export** to PNG, JPEG, WEBP or SVG, or copy straight to the clipboard, with presets for
  social, presentation, portfolio and print

## Why another one of these

Most code-to-image tools are either closed, gated behind a subscription once you want a
second export size, or they send your snippet to a server. Cool Snippets is MIT licensed,
free in full, and never transmits your code — your work is saved in `localStorage` and
nowhere else. There is nothing to sign up for.

It is funded by [sponsors](https://github.com/sponsors/simpleneeraj), not by locking
features away.

## Compared to

|                      | Cool Snippets | ray.so | Carbon | snappify |
| -------------------- | :-----------: | :----: | :----: | :------: |
| Open source          |    ✅ MIT     |   ✅   |   ✅   |    ❌    |
| Free, no limits      |      ✅       |   ✅   |   ✅   | Partial  |
| No account needed    |      ✅       |   ✅   |   ✅   |    ❌    |
| Multi-element canvas |      ✅       |   ❌   |   ❌   |    ✅    |
| SVG export           |      ✅       |   ❌   |   ✅   |    ✅    |
| Self-hostable        |      ✅       |   ✅   |   ✅   |    ❌    |

## Getting started

Requires **Node 22+** and **Yarn 1.x**.

```bash
git clone https://github.com/simpleneeraj/cool-snippets.git
cd cool-snippets
yarn install
yarn dev
```

Open <http://localhost:3000> — the editor lives at
[`/studio`](http://localhost:3000/studio).

No environment variables are needed for local development. `BASE_URL` is the only one the
app reads, and it is used purely to build absolute URLs for `sitemap.xml` and `robots.txt`;
on Vercel it is inferred automatically, and locally it falls back to `http://localhost:3000`.

| Command            | What it does               |
| ------------------ | -------------------------- |
| `yarn dev`         | Dev server (Turbopack)     |
| `yarn build`       | Production build           |
| `yarn start`       | Serve the production build |
| `yarn lint`        | ESLint with `--fix`        |
| `npx tsc --noEmit` | Typecheck                  |

## Built with

- [Next.js 16](https://nextjs.org) (App Router) and [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org) and [Tailwind CSS v4](https://tailwindcss.com)
- [coss UI](https://coss.com/ui) on [Base UI](https://base-ui.com) for components
- [CodeMirror 6](https://codemirror.net) for the editable code block
- [Zustand](https://zustand.docs.pmnd.rs) for editor state, persisted to `localStorage`
- [Tiptap](https://tiptap.dev) for rich text elements

## Project layout

The codebase is feature-sliced. Dependencies only point downward:
**app shell → features → shared → vendor/data**.

```
src/
├── app/                   # Next.js routes only — thin, no logic
├── features/
│   ├── studio/            # The editor: canvas, panels, toolbars, store, export
│   ├── editor-rte/        # Vendored Tiptap rich-text editor (private internals)
│   └── marketing/         # Public site sections
├── shared/                # Feature-agnostic: ui, uikit, motion, fonts,
│                          #   hooks, lib, config, types, icons
├── vendor/codemirror/     # Language and theme registries
├── data/                  # Static datasets (icon sets, patterns, presets)
├── layouts/ providers/    # App shell
└── styles/globals.css     # Tailwind v4 theme tokens
```

Each layer has its own path alias (`@features/*`, `@shared/*`, `@vendor/*`,
`@data/*`), so an import always names the layer it crosses into. ESLint enforces
the direction — `yarn lint` fails on a violation. Two rules worth knowing:

- `shared/` must not import from a feature. If it needs a feature's types or
  store, the code belongs to that feature instead.
- Features are independent. The one exception is `studio → editor-rte`, and it
  must go through the barrel: `import { … } from '@features/editor-rte'`.

Adding a theme or a language means adding one entry to the matching registry under
`src/vendor/codemirror/` — that is usually the easiest first contribution.

## Contributing

Issues and pull requests are welcome. If you are picking up something non-trivial, open an
issue first so we do not duplicate work.

Before opening a PR, please make sure `npx tsc --noEmit` and `yarn build` both pass.

## Status

Beta, and desktop-first. The studio is not usable on small screens yet — that is a known
gap rather than an oversight, and help there is very welcome.

## Support the project

Cool Snippets is free and intends to stay that way. If it saves you time, you can
[sponsor it on GitHub](https://github.com/sponsors/simpleneeraj) or
[buy me a coffee](https://www.buymeacoffee.com/simplneeraj).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=simpleneeraj/cool-snippets&type=Date)](https://star-history.com/#simpleneeraj/cool-snippets&Date)

## License

The **code** is [MIT](./LICENSE) © [simpleneeraj](https://github.com/simpleneeraj).

The **bundled assets are not** — some fonts and background images were collected during
early development without a proper record of their licensing, and a few of them almost
certainly should not be redistributed. [NOTICE.md](./NOTICE.md) sets out exactly what is
in here and what is uncertain.

If you own any of that work and want it gone, open an issue and it will be removed
straight away.

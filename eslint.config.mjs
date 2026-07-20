import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import next from "eslint-config-next";

/**
 * Architecture boundaries.
 *
 * Dependencies may only point downward through these layers:
 *
 *   app shell (app/, layouts/, providers/)
 *        v
 *   features/  (studio, editor-rte, marketing)  -- siblings stay independent
 *        v
 *   shared/    (ui, uikit, motion, fonts, hooks, lib, config, types, icons)
 *        v
 *   vendor/ + data/
 *
 * Every layer is addressed by its own path alias, so a boundary violation is
 * always visible in the import string. That lets these rules match on the
 * specifier alone, with no import resolver to configure or keep in sync.
 *
 * Adding a layer means adding an alias in tsconfig.json AND a zone here.
 */
const APP_SHELL = ["@layouts/*", "@layouts/*/**", "@providers/*", "@providers/*/**"];
const ANY_FEATURE = ["@features/*", "@features/*/**"];
const SHARED = ["@shared/*", "@shared/*/**"];

const boundaries = [
  {
    name: "boundaries/vendor-and-data",
    files: ["src/vendor/**", "src/data/**"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [...ANY_FEATURE, ...SHARED, ...APP_SHELL],
          message:
            "vendor/ and data/ are the lowest layer: vendored third-party code and static datasets. They must not import application code. Move the shared logic down, or keep it in the layer that owns it.",
        }],
      }],
    },
  },
  {
    name: "boundaries/shared",
    files: ["src/shared/**"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [...ANY_FEATURE, ...APP_SHELL],
          message:
            "shared/ must not know about any feature or the app shell — that is what makes it reusable. If this code needs a feature's types or store, it belongs to that feature, not in shared/.",
        }],
      }],
    },
  },
  {
    name: "boundaries/feature-studio",
    files: ["src/features/studio/**"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [
          {
            group: ["@features/marketing", "@features/marketing/*", "@features/marketing/*/**"],
            message: "Features are independent: studio must not import marketing.",
          },
          {
            // Permits the exact barrel "@features/editor-rte", blocks deep paths.
            group: ["@features/editor-rte/*", "@features/editor-rte/*/**"],
            message:
              "Import editor-rte through its barrel: `from '@features/editor-rte'`. Everything inside it is vendored Tiptap code and is private to that feature.",
          },
          {
            group: APP_SHELL,
            message: "Features must not import the app shell (layouts/, providers/); the shell composes features, not the reverse.",
          },
        ],
      }],
    },
  },
  {
    name: "boundaries/feature-editor-rte",
    files: ["src/features/editor-rte/**"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [
            "@features/studio", "@features/studio/*", "@features/studio/*/**",
            "@features/marketing", "@features/marketing/*", "@features/marketing/*/**",
            ...APP_SHELL,
          ],
          message: "Features are independent: editor-rte must not import another feature or the app shell.",
        }],
      }],
    },
  },
  {
    name: "boundaries/feature-marketing",
    files: ["src/features/marketing/**"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [
            "@features/studio", "@features/studio/*", "@features/studio/*/**",
            "@features/editor-rte", "@features/editor-rte/*", "@features/editor-rte/*/**",
            ...APP_SHELL,
          ],
          message: "Features are independent: marketing must not import another feature or the app shell.",
        }],
      }],
    },
  },
];

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...next,
  ...boundaries,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;

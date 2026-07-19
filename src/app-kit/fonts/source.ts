/**
 * Find the URL of a loaded font file, given its CSS family name.
 *
 * Image export inlines the font as base64 so the exported PNG/SVG renders the
 * same typeface on a machine that does not have it installed. That needs a URL
 * to fetch.
 *
 * Previously those URLs were hardcoded in fonts.json as /fonts/<Name>.ttf.
 * next/font fingerprints the files instead, so the path is only known at build
 * time — but it does emit a real `@font-face` rule into the page, which we can
 * read back at runtime. Everything is same-origin, so the fetch is unrestricted.
 */
export function resolveFontSource(family: string): string | null {
  if (typeof document === 'undefined') return null;

  const target = normalise(family);

  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      // A cross-origin stylesheet throws on access. None of ours are, so a
      // throw here means it is not a sheet we care about.
      continue;
    }

    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSFontFaceRule)) continue;

      const name = normalise(rule.style.getPropertyValue('font-family'));
      if (name !== target) continue;

      const url = firstUrl(rule.style.getPropertyValue('src'));
      if (url) return new URL(url, document.baseURI).href;
    }
  }

  return null;
}

/** `src` lists several formats; the first url() is the one the browser uses. */
function firstUrl(src: string): string | null {
  return src.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/)?.[1] ?? null;
}

/** Family names arrive quoted and cased inconsistently between the two sides. */
function normalise(value: string): string {
  return value.trim().replace(/^['"]|['"]$/g, '').toLowerCase();
}

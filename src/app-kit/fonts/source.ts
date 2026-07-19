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

/**
 * Reduce a CSS `font-family` value to its primary family name.
 *
 * next/font sets `style.fontFamily` to a *list* — the generated face plus a
 * `size-adjust` fallback, e.g. `'__DM_Mono_abc', '__DM_Mono_Fallback_abc'`.
 * The `@font-face` rule, however, is keyed on just the first name. Matching or
 * re-declaring against the whole list never resolves, so both the source lookup
 * and the embedded `@font-face` must use this single primary name.
 */
export function primaryFontFamily(family: string): string {
  const first = family.split(',')[0] ?? family;
  return first.trim().replace(/^['"]|['"]$/g, '');
}

/** `src` lists several formats; the first url() is the one the browser uses. */
function firstUrl(src: string): string | null {
  return src.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/)?.[1] ?? null;
}

/** Family names arrive quoted and cased inconsistently between the two sides. */
function normalise(value: string): string {
  return value.trim().replace(/^['"]|['"]$/g, '').toLowerCase();
}

/** Fetch a same-origin font file and return it as a base64 data URL. */
async function fontToDataUrl(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

/**
 * Build a `@font-face` stylesheet with each font embedded as base64, for
 * html-to-image's `fontEmbedCSS` option.
 *
 * Passing precomputed CSS makes html-to-image skip its default pass that fetches
 * *every* `@font-face` rule on the page. This app declares ~40 code faces (all
 * emitted by next/font), so that scan would fetch dozens of files per export;
 * here only the faces actually used on the canvas are embedded.
 */
export async function buildFontEmbedCss(
  fonts: { src: string; fontFamily: string }[],
): Promise<string> {
  const faces = await Promise.all(
    fonts.map(async ({ src, fontFamily }) => {
      try {
        const dataUrl = await fontToDataUrl(src);
        return `@font-face{font-family:'${fontFamily}';src:url(${dataUrl});font-display:swap;}`;
      } catch {
        return '';
      }
    }),
  );
  return faces.filter(Boolean).join('\n');
}

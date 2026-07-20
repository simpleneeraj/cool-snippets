/** One `@font-face` slice discovered from the live stylesheet. */
export type FontFaceSource = {
  fontFamily: string;
  src: string;
  fontWeight?: string;
  fontStyle?: string;
  unicodeRange?: string;
};

/**
 * Collect every `@font-face` rule for a CSS family name.
 *
 * Image export inlines fonts as base64 so the PNG/SVG renders the same
 * typeface on a machine that does not have it installed. next/font (and Google
 * Fonts) split a family into many rules — one per unicode-range subset — so
 * embedding only the first match leaves most code characters on a fallback face.
 *
 * Previously those URLs were hardcoded in fonts.json as /fonts/<Name>.ttf.
 * next/font fingerprints the files instead, so paths are only known at build
 * time — but it does emit real `@font-face` rules into the page, which we read
 * back at runtime. Everything is same-origin, so the fetch is unrestricted.
 */
export function resolveFontFaces(family: string): FontFaceSource[] {
  if (typeof document === 'undefined') return [];

  const target = normalise(family);
  const faces: FontFaceSource[] = [];
  const seen = new Set<string>();

  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      // A cross-origin stylesheet throws on access. None of ours are, so a
      // throw here means it is not a sheet we care about.
      continue;
    }

    const base = sheet.href || document.baseURI;

    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSFontFaceRule)) continue;

      const name = normalise(rule.style.getPropertyValue('font-family'));
      if (name !== target) continue;

      const srcRaw = rule.style.getPropertyValue('src');
      const url = firstUrl(srcRaw);
      if (!url) continue;

      const resolved = new URL(url, base).href;
      const fontWeight = rule.style.getPropertyValue('font-weight').trim();
      const fontStyle = rule.style.getPropertyValue('font-style').trim();
      const unicodeRange = rule.style.getPropertyValue('unicode-range').trim();
      const key = [resolved, fontWeight, fontStyle, unicodeRange].join('\0');
      if (seen.has(key)) continue;
      seen.add(key);

      faces.push({
        fontFamily: primaryFontFamily(family),
        src: resolved,
        ...(fontWeight ? { fontWeight } : {}),
        ...(fontStyle && fontStyle !== 'normal' ? { fontStyle } : {}),
        ...(unicodeRange ? { unicodeRange } : {}),
      });
    }
  }

  return faces;
}

/** First matching slice — kept for callers that only need one URL. */
export function resolveFontSource(family: string): string | null {
  return resolveFontFaces(family)[0]?.src ?? null;
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
  return value
    .trim()
    .replace(/^['"]|['"]$/g, '')
    .toLowerCase();
}

const dataUrlCache = new Map<string, Promise<string>>();

/** Fetch a same-origin font file and return it as a base64 data URL. */
async function fontToDataUrl(url: string): Promise<string> {
  let pending = dataUrlCache.get(url);
  if (!pending) {
    pending = (async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `failed to fetch: ${response.status} ${response.statusText}`,
        );
      }
      const blob = await response.blob();
      return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    })();
    dataUrlCache.set(url, pending);
  }
  return pending;
}

function faceDecl(property: string, value?: string) {
  return value ? `${property}:${value};` : '';
}

function buildEmbeddedFace(face: FontFaceSource, dataUrl: string) {
  return `@font-face{font-family:'${face.fontFamily}';src:url(${dataUrl});font-display:swap;${faceDecl('font-weight', face.fontWeight)}${faceDecl('font-style', face.fontStyle)}${faceDecl('unicode-range', face.unicodeRange)}}`;
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
  fonts: FontFaceSource[],
): Promise<string> {
  const faces = await Promise.all(
    fonts.map(async (face) => {
      try {
        const dataUrl = await fontToDataUrl(face.src);
        return buildEmbeddedFace(face, dataUrl);
      } catch {
        return '';
      }
    }),
  );
  return faces.filter(Boolean).join('\n');
}

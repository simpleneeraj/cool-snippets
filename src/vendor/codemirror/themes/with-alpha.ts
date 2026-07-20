/**
 * Applies the editor's transparency to a theme colour.
 *
 * Themes are authored with opaque literals; the glassmorphism slider is
 * effectively the editor background's alpha channel, and it has to be applied
 * to the surfaces (background, gutter) without touching syntax colours.
 *
 * Accepts `#rgb`, `#rrggbb`, `#rrggbbaa` and `rgb()/rgba()` in either the
 * legacy comma form or the modern space form, and always emits the modern
 * `rgb(r g b / a)` syntax so every theme reads the same way.
 */
export const withAlpha = (
  color: string,
  alpha: string | number = 1,
): string => {
  const value = Number(alpha);
  const a = Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 1;

  const rgb = parseColor(color);
  if (!rgb) return color;

  return `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]} / ${a})`;
};

const parseColor = (color: string): [number, number, number] | null => {
  const input = color?.trim();

  if (!input) return null;

  if (input.startsWith('#')) {
    const hex = input.slice(1);
    // #rgb / #rgba shorthand expands each digit; #rrggbb(aa) reads pairwise.
    // Any trailing alpha is dropped — `withAlpha` is the sole alpha authority.
    if (hex.length === 3 || hex.length === 4) {
      const [r, g, b] = [...hex.slice(0, 3)].map((d) => parseInt(d + d, 16));
      return [r, g, b];
    }
    if (hex.length === 6 || hex.length === 8) {
      const pairs = hex.slice(0, 6).match(/.{2}/g)!;
      const [r, g, b] = pairs.map((p) => parseInt(p, 16));
      return [r, g, b];
    }
    return null;
  }

  // rgb(1,2,3) / rgba(1 2 3 / .5) / rgb(1 2 3) — take the first three numbers.
  const numbers = input.match(/-?\d*\.?\d+/g);
  if (!numbers || numbers.length < 3) return null;

  const [r, g, b] = numbers.slice(0, 3).map(Number);
  return [r, g, b];
};

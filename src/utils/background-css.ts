import cssToStyle from '@vendor/css-to-style';
import { PropertiesType } from '@/typings/editor';
import { BACKGROUND_TYPE } from '@/typings/enums';

/**
 * Pattern sources come in two shapes: a bare value like `linear-gradient(...)`,
 * or a complete declaration block starting with `background-image:` (roughly a
 * third of the catalogue). Normalising to a block lets one parser handle both.
 */
export const normalizePatternSource = (source?: string): string => {
  if (!source) return '';
  return source.includes('background-image')
    ? source
    : `background-image: ${source};`;
};

/** Pattern source → React style object. Used for the picker previews. */
export const patternToStyle = (source?: string): React.CSSProperties =>
  cssToStyle(normalizePatternSource(source)) as React.CSSProperties;

/**
 * Renders a slide background as CSS declarations.
 *
 * Patterns must emit their own declarations verbatim: assigning a
 * `background-image: …;` block as the *value* of the `background` shorthand
 * produces `background: background-image: …`, which is invalid and silently
 * dropped by the browser — that is why patterns never appeared on the canvas.
 */
export const resolveBackgroundCss = (
  type?: BACKGROUND_TYPE,
  properties?: PropertiesType,
): string => {
  const fitted = `
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;

  switch (type) {
    case BACKGROUND_TYPE.PATTERN:
      return normalizePatternSource(properties?.pattern);
    case BACKGROUND_TYPE.IMAGE:
      return `background: url(${properties?.image});${fitted}`;
    case BACKGROUND_TYPE.VIDEO:
      return `background: url(${properties?.video});${fitted}`;
    case BACKGROUND_TYPE.COLOR:
      return `background: ${properties?.color};`;
    case BACKGROUND_TYPE.GRADIENT:
      return `background: ${properties?.gradient};${fitted}`;
    default:
      return '';
  }
};

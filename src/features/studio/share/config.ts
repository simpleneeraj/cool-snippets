import { COLORS } from './colors';
import { PATTERN_SIZE, PATTERNS } from './patterns';
import { MaskWallpaperOptions } from '@vendor/mask-wallpaper/types';

export const wallpaperOptions: MaskWallpaperOptions = {
  fps: 30,
  tails: 30,
  animate: false,
  colors: COLORS[0].colors,
  pattern: {
    image: PATTERNS[0].path,
    background: '#000',
    size: `${PATTERN_SIZE}px`,
    opacity: 0.4,
    blur: 0,
    mask: true,
  },
};

// export const paneOptions = {
//   enablePattern: true,
//   container: document.querySelector<HTMLElement>('#app')!,
//   stringOptions: JSON.stringify(wallpaperOptions, null, 2),
//   copyOptions: cloneDeep(wallpaperOptions),
//   currentColors: arrayColorToObject(wallpaperOptions.colors),
//   patternSize: PATTERN_SIZE,
//   mixBlendMode: 'overlay'
// }

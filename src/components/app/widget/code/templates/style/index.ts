import { tv } from 'tailwind-variants';
import { HeaderPositions } from '@/typings/templates';

/**
 * Maps the header's alignment control to a flex `justify-content`. The base row
 * defaults to `space-between` (lights on one edge, filename on the other); an
 * explicit alignment collapses the row to one side instead. Returned as an
 * inline value so it overrides the `justify-between` class on the base slot.
 */
export const headerJustify = (position?: HeaderPositions): string => {
  switch (position) {
    case HeaderPositions.LEFT:
      return 'flex-start';
    case HeaderPositions.CENTER:
      return 'center';
    case HeaderPositions.RIGHT:
      return 'flex-end';
    default:
      return 'space-between';
  }
};

export const template = tv({
  slots: {
    // Container
    base: 'flex items-center gap-1 z-10 justify-between',
    container: 'flex items-center gap-2',
    // Input — `code-header-filename` lets element.tsx apply the same dynamic
    // code font to the filename so the header reads as part of the code block.
    inputContainer: 'flex items-center',
    input: 'code-header-filename text-sm border-none outline-hidden bg-transparent',
    // Icon
    iconBase: 'flex item-center gap-1 ml-3',
    iconContainer:
      'flex items-center justify-center overflow-hidden rounded-3xl',
    image: 'w-4 aspect-square',
    icon: 'flex items-center justify-center',
  },
});

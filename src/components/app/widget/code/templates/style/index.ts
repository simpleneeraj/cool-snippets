import { tv } from '@heroui/react';

export const template = tv({
  slots: {
    // Container
    base: 'flex items-center gap-1 z-10 justify-between',
    container: 'flex items-center gap-2',
    // Input
    inputContainer: 'flex items-center',
    input: 'text-sm border-none outline-hidden bg-transparent',
    // Icon
    iconBase: 'flex item-center gap-1 ml-3',
    iconContainer:
      'flex items-center justify-center overflow-hidden rounded-3xl',
    image: 'w-4 aspect-square',
    icon: 'flex items-center justify-center',
  },
});

import { tv } from '@nextui-org/react';

export const headerIcon = tv({
  base: 'h-4 w-4',
  variants: {
    sizes: {
      sm: { true: 'h-4 w-4' },
      md: { true: 'h-6 w-6' },
      lg: { true: 'h-8 w-8' },
    },
  },
});

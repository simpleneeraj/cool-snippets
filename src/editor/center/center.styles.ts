import { tv } from 'tailwind-variants';

const container = tv(
  {
    base: 'font-semibold text-white py-1 px-3 rounded-full active:opacity-80',
    variants: {
      color: {
        primary: 'bg-blue-500 hover:bg-blue-700',
        secondary: 'bg-purple-500 hover:bg-purple-700',
        success: 'bg-green-500 hover:bg-green-700',
      },
      size: {
        small: 'py-0 px-2 text-xs',
        medium: 'py-1 px-2 text-sm',
        large: 'py-1.5 px-3 text-md',
      },
    },
  },
  {
    responsiveVariants: ['sm', 'md'], // `true` to apply to all screen sizes
  }
);

container({
  color: {
    initial: 'primary',
    sm: 'success',
    md: 'secondary',
  },
  size: {
    initial: 'small',
    sm: 'medium',
    md: 'large',
  },
});

/**
 * Result:
 *
 * font-semibold text-white rounded-full active:opacity-80 bg-blue-500 hover:bg-blue-700 sm:bg-green-500
 * sm:hover:bg-green-700 md:bg-purple-500 md:hover:bg-purple-700 py-0 px-2 text-xs sm:py-1 sm:px-2 sm:text-sm
 * md:py-1.5 md:px-3 md:text-md
 */

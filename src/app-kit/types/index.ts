import React from 'react';

// Type for specifying the color scheme
type ColorScheme = { colorScheme?: 'primary' | 'secondry' | 'tertiary' };

/**
 * UIIndicatorProps: Props for an SVG indicator.
 *
 * @param size - The size of the indicator (string or number).
 * @param color - The color of the indicator (string or undefined).
 * @param colorScheme - The color scheme of the indicator.
 */
export type UIIndicatorProps = {
  size?: string | number;
  color?: string | undefined;
} & ColorScheme &
  React.SVGProps<SVGSVGElement>;

/**
 * UIIconButtonProps: Props for an icon button.
 *
 * @param exclude - Array of states to exclude (e.g., 'hover', 'active').
 * @param variant - The variant of the button ('icon' or 'fit').
 * @param colorScheme - The color scheme of the button.
 */
export type UIIconButtonProps = {
  exclude?: string[];
  variant?: 'icon' | 'fit';
} & ColorScheme &
  React.ComponentPropsWithRef<'button'>;

/**
 * UIButtonProps: Props for a general button.
 *
 * @param exclude - Array of states to exclude (e.g., 'hover', 'active').
 * @param variant - The variant of the button ('outline', 'clear', or 'button').
 * @param colorScheme - The color scheme of the button.
 */
export type UIButtonProps = {
  exclude?: string[];
  variant?: 'outline' | 'clear' | 'button';
} & ColorScheme &
  React.ComponentPropsWithRef<'button'>;

/**
 * UIButtonProps: Props for a general button.
 *
 * @param exclude - Array of states to exclude (e.g., 'hover', 'active').
 * @param variant - The variant of the button ('outline', 'clear', or 'button').
 * @param colorScheme - The color scheme of the button.
 */
export type UIOutlineButtonProps = {
  exclude?: string[];
  variant?: 'outline';
} & ColorScheme &
  React.ComponentPropsWithRef<'button'>;

/**
 * UIButtonGroup: Props for a button group.
 *
 * @param transparent - Whether the button group should be transparent.
 * @param colorScheme - The color scheme of the button group.
 */
export type UIButtonGroup = {
  transparent?: boolean;
} & ColorScheme &
  React.ComponentPropsWithRef<'div'>;

/**
 * UILineProps: Props for a line (hr) component.
 *
 * @param direction - The direction of the line ('vertical' or 'horizontal').
 * @param colorScheme - The color scheme of the line.
 */
export type UILineProps = {
  direction?: 'vertical' | 'horizontal';
} & ColorScheme &
  React.ComponentPropsWithRef<'hr'>;

// Commented explanation for the code
/**
 * ColorScheme: Type for specifying the color scheme of UI components.
 *
 * UIIndicatorProps: Props for an SVG indicator, including size, color, and color scheme.
 *
 * UIIconButtonProps: Props for an icon button, including exclude, variant, and color scheme.
 *
 * UIButtonProps: Props for a general button, including exclude, variant, and color scheme.
 *
 * UIButtonGroup: Props for a button group, including transparency and color scheme.
 *
 * UILineProps: Props for a line (hr) component, including direction and color scheme.
 */

import React from 'react';

export enum IconCategory {
  TWITTER = 'twitter',
  FLUENT = 'fluent',
  IMAGES = 'images',
  FILES = 'files',
  GOOGLE = 'google',
  APPLE = 'apple',
  MICROSOFT = 'microsoft',
  ICONS = 'icons',
  DESIGN_ASSETS = 'design_assets',
  PHOTOS = 'photos',
  FONTS = 'fonts',
  VECTOR_GRAPHICS = 'vector_graphics',
}

/**
 * Represents a single icon in the picker.
 */
export type PickerIconType = {
  /** The name of the icon. */
  name: string;
  /** The source URL or path for the icon image. */
  source: string;
  /** Optional size of the icon (e.g., '24px', '2em'). */
  size?: string;
  /** Optional categories to which the icon belongs. */
  category?: string[];
};

/**
 * Props for the icon picker component.
 */
export type PickerProps = {
  /** The currently selected icon. */
  value?: PickerIconType;
  /** The list of available icons to display. */
  items?: PickerIconType[];
  /** Callback function triggered when an icon is selected. */
  onSelectIcon?: (icon: PickerIconType) => void;
  /** Whether to display the title of each icon. */
  showTitle?: boolean;
  /** The height of the picker container. */
  height?: number;
  /** Number of grid columns to display. Default is 3. */
  gridCount?: number;
  /** Optional content displayed at the start of the picker. */
  startContent?: React.ReactNode | React.ReactNode[];
  /** Optional content displayed at the end of the picker. */
  endContent?: React.ReactNode | React.ReactNode[];
  /** Content to display when no items are available. */
  emptyContent?: React.ReactNode | React.ReactNode[];
};

/**
 * Props for individual grid items in the picker.
 */
export type PickerItemProps = {
  /** Number of grid columns for the item layout. */
  gridCount?: number;
} & React.ComponentPropsWithoutRef<'div'>;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// export enum IconCategory {
//   TWITTER = 'twitter',
//   FLUENT = 'fluent',
//   IMAGES = 'images',
//   FILES = 'files',
//   GOOGLE = 'google',
//   APPLE = 'apple',
//   MICROSOFT = 'microsoft',
//   ICONS = 'icons',
//   DESIGN_ASSETS = 'design_assets',
//   PHOTOS = 'photos',
//   FONTS = 'fonts',
//   VECTOR_GRAPHICS = 'vector_graphics',
// }

export enum IconProviders {
  TWITTER = 'twitter',
  FLUENTUI = 'fluentui',
  VSCODE_SYMBOLS = 'vscode-symbols',
  MATERIAL_ICONS = 'material-icons',
}

export enum IconType {
  ALL = 'all',
  FILE = 'file',
  FOLDER = 'folder',
  LANGUAGE = 'language',
  FLAT = 'flat',
  MODERN = 'modern',
}

/**
 * Represents a single icon in the picker.
 */
export type PickerIconType = {
  name: string;
  source: string;
  size?: string;
  category?: string[];
};

/**
 * Props for the icon picker component.
 */

export type PickerProps<Items = any> = {
  items?: Items[];
  value?: Items;
  onSelectIcon?: (item: Items) => void;
  showTitle?: boolean;
  height?: number;
  gridCount?: number;
  startContent?: React.ReactNode | React.ReactNode[];
  endContent?: React.ReactNode | React.ReactNode[];
  emptyContent?: React.ReactNode | React.ReactNode[];
  children?: (props: {
    currentItem: Items;
    activeItem: boolean;
  }) => React.ReactNode;
};

/**
 * Props for individual grid items in the picker.
 */
export type PickerItemProps = {
  gridCount?: number;
} & React.ComponentPropsWithoutRef<'div'>;

export type PickerIconsProps = {
  provider: IconProviders;
};

export type PickerIconsResponse = {
  icons: PickerIconType[];
  types: IconType[];
  providers: IconProviders[];
};

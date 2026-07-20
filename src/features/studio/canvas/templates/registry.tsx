import React from 'react';
import templatesData from '@data/templates.json';
import { trafficLights, unixColors } from './colors';
import { TrafficLights, UnixIcons, WindowsButtons } from './decorations';
import {
  Colors,
  HeaderVariants,
  HeadersProps,
} from '@features/studio/model/templates';

type Style = HeadersProps['style'];

export type HeaderTemplate = {
  /** Persisted `header.type` value. Never change an existing one — a stored
   *  snapshot holding an unknown type renders no header. */
  type: string;
  /** Shown in the header-type picker. */
  name: string;
  /** The window "personality"; omit for a chrome-less (filename-only) header. */
  decoration?: React.FC<HeadersProps>;
  /** Which edge the decoration sits on relative to the filename. */
  decorationSide: 'start' | 'end';
  /** Colour set handed to the decoration, when it takes one. */
  colors?: Colors[];
  /** Base metrics merged under the slide's own background at render time. */
  defaultStyle: Style;
  /** How the swatch in the picker is drawn. */
  preview: { variant: HeaderVariants; style: Style };
};

/** macOS "graphite" appearance — monochrome traffic lights. */
const graphiteLights: Colors[] = [
  { name: 'Close', value: '#8d8d8d' },
  { name: 'Minimise', value: '#8d8d8d' },
  { name: 'Zoom', value: '#8d8d8d' },
];

/**
 * The header-style catalogue. One entry fully describes a style — its renderer,
 * defaults and picker swatch — so adding a look is a data change here, not an
 * edit spread across a switch, the palette and the store.
 */
export const HEADER_TEMPLATES: Record<string, HeaderTemplate> = {
  [templatesData.ios]: {
    type: templatesData.ios,
    name: 'iOS Traffic',
    decoration: TrafficLights,
    decorationSide: 'start',
    colors: trafficLights,
    defaultStyle: {
      gap: '8px',
      size: '12px',
      borderWidth: '2px',
      borderRadius: '20px',
      padding: '0.8rem 0 0.8rem 0.8rem',
    },
    preview: {
      variant: HeaderVariants.FILLED,
      style: { gap: '6px', size: '12px', borderRadius: '20px' },
    },
  },

  [templatesData.unix]: {
    type: templatesData.unix,
    name: 'Unix Neon',
    decoration: UnixIcons,
    decorationSide: 'end',
    colors: unixColors,
    defaultStyle: { gap: '8px', size: '16px', padding: '12px' },
    preview: {
      variant: HeaderVariants.OUTLINE,
      style: { gap: '6px', size: '14px' },
    },
  },

  [templatesData.windows]: {
    type: templatesData.windows,
    name: 'Windows Terminal',
    decoration: WindowsButtons,
    decorationSide: 'end',
    defaultStyle: { gap: '8px', size: '16px', padding: '12px' },
    preview: {
      variant: HeaderVariants.OUTLINE,
      style: { gap: '6px', size: '14px' },
    },
  },

  [templatesData.macos]: {
    type: templatesData.macos,
    name: 'macOS Graphite',
    decoration: TrafficLights,
    decorationSide: 'start',
    colors: graphiteLights,
    defaultStyle: {
      gap: '8px',
      size: '12px',
      borderRadius: '20px',
      padding: '0.8rem 0 0.8rem 0.8rem',
    },
    preview: {
      variant: HeaderVariants.FILLED,
      style: { gap: '6px', size: '12px', borderRadius: '20px' },
    },
  },
};

/** Registry as an ordered list, for the picker. */
export const HEADER_TEMPLATE_LIST: HeaderTemplate[] =
  Object.values(HEADER_TEMPLATES);

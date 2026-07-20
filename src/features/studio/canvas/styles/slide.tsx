import React from 'react';
import { BACKGROUND_TYPE } from '@features/studio/model/enums';
import { resolveBackgroundCss } from '@features/studio/lib/background-css';
import { SlideBackgroundTypes } from '@features/studio/model/editor';

type Props = {
  style?: SlideBackgroundTypes;
};

/** Matches the value the artboard was hardcoded to before padding was editable. */
export const DEFAULT_SLIDE_PADDING = 32;

/** See the note in ./element.tsx — an absent value must drop the declaration. */
const decl = (property: string, value?: string | number | null) =>
  value === undefined || value === null || value === ''
    ? ''
    : `${property}: ${value};`;

const px = (value?: string | number | null) =>
  value === undefined || value === null || value === ''
    ? undefined
    : `${value}px`;

const SlideStyle: React.FC<Props> = ({ style }) => {
  const CSS = style?.style;
  const PROPERTIES = style?.properties;

  const background = React.useMemo(() => {
    return resolveBackgroundCss(style?.type as BACKGROUND_TYPE, PROPERTIES);
  }, [style?.type, PROPERTIES]);

  const padding = px(CSS?.padding ?? DEFAULT_SLIDE_PADDING);

  return (
    <style>
      {`
        .center {
          position: relative;
          ${decl('padding', padding)}
          ${background}
          ${decl('width', px(CSS?.width))}
          ${decl('min-height', px(CSS?.height))}
        }

        .glass-layer {
          ${background}
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          transform: translate(-50%,-50%);
          ${decl('width', px(CSS?.width))}
          ${decl('min-height', px(CSS?.height))}
        }
      `}
    </style>
  );
};

export default SlideStyle;

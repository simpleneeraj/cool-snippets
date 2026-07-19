import React from 'react';
import { BACKGROUND_TYPE } from '@shared/types/enums';
import { resolveBackgroundCss } from '@shared/lib/background-css';
import { SlideBackgroundTypes } from '@shared/types/editor';

type Props = {
  style?: SlideBackgroundTypes;
};

const SlideStyle: React.FC<Props> = ({ style }) => {
  const CSS = style?.style;
  const PROPERTIES = style?.properties;

  const background = React.useMemo(() => {
    return resolveBackgroundCss(style?.type as BACKGROUND_TYPE, PROPERTIES);
  }, [style?.type, PROPERTIES]);

  return (
    <style>
      {`
        .center {
          padding: 32px;
          position: relative;
          ${background}
          width: ${CSS?.width}px;
          min-height: ${CSS?.height}px;
        }

        .glass-layer {
          ${background}
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          transform: translate(-50%,-50%);
          width: ${CSS?.width}px;
          min-height: ${CSS?.height}px;
        }
      `}
    </style>
  );
};

export default SlideStyle;

/**
 *   .codemirror {
          z-index: 11;
          position: relative;
          // background: ${code.alpha > 0 ? 'unset' : code.background};
        }

        .layer {
          z-index: 0;
          display: grid;
          overflow: hidden;
          align-items: center;
          position: relative;
          // border-radius: ${code['corner-radius']}px;
          // backdrop-filter: blur(16px);
        }
 */

/**
         *    .center {
          flex: 1;
          z-index: 5;
          gap: 0.3rem;
          display: flex;
          overflow: hidden;
          max-width: 1024px;
          position: relative;
          flex-direction: column;
        }
         */

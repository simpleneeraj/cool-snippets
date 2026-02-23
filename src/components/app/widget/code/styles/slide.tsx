import React from 'react';
import { BACKGROUND_TYPE } from '@/typings/enums';
import backgroundPurify from '@/utils/background-purify';
import { SlideBackgroundTypes } from '@/typings/editor';

type Props = {
  style?: SlideBackgroundTypes;
};

const SlideStyle: React.FC<Props> = ({ style }) => {
  const CSS = style?.style;
  const PROPERTIES = style?.properties;

  const source = React.useMemo(() => {
    return backgroundPurify(style?.type as BACKGROUND_TYPE, PROPERTIES);
  }, [style?.type, PROPERTIES]);

  return (
    <style>
      {`
        .center {
          padding:32px;
          position: relative;
          background: ${source};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: ${CSS?.width}px;        
          min-height: ${CSS?.height}px; 
          box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 20px 50px -10px rgba(0,0,0,0.3);       
        }
     
        .glass-layer{
          background: ${source};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          transform:translate(-50%,-50%);
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

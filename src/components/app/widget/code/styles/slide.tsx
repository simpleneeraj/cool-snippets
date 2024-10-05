import { SlideBackgroundTypes } from '@/typings/editor';
import backgroundPurify from '@/utils/background-purify';

type Props = {
  style?: SlideBackgroundTypes;
};

const SlideStyle: React.FC<Props> = ({ style }) => {
  const CSS = style?.style;
  const PROPERTIES = style?.properties;

  const source = backgroundPurify(PROPERTIES?.url!);
  const resolution = {
    height: CSS?.height,
    width: CSS?.width,
  };
  return (
    <style>
      {`
        .center {
          padding:32px;
          max-width: 920px;
          position: relative;
          background: ${source};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 100ms ease-in;
          width: ${resolution.width}px;        
          height: ${resolution.height}px;        
        }
     
        .glass-layer{
          background: ${source};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 100ms ease-in;
          height: ${resolution.height}px;        
          width: ${resolution.width}px;   
          position: absolute;
          top: 50%;
          left: 50%;
          transform:translate(-50%,-50%);
          filter: blur(16px);
          z-index: 1;
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

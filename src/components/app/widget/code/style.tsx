import state from '@/json/state.json';
import backgroundPurify from '@/utils/background-purify';

const InlineStyle = () => {
  const { canvas, code, text } = state;
  const background = backgroundPurify(canvas['source']);
  const fontFace = `${text['font-face']}`;
  const resolution = {
    height: 480,
    width: 480,
  };
  return (
    <style>
      {`
        .cm-editor {
          width: 100%;
          height: auto;
          max-width: 100%;
          min-width: unset;
          min-height: unset;
          max-height: unset;
          padding:  .5rem 1rem;
         
        }
        .cm-line {
          background: unset !important;
          font-size: ${text['font-size']}px;
          font-family: ${fontFace};
          line-height: ${text['line-height']};
          font-weight: ${text['font-weight']};
          letter-spacing: ${text['letter-spacing']}px;
        }
        .ͼ1 .cm-content {
          margin: 0;
          flex-grow: 2;
          outline: none;
          display: block;
          padding: 4px 0;
          word-wrap: normal;
          min-height: 100%;
          flex-shrink: initial;
          white-space: initial;
          box-sizing: border-box;
        }
        .codemirror {
          z-index: 11;
          position: relative;
          background: ${code.alpha > 0 ? 'unset' : code.background};
        }

        .layer {
          z-index: 0;
          display: grid;
          overflow: hidden;
          align-items: center;
          position: relative;
          border-radius: ${code['corner-radius']}px;
          // backdrop-filter: blur(16px);
        }
        .center {
          background: ${background};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 100ms ease-in;
          position: relative;
          max-width: 920px;
          padding:32px;
          height: ${resolution.height}px;        
          width: ${resolution.width}px;        
        }
        .center {
          flex: 1;
          z-index: 5;
          gap: 0.3rem;
          display: flex;
          overflow: hidden;
          max-width: 1024px;
          position: relative;
          flex-direction: column;
          
        }
        .file-name-input{
          font-family: ${fontFace};
        }
        .glass-layer{
          background: ${background};
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

export default InlineStyle;

import { FontsType } from '../options';
import { regexUrl } from '../utils/regex';
import Base64Reader from '../usedfont/filereader';

// Main Function
const fetchFonts = async <T extends HTMLElement>(
  clonedNode: T,
  fonts: FontsType[],
): Promise<T> => {
  const filterFontsArr: string[] = [];
  // Map and fetch available fonts
  const TaskFonts = fonts.map(async ({ src, fontFamily }) => {
    if (src && fontFamily) {
      // Filter Url
      let url = src?.replace(regexUrl, '$1');
      if (!url?.startsWith('https://')) {
        url = new URL(url, window.location.href).href;
      }
      const res = await window.fetch(url);
      const blob = await res.blob();
      return new Promise(async (resolve) => {
        // Read fonts as base64
        const result = await Base64Reader(blob);
        // Making css raw
        const rawText = `
        @font-face {
            font-family: '${fontFamily}';
            font-display: swap;
            font-stretch: normal;
            font-style: normal;
            src: url(${result});
        }
      `.trim();
        // push data to array
        filterFontsArr.push(rawText);
        const cssText = filterFontsArr.join('\n');
        // Adding Fonts CSS to stylesheet of node
        const styleNode = document.createElement('style');
        const textNode = document.createTextNode(cssText);
        if (clonedNode.firstChild) {
          clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        } else {
          clonedNode.append(styleNode);
        }
        styleNode.append(textNode);
        resolve(result);
      });
    }
  });
  return await Promise.all(TaskFonts).then(() => clonedNode);
};

export default fetchFonts;

import { CaptureOptions } from '../options';
import cloneNode from '../clone';
import embedImages from '../embed';
import imageSize from '../utils/imagesize';
import nodeToSVG from '../utils/nodetosvg';
import inPageUsedFont from '../usedfont';
import { group, now, difference, log } from '../debug';


const debugMessage = [
  `HTML to Image`,
  `#1 Node and style Cloned Successfully in`,
  `#2 Embed font added to style sheet Successfully in`,
  `#3 Embed Images added to style sheet Successfully in`,
  `#4 Your Image is ready for download Successfully  in`
]

/**
 * Creating SVG from dom-node
 * @param node
 * @param options
 * @returns `SVGSVGElement`
 */
const createSvg = async <T extends HTMLElement>(
  node: T,
  options: CaptureOptions = {}
): Promise<SVGSVGElement | any> => {
  const { width, height } = imageSize(node, options);
  const { isDebug } = options;
  try {
    const t0 = now();
    group(debugMessage[0], isDebug);
    // Step: 1
    const clonedNode = await cloneNode(node, options, true);
    difference(debugMessage[1], t0, isDebug)
    // Step: 2
    await inPageUsedFont(node, clonedNode);
    difference(debugMessage[2], t0, isDebug)
    // Step: 3
    await embedImages(clonedNode, options);
    difference(debugMessage[3], t0, isDebug)
    // Step: 4
    const svg = await nodeToSVG(clonedNode, width, height);
    difference(debugMessage[4], t0, isDebug)
    // differenceulating Time in milliseconds
    const t = now();
    log(`%c[Total time] ${t0 - t}`,)
    console.groupEnd();
    return svg;
  } catch (error) {
    console.error(error);
  }
};

export default createSvg;

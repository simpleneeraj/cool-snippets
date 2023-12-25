import svgToDataURL from './svgtodataurl';
import createSvg from './createsvg';
import { CaptureOptions } from '../options';

/**
 *
 * @param node
 * @param options
 * @returns
 */

async function generateDataURL<T extends HTMLElement>(
  node: T,
  options: CaptureOptions = {}
): Promise<string | any> {
  try {
    const svg = await createSvg(node, options);
    const dataURL = svgToDataURL(svg);
    return Promise.resolve(dataURL);
  } catch (error) {
    console.error(error);
  }
}

export default generateDataURL;

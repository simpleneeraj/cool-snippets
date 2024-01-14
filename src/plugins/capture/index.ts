/*****************************************
 *****************************************
 **************capture-dom****************
 *****************************************
 ****************v1.0.0*******************
 *****************************************
 *****************************************/
/**
 * Here types of our library
 */
export type { CaptureOptions as ScreenshotOptions } from './options';
/**
 * Here For React only
 */
export { default as Capture } from './react';
export { default as useCapture } from './react/useCapture';
/**
 * Get Image
 * Here All Format Images
 */
// same
export { default as saveImageAs } from './main/saveas';
// same
export { default as toDataURL } from './main/tobase64';
// 
export { default as toSVGElement } from './main/createsvg';
export { default as toCanvasElement } from './main/createcanvas';


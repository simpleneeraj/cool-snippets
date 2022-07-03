/**
 * Ratio for css
 * @param ratio in 1:1 this form
 * @returns in 1/1 this form
 */
const cssRatio = (ratio: string) => ratio.replace(/:/g, "/");

export default cssRatio;
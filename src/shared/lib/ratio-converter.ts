/**
 * Ratio for css
 * @param ratio in 1:1 this form
 * @returns in 1/1 this form
 */
const cssRatioConverter = (ratio: string) => ratio.replace(/:/g, '/');

export default cssRatioConverter;

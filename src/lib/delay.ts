

/**
 * Custom sleep or delay function
 * @example
 * ```js
 * await delay(2000)
 * // or
 * delay(2000).then((something)=>something)
 * ```
 * @param ms
 * @returns
 */

const delay = (ms: number | undefined) => {
    return new Promise((r) => setTimeout(r, ms));
};

export default delay;
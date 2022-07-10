
const createWindow = () => {
    let wind;
    if (typeof window !== "undefined") {
        return (wind = window);
    }
};
/**
 * Window for ssr ready
 */
const $window = createWindow()
export default $window;
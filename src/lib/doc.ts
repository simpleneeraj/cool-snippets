
const createDocument = () => {
    let wind;
    if (typeof document !== "undefined") {
        return (wind = document);
    }
};
/**
 * Window for ssr ready
 */
const $document = createDocument()
export default $document;
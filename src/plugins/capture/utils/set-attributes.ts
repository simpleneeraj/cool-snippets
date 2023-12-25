


const setAttributes = (element: Element, properties: object) => {
    for (const key in properties) {
        // @ts-expect-error
        let value = properties[key];
        element.setAttribute(key, value);
    }
};


export default setAttributes
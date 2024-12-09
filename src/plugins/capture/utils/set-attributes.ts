const setAttributes = (element: Element, properties: object) => {
  for (const key in properties) {
    // @ts-expect-error - Type issue
    const value = properties[key];
    element.setAttribute(key, value);
  }
};

export default setAttributes;

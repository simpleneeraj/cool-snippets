const randomName = (imageFormat?: string) => {
    return `IMG_${Date.now()}.${imageFormat}`;
};
export default randomName;
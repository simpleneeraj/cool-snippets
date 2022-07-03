
type imageType = "png" | "jpeg" | 'webp'

/**
 *
 * Convert Blob to Base64 String
 * @param {*} blob You want to convert
 * @param {*} type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
 * @param {*} quality from 0 to 1
 * @returns promise
 */

function toBase64(blob: Blob | string, type: imageType, quality: number): Promise<any> {
  return new Promise(function Converter(resolve) {
    let imageUrl = blob as string
    if (blob instanceof Blob) {
      imageUrl = URL.createObjectURL(blob);
    }
    let rawImage = new Image();
    rawImage.src = imageUrl;
    rawImage.decoding = "async";
    rawImage.crossOrigin = "Anonymous";
    rawImage.addEventListener("load", function () {
      let canvas = document.createElement("canvas");
      canvas.width = rawImage.naturalWidth;
      canvas.height = rawImage.naturalHeight;
      let ctx = canvas.getContext("2d");
      ctx?.drawImage(rawImage, 0, 0);
      canvas.toBlob((blobx: any) => {
        return resolve(blobx as Blob | MediaSource | any);
      }, `image/${type}`, quality)
      // resolve(canvas.toDataURL(`image/${type}`, quality));
    });
  });
}

export default toBase64;

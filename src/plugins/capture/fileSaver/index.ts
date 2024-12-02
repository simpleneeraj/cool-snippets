let element: HTMLAnchorElement | null = null;
let textEncoder: TextEncoder | null = null;

/**
 * Get an anchor element.
 *
 * @returns {HTMLAnchorElement}
 */
function getElement(): HTMLAnchorElement {
  if (element === null) {
    element = document.createElement('a');
  }
  return element;
}

/**
 * Get an instance of TextEncoder.
 *
 * @returns {TextEncoder}
 */
function getTextEncoder(): TextEncoder {
  if (textEncoder === null) {
    textEncoder = new TextEncoder();
  }

  return textEncoder;
}

/**
 * Return an object URL based on the given data.
 *
 * @param {BlobPart | string | ArrayBuffer | SharedArrayBuffer} data
 * @returns {string} The object URL.
 */
function getObjectUrl(
  data: BlobPart | string | ArrayBuffer | SharedArrayBuffer
): string {
  let blob: Blob;

  if (data instanceof Blob) {
    blob = data;
  } else if (typeof data === 'string') {
    blob = new Blob([getTextEncoder().encode(data).buffer], {
      type: 'application/octet-stream',
    });
  } else if (data instanceof ArrayBuffer || data instanceof SharedArrayBuffer) {
    blob = new Blob([data], {
      type: 'application/octet-stream',
    });
  } else {
    throw new Error(
      'in-browser-download: Data must either be a Blob, a string, an ArrayBuffer, or a SharedArrayBuffer'
    );
  }
  return URL.createObjectURL(blob);
}

/**
 * Download a Blob, a string, or an ArrayBuffer as a file in the browser
 *
 * @param {BlobPart | undefined} data The content of the file to download.
 * @param {string} filename The name of the file to download.
 */
function download(data: BlobPart | undefined, filename: string): void {
  const element = getElement();
  const url = getObjectUrl(data!);
  element.setAttribute('href', url);
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  setTimeout(function () {
    URL.revokeObjectURL(url);
  }, 100);
}

/**
 * Check if all the required APIs are supported by the browser.
 *
 * @returns {boolean}
 */
download.isSupported = function (): boolean {
  return (
    !!window['TextEncoder'] &&
    !!window['Blob'] &&
    !!window['URL'] &&
    typeof URL.createObjectURL === 'function' &&
    typeof URL.revokeObjectURL === 'function'
  );
};

export default download;

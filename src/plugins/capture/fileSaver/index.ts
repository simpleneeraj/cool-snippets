/* eslint-disable @typescript-eslint/no-explicit-any */
let element$: HTMLAnchorElement | null = null;

/**
 * Get an anchor element.
 */
function getElement(): HTMLElement {
  if (element$ === null) {
    element$ = document.createElement('a');
  }
  return element$;
}

/**
 * Download a Blob, a string or an ArrayBuffer as a docs in the browser
 */
function download(data: any, filename: string) {
  if (data) {
    const element = getElement();
    const blob = new Blob([data], {
      type: 'application/octet-stream',
    });
    const url = URL.createObjectURL(blob);
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  }
}

/**
 * Check if all the required APIs are supported by the browser.
 */
download.isSupported = function (): boolean {
  return (
    !!window.TextEncoder &&
    !!window.Blob &&
    !!window.URL &&
    typeof URL.createObjectURL === 'function' &&
    typeof URL.revokeObjectURL === 'function'
  );
};

export default download;

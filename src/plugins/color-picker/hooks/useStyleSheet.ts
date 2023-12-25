import { RefObject } from "react";
import { getNonce } from "../utils/nonce";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
// Bundler is configured to load this as a processed minified CSS-string
import styles from "../css";

const styleElementMap: Map<Document, HTMLStyleElement> = new Map();

/**
 * Injects CSS code into the document's <head>
 */
export const useStyleSheet = (nodeRef: RefObject<HTMLDivElement>): void => {
  useIsomorphicLayoutEffect(() => {
    const parentDocument = nodeRef.current ? nodeRef.current.ownerDocument : document;

    if (typeof parentDocument !== "undefined" && !styleElementMap.has(parentDocument)) {
      const styleElement = parentDocument.createElement("style");
      styleElement.innerHTML = styles;
      styleElementMap.set(parentDocument, styleElement);

      // Conform to CSP rules by setting `nonce` attribute to the inline styles
      const nonce = getNonce();
      if (nonce) styleElement.setAttribute("nonce", nonce);

      parentDocument.head.appendChild(styleElement);
    }
  }, []);
};



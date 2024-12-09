import React from 'react';
import setAttributes from './set-attributes';

async function nodeToSVG(
  node: HTMLElement,
  width: number,
  height: number
): Promise<SVGSVGElement> {
  const xmlns = 'http://www.w3.org/2000/svg';
  const xhtml = 'http://www.w3.org/1999/xhtml';
  const firstElement = node.firstChild!.parentElement;
  // Creating Elements
  const svg = document.createElementNS(xmlns, 'svg');
  const foreignObject = document.createElementNS(xmlns, 'foreignObject');
  const body = document.createElement('body');

  setAttributes(firstElement!, {
    xmlns: xhtml,
  });
  setAttributes(body, {
    xmlns: xhtml,
    style: styleToString({
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    }),
  });
  setAttributes(svg, {
    xmlns: xmlns,
    width: `${width}`,
    height: `${height}`,
    viewBox: `0 0 ${width} ${height}`,
  });
  // foreignObject Attribute Setting
  setAttributes(foreignObject, {
    x: '0',
    y: '0',
    width: '100%',
    height: '100%',
    externalResourcesRequired: 'true',
  });
  svg.append(foreignObject);
  body.append(node);
  foreignObject.append(body);
  return svg;
}

export default nodeToSVG;

const styleToString = (style: React.CSSProperties) => {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase() +
      ':' +
      // @ts-expect-error - Type Issue
      style[key] +
      ';',
    ''
  );
};

import setAttributes from "./set-attributes";

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
  const body = document.createElement('body')

  setAttributes(body, {
    xmlns: xhtml,
  })
  setAttributes(svg, {
    xmlns: xmlns,
    width: `${width}`,
    height: `${height}`,
    viewBox: `0 0 ${width} ${height}`,
  })
  // foreignObject Attribute Setting
  setAttributes(foreignObject, {
    x: `0`,
    y: `0`,
    width: `100%`,
    height: `100%`,
    externalResourcesRequired: `true`,
  })
  svg.appendChild(foreignObject);
  // console.log(foreignObject);
  // For Buidling Powerful SVG
  firstElement!.setAttribute('xmlns', xhtml);
  body.append(node)
  foreignObject.append(body);
  return svg;
}

export default nodeToSVG;



  // svg  Attribute Setting
  // svg.setAttribute('xmlns', xmlns);
  // svg.setAttribute('width', `${width}`);
  // svg.setAttribute('height', `${height}`);
  // svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  // foreignObject.setAttribute('x', '0');
  // foreignObject.setAttribute('y', '0');
  // foreignObject.setAttribute('width', '100%');
  // foreignObject.setAttribute('height', '100%');
  // foreignObject.setAttribute('externalResourcesRequired', 'true');
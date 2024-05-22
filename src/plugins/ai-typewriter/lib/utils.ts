import React from 'react';
import { ReactNode } from '../types';

/**
 * Returns the position of the nth occurrence of a substring in a string.
 *
 * @param {string} string - The string to search within.
 * @param {string} subString - The substring to search for.
 * @param {number} index - The nth occurrence of the substring to find.
 * @returns {number} The position of the nth occurrence of the substring in the string.
 */
export const getStringPosition = (
  string: string,
  subString: string,
  index: number
): number => {
  return string.split(subString, index).join(' ').length;
};

/**
 * Finds the index and overflow of a position in an array.
 *
 * @param {string | number | any[]} arr - The array to search within.
 * @param {number} pos - The position to search for.
 * @returns {[number, number]} An array containing the index and overflow of the position.
 */
export const getCurrentNodeOverflow = (
  arr: string | number | any[],
  pos: number
): [number, number] => {
  let acc = 0;
  let index = 0;

  // Check if arr is an array
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (acc + Number(arr[i]) > pos) {
        break;
      }
      index++;
      acc += Number(arr[i]);
    }
  } else if (typeof arr === 'string' || typeof arr === 'number') {
    // If arr is a string or a number, treat it as a single element
    index = 1;
    acc = Number(arr);
  }

  return [index, pos - acc];
};

/**
 * Traverses a React node and counts the tokens in its children.
 *
 * @param {ReactNode} node - The React node to traverse.
 * @returns {number[]} An array containing the token counts of the node's children.
 */
export const traverseNodesAndCountTokens = (node: ReactNode) => {
  const nodeChildren =
    node && typeof node === 'object' && 'props' in node
      ? node.props.children
      : undefined;
  const arr: number[] = [];

  const traverse = (n: ReactNode) => {
    if (Array.isArray(n)) {
      n.forEach(child => traverse(child));
    } else if (typeof n === 'string') {
      arr.push(n.split(' ').length);
    } else if (typeof n === 'object') {
      const childNodeChildren =
        n && typeof n === 'object' && 'props' in n
          ? n.props.children
          : undefined;
      if (childNodeChildren !== undefined) {
        traverse(childNodeChildren);
      }
    }
  };

  traverse(nodeChildren);

  return arr;
};

/**
 * Traverses a React node and injects AIWriter into its children.
 *
 * @param {ReactNode} node - The React node to traverse.
 * @returns {ReactNode} The modified React node with AIWriter injected into its children.
 */
export const traverseNodesAndInjectAIWriter = (node: ReactNode): ReactNode => {
  const [currentLength, currentPosition] = [0, 0];
  const nodeChildren =
    node && typeof node === 'object' && 'props' in node
      ? node.props.children
      : undefined;

  if (Array.isArray(nodeChildren)) {
    // If children is an array, process each child recursively
    const joinedNodes: ReactNode[] = [];
    let tmpCurrentLoopTokenPos = 0;
    let tmpCurrentLoopNodePos = 0;

    nodeChildren.forEach(child => {
      if (typeof child === 'object') {
        const processedChild = traverseNodesAndInjectAIWriter(child);
        joinedNodes.push(processedChild);
      } else if (typeof child === 'string') {
        tmpCurrentLoopTokenPos += child.split(' ').length;
        tmpCurrentLoopNodePos++;

        // Your logic for handling the token position
        // Assuming you handle the token position correctly
        const [nodeIndex, currentNodePos] = getCurrentNodeOverflow(
          currentLength,
          currentPosition
        );

        if (nodeIndex < tmpCurrentLoopNodePos) {
          joinedNodes.push(
            child.slice(0, getStringPosition(child, ' ', currentNodePos))
          );
        }

        joinedNodes.push(child);
      }
    });

    return joinedNodes;
  }

  if (typeof nodeChildren === 'string') {
    // If children is a string, process it
    let tmpCurrentLoopTokenPos = 0;
    let tmpCurrentLoopNodePos = 0;
    tmpCurrentLoopTokenPos += nodeChildren.split(' ').length;
    tmpCurrentLoopNodePos++;

    // Your logic for handling the token position
    // Assuming you handle the token position correctly
    const [nodeIndex, currentNodePos] = getCurrentNodeOverflow(
      currentLength,
      currentPosition
    );

    if (nodeIndex < tmpCurrentLoopNodePos) {
      return nodeChildren.slice(
        0,
        getStringPosition(nodeChildren, ' ', currentNodePos)
      );
    }

    return nodeChildren;
  }

  // If children is a React element, recursively process it
  return React.cloneElement(nodeChildren, {
    children: traverseNodesAndInjectAIWriter(nodeChildren),
  });
};

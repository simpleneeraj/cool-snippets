'use client';

import React from 'react';
import { useActiveElement } from '@features/studio/store/slides/current-element';

/**
 * Marks a subtree as "clicking here must not deselect". Put it on panels,
 * toolbars and portalled popups that operate on the current selection.
 */
export const SELECTION_KEEP_ATTRIBUTE = 'data-selection-keep';

export const keepSelectionProps = { [SELECTION_KEEP_ATTRIBUTE]: '' };

/**
 * Selectors whose subtrees never clear the selection: the elements themselves,
 * anything opted in via the attribute above, and Moveable's control box (its
 * resize handles sit outside the element's own DOM node).
 */
const KEEP_SELECTORS = [
  `[${SELECTION_KEEP_ATTRIBUTE}]`,
  '[id^="element-"]',
  '.moveable-control-box',
  '[role="dialog"]',
  '[role="menu"]',
  '[role="listbox"]',
  '[role="tooltip"]',
].join(',');

/**
 * Clears the element selection on any pointer-down outside the editing
 * surfaces.
 *
 * Deselection used to be a handler on the slide container alone, so clicks on
 * the surrounding canvas, the header or empty space never reached it and the
 * floating toolbar stayed open indefinitely. Listening at the document covers
 * every one of those cases from one place.
 */
const SelectionManager = () => {
  const { updateElement } = useActiveElement();

  React.useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      // A drag that ends over empty canvas must not count as an outside click.
      if (useActiveElement.getState().interacting) return;
      if (!useActiveElement.getState().element) return;

      const insideKeepZone = event
        .composedPath()
        .some(
          (node) =>
            node instanceof Element && node.matches?.(KEEP_SELECTORS) === true,
        );

      if (!insideKeepZone) updateElement(null);
    };

    document.addEventListener('pointerdown', onPointerDown, true);
    return () =>
      document.removeEventListener('pointerdown', onPointerDown, true);
  }, [updateElement]);

  return null;
};

export default SelectionManager;

'use client';

import React from 'react';
import { useActiveElement } from '@features/studio/store/slides/current-element';
import { useSegment } from '@features/studio/store/segment';
import { SEGMENT_SCREEN } from '@features/studio/model/enums';

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
  // The artboard owns its own pointer-down handling (it selects the slide
  // rather than clearing), so the document listener must not race it. Clicks on
  // the canvas *around* the artboard still fall through and clear.
  '[data-capture="capture-container"]',
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
  const clearSelection = useActiveElement((s) => s.clearSelection);
  const endEditing = useActiveElement((s) => s.endEditing);

  // Escape leaves edit mode first (the element stays selected); a second
  // Escape with nothing being edited is left for other handlers.
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && useActiveElement.getState().editingId) {
        endEditing();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [endEditing]);

  React.useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      // A drag that ends over empty canvas must not count as an outside click.
      if (useActiveElement.getState().interacting) return;
      if (!useActiveElement.getState().selection) return;

      const insideKeepZone = event
        .composedPath()
        .some(
          (node) =>
            node instanceof Element && node.matches?.(KEEP_SELECTORS) === true,
        );

      if (!insideKeepZone) clearSelection();
    };

    document.addEventListener('pointerdown', onPointerDown, true);
    return () =>
      document.removeEventListener('pointerdown', onPointerDown, true);
  }, [clearSelection]);

  useSelectionPanelRouting();

  return null;
};

/**
 * Routes the right-hand panel to match what is selected: the artboard shows
 * background/image controls, an element shows its property inspector.
 *
 * Keyed on the selection *kind* rather than the selection itself — clicking
 * from one element to another while the user is deliberately on another tab
 * must not yank them back to Edit.
 */
const useSelectionPanelRouting = () => {
  const kind = useActiveElement((s) => s.selection?.kind);
  const onChangeSegment = useSegment((s) => s.onChangeSegment);

  React.useEffect(() => {
    if (!kind) return;
    onChangeSegment(
      'screen',
      kind === 'slide' ? SEGMENT_SCREEN.BACKGROUNDS : SEGMENT_SCREEN.EDIT,
    );
  }, [kind, onChangeSegment]);
};

export default SelectionManager;

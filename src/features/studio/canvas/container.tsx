'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import SlideStyle from './styles/slide';
import ElementStyle from './styles/element';
import MoveableOverlay from './elements/moveable';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { useActiveElement } from '@features/studio/store/slides/current-element';
import { generateID } from '@features/studio/lib/id-generator';
import { elementsObject } from '../aside/primary/values';
import { useDrop } from 'react-dnd';
import { DRAG_ITEM_TYPE, type DragItem } from '@features/studio/dnd/types';
import UIView from '@shared/uikit/UIView';

const EditorComponents = dynamic(() => import('./elements'), {
  ssr: false,
});

/* ─────────────────────────────────────────────────────────── */
/*  Canvas container — drop target                             */
/* ─────────────────────────────────────────────────────────── */

const ContainerWidget = () => {
  const { currentSlide, createSlideElement } = useSlideEditor();
  const { updateElement, selectSlide, interacting } = useActiveElement();

  const containerRef = React.useRef<HTMLDivElement>(null);

  /* ── react-dnd drop target ─────────────────────────────── */

  const [{ isOver, draggedItem }, dropRef] = useDrop<
    DragItem,
    void,
    { isOver: boolean; draggedItem: DragItem | null }
  >(() => ({
    accept: DRAG_ITEM_TYPE,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      draggedItem: monitor.isOver() ? (monitor.getItem() as DragItem) : null,
    }),
    drop(item, monitor) {
      const offset = monitor.getClientOffset();
      if (!offset || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = offset.x - rect.left;
      const y = offset.y - rect.top;

      const template =
        elementsObject[item.elementType as keyof typeof elementsObject];
      if (!template) return;
      if (!currentSlide?.id) return;

      const id = generateID();
      const element = {
        id,
        ...template,
        style: {
          ...template.style,
          // Instance overrides (e.g. an icon's intrinsic size) sit above the
          // template but below positioning, so a payload can never displace
          // the drop point.
          ...item.style,
          // Place the element centred on the exact cursor position
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: `${x}px`,
          top: `${y}px`,
          right: 'initial',
          bottom: 'initial',
        },
        properties: {
          ...template.properties,
          ...item.properties,
        },
      };

      createSlideElement(currentSlide.id, element);
      // Auto-select immediately so Moveable handles appear
      requestAnimationFrame(() => updateElement(id));
    },
  }));

  /* Merge our own container ref with react-dnd's drop ref */
  const mergedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      (containerRef as React.RefObject<HTMLDivElement | null>).current = node;
      dropRef(node);
    },
    [dropRef],
  );

  /* ── canvas pointer-down (deselect) ───────────────────── */

  // The artboard is itself selectable: clicking its background selects the
  // slide (which routes the right panel to the background controls) rather
  // than clearing the selection outright. Element clicks stopPropagation, so
  // only genuine background hits reach here.
  const onCanvasPointerDown = React.useCallback(() => {
    if (interacting) return;
    selectSlide();
  }, [interacting, selectSlide]);

  /* ─────────────────────────────────────────────────────── */

  return (
    <React.Fragment>
      <SlideStyle style={currentSlide?.background} />
      <MoveableOverlay containerRef={containerRef} />
      <UIView
        className="center"
        ref={mergedRef}
        onPointerDown={onCanvasPointerDown}
        style={{ position: 'relative' }}
        data-capture="capture-container"
      >
        {/* Drop overlay — renders only while dragging over canvas */}
        {isOver && draggedItem && (
          <div className="absolute inset-0 z-9998 border-2 border-dashed border-primary"></div>
        )}

        {currentSlide?.elements?.map((item, index) => (
          <React.Fragment key={item.id}>
            <ElementStyle style={item} />
            <EditorComponents item={item} index={index} />
          </React.Fragment>
        ))}
      </UIView>
    </React.Fragment>
  );
};

export default ContainerWidget;

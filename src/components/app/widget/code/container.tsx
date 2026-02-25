'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import SlideStyle from './styles/slide';
import ElementStyle from './styles/element';
import MoveableOverlay from './elements/moveable';
import useSlideEditor from '@/store/hooks/use-editor';
import { Capture as CaptureView } from '@/plugins/capture';
import { useActiveElement } from '@/store/slides/current-element';
import { generateID } from '@/utils/id-generator';
import { elementsObject } from '../aside/primary/values';
import { useDrop } from 'react-dnd';
import { DRAG_ITEM_TYPE, type DragItem } from '@/components/app/dnd/types';
import UIView from '@/app-kit/source/UIView';

const EditorComponents = dynamic(() => import('./elements'), {
  ssr: false,
});

/* ─────────────────────────────────────────────────────────── */
/*  Canvas container — drop target                             */
/* ─────────────────────────────────────────────────────────── */

const ContainerWidget = () => {
  const { currentSlide, createSlideElement } = useSlideEditor();
  const { updateElement, interacting } = useActiveElement();

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
          // Place the element centred on the exact cursor position
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: `${x}px`,
          top: `${y}px`,
          right: 'initial',
          bottom: 'initial',
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

  const onCanvasPointerDown = React.useCallback(() => {
    if (interacting) return;
    updateElement(null);
  }, [interacting, updateElement]);

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

        {currentSlide?.elements?.map((item) => (
          <React.Fragment key={item.id}>
            <ElementStyle style={item} />
            <EditorComponents item={item} constraintsRef={containerRef} />
          </React.Fragment>
        ))}
      </UIView>
    </React.Fragment>
  );
};

export default ContainerWidget;

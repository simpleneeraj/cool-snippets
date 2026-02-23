'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import SlideStyle from './styles/slide';
import ElementStyle from './styles/element';
import MoveableOverlay from './elements/moveable';
import useSlideEditor from '@/store/hooks/use-editor';
import { Capture as CaptureView } from '@/plugins/capture';
import { useActiveElement } from '@/store/slides/current-element';

const EditorComponents = dynamic(() => import('./elements'), {
  ssr: false,
});

const ContainerWidget = () => {
  const { currentSlide } = useSlideEditor();
  const { updateElement, interacting } = useActiveElement();

  const containerRef = React.useRef<HTMLDivElement>(null);

  /**
   * Deselect: click on empty canvas area → set element to null.
   * Elements use stopPropagation so their clicks never reach here.
   * Skip if Moveable is actively dragging/resizing.
   */
  const onCanvasPointerDown = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (interacting) return;
      updateElement(null);
    },
    [interacting, updateElement],
  );
  return (
    <React.Fragment>
      <SlideStyle style={currentSlide?.background} />
      <MoveableOverlay containerRef={containerRef} />
      <CaptureView
        className="center"
        ref={containerRef}
        onPointerDown={onCanvasPointerDown}
      >
        {currentSlide?.elements?.map((item) => (
          <React.Fragment key={item.id}>
            <ElementStyle style={item} />
            <EditorComponents item={item} constraintsRef={containerRef} />
          </React.Fragment>
        ))}
      </CaptureView>
    </React.Fragment>
  );
};

export default ContainerWidget;

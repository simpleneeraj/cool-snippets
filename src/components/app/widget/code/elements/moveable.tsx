'use client';

import React from 'react';
import Moveable from 'react-moveable';
import useSlideEditor from '@/store/hooks/use-editor';
import { useActiveElement } from '@/store/slides/current-element';

const MoveableOverlay = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { onChangeSlideElement } = useSlideEditor();
  const { element, setInteracting } = useActiveElement();
  const [target, setTarget] = React.useState<HTMLElement | null>(null);

  const directions = {
    top: true,
    right: true,
    bottom: true,
    left: true,
    center: true,
    middle: true,
  };

  React.useEffect(() => {
    if (!element) {
      setTarget(null);
      return;
    }
    queueMicrotask(() => {
      const el = document.getElementById(`element-${element}`);
      setTarget(el);
    });
  }, [element]);

  if (!element || !target) return null;

  return (
    <>
      <Moveable
        target={target}
        // origin={false}
        // hideDefaultLines={false}
        draggable
        resizable
        snappable
        snapCenter
        snapElement
        snapGap
        // isDisplaySnapDigit={false}
        snapThreshold={8}
        snapDirections={directions}
        elementSnapDirections={directions}
        verticalGuidelines={[
          0,
          (containerRef.current?.clientWidth || 0) / 4,
          (containerRef.current?.clientWidth || 0) / 2,
          ((containerRef.current?.clientWidth || 0) * 3) / 4,
          containerRef.current?.clientWidth || 0,
        ]}
        horizontalGuidelines={[
          0,
          (containerRef.current?.clientHeight || 0) / 4,
          (containerRef.current?.clientHeight || 0) / 2,
          ((containerRef.current?.clientHeight || 0) * 3) / 4,
          containerRef.current?.clientHeight || 0,
        ]}
        elementGuidelines={Array.from(
          document.querySelectorAll('[id^="element-"]'),
        ).filter((el) => el !== target)}
        bounds={{
          left: 0,
          top: 0,
          right: containerRef.current?.clientWidth || 0,
          bottom: containerRef.current?.clientHeight || 0,
        }}
        /* ---- DRAG ---- */
        onDragStart={() => setInteracting(true)}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onDragEnd={(e) => {
          setInteracting(false);
          if (!e.target) return;
          onChangeSlideElement({
            style: { transform: e.target.style.transform },
          });
        }}
        /* ---- RESIZE ---- */
        onResizeStart={() => setInteracting(true)}
        onResize={(e) => {
          const containerW = containerRef.current?.clientWidth || Infinity;
          const containerH = containerRef.current?.clientHeight || Infinity;
          const w = Math.min(Math.max(e.width, 10), containerW);
          const h = Math.min(Math.max(e.height, 10), containerH);
          e.target.style.width = `${w}px`;
          e.target.style.height = `${h}px`;
          e.target.style.transform = e.drag.transform;
        }}
        onResizeEnd={(e) => {
          setInteracting(false);
          if (!e.target) return;
          onChangeSlideElement({
            style: {
              width: e.target.style.width,
              height: e.target.style.height,
              transform: e.target.style.transform,
            },
          });
        }}
      />
    </>
  );
};

export default MoveableOverlay;

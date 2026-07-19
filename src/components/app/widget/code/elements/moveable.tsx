'use client';

import React from 'react';
import Moveable from 'react-moveable';
import useSlideEditor from '@/store/hooks/use-editor';
import { ELEMENTS } from '@shared/types/enums';
import { useActiveElement } from '@/store/slides/current-element';

const DIRECTIONS = {
  top: true,
  right: true,
  bottom: true,
  left: true,
  center: true,
  middle: true,
};

// Eight-handle resize (corners + edge midpoints), the shape every design tool
// uses. No rotation handle and — with `origin={false}` — no centre dot.
const RESIZE_HANDLES = ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'];

/** Guides at the container edges, quarters and centre. */
const guidelinesFor = (size: number) => [
  0,
  size / 4,
  size / 2,
  (size * 3) / 4,
  size,
];

const MoveableOverlay = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { onChangeSlideElement, currentSlide, currentElement } =
    useSlideEditor();
  const { element, setInteracting } = useActiveElement();

  // Photos and icons distort when resized freely, so corner drags keep their
  // aspect ratio; text and code blocks resize on each axis independently.
  const keepRatio =
    currentElement?.type === ELEMENTS.IMAGE ||
    currentElement?.type === ELEMENTS.ICON;
  const moveableRef = React.useRef<Moveable>(null);
  const [target, setTarget] = React.useState<HTMLElement | null>(null);
  const [bounds, setBounds] = React.useState({ width: 0, height: 0 });

  // Store-driven moves (Centre, Flip, layer changes, edits from the side panel)
  // reposition the target node without going through a Moveable gesture, so its
  // cached rect goes stale and the control box floats at the old spot. Re-sync
  // after the DOM commits whenever a position/size style changes.
  React.useLayoutEffect(() => {
    moveableRef.current?.updateRect();
  }, [
    currentElement?.style?.top,
    currentElement?.style?.left,
    currentElement?.style?.right,
    currentElement?.style?.bottom,
    currentElement?.style?.transform,
    currentElement?.style?.width,
    currentElement?.style?.height,
  ]);

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

  // Guides are measured from the container, which the user can resize while an
  // element stays selected — reading it during render left them stale.
  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) =>
      setBounds({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      }),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [containerRef]);

  // Snap targets are the sibling elements. Derived from the slide rather than a
  // `querySelectorAll` on every render.
  const elementGuidelines = React.useMemo(() => {
    if (!element) return [];
    return (currentSlide?.elements ?? [])
      .filter((item) => item.id && item.id !== element && !item.hidden)
      .map((item) => document.getElementById(`element-${item.id}`))
      .filter((node): node is HTMLElement => Boolean(node));
  }, [currentSlide?.elements, element]);

  if (!element || !target) return null;

  return (
    <>
      <Moveable
        ref={moveableRef}
        target={target}
        draggable
        resizable
        keepRatio={keepRatio}
        // Removes react-moveable's centre origin dot (the red handle) and the
        // rotation handle — this is a resize/move box, not a transform gizmo.
        origin={false}
        renderDirections={RESIZE_HANDLES}
        throttleDrag={0}
        throttleResize={0}
        snappable
        snapGap
        snapThreshold={8}
        snapDirections={DIRECTIONS}
        elementSnapDirections={DIRECTIONS}
        verticalGuidelines={guidelinesFor(bounds.width)}
        horizontalGuidelines={guidelinesFor(bounds.height)}
        elementGuidelines={elementGuidelines}
        // `css` measures the edges relative to the container, not the viewport
        // (the "client" default). With client coords, `right: containerWidth`
        // resolves to a viewport x that lands mid-canvas — because the artboard
        // is offset from the viewport's left edge by the sidebar — so the
        // element jammed partway when dragged right. Zero insets = stay inside.
        bounds={{
          position: 'css',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
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

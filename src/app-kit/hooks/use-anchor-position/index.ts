'use client';

import React from 'react';

export type AnchorPosition = { top: number; left: number };

type Options = {
  /** Distance above the anchor, in px. */
  offset?: number;
  enabled?: boolean;
  /**
   * True while a gesture is imperatively moving the anchor (Moveable writes
   * `style.transform` straight to the node, which fires no observer). Only
   * then is a per-frame loop justified.
   */
  tracking?: boolean;
};

/**
 * Tracks an element's viewport position for a portalled overlay.
 *
 * Deliberately event-driven rather than a `requestAnimationFrame` loop: the
 * previous implementation measured and set state every frame for as long as an
 * element was selected, which kept React re-rendering the portal at 60fps while
 * the user did nothing. A ResizeObserver plus scroll/resize listeners covers
 * every case that actually moves the anchor, and `bump()` handles imperative
 * moves (a drag mutating `style.transform` directly fires no observer).
 */
const useAnchorPosition = (
  anchorRef: React.RefObject<HTMLElement | null>,
  { offset = 48, enabled = true, tracking = false }: Options = {},
) => {
  const [position, setPosition] = React.useState<AnchorPosition | null>(null);
  const lastRef = React.useRef<AnchorPosition | null>(null);

  const measure = React.useCallback(() => {
    const node = anchorRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const next = {
      top: rect.top + window.scrollY - offset,
      left: rect.left + window.scrollX + rect.width / 2,
    };

    const last = lastRef.current;
    if (last && last.top === next.top && last.left === next.left) return;

    lastRef.current = next;
    setPosition(next);
  }, [anchorRef, offset]);

  React.useLayoutEffect(() => {
    if (!enabled) {
      lastRef.current = null;
      setPosition(null);
      return;
    }

    measure();

    const node = anchorRef.current;
    const observer = new ResizeObserver(measure);
    if (node) observer.observe(node);

    window.addEventListener('scroll', measure, true);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', measure, true);
      window.removeEventListener('resize', measure);
    };
  }, [anchorRef, enabled, measure]);

  React.useEffect(() => {
    if (!enabled || !tracking) return;

    let frame = requestAnimationFrame(function step() {
      measure();
      frame = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(frame);
  }, [enabled, tracking, measure]);

  return { position, refresh: measure };
};

export default useAnchorPosition;

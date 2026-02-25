'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { ElementType } from '@/typings/editor';
import useSlideEditor from '@/store/hooks/use-editor';
import { useActiveSlide } from '@/store/slides/current-slide';
import { useActiveElement } from '@/store/slides/current-element';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from '@/app-kit/ui/toolbar';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@/app-kit/ui/tooltip';
import { Button } from '@/app-kit/ui/button';
import {
  BringToFront,
  SendToBack,
  Copy,
  Trash2,
  AlignCenter,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  FlipHorizontal,
  FlipVertical,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────
   Portal toolbar — rendered into document.body so it is never clipped
   by overflow:hidden at any depth in the element tree.
   Position is tracked via rAF loop against the element's DOM node.
───────────────────────────────────────────────────────────────────── */

export interface ElementToolbarProps {
  item: ElementType;
  /** A ref pointing to the element's wrapper DOM node (the anchor). */
  anchorRef: React.RefObject<HTMLElement | null>;
}

export function ElementToolbar({ item, anchorRef }: ElementToolbarProps) {
  const { slide: slideId } = useActiveSlide();
  const { updateElement } = useActiveElement();
  const { deleteSlideElement, duplicateSlideElement, onChangeSlideElement } =
    useSlideEditor();

  /* ── Portal position tracking ─────────────────────────────────── */

  const [pos, setPos] = React.useState<{ top: number; left: number } | null>(
    null,
  );
  const rafRef = React.useRef<number>(0);

  React.useLayoutEffect(() => {
    const measure = () => {
      const el = anchorRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setPos({
        top: r.top + window.scrollY - 48, // 48px above the element
        left: r.left + window.scrollX + r.width / 2,
      });
      rafRef.current = requestAnimationFrame(measure);
    };
    rafRef.current = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(rafRef.current);
  }, [anchorRef]);

  /* ── Prop: stop propagation ───────────────────────────────────── */
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  /* ── z-index ──────────────────────────────────────────────────── */
  const currentZ = Number(item.style?.zIndex ?? 1);
  const bringForward = (e: React.MouseEvent) => {
    stop(e);
    onChangeSlideElement({ style: { zIndex: String(currentZ + 1) } });
  };
  const sendBackward = (e: React.MouseEvent) => {
    stop(e);
    onChangeSlideElement({
      style: { zIndex: String(Math.max(0, currentZ - 1)) },
    });
  };

  /* ── visibility ───────────────────────────────────────────────── */
  const currentOpacity =
    item.style?.opacity !== undefined ? Number(item.style.opacity) : 1;
  const isHidden = currentOpacity < 1;
  const toggleVisibility = (e: React.MouseEvent) => {
    stop(e);
    onChangeSlideElement({ style: { opacity: isHidden ? 1 : 0.3 } });
  };

  /* ── lock ─────────────────────────────────────────────────────── */
  const isLocked = item.style?.pointerEvents === 'none';
  const toggleLock = (e: React.MouseEvent) => {
    stop(e);
    onChangeSlideElement({
      style: { pointerEvents: isLocked ? 'auto' : 'none' },
    });
  };

  /* ── flip ─────────────────────────────────────────────────────── */
  const currentTransform = (item.style?.transform as string) ?? '';
  const flipH = (e: React.MouseEvent) => {
    stop(e);
    const next = currentTransform.includes('scaleX(-1)')
      ? currentTransform.replace('scaleX(-1)', '').trim()
      : `${currentTransform} scaleX(-1)`.trim();
    onChangeSlideElement({ style: { transform: next } });
  };
  const flipV = (e: React.MouseEvent) => {
    stop(e);
    const next = currentTransform.includes('scaleY(-1)')
      ? currentTransform.replace('scaleY(-1)', '').trim()
      : `${currentTransform} scaleY(-1)`.trim();
    onChangeSlideElement({ style: { transform: next } });
  };

  /* ── centre ───────────────────────────────────────────────────── */
  const centre = (e: React.MouseEvent) => {
    stop(e);
    onChangeSlideElement({
      style: {
        top: '50%',
        left: '50%',
        right: 'initial',
        bottom: 'initial',
        transform: 'translate(-50%, -50%)',
      },
    });
  };

  /* ── duplicate ────────────────────────────────────────────────── */
  const duplicate = (e: React.MouseEvent) => {
    stop(e);
    if (!slideId || !item.id) return;
    duplicateSlideElement(slideId, item.id);
  };

  /* ── delete ───────────────────────────────────────────────────── */
  const deleteEl = (e: React.MouseEvent) => {
    stop(e);
    if (!slideId || !item.id) return;
    deleteSlideElement(slideId, item.id);
    updateElement(null);
  };

  /* ── render ───────────────────────────────────────────────────── */
  if (!pos || typeof document === 'undefined') return null;

  return createPortal(
    <div
      onPointerDown={stop}
      style={{
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        transform: 'translateX(-50%)',
        zIndex: 99999,
        pointerEvents: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      <TooltipProvider>
        <Toolbar>
          {/* ── Layer order ──────────────────────── */}
          <ToolbarGroup>
            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label="Bring Forward"
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={bringForward}
                      />
                    }
                  >
                    <BringToFront />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Bring Forward</TooltipPopup>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label="Send Backward"
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={sendBackward}
                      />
                    }
                  >
                    <SendToBack />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Send Backward</TooltipPopup>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label="Centre on Canvas"
                    render={
                      <Button variant="ghost" size="icon-sm" onClick={centre} />
                    }
                  >
                    <AlignCenter />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Centre on Canvas</TooltipPopup>
            </Tooltip>
          </ToolbarGroup>

          <ToolbarSeparator />

          {/* ── Flip ─────────────────────────────── */}
          <ToolbarGroup>
            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label="Flip Horizontal"
                    render={
                      <Button variant="ghost" size="icon-sm" onClick={flipH} />
                    }
                  >
                    <FlipHorizontal />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Flip Horizontal</TooltipPopup>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label="Flip Vertical"
                    render={
                      <Button variant="ghost" size="icon-sm" onClick={flipV} />
                    }
                  >
                    <FlipVertical />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Flip Vertical</TooltipPopup>
            </Tooltip>
          </ToolbarGroup>

          <ToolbarSeparator />

          {/* ── Visibility / Lock ────────────────── */}
          <ToolbarGroup>
            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label={isHidden ? 'Show' : 'Hide'}
                    render={
                      <Button
                        variant={isHidden ? 'outline' : 'ghost'}
                        size="icon-sm"
                        onClick={toggleVisibility}
                      />
                    }
                  >
                    {isHidden ? <EyeOff /> : <Eye />}
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>
                {isHidden ? 'Show Element' : 'Hide Element'}
              </TooltipPopup>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label={isLocked ? 'Unlock' : 'Lock'}
                    render={
                      <Button
                        variant={isLocked ? 'outline' : 'ghost'}
                        size="icon-sm"
                        onClick={toggleLock}
                      />
                    }
                  >
                    {isLocked ? <Lock /> : <Unlock />}
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>
                {isLocked ? 'Unlock Element' : 'Lock Element'}
              </TooltipPopup>
            </Tooltip>
          </ToolbarGroup>

          <ToolbarSeparator />

          {/* ── Duplicate / Delete ───────────────── */}
          <ToolbarGroup>
            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label="Duplicate"
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={duplicate}
                      />
                    }
                  >
                    <Copy />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Duplicate</TooltipPopup>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    aria-label="Delete"
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={deleteEl}
                        className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                      />
                    }
                  >
                    <Trash2 />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Delete</TooltipPopup>
            </Tooltip>
          </ToolbarGroup>
        </Toolbar>
      </TooltipProvider>
    </div>,
    document.body,
  );
}

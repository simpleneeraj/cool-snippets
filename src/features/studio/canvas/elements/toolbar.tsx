'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { ElementType } from '@features/studio/model/editor';
import { ELEMENTS, LAYER_DIRECTION } from '@features/studio/model/enums';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import useAnchorPosition from '@shared/hooks/use-anchor-position';
import { keepSelectionProps } from '@features/studio/selection-manager';
import { useActiveSlide } from '@features/studio/store/slides/current-slide';
import { useActiveElement } from '@features/studio/store/slides/current-element';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from '@shared/ui/toolbar';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/ui/tooltip';
import { Button } from '@shared/ui/button';
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
import { StructureIcon } from '@solar-icons/react/bold/structure';

/* ─────────────────────────────────────────────────────────────────────
   Portal toolbar — rendered into document.body so it is never clipped
   by overflow:hidden at any depth in the element tree.
───────────────────────────────────────────────────────────────────── */

export interface ElementToolbarProps {
  item: ElementType;
  /** A ref pointing to the element's wrapper DOM node (the anchor). */
  anchorRef: React.RefObject<HTMLElement | null>;
}

export function ElementToolbar({ item, anchorRef }: ElementToolbarProps) {
  const { slide: slideId } = useActiveSlide();
  const { updateElement, interacting } = useActiveElement();
  const {
    deleteSlideElement,
    duplicateSlideElement,
    moveSlideElement,
    onChangeSlideElement,
  } = useSlideEditor();

  const { position: pos, refresh } = useAnchorPosition(anchorRef, {
    tracking: interacting,
  });

  // Store-driven moves (Centre, Flip, layer changes, edits from the side panel)
  // reposition the anchor without a drag gesture, a resize, or a scroll — none
  // of which the event-driven hook observes. Re-measure after the DOM commits
  // whenever a position-affecting style changes so the toolbar tracks the box.
  React.useLayoutEffect(() => {
    refresh();
  }, [
    refresh,
    item.style?.top,
    item.style?.left,
    item.style?.right,
    item.style?.bottom,
    item.style?.transform,
    item.style?.width,
    item.style?.height,
  ]);

  /* ── Prop: stop propagation ───────────────────────────────────── */
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  /* ── layer order — array position is the stacking order ───────── */
  const move = (direction: LAYER_DIRECTION) => (e: React.MouseEvent) => {
    stop(e);
    if (!slideId || !item.id) return;
    moveSlideElement(slideId, item.id, direction);
  };

  /* ── visibility ───────────────────────────────────────────────── */
  const isHidden = Boolean(item.hidden);
  const toggleVisibility = (e: React.MouseEvent) => {
    stop(e);
    onChangeSlideElement({ hidden: !isHidden });
    // A hidden element renders `display:none`, so keeping it selected would
    // leave the toolbar anchored to a zero-size box. Layers brings it back.
    if (!isHidden) updateElement(null);
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

  /* ── which actions apply to this element type ─────────────────── */
  // Flipping only means something for raster/vector artwork; a code block or
  // text box has no meaningful mirror. Everything else (layer order, centre,
  // visibility, lock, duplicate, delete) is universal.
  const canFlip = item.type === ELEMENTS.IMAGE || item.type === ELEMENTS.ICON;

  /* ── render ───────────────────────────────────────────────────── */
  if (!pos || typeof document === 'undefined') return null;

  return createPortal(
    <div
      onPointerDown={stop}
      {...keepSelectionProps}
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
                        onClick={move(LAYER_DIRECTION.UP)}
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
                        onClick={move(LAYER_DIRECTION.DOWN)}
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
                    <StructureIcon />
                  </ToolbarButton>
                }
              />
              <TooltipPopup sideOffset={8}>Centre on Canvas</TooltipPopup>
            </Tooltip>
          </ToolbarGroup>

          <ToolbarSeparator />

          {/* ── Flip (visual elements only) ──────── */}
          {canFlip && (
            <>
              <ToolbarGroup>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <ToolbarButton
                        aria-label="Flip Horizontal"
                        render={
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            onClick={flipH}
                          />
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
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            onClick={flipV}
                          />
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
            </>
          )}

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

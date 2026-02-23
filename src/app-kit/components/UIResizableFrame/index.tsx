import { cn } from '@/lib/utils';
import React, {
  useRef,
  useState,
  useCallback,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseCircle } from '@/app-kit/icons/CloseCircle';
import { MAX_SLIDE_WIDTH, MIN_SLIDE_WIDTH } from '@/store/slides/state';
import { useActiveElement } from '@/store/slides/current-element';

enum Handle {
  LEFT = 'left',
  RIGHT = 'right',
}

type ResizableFrameProps = {
  minWidth?: number;
  maxWidth?: number;
  width?: number;
  onWidthChange?: (width: number) => void;
  onResetWidth?: () => void;
};

const ResizableFrame: React.FC<PropsWithChildren<ResizableFrameProps>> = ({
  children,
  minWidth = MIN_SLIDE_WIDTH,
  maxWidth = MAX_SLIDE_WIDTH,
  width,
  onWidthChange,
  onResetWidth,
}) => {
  const currentHandleRef = useRef<Handle>(undefined);
  const windowRef = useRef<HTMLDivElement>(null);
  const startWidthRef = useRef<number>(undefined);
  const startXRef = useRef<number>(undefined);

  const [isResizing, setResizing] = useState(false);
  const { updateElement } = useActiveElement();

  const mouseMoveHandler = useCallback(
    (event: MouseEvent) => {
      let newWidth;

      if (currentHandleRef.current === Handle.LEFT) {
        newWidth =
          startWidthRef.current! - (event.clientX - startXRef.current!) * 2;
      } else {
        newWidth =
          startWidthRef.current! + (event.clientX - startXRef.current!) * 2;
      }

      if (newWidth > maxWidth) {
        newWidth = maxWidth;
      } else if (newWidth < minWidth) {
        newWidth = minWidth;
      }
      onWidthChange?.(newWidth);
    },
    [onWidthChange],
  );

  const clearSelection = useCallback(() => {
    var sel = document.getSelection();
    if (sel) {
      if (sel.removeAllRanges) {
        sel.removeAllRanges();
      } else if (sel.empty) {
        sel.empty();
      }
    }
  }, []);

  const latestWidthRef = useRef<number | null>(null);

  const mouseUpHandler = useCallback(() => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    setResizing(false);
    clearSelection();

    if (latestWidthRef.current !== null) {
      onWidthChange?.(latestWidthRef.current);
    }
  }, [mouseMoveHandler, clearSelection, onWidthChange]);

  const onWidthChangeRef = useRef(onWidthChange);
  onWidthChangeRef.current = onWidthChange;

  const onResizeFrameX = useCallback(
    (handle: Handle): MouseEventHandler<HTMLDivElement> =>
      (event) => {
        event.preventDefault();

        currentHandleRef.current = handle;
        startWidthRef.current = windowRef.current!.offsetWidth;
        startXRef.current = event.clientX;
        setResizing(true);
        updateElement(null);

        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        const pointerMove = (e: MouseEvent) => {
          let newWidth =
            handle === Handle.LEFT
              ? startWidthRef.current! - (e.clientX - startXRef.current!) * 2
              : startWidthRef.current! + (e.clientX - startXRef.current!) * 2;

          newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
          latestWidthRef.current = newWidth;
          onWidthChangeRef.current?.(newWidth);
        };

        const pointerUp = () => {
          document.removeEventListener('mousemove', pointerMove);
          document.removeEventListener('mouseup', pointerUp);

          document.body.style.cursor = '';
          document.body.style.userSelect = '';

          setResizing(false);
        };

        document.addEventListener('mousemove', pointerMove);
        document.addEventListener('mouseup', pointerUp);
      },
    [minWidth, maxWidth],
  );

  return (
    <div className={cn(`resizableFrame`, isResizing && `isResizing`)}>
      <div
        className={`windowSizeDragPoint left`}
        onMouseDown={onResizeFrameX(Handle.LEFT)}
      ></div>
      <div
        className={`windowSizeDragPoint right`}
        onMouseDown={onResizeFrameX(Handle.RIGHT)}
      ></div>
      <div ref={windowRef} style={{ width: `${width}px` }}>
        {children}
      </div>

      <AnimatePresence>
        {!!(width && !isResizing) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="resetWidthContainer"
          >
            <a
              className="resetWidth"
              onClick={(event) => {
                event.preventDefault();
                onWidthChange?.(minWidth);
                onResetWidth?.();
              }}
            >
              <CloseCircle />
              Set to auto width
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isResizing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ruler"
          >
            <span>{width} px</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResizableFrame;

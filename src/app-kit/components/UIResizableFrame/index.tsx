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
import { Button } from '@/app-kit/ui/button';

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
    <div className={cn('relative inline-block', isResizing && 'select-none')}>
      {/* LEFT HANDLE */}
      <div
        onMouseDown={onResizeFrameX(Handle.LEFT)}
        className="
      absolute top-1/2 left-0
      -translate-x-1/2 -translate-y-1/2
      w-6 h-6
      flex items-center justify-center
      cursor-col-resize
      z-10
    "
      >
        <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
      </div>

      {/* RIGHT HANDLE */}
      <div
        onMouseDown={onResizeFrameX(Handle.RIGHT)}
        className="
      absolute top-1/2 right-0
      translate-x-1/2 -translate-y-1/2
      w-6 h-6
      flex items-center justify-center
      cursor-col-resize
      z-10
    "
      >
        <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
      </div>

      {/* CONTENT */}
      <div ref={windowRef} style={{ width: `${width}px` }} className="relative">
        {children}
      </div>

      {/* RESET BUTTON */}
      <AnimatePresence mode="wait">
        {!isResizing && width !== minWidth && (
          <motion.div
            key="reset"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
          absolute
          bottom-[-30px]
          left-1/2
          -translate-x-1/2
          z-20
          pointer-events-none
        "
          >
            <Button
              size="sm"
              variant="ghost"
              onClick={(event) => {
                event.preventDefault();
                onWidthChange?.(minWidth);
                onResetWidth?.();
              }}
              className="pointer-events-auto text-xs! text-muted-foreground"
            >
              <CloseCircle className="size-3.5" />
              Set to auto width
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RULER */}
      <AnimatePresence>
        {isResizing && (
          <motion.div
            key="ruler"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
          absolute
          bottom-[-24px]
          left-1/2
          -translate-x-1/2
          w-full
          text-xs
          text-center
          pointer-events-none
          z-15
          border-x
          border-gray-300
          dark:border-gray-600
          text-gray-500
          dark:text-gray-400
        "
          >
            <div className="relative">
              <span className="px-4 bg-white dark:bg-neutral-900 rounded-lg">
                {width} px
              </span>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-gray-300 dark:border-gray-600 -z-10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResizableFrame;

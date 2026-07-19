import { cn } from '@/lib/utils';
import React, {
  useRef,
  useState,
  useCallback,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XCircle } from 'lucide-react';
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
  const windowRef = useRef<HTMLDivElement>(null);
  const startWidthRef = useRef<number>(0);
  const startXRef = useRef<number>(0);

  const [isResizing, setResizing] = useState(false);
  const { updateElement } = useActiveElement();

  // The slide may not have a stored width yet; `${undefined}px` is invalid CSS
  // and silently collapses the frame to its content.
  const resolvedWidth = width ?? minWidth;

  const onWidthChangeRef = useRef(onWidthChange);
  onWidthChangeRef.current = onWidthChange;

  const onResizeFrameX = useCallback(
    (handle: Handle): MouseEventHandler<HTMLDivElement> =>
      (event) => {
        event.preventDefault();

        startWidthRef.current = windowRef.current?.offsetWidth ?? minWidth;
        startXRef.current = event.clientX;
        setResizing(true);
        updateElement(null);

        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        const pointerMove = (e: MouseEvent) => {
          // Doubled because the frame is centred: it grows from both edges, so
          // the pointer covers half the total width change.
          const delta = (e.clientX - startXRef.current) * 2;
          const next =
            handle === Handle.LEFT
              ? startWidthRef.current - delta
              : startWidthRef.current + delta;

          onWidthChangeRef.current?.(
            Math.max(minWidth, Math.min(maxWidth, next)),
          );
        };

        const stopResizing = () => {
          document.removeEventListener('mousemove', pointerMove);
          document.removeEventListener('mouseup', stopResizing);
          window.removeEventListener('blur', stopResizing);

          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          setResizing(false);
        };

        document.addEventListener('mousemove', pointerMove);
        document.addEventListener('mouseup', stopResizing);
        // Releasing the button outside the window never fires mouseup, which
        // would otherwise leave the page stuck with a resize cursor.
        window.addEventListener('blur', stopResizing);
      },
    [minWidth, maxWidth, updateElement],
  );

  const handleClass = cn(
    'group absolute top-1/2 flex h-16 w-4 -translate-y-1/2 cursor-col-resize items-center justify-center',
    // Above the canvas content so a full-bleed element cannot swallow the grab
    // target near the edge.
    'z-1000',
  );

  const gripClass =
    'h-10 w-1.5 rounded-full bg-foreground/25 transition-all group-hover:h-12 group-hover:bg-foreground/70';

  return (
    <div className={cn('relative inline-block', isResizing && 'select-none')}>
      <div
        aria-label="Resize from left"
        onMouseDown={onResizeFrameX(Handle.LEFT)}
        className={cn(handleClass, 'left-0 -translate-x-1/2')}
      >
        <div className={cn(gripClass, isResizing && 'h-12 bg-foreground/70')} />
      </div>

      <div
        aria-label="Resize from right"
        onMouseDown={onResizeFrameX(Handle.RIGHT)}
        className={cn(handleClass, 'right-0 translate-x-1/2')}
      >
        <div className={cn(gripClass, isResizing && 'h-12 bg-foreground/70')} />
      </div>

      <div
        ref={windowRef}
        style={{ width: `${resolvedWidth}px` }}
        className="relative"
      >
        {children}
      </div>

      <AnimatePresence mode="wait">
        {!isResizing && resolvedWidth !== minWidth && (
          <motion.div
            key="reset"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute bottom-[-30px] left-1/2 z-20 -translate-x-1/2"
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
              <XCircle className="size-3.5" />
              Reset width
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isResizing && (
          <motion.div
            key="ruler"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute bottom-[-24px] left-1/2 z-15 w-full -translate-x-1/2 border-x border-gray-300 text-center text-xs text-gray-500 dark:border-gray-600 dark:text-gray-400"
          >
            <div className="relative">
              <span className="rounded-lg bg-white px-4 dark:bg-neutral-900">
                {resolvedWidth} px
              </span>
              <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 border-t border-gray-300 dark:border-gray-600" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResizableFrame;

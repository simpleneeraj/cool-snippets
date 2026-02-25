import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/app-kit/ui/card';
import UIView from '@/app-kit/source/UIView';
import UIVirtualizeGrid from '@/app-kit/components/UIVirtualizeGrid';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/app-kit/ui/empty';
import { RouteIcon } from 'lucide-react';

type ImageItem = {
  id: string | number;
  urls: { regular: string };
};

/* ─────────────────────────────────────────────────────────────
   Measures its own height via ResizeObserver so VirtuosoGrid
   gets an accurate pixel height without any JS arithmetic.
───────────────────────────────────────────────────────────── */
function VirtualImageGrid({
  images,
  value,
  onSelect,
}: {
  images: ImageItem[];
  value?: string;
  onSelect?: (url: string) => void;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    /*
     * layout-fill  →  flex flex-1 flex-col min-h-0
     * This propagates the flex constraint from the panel root so the
     * container actually has a bounded height for ResizeObserver to read.
     */
    <UIView ref={containerRef} className="layout-fill">
      <UIVirtualizeGrid
        value={value}
        items={images}
        height={height}
        gridCount={2}
        emptyContent={
          <UIView className="flex flex-1 items-center justify-center">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <RouteIcon />
                </EmptyMedia>
                <EmptyTitle>No images found</EmptyTitle>
                <EmptyDescription>Please choose another tab</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </UIView>
        }
      >
        {({ currentItem }: { currentItem: ImageItem }) => (
          <div className="relative flex flex-col flex-1 group">
            <Card
              className={cn(
                'flex flex-col flex-1 rounded-2xl overflow-hidden',
                {
                  'border-2 border-primary':
                    value === currentItem?.urls?.regular,
                },
              )}
            >
              <figure className="h-full w-full">
                <img
                  alt="background"
                  className="object-cover w-full min-h-28 max-h-28 hover:scale-110 transition-transform"
                  src={String(currentItem.urls.regular)}
                />
              </figure>
            </Card>
            <div
              className="absolute inset-0 z-10 cursor-pointer rounded-2xl hover:bg-black/10 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onSelect?.(currentItem.urls.regular);
              }}
            />
          </div>
        )}
      </UIVirtualizeGrid>
    </UIView>
  );
}

export default VirtualImageGrid;

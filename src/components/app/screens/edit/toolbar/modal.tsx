import React from 'react';
import { PickerIconType, PickerProps } from '@/typings/icon-picker';
import { IconProviders } from '@/typings/icon-picker';
import { startCase } from 'lodash';
import IconContainer from '../../icons/container';
import UILoadingFallback from '@/app-kit/components/UILoadingFallback';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/app-kit/ui/dialog';
import { Tabs, TabsList, TabsTab } from '@/app-kit/ui/tabs';
import { Button } from '@/app-kit/ui/button';

type Props = PickerProps & {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
};

const items = [
  { name: 'Twitter Emoji', key: IconProviders.TWITTER },
  { name: 'Fluent Emoji', key: IconProviders.FLUENTUI },
  { name: 'Material Icons', key: IconProviders.MATERIAL_ICONS },
  { name: 'Neon Symbols', key: IconProviders.VSCODE_SYMBOLS },
];

const IconPicker: React.FC<Props> = (props) => {
  const [selectedIcon, setSelectedIcon] = React.useState<PickerIconType | null>(
    null,
  );
  const [activeCategory, setActiveCategory] = React.useState<IconProviders>(
    IconProviders.TWITTER,
  );

  const onSelectIcon = React.useCallback((icon: PickerIconType) => {
    setSelectedIcon(icon);
  }, []);

  const onClearSelection = () => setSelectedIcon(null);

  const onSelect = () => {
    if (selectedIcon) {
      props?.onSelectIcon?.(selectedIcon);
      props?.onClose?.();
    }
  };

  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="p-2">
          <DialogTitle>Asset Picker</DialogTitle>
        </DialogHeader>
        <div className="flex flex-row gap-2 p-2">
          <div className="min-w-40">
            <Tabs
              orientation="vertical"
              aria-label="Options"
              value={activeCategory}
              onValueChange={(value) =>
                setActiveCategory(value as IconProviders)
              }
            >
              <TabsList className="h-auto flex-col">
                {items.map((item) => (
                  <TabsTab
                    key={item.key}
                    value={item.key}
                    className="w-full justify-start"
                  >
                    {item.name}
                  </TabsTab>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="flex-1">
            <React.Suspense fallback={<UILoadingFallback />}>
              <IconContainer
                gridCount={4}
                provider={activeCategory}
                value={selectedIcon!}
                onSelectIcon={onSelectIcon}
              />
            </React.Suspense>
          </div>
        </div>
        <DialogFooter className="flex items-center justify-between gap-1 border-t border-muted p-4">
          <div className="flex items-center gap-2">
            {selectedIcon && (
              <>
                <div className="flex flex-col rounded-xl border border-muted p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-12 w-12 object-contain"
                    src={selectedIcon?.source}
                    alt={selectedIcon?.name}
                  />
                </div>
                <div className="flex flex-col">
                  <p>{startCase(selectedIcon?.name)}</p>
                  <span className="text-sm text-muted-foreground">
                    {activeCategory}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={onClearSelection}>
              Clear
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={onSelect}
              disabled={!selectedIcon}
            >
              Select
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IconPicker;

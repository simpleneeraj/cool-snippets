import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import {
  IconCategory,
  PickerIconType,
  PickerProps,
} from '@/typings/icon-picker';
import {
  Tabs,
  Tab,
  ModalProps,
  ModalFooter,
  Button,
  Image,
} from '@nextui-org/react';
import { Modal, ModalBody, ModalHeader, ModalContent } from '@nextui-org/react';
import { startCase } from 'lodash';
import IconContainer from '../../icons/container';

type Props = PickerProps & Omit<ModalProps, 'children'>;

const LoaderFallback = () => (
  <UIView className="flex-1 flex flex-col items-center justify-center min-h-96 border border-default-100 rounded-2xl">
    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Loading...
    </span>
  </UIView>
);

const items = [
  { name: 'Twitter Emoji', key: IconCategory.TWITTER },
  { name: 'Fluent Emoji', key: IconCategory.FLUENT },
  { name: 'Material Icons', key: IconCategory.GOOGLE },
  { name: 'Icons', key: IconCategory.ICONS },
];

const IconPicker: React.FC<Props> = (props) => {
  const [selectedIcon, setSelectedIcon] = React.useState<PickerIconType | null>(
    null
  );
  const [activeCategory, setActiveCategory] = React.useState<IconCategory>(
    IconCategory.TWITTER
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
    <Modal scrollBehavior="inside" placement="top" size="3xl" {...props}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 p-2">
          Asset Picker
        </ModalHeader>
        <ModalBody className="p-2 flex-row gap-2">
          <UIView className="min-w-40">
            <Tabs
              fullWidth
              variant="light"
              aria-label="Options"
              isVertical
              onSelectionChange={(key) =>
                setActiveCategory(key as IconCategory)
              }
            >
              {items.map((item) => (
                <Tab key={item.key} title={item.name}></Tab>
              ))}
            </Tabs>
          </UIView>
          <UIView className="flex-1">
            <React.Suspense fallback={<LoaderFallback />}>
              <IconContainer
                gridCount={4}
                type={activeCategory}
                value={selectedIcon!}
                onSelectIcon={onSelectIcon}
              />
            </React.Suspense>
          </UIView>
        </ModalBody>
        <ModalFooter className="flex items-center gap-1 p-4 justify-between border-t border-default-100">
          <UIView className="flex items-center gap-2">
            {selectedIcon && (
              <>
                <UIView className="flex flex-col border border-default-100 rounded-xl p-1">
                  <Image
                    className="h-12 w-12 object-contain"
                    src={selectedIcon?.source}
                    alt={selectedIcon?.name}
                  />
                </UIView>
                <UIView className="flex flex-col">
                  <p>{startCase(selectedIcon?.name)}</p>
                  <span className="text-small text-default-500">
                    {activeCategory}
                  </span>
                </UIView>
              </>
            )}
          </UIView>
          <UIView className="flex items-center gap-2">
            <Button size="sm" onClick={onClearSelection}>
              Clear
            </Button>
            <Button
              color="secondary"
              size="sm"
              onClick={onSelect}
              disabled={!selectedIcon}
            >
              Select
            </Button>
          </UIView>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default IconPicker;

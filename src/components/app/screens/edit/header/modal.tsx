import React from 'react';
import dynamic from 'next/dynamic';
import { Tabs, Tab } from '@nextui-org/react';
import {
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';

enum IconCategory {
  TWITTER = 'twitter',
  FLUENT = 'fluent',
  IMAGES = 'images',
  FILES = 'files',
  GOOGLE = 'google',
  APPLE = 'apple',
  MICROSOFT = 'microsoft',
  ICONS = 'icons',
  DESIGN_ASSETS = 'design_assets',
  PHOTOS = 'photos',
  FONTS = 'fonts',
  VECTOR_GRAPHICS = 'vector_graphics',
}

// Dynamic imports for components
const EmojiPicker = dynamic(() => import('./emoji-picker'), {
  loading: () => <LoaderFallback />,
});
const FluentEmoji = dynamic(() => import('./fluentui-emoji'), {
  loading: () => <LoaderFallback />,
});

export default function IconApp() {
  const [activeCategory, setActiveCategory] = React.useState<IconCategory>(
    IconCategory.TWITTER
  );
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  const renderActiveComponent = React.useMemo(() => {
    switch (activeCategory) {
      case IconCategory.TWITTER:
        return <EmojiPicker />;
      case IconCategory.FLUENT:
        return <FluentEmoji />;
      default:
        return <LoaderFallback />;
    }
  }, [activeCategory]);

  const items = [
    { name: 'Twitter Emoji', key: IconCategory.TWITTER },
    { name: 'Fluent Emoji', key: IconCategory.FLUENT },
  ];

  return (
    <React.Fragment>
      <Button size="sm" onPress={onOpen} variant="bordered">
        Asset Picker
      </Button>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        size="3xl"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 p-2">
            Asset Picker
          </ModalHeader>
          <ModalBody className="p-2 flex-row gap-2">
            <UIView className="min-w-40">
              <Tabs
                fullWidth
                variant="bordered"
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
              {/* <LoaderFallback /> */}
              {renderActiveComponent}
            </UIView>
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}
const LoaderFallback = () => (
  <div className="flex-1 flex justify-center items-center">
    <p>Loading...</p>
  </div>
);

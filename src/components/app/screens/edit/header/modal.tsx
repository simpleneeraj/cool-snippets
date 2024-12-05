import React from 'react';
import dynamic from 'next/dynamic';
import { Tabs, Tab, ModalProps } from '@nextui-org/react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';
import SymbolsPicker from './symbols-picker';
import { _fileIcons } from '@/plugins/material-icons';
import MaterialIconsPicker from './material-icons-picker';

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

const EmojiPicker = dynamic(() => import('./emoji-picker'), {
  loading: () => <LoaderFallback />,
});
const FluentEmoji = dynamic(() => import('./fluentui-emoji'), {
  loading: () => <LoaderFallback />,
});

type Props = {} & Omit<ModalProps, 'children'>;

function IconPicker(props: Props) {
  const [activeCategory, setActiveCategory] = React.useState<IconCategory>(
    IconCategory.TWITTER
  );

  const renderActiveComponent = React.useMemo(() => {
    switch (activeCategory) {
      case IconCategory.TWITTER:
        return <EmojiPicker />;
      case IconCategory.FLUENT:
        return <FluentEmoji />;
      case IconCategory.GOOGLE:
        return <MaterialIconsPicker />;
      case IconCategory.ICONS:
        return <SymbolsPicker />;
      default:
        return <LoaderFallback />;
    }
  }, [activeCategory]);

  const items = [
    { name: 'Twitter Emoji', key: IconCategory.TWITTER },
    { name: 'Fluent Emoji', key: IconCategory.FLUENT },
    { name: 'Material Icons', key: IconCategory.GOOGLE },
    { name: 'Icons', key: IconCategory.ICONS },
  ];

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
  );
}

export default IconPicker;

const LoaderFallback = () => (
  <div className="flex-1 flex justify-center items-center">
    <p>Loading...</p>
  </div>
);

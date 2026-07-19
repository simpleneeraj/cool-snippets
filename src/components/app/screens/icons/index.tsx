/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import IconContainer from './container';
import UIView from '@/app-kit/source/UIView';
import { Tabs, TabsList, TabsTab } from '@/app-kit/ui/tabs';
import useSlideEditor from '@/store/hooks/use-editor';
import { IconProviders, PickerIconType } from '@/typings/icon-picker';

const items = [
  { name: 'Twitter Emoji', key: IconProviders.TWITTER },
  { name: 'Fluent Emoji', key: IconProviders.FLUENTUI },
  { name: 'Material Icons', key: IconProviders.MATERIAL_ICONS },
  { name: 'Neon Symbols', key: IconProviders.VSCODE_SYMBOLS },
];

const IconsScreen = () => {
  const { createSlideElement, currentSlideId } = useSlideEditor();
  const [selectedIcon, setSelectedIcon] = React.useState<PickerIconType | null>(
    null
  );
  const [activeCategory, setActiveCategory] = React.useState<IconProviders>(
    IconProviders.TWITTER
  );

  const onSelectElement = React.useCallback((icon: PickerIconType) => {
    // const selectedElement = elementsObject[ELEMENTS.IMAGE];
    // const id = generateID();
    // const slide = merge({}, selectedElement, {
    //   id,
    //   properties: {
    //     src: icon?.source,
    //     alt: icon?.name,
    //     height: '100px',
    //     width: '100px',
    //     className: 'border',
    //   },
    // });
    // createSlideElement(currentSlideId, slide);
  }, []);

  return (
    <UIView className="p-1">
      <Tabs
        aria-label="Options"
        value={activeCategory}
        onValueChange={(value) => setActiveCategory(value as IconProviders)}
      >
        <TabsList className="w-full">
          {items?.map((item) => (
            <TabsTab key={item.key} value={item.key} className="flex-1">
              {item.name}
            </TabsTab>
          ))}
        </TabsList>
      </Tabs>
      <IconContainer
        gridCount={3}
        provider={activeCategory}
        value={selectedIcon!}
        onSelectIcon={onSelectElement}
      />
    </UIView>
  );
};
export default IconsScreen;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import IconContainer from './container';
import UIView from '@/ui-kit/source/UIView';
import { Tab, Tabs } from '@nextui-org/react';
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

  const onSelectElement = React.useCallback(
    (icon: PickerIconType) => {
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
    },
    [createSlideElement, currentSlideId]
  );

  return (
    <UIView className="p-1">
      <Tabs
        fullWidth
        size="sm"
        variant="light"
        aria-label="Options"
        onSelectionChange={(key) => setActiveCategory(key as IconProviders)}
      >
        {items?.map((item) => <Tab key={item.key} title={item.name}></Tab>)}
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

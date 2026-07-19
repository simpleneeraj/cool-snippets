'use client';

import React from 'react';
import IconContainer from './container';
import UIView from '@shared/uikit/UIView';
import { Tabs, TabsList, TabsTab } from '@shared/ui/tabs';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { generateID } from '@shared/lib/id-generator';
import { ASSET_SOURCE, ELEMENTS } from '@shared/types/enums';
import { elementsObject } from '@features/studio/aside/primary/values';
import { useActiveElement } from '@features/studio/store/slides/current-element';
import { IconProviders, PickerIconType } from '@shared/types/icon-picker';

// Labels stay short: four tabs share a 320px panel, and the full provider
// names ("Material Icons", "Neon Symbols") overflow and clip the tab bar.
const items = [
  { name: 'Emoji', key: IconProviders.TWITTER },
  { name: 'Fluent', key: IconProviders.FLUENTUI },
  { name: 'Material', key: IconProviders.MATERIAL_ICONS },
  { name: 'Symbols', key: IconProviders.VSCODE_SYMBOLS },
];

const ICON_SIZE = 96;

const IconsScreen = () => {
  const { createSlideElement, currentSlideId } = useSlideEditor();
  const { updateElement } = useActiveElement();
  const [selectedIcon, setSelectedIcon] = React.useState<PickerIconType | null>(
    null,
  );
  const [activeCategory, setActiveCategory] = React.useState<IconProviders>(
    IconProviders.TWITTER,
  );

  const onSelectElement = React.useCallback(
    (icon: PickerIconType) => {
      if (!icon?.source || !currentSlideId) return;

      setSelectedIcon(icon);

      const template = elementsObject[ELEMENTS.ICON];
      const id = generateID();

      createSlideElement(currentSlideId, {
        ...template,
        id,
        style: { ...template.style, width: ICON_SIZE, height: ICON_SIZE },
        properties: {
          source: ASSET_SOURCE.URL,
          src: icon.source,
          alt: icon.name,
        },
      });
      updateElement(id);
    },
    [createSlideElement, currentSlideId, updateElement],
  );

  return (
    <UIView className="layout-fill p-1">
      <Tabs
        aria-label="Icon provider"
        value={activeCategory}
        onValueChange={(value) => setActiveCategory(value as IconProviders)}
      >
        <TabsList className="w-full">
          {items?.map((item) => (
            <TabsTab
              key={item.key}
              value={item.key}
              className="min-w-0 flex-1 px-1 text-xs"
            >
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

import React from 'react';
import { ELEMENTS } from '@/typings/enums';
import UIView from '@/app-kit/source/UIView';
import UITooltip from '@/app-kit/source/UITooltip';
import { generateID } from '@/utils/id-generator';
import { elements, elementsObject } from '../../widget/aside/primary/values';
import useSlideEditor from '@/store/hooks/use-editor';
import UIButton from '@/app-kit/source/UIButton/button';
import { Frame, FrameItem } from '@/components/elements/frame';

const ElementsScreen = () => {
  const { onChangeSlideElement } = useSlideEditor();
  const onSelectElement = React.useCallback(
    (type: ELEMENTS) => {
      const selectedElement = elementsObject?.[type];
      if (selectedElement) {
        const id = generateID();
        const slide = {
          id: id,
          ...selectedElement,
        };
        onChangeSlideElement(slide);
      } else {
        console.warn(`Element of type ${type} does not exist.`);
      }
    },
    [onChangeSlideElement]
  );

  return (
    <Frame title="Elements">
      <FrameItem divider={false} className="p-2">
        <UIView className="flex-1 grid grid-cols-5 gap-2">
          {elements.map((item, index) => {
            return (
              <UITooltip
                key={index}
                placement="bottom"
                content={item.content}
                color="primary"
              >
                <UIButton
                  size={'lg'}
                  isIconOnly
                  variant={'flat'}
                  aria-label={item.content}
                  onPress={() => onSelectElement(item.type)}
                >
                  <item.icon />
                </UIButton>
              </UITooltip>
            );
          })}
        </UIView>
      </FrameItem>
    </Frame>
  );
};
export default ElementsScreen;

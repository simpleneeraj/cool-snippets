import React from 'react';
import { ELEMENTS } from '@features/studio/model/enums';
import UIView from '@shared/uikit/UIView';
import { generateID } from '@features/studio/lib/id-generator';
import { elements, elementsObject } from '@features/studio/aside/primary/values';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import UIButton from '@shared/uikit/UIButton/button';
import { Frame, FrameItem } from '@features/studio/ui/frame';

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
    [onChangeSlideElement],
  );

  return (
    <Frame title="Elements">
      <FrameItem divider={false} className="p-2">
        <UIView className="flex-1 grid grid-cols-5 gap-2">
          {elements.map((item, index) => {
            return (
              // <UITooltip
              //   key={index}
              //   placement="bottom"
              //   content={item.content}
              //   color="primary"
              // >
              <UIButton
                size={'lg'}
                variant={'default'}
                aria-label={item.content}
                onClick={() => onSelectElement(item.type)}
              >
                <item.icon />
              </UIButton>
              // </UITooltip>
            );
          })}
        </UIView>
      </FrameItem>
    </Frame>
  );
};
export default ElementsScreen;

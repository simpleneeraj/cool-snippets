import React from 'react';
import { ELEMENTS } from '@/typings/enums';
import UIView from '@/ui-kit/source/UIView';
import UITooltip from '@/ui-kit/source/UITooltip';
import { generateID } from '@/utils/id-generator';
import { elements, elementsObject } from './values';
import useSlideEditor from '@/store/hooks/use-editor';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import { useActiveSlide } from '@/store/slides/current-slide';

const ElementsScreen = () => {
  const { createSlideElement } = useSlideEditor();
  const { slide: activeSlide } = useActiveSlide();
  const onSelectElement = React.useCallback(
    (type: ELEMENTS) => {
      // @ts-expect-error Check if the element exists in elementsObject
      const selectedElement = elementsObject?.[type];
      if (selectedElement) {
        const id = generateID();
        const slide = {
          id: id,
          ...selectedElement,
        };
        createSlideElement(activeSlide, slide);
      } else {
        console.warn(`Element of type ${type} does not exist.`);
      }
    },
    [activeSlide, createSlideElement]
  );

  // console.log(slides);

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

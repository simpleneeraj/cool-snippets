import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UITooltip from '@/ui-kit/source/UITooltip';
import TrashOutline from '@/ui-kit/icons/TrashOutline';
import EyeOutlineIcon from '@/ui-kit/icons/EyeOutline';
import UIButton from '@/ui-kit/source/UIButton/button';
import DuplicateOutline from '@/ui-kit/icons/DuplicateOutline';
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  cn,
  tv,
} from '@nextui-org/react';
import LayersOutline from '@/ui-kit/icons/LayersOutline';
import useSlideEditor from '@/store/hooks/use-editor';
import { useActiveSlide } from '@/store/slides/current-slide';
import { useActiveElement } from '@/store/slides/current-element';
import UIInput from '@/ui-kit/source/UIInput';

const template = tv({
  slots: {
    base: 'flex flex-col gap-2',
    container: 'grid min-h-44 rounded-xl p-10 relative overflow-hidden',
    card: 'h-fit min-w-36 backdrop-blur-lg flex flex-col overflow-hidden justify-between rounded-lg bg-black bg-opacity-50',
  },
});

const { base, container, card } = template();

const LayersPreview = () => {
  const { slides, deleteSlideElement, duplicateSlideElement } =
    useSlideEditor();

  const { updateSlide } = useActiveSlide((state) => state);
  const { element: elmId } = useActiveElement((state) => state);

  return (
    <UIView className={base()}>
      {slides.map((slide) => {
        return (
          <Card className="p-1" shadow="lg">
            <CardBody
              key={slide.id}
              className="p-0"
              title={slide.name}
              aria-label={slide.name}
            >
              <CardHeader className="p-0 pb-1 gap-1">
                <UIInput
                  size={'sm'}
                  variant={'bordered'}
                  value={slide.name}
                  startContent={<LayersOutline className="h-4 w-4" />}
                />
              </CardHeader>
              <ul className="flex flex-col gap-1">
                {slide.elements.map((element) => {
                  const active = element.id === elmId;
                  return (
                    <li key={element.id}>
                      <UIView
                        className={cn(
                          'flex items-center uppercase text-xs text-default-900 bg-default-100 justify-between rounded-lg pl-2',
                          active && 'bg-primary'
                        )}
                      >
                        <UIView>{element.type}</UIView>
                        <UIView>
                          <UITooltip
                            size="sm"
                            content="Visibility"
                            placement="bottom"
                          >
                            <UIButton
                              size={'sm'}
                              isIconOnly
                              variant={'light'}
                              aria-label={'Visibility Slide Element'}
                            >
                              <EyeOutlineIcon className="h-[14px] w-[14px]" />
                            </UIButton>
                          </UITooltip>
                          <UITooltip
                            size="sm"
                            content="Duplicate"
                            placement="bottom"
                          >
                            <UIButton
                              isIconOnly
                              size={'sm'}
                              variant={'light'}
                              aria-label={'Duplicate Slide Element'}
                              onPress={() =>
                                element.id &&
                                duplicateSlideElement(slide.id, element.id)
                              }
                            >
                              <DuplicateOutline className="h-[14px] w-[14px]" />
                            </UIButton>
                          </UITooltip>
                          <UITooltip
                            size="sm"
                            content="Delete"
                            placement="bottom"
                          >
                            <UIButton
                              isIconOnly
                              size={'sm'}
                              variant={'light'}
                              aria-label={'Delete Slide Element'}
                              onPress={() =>
                                element.id &&
                                deleteSlideElement(slide.id, element.id)
                              }
                            >
                              <TrashOutline className="h-[14px] w-[14px]" />
                            </UIButton>
                          </UITooltip>
                        </UIView>
                      </UIView>
                    </li>
                  );
                })}
              </ul>
            </CardBody>
          </Card>
        );
      })}
    </UIView>
  );
};
export default LayersPreview;

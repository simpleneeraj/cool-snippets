/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UITooltip from '@/ui-kit/source/UITooltip';
import TrashOutline from '@/ui-kit/icons/TrashOutline';
import EyeOutlineIcon from '@/ui-kit/icons/EyeOutline';
import UIButton from '@/ui-kit/source/UIButton/button';
import DuplicateOutline from '@/ui-kit/icons/DuplicateOutline';
import LayersOutline from '@/ui-kit/icons/LayersOutline';
import useSlideEditor from '@/store/hooks/use-editor';
import { useActiveElement } from '@/store/slides/current-element';
import UIInput from '@/ui-kit/source/UIInput';
import {
  cn,
  tv,
  Card,
  Button,
  Dropdown,
  CardBody,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from '@nextui-org/react';
import { elementLabelMapper, elements, elementsObject } from './values';
import { useActiveSlide } from '@/store/slides/current-slide';
import { ELEMENTS } from '@/typings/enums';
import { generateID } from '@/utils/id-generator';

const template = tv({
  slots: {
    base: 'flex flex-col gap-2',
    container: 'grid min-h-44 rounded-xl p-10 relative overflow-hidden',
    card: 'h-fit min-w-36 backdrop-blur-lg flex flex-col overflow-hidden justify-between rounded-lg bg-black bg-opacity-50',
  },
});

const { base } = template();

const LayersPreview = () => {
  const { slides, deleteSlideElement, duplicateSlideElement } =
    useSlideEditor();

  const { element: elmId, updateElement } = useActiveElement((state) => state);

  return (
    <UIView className={base()}>
      {slides?.map((slide) => {
        return (
          <Card key={slide.id} className="p-1" shadow="lg">
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
                  startContent={<LayersOutline className="h-5 w-5" />}
                />
              </CardHeader>
              <ul className="flex flex-col gap-1">
                {slide.elements.map((element) => {
                  const active = element.id === elmId;

                  const style = {
                    color: active ? 'success' : 'default',
                    variant: active ? 'flat' : 'flat',
                  };
                  return (
                    <li key={element.id}>
                      <Card
                        isPressable
                        onPress={() => updateElement(element?.id as string)}
                        className={cn(
                          'flex flex-row items-center uppercase text-xs text-default-900 bg-default-50 justify-between rounded-lg p-1 pl-2 w-full border border-default-100',
                          active && 'border border-success'
                        )}
                      >
                        <UIView
                          className={cn(
                            'flex items-center',
                            active && 'text-success'
                          )}
                        >
                          {/* @ts-expect-error - Solve type issue */}
                          {elementLabelMapper[element?.type]}
                        </UIView>
                        <UIView className="flex items-center gap-1">
                          <UITooltip
                            size="sm"
                            content="Visibility"
                            placement="bottom"
                          >
                            <UIButton
                              size={'sm'}
                              isIconOnly
                              radius={'full'}
                              aria-label={'Visibility Slide Element'}
                              {...style}
                            >
                              <EyeOutlineIcon className="h-3.5 w-3.5" />
                            </UIButton>
                          </UITooltip>

                          <UITooltip
                            size="sm"
                            content="Duplicate"
                            placement="bottom"
                          >
                            <UIButton
                              isIconOnly
                              radius={'full'}
                              size={'sm'}
                              aria-label={'Duplicate Slide Element'}
                              onPress={() =>
                                element.id &&
                                duplicateSlideElement(slide.id, element.id)
                              }
                              {...style}
                            >
                              <DuplicateOutline className="h-3.5 w-3.5" />
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
                              radius={'full'}
                              aria-label={'Delete Slide Element'}
                              onPress={() =>
                                element.id &&
                                deleteSlideElement(slide.id, element.id)
                              }
                              {...style}
                            >
                              <TrashOutline className="h-3.5 w-3.5" />
                            </UIButton>
                          </UITooltip>
                        </UIView>
                      </Card>
                    </li>
                  );
                })}
              </ul>
            </CardBody>
          </Card>
        );
      })}
      {/* <AddLayers /> */}
    </UIView>
  );
};
export default LayersPreview;

function AddLayers() {
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0';

  const { createSlideElement } = useSlideEditor();
  const { slide: currentSlide } = useActiveSlide();
  const onSelectElement = React.useCallback(
    (type: ELEMENTS) => {
      const selectedElement =
        elementsObject[type as keyof typeof elementsObject];
      if (selectedElement) {
        const id = generateID();
        const slide = {
          id: id,
          ...selectedElement,
        };
        createSlideElement(currentSlide, slide);
      } else {
        console.warn(`Element of type ${type} does not exist.`);
      }
    },
    [createSlideElement, currentSlide]
  );

  return (
    <Dropdown
      placement="left-start"
      size="sm"
      classNames={{
        base: 'before:bg-default-200',
        content:
          'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
      }}
    >
      <DropdownTrigger>
        <Button size="sm" variant="bordered">
          Add Layer
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        onAction={(type) => onSelectElement(type as ELEMENTS)}
        aria-label="Layers menu with icons"
      >
        {elements.map((item) => (
          <DropdownItem
            key={item.type}
            startContent={<item.icon className={iconClasses} />}
          >
            {item.content}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

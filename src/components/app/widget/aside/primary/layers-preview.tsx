/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import UIView from '@/app-kit/source/UIView';
import UIInput from '@/app-kit/source/UIInput';
import UITooltip from '@/app-kit/source/UITooltip';
import useSlideEditor from '@/store/hooks/use-editor';
import UIButton from '@/app-kit/source/UIButton/button';
import { useActiveElement } from '@/store/slides/current-element';
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
} from '@heroui/react';
import { generateID } from '@/utils/id-generator';
import { APP_PLAN_TYPE, ELEMENTS } from '@/typings/enums';
import { useActiveSlide } from '@/store/slides/current-slide';
import { elementLabelMapper, elements, elementsObject } from './values';
import { SolarLayersMinimalisticLineDuotone } from '@/app-kit/icons/SolarLayersMinimalisticLineDuotone';
import { SolarEyeLineDuotone } from '@/app-kit/icons/SolarEyeLineDuotone';
import { SolarCopyLineDuotone } from '@/app-kit/icons/SolarCopyLineDuotone';
import { SolarTrashBinMinimalisticLineDuotone } from '@/app-kit/icons/SolarTrashBinMinimalisticLineDuotone';
import { SolarCrownLineDuotone } from '@/app-kit/icons/SolarCrownLineDuotone';
import { SolarAddSquareLineDuotone } from '@/app-kit/icons/SolarAddSquareLineDuotone';
import { SolarLockLineDuotone } from '@/app-kit/icons/SolarLockLineDuotone';

const MAX_SLIDE = 2;
const MAX_ELEMENTS = 5;

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

  const isSlideExceed = slides.length > MAX_SLIDE;
  return (
    <UIView className={base()}>
      {slides?.map((slide) => {
        const isElementExceed = slide?.elements?.length >= MAX_ELEMENTS;

        return (
          <UIView key={slide.id} className="flex flex-col gap-2">
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
                    startContent={
                      <SolarLayersMinimalisticLineDuotone className="size-4" />
                    }
                    isClearable
                  />
                </CardHeader>
                <ul className="flex flex-col gap-1">
                  {slide.elements.map((element) => {
                    const active = element.id === elmId;

                    const style = {
                      variant: active ? 'flat' : 'flat',
                      className: 'bg-lavender-frost/10',
                    };
                    return (
                      <li key={element.id}>
                        <Card
                          isPressable
                          onPress={() => updateElement(element?.id as string)}
                          className={cn(
                            'flex flex-row items-center uppercase text-xs text-default-900 bg-default-50 justify-between rounded-lg p-1 pl-2 w-full border border-default-100',
                            active && 'border border-lavender-frost/70'
                          )}
                        >
                          <UIView
                            className={cn(
                              'flex items-center',
                              active && 'text-lavender-frost'
                            )}
                          >
                            {/* @ts-expect-error - Solve type issue */}
                            {elementLabelMapper[element?.type]}
                          </UIView>
                          <UIView className={cn('flex items-center gap-1')}>
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
                                <SolarEyeLineDuotone
                                  className={cn(
                                    'h-4 w-4',
                                    active && 'text-lavender-frost'
                                  )}
                                />
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
                                isDisabled={isElementExceed}
                                {...style}
                              >
                                <SolarCopyLineDuotone
                                  className={cn(
                                    'h-4 w-4',
                                    active && 'text-lavender-frost'
                                  )}
                                />
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
                                <SolarTrashBinMinimalisticLineDuotone
                                  className={cn(
                                    'h-4 w-4',
                                    active && 'text-lavender-frost'
                                  )}
                                />
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
            {isElementExceed ? (
              <Button size="sm" variant="bordered">
                <SolarCrownLineDuotone className="h-4 w-4" />
                Get premium
              </Button>
            ) : (
              <AddLayers />
            )}
          </UIView>
        );
      })}
    </UIView>
  );
};
export default LayersPreview;

function AddLayers() {
  const iconClasses =
    'h-5 w-5 text-default-500 pointer-events-none shrink-0';

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
          'py-1 px-1 border border-default-200 bg-linear-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
      }}
    >
      <DropdownTrigger>
        <Button size="sm" variant="bordered">
          <SolarAddSquareLineDuotone className="h-4 w-4" />
          Add Layer
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        onAction={(type) => onSelectElement(type as ELEMENTS)}
        aria-label="Layers menu with icons"
      >
        {elements.map((item) => {
          const isPro = [APP_PLAN_TYPE.PRO, APP_PLAN_TYPE.PREMIUM].some(
            (plan) => item.plan.includes(plan)
          );

          return (
            <DropdownItem
              key={item.type}
              startContent={<item.icon className={iconClasses} />}
              endContent={isPro && <SolarLockLineDuotone className="size-4" />}
            >
              {item.content}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

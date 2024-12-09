import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Card, CardFooter, Tooltip } from '@nextui-org/react';
import { FrameItem } from '@/components/elements/frame';
import gradients from '@/json/gradients.json';
import { FluentCropSparkleRegular } from '@/ui-kit/icons/FluentCropSparkleRegular';
import { SolarCameraRotateBroken } from '@/ui-kit/icons/SolarCameraRotateBroken';
import { BackgroundScreenTypes } from './types';

const GradientsBackground: React.FC<BackgroundScreenTypes> = ({
  value,
  onChange,
}) => {
  return (
    <UIView className="flex flex-col">
      <FrameItem divider={false}>
        <UIView className="flex-1 flex flex-col gap-2">
          {gradients?.map((item, index) => {
            const gradientColors = item?.colors?.join(', ');
            const direction = 'to right';
            const background = `linear-gradient(${direction}, ${gradientColors})`;

            return (
              <Card
                key={index}
                fullWidth
                isFooterBlurred
                radius="lg"
                className="flex flex-col w-full group sm:cursor-pointer"
              >
                <UIView
                  className="flex-1 w-full min-h-40 flex items-center justify-center"
                  style={{
                    background,
                  }}
                >
                  <p className="group-hover:-translate-y-4 transition-all ">
                    {item.name}
                  </p>
                </UIView>

                <CardFooter className="transform translate-y-[120%] group-hover:translate-y-0 transition-all justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mb-1 z-10 p-2">
                  <UIView className="w-full flex items-center justify-between">
                    <UIView className="flex items-center gap-2">
                      <UIButton
                        size="sm"
                        variant="flat"
                        color="default"
                        className="text-tiny bg-black/40"
                        onPress={() => onChange?.(background)}
                      >
                        {value !== background ? 'Use' : 'Selected'}
                      </UIButton>
                      <Tooltip content="Magical AI" size="sm">
                        <UIButton
                          size="sm"
                          variant="flat"
                          color="default"
                          target={'_blank'}
                          isIconOnly
                          className="text-tiny bg-black/40"
                        >
                          <FluentCropSparkleRegular />
                        </UIButton>
                      </Tooltip>
                    </UIView>
                    <UIView className="flex items-center gap-2">
                      <UIButton
                        size="sm"
                        isIconOnly
                        variant="flat"
                        color="default"
                        target={'_blank'}
                        className="text-tiny bg-black/40 "
                      >
                        <SolarCameraRotateBroken className="h-4 w-4" />
                      </UIButton>
                    </UIView>
                  </UIView>
                </CardFooter>
              </Card>
            );
          })}
        </UIView>
      </FrameItem>
    </UIView>
  );
};
export default GradientsBackground;

{
  /* <UIButton isIconOnly size={'sm'} variant={'flat'} onPress={onSearch}>
            <SparklesIcon />
          </UIButton> */
}
{
  /* <UIView className="flex flex-wrap items-center gap-1">
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Wallpapers
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Gradients
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Abstract
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-[10px] text-default-500 cursor-pointer select-none"
          >
            Mesh
          </Chip>
        </UIView> */
}

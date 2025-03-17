import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import UIView from '@/app-kit/source/UIView';
import { Input, Link } from '@heroui/react';
import UISlider from '@/app-kit/source/UISlider';
import UIButton from '@/app-kit/source/UIButton/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import ChevronRightIcon from '@/app-kit/icons/ChevronRightIcon';
import useSlideEditor from '@/store/hooks/use-editor';

type Props = {
  openAspectRatio: () => void;
  openBackgrounds: () => void;
};

const CanvasScreen: React.FC<Props> = ({
  openAspectRatio,
  openBackgrounds,
}) => {
  const { onChangeSlide } = useSlideEditor();

  // Handlers with debounce
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebouncedChange = useCallback(
    debounce((property: string, value: string | number) => {
      onChangeSlide({
        background: {
          style: {
            [property]: `${value}`,
          },
        },
      });
    }, 500),
    []
  );

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDebouncedChange('width', Number(e.target.value));
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDebouncedChange('height', Number(e.target.value));
  };

  const handlePaddingChange = (value: number | number[]) => {
    handleDebouncedChange('padding', value?.toString());
  };

  const handleRadiusChange = (value: number | number[]) => {
    handleDebouncedChange('borderRadius', value?.toString());
  };

  return (
    <Frame title="CANVAS">
      <FrameItem>
        <UIView className="flex flex-col gap-3 w-full">
          <UIButton
            fullWidth
            size="lg"
            radius="md"
            variant="flat"
            onPress={openAspectRatio}
            className="px-2 justify-start text-left"
          >
            <UIView className="flex justify-between items-center w-full">
              <UIView className="flex flex-col">
                <span className="text-tiny text-default-400">3:4</span>
                <h4 className="text-small text-default-500">900 x 600</h4>
              </UIView>
              <ChevronRightIcon />
            </UIView>
          </UIButton>
          <UIView className="flex items-center gap-2">
            <Input
              size="sm"
              variant="faded"
              label="Width"
              placeholder="900"
              labelPlacement="outside"
              endContent="px"
              classNames={{
                base: 'text-small text-default-400',
              }}
              // value={String(currentSlide?.background?.style?.width)}
              onChange={handleWidthChange}
            />
            <Input
              size="sm"
              variant="faded"
              label="Height"
              placeholder="600"
              labelPlacement="outside"
              endContent="px"
              classNames={{
                base: 'text-small text-default-400',
              }}
              // value={String(currentSlide?.background?.style?.height)}
              onChange={handleHeightChange}
            />
          </UIView>
        </UIView>
      </FrameItem>

      <FrameItem label="Padding">
        <UISlider size="sm" onChange={handlePaddingChange} />
      </FrameItem>

      <FrameItem label="Radius">
        <UISlider size="sm" onChange={handleRadiusChange} />
      </FrameItem>

      <FrameItem label="Backgrounds">
        <Link
          size="sm"
          onPress={openBackgrounds}
          className="cursor-pointer select-none"
        >
          View
        </Link>
      </FrameItem>
    </Frame>
  );
};

export default CanvasScreen;

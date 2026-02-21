import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import UIView from '@/app-kit/source/UIView';
import { Input, Link } from '@heroui/react';
import UISlider from '@/app-kit/source/UISlider';
import UIButton from '@/app-kit/source/UIButton/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import ChevronRightIcon from '@/app-kit/icons/ChevronRightIcon';
import useSlideEditor from '@/store/hooks/use-editor';
import { Field, FieldLabel } from '@/app-kit/ui/field';
import { Slider, SliderValue } from '@/app-kit/ui/slider';

type Props = {};

const CanvasScreen: React.FC<Props> = ({}) => {
  const { currentSlide, onChangeSlide } = useSlideEditor();

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
    [],
  );

  const handlePaddingChange = (value: number) => {
    handleDebouncedChange('padding', value?.toString());
  };

  const handleRadiusChange = (value: number | number[]) => {
    handleDebouncedChange('borderRadius', value?.toString());
  };

  return (
    <UIView className="flex flex-col gap-4">
      <Field>
        <Slider
          value={currentSlide?.background?.style?.width}
          onValueChange={(value) => handlePaddingChange(value as number)}
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="font-medium text-sm">Padding</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>
      <Field>
        <Slider
          value={currentSlide?.background?.style?.width}
          onValueChange={(value) => handlePaddingChange(value as number)}
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="font-medium text-sm">Radius</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>
    </UIView>
  );
};

export default CanvasScreen;

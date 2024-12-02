import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UISlider from '@/ui-kit/source/UISlider';
import UISwitch from '@/ui-kit/source/UISwitch';
import useSlideEditor from '@/store/hooks/use-editor';
import { FrameAccordion } from '@/components/elements/frame';

const Glassmorphism = () => {
  const { activeElement, onChangeSlideElement } = useSlideEditor();
  return (
    <FrameAccordion
      label="Glssmorphism"
      className="flex flex-col justify-start gap-0 py-2"
      accordion={activeElement?.properties?.glassmorphism?.enabled}
      endContent={
        <UISwitch
          color="success"
          size={'sm'}
          isSelected={activeElement?.properties?.glassmorphism?.enabled}
          onValueChange={(glassmorphism) =>
            onChangeSlideElement({
              properties: {
                glassmorphism: {
                  enabled: glassmorphism,
                  alpha: 0,
                },
              },
            })
          }
        />
      }
    >
      <UIView className="my-2 flex-1 flex flex-col gap-4 border p-2 rounded-lg border-default-100">
        <UISlider
          color="foreground"
          size="sm"
          label="Opacity"
          minValue={0}
          maxValue={1}
          step={0.1}
          value={activeElement?.properties?.glassmorphism?.opacity}
          onChange={(value) =>
            onChangeSlideElement({
              properties: {
                glassmorphism: {
                  opacity: value,
                },
              },
            })
          }
          classNames={{
            label: 'text-tiny',
            value: 'text-tiny',
          }}
        />
        <UISlider
          color="foreground"
          size="sm"
          label="Blur Radius"
          minValue={0}
          maxValue={32}
          step={1}
          value={activeElement?.properties?.glassmorphism?.blur}
          onChange={(value) =>
            onChangeSlideElement({
              properties: {
                glassmorphism: {
                  blur: value,
                },
              },
            })
          }
          classNames={{
            label: 'text-tiny',
            value: 'text-tiny',
          }}
          getValue={(v) => `${v}px`}
        />
      </UIView>
    </FrameAccordion>
  );
};

export default Glassmorphism;

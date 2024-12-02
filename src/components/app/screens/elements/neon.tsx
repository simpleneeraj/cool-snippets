import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UISlider from '@/ui-kit/source/UISlider';
import UISwitch from '@/ui-kit/source/UISwitch';
import useSlideEditor from '@/store/hooks/use-editor';
import { FrameAccordion } from '@/components/elements/frame';

const NeonText = () => {
  const { activeElement, onChangeSlideElement } = useSlideEditor();

  return (
    <FrameAccordion
      label="Neon Text"
      className="flex flex-col justify-start gap-0 py-2"
      endContent={
        <UISwitch
          color="success"
          size={'sm'}
          isSelected={activeElement?.properties?.neon?.enabled}
          onValueChange={(neon) =>
            onChangeSlideElement({
              properties: {
                neon: {
                  enabled: neon,
                  offsetX: -2,
                  offsetY: 4,
                  blurRadius: 10,
                },
              },
            })
          }
        />
      }
      accordion={activeElement?.properties?.neon?.enabled}
    >
      <UIView className="my-2 flex-1 flex flex-col gap-4 border p-2 rounded-lg border-default-100">
        <UISlider
          color="foreground"
          label="Horizontal Offset (X)"
          size="sm"
          minValue={-10}
          maxValue={10}
          value={activeElement?.properties?.neon?.offsetX}
          onChange={(value) =>
            onChangeSlideElement({
              properties: {
                neon: {
                  offsetX: value,
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

        <UISlider
          color="foreground"
          label="Vertical Offset (Y)"
          size="sm"
          minValue={-10}
          maxValue={10}
          value={activeElement?.properties?.neon?.offsetY}
          onChange={(value) =>
            onChangeSlideElement({
              properties: {
                neon: {
                  offsetY: value,
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

        <UISlider
          color="foreground"
          label="Blur Radius"
          size="sm"
          minValue={0}
          maxValue={32}
          value={activeElement?.properties?.neon?.blurRadius}
          onChange={(value) =>
            onChangeSlideElement({
              properties: {
                neon: {
                  blurRadius: value,
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

export default NeonText;

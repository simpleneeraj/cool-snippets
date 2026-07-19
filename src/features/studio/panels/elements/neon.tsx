import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@shared/ui/accordion';
import { Field, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import { Label } from '@shared/ui/label';

enum ItemEnums {
  Default = 'Default',
}

const NeonText = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  const isNeonEnabled = Boolean(currentElement?.properties?.neon?.enabled);

  const toggleNeon = (values: string[]) => {
    const enabled = values.includes(ItemEnums.Default);

    onChangeSlideElement({
      properties: {
        neon: {
          enabled,
          // set sensible defaults only when enabling
          offsetX: enabled ? -2 : undefined,
          offsetY: enabled ? 4 : undefined,
          blurRadius: enabled ? 10 : undefined,
        },
      },
    });
  };

  const updateNeon = (key: 'offsetX' | 'offsetY' | 'blurRadius') => {
    return (value: any) =>
      onChangeSlideElement({
        properties: {
          neon: {
            [key]: value,
          },
        },
      });
  };

  return (
    <Accordion
      className="w-full"
      value={isNeonEnabled ? [ItemEnums.Default] : []}
      onValueChange={toggleNeon}
    >
      <AccordionItem value={ItemEnums.Default}>
        <AccordionTrigger>Try neon text effects </AccordionTrigger>
        <AccordionPanel>
          <UIView className="flex flex-col gap-4 border p-2 rounded-lg border-muted">
            <Field>
              <Slider
                min={-20}
                max={20}
                step={1}
                value={currentElement?.properties?.neon?.offsetX}
                onValueChange={updateNeon('offsetX')}
              >
                <div className="mb-2 flex items-center justify-between gap-1">
                  <FieldLabel className="text-sm">Neon Offset (X)</FieldLabel>
                  <SliderValue />
                </div>
              </Slider>
            </Field>
            <Field>
              <Slider
                min={-20}
                max={20}
                step={1}
                value={currentElement?.properties?.neon?.offsetY}
                onValueChange={updateNeon('offsetY')}
              >
                <div className="mb-2 flex items-center justify-between gap-1">
                  <FieldLabel className="text-sm">Neon Offset (Y)</FieldLabel>
                  <SliderValue />
                </div>
              </Slider>
            </Field>

            <Field>
              <Slider
                min={0}
                max={40}
                step={1}
                value={currentElement?.properties?.neon?.blurRadius}
                onValueChange={updateNeon('blurRadius')}
              >
                <div className="mb-2 flex items-center justify-between gap-1">
                  <FieldLabel className="text-sm">Neon Intensity</FieldLabel>
                  <SliderValue />
                </div>
              </Slider>
            </Field>
            <Label>
              <p className="text-xs text-muted-foreground">
                Tip: Increase blur and offset for a stronger neon glow.
              </p>
            </Label>
          </UIView>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default NeonText;

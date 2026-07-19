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

const Glassmorphism = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();
  const isNeonEnabled = Boolean(
    currentElement?.properties?.glassmorphism?.enabled,
  );

  const toggleNeon = (values: string[]) => {
    const enabled = values.includes(ItemEnums.Default);

    onChangeSlideElement({
      properties: {
        glassmorphism: {
          enabled,
          // set sensible defaults only when enabling
          alpha: 0,
        },
      },
    });
  };

  const updateGlssmorphism = (key: 'opacity' | 'blur') => {
    return (value: any) =>
      onChangeSlideElement({
        properties: {
          glassmorphism: {
            [key]: value,
          },
        },
      });
  };

  return (
    <>
      <Accordion
        className="w-full"
        value={isNeonEnabled ? [ItemEnums.Default] : []}
        onValueChange={toggleNeon}
      >
        <AccordionItem value={ItemEnums.Default}>
          <AccordionTrigger>Try frosted glass effect</AccordionTrigger>
          <AccordionPanel>
            <UIView className="flex flex-col gap-4 border p-2 rounded-lg border-muted">
              <Field>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                  value={currentElement?.properties?.glassmorphism?.opacity}
                  onValueChange={updateGlssmorphism('opacity')}
                >
                  <div className="mb-2 flex items-center justify-between gap-1">
                    <FieldLabel className="text-sm">
                      Glass Transparency
                    </FieldLabel>
                    <SliderValue />
                  </div>
                </Slider>
              </Field>
              <Field>
                <Slider
                  min={0}
                  max={32}
                  step={1}
                  value={currentElement?.properties?.glassmorphism?.blur}
                  onValueChange={updateGlssmorphism('blur')}
                >
                  <div className="mb-2 flex items-center justify-between gap-1">
                    <FieldLabel className="text-sm">Background Blur</FieldLabel>
                    <SliderValue />
                  </div>
                </Slider>
              </Field>
              <Label>
                <p className="text-xs text-muted-foreground">
                  Tip: Lower opacity with higher blur creates a realistic glass
                  effect.
                </p>
              </Label>
            </UIView>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Glassmorphism;

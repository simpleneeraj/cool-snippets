import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { Switch } from '@shared/ui/switch';
import SliderField from '../edit/sections/slider-field';
import { FIELD_DEFAULTS } from '../edit/sections/defaults';

const DEFAULTS = FIELD_DEFAULTS.glassmorphism;
const OPACITY_RANGE = { min: 0, max: 1, step: 0.1 };
const BLUR_RANGE = { min: 0, max: 32, step: 1 };

const Glassmorphism = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  const glass = currentElement?.properties?.glassmorphism;
  const enabled = Boolean(glass?.enabled);

  const toggleGlass = (checked: boolean) => {
    onChangeSlideElement({
      properties: {
        glassmorphism: {
          enabled: checked,
          // Seed sensible defaults on enable; clear them explicitly on disable —
          // `onChangeSlideElement` deep-merges, so omitting them would resurrect
          // the previous values on the next enable.
          opacity: checked ? DEFAULTS.opacity : undefined,
          blur: checked ? DEFAULTS.blur : undefined,
        },
      },
    });
  };

  const updateGlass =
    (key: 'opacity' | 'blur') => (value: number) =>
      onChangeSlideElement({ properties: { glassmorphism: { [key]: value } } });

  return (
    <UIView className="flex flex-col gap-4">
      <UIView className="flex flex-row items-center justify-between gap-3">
        <label htmlFor="glass-enabled" className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">Frosted glass</span>
          <span className="text-xs text-muted-foreground">
            Blur and tint whatever sits behind the block.
          </span>
        </label>
        <Switch
          id="glass-enabled"
          checked={enabled}
          onCheckedChange={toggleGlass}
        />
      </UIView>

      {enabled && (
        <UIView className="flex flex-col gap-4 rounded-lg border border-muted p-3">
          <SliderField
            label="Glass transparency"
            range={OPACITY_RANGE}
            value={glass?.opacity ?? DEFAULTS.opacity}
            defaultValue={DEFAULTS.opacity}
            onValueChange={updateGlass('opacity')}
          />
          <SliderField
            label="Background blur"
            range={BLUR_RANGE}
            value={glass?.blur ?? DEFAULTS.blur}
            defaultValue={DEFAULTS.blur}
            onValueChange={updateGlass('blur')}
          />
          <p className="text-xs text-muted-foreground">
            Tip: lower transparency with higher blur creates a realistic glass
            effect.
          </p>
        </UIView>
      )}
    </UIView>
  );
};

export default Glassmorphism;

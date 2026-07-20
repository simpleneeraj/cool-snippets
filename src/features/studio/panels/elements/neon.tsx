import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { Switch } from '@shared/ui/switch';
import ColorField from '../edit/sections/color-field';
import SliderField from '../edit/sections/slider-field';
import { FIELD_DEFAULTS } from '../edit/sections/defaults';

const DEFAULTS = FIELD_DEFAULTS.neon;
const OFFSET_RANGE = { min: -20, max: 20, step: 1 };
const INTENSITY_RANGE = { min: 0, max: 40, step: 1 };

const NeonText = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  const neon = currentElement?.properties?.neon;
  const enabled = Boolean(neon?.enabled);

  const toggleNeon = (checked: boolean) => {
    onChangeSlideElement({
      properties: {
        neon: {
          enabled: checked,
          // Seed sensible defaults on enable; clear them explicitly on disable
          // so the deep-merge doesn't resurrect stale values on the next enable.
          offsetX: checked ? DEFAULTS.offsetX : undefined,
          offsetY: checked ? DEFAULTS.offsetY : undefined,
          blurRadius: checked ? DEFAULTS.blurRadius : undefined,
          color: checked ? DEFAULTS.color : undefined,
        },
      },
    });
  };

  const updateNeon =
    (key: 'offsetX' | 'offsetY' | 'blurRadius' | 'color') =>
    (value: number | string) =>
      onChangeSlideElement({ properties: { neon: { [key]: value } } });

  return (
    <UIView className="flex flex-col gap-4">
      <UIView className="flex flex-row items-center justify-between gap-3">
        <label htmlFor="neon-enabled" className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">Neon glow</span>
          <span className="text-xs text-muted-foreground">
            Add a coloured glow behind the text.
          </span>
        </label>
        <Switch
          id="neon-enabled"
          checked={enabled}
          onCheckedChange={toggleNeon}
        />
      </UIView>

      {enabled && (
        <UIView className="flex flex-col gap-4 rounded-lg border border-muted p-3">
          <SliderField
            label="Neon offset (X)"
            range={OFFSET_RANGE}
            value={neon?.offsetX ?? DEFAULTS.offsetX}
            defaultValue={DEFAULTS.offsetX}
            onValueChange={updateNeon('offsetX')}
          />
          <SliderField
            label="Neon offset (Y)"
            range={OFFSET_RANGE}
            value={neon?.offsetY ?? DEFAULTS.offsetY}
            defaultValue={DEFAULTS.offsetY}
            onValueChange={updateNeon('offsetY')}
          />
          <SliderField
            label="Neon intensity"
            range={INTENSITY_RANGE}
            value={neon?.blurRadius ?? DEFAULTS.blurRadius}
            defaultValue={DEFAULTS.blurRadius}
            onValueChange={updateNeon('blurRadius')}
          />
          <ColorField
            label="Glow colour"
            value={String(neon?.color ?? DEFAULTS.color)}
            defaultValue={DEFAULTS.color}
            onSelect={updateNeon('color')}
          />
          <p className="text-xs text-muted-foreground">
            Tip: increase blur and offset for a stronger neon glow.
          </p>
        </UIView>
      )}
    </UIView>
  );
};

export default NeonText;

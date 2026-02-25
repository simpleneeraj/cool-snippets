/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import UIView from '@/app-kit/source/UIView';
import UIButton from '@/app-kit/source/UIButton/button';
import { FrameItem } from '@/components/elements/frame';
import { useImmer } from 'use-immer';
import {
  MeshGradientGenerator,
  initialOptions,
  GradientOptions,
} from '@/plugins/easy-mesh-gradient';
import { Slider, SliderValue } from '@/app-kit/ui/slider';

type State = {
  pointCount: number;
  hueRange: number[];
  lightnessRange: number[];
  saturationRange: number[];
};

const MeshBackgrounds = () => {
  const [state, setState] = useImmer<State>(initialOptions);

  const initialMesh = React.useCallback(() => {
    const options = {
      easingStops: 20,
      ...state,
    } as GradientOptions;

    return MeshGradientGenerator(options);
  }, [state]);

  const [mesh, setMesh] = React.useState<string>(initialMesh());

  const onChangeState = React.useCallback(
    (key: keyof State, value: any) => {
      setState((draft) => {
        draft[key] = value;
      });
    },
    [setState],
  );

  const onGenerateMesh = React.useCallback(() => {
    setMesh(initialMesh());
  }, [initialMesh]);

  const onReset = React.useCallback(() => {
    setState(initialOptions);
    setMesh(MeshGradientGenerator(initialOptions as GradientOptions));
  }, [setState]);

  return (
    <UIView className="flex-1 flex flex-col gap-2 overflow-hidden">
      {/* Preview */}
      <FrameItem>
        <UIView
          className="h-48 w-full rounded-2xl"
          style={{ backgroundImage: mesh }}
        />
      </FrameItem>

      {/* Generate */}
      <FrameItem>
        <UIButton size="sm" color="primary" onClick={onGenerateMesh}>
          Generate Mesh
        </UIButton>
      </FrameItem>

      {/* Controls */}
      <FrameItem className="py-1">
        <UIView className="flex flex-col gap-6 w-full">
          <h4 className="text-default-500 text-small">Customize</h4>

          {/* Point Count */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Point Count</span>
              <SliderValue />
            </div>
            <Slider
              min={0}
              max={32}
              step={1}
              value={[state.pointCount]}
              onValueChange={(value) => onChangeState('pointCount', value)}
            />
          </div>

          {/* Hue Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Hue Range</span>
            </div>
            <Slider
              min={0}
              max={360}
              step={1}
              value={state.hueRange}
              onValueChange={(value) => onChangeState('hueRange', value)}
            />
          </div>

          {/* Saturation Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Saturation Range</span>
            </div>
            <Slider
              min={0}
              max={1}
              step={0.1}
              value={state.saturationRange}
              onValueChange={(value) => onChangeState('saturationRange', value)}
            />
          </div>

          {/* Lightness Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Lightness Range</span>
            </div>
            <Slider
              min={0}
              max={1}
              step={0.1}
              value={state.lightnessRange}
              onValueChange={(value) => onChangeState('lightnessRange', value)}
            />
          </div>
        </UIView>
      </FrameItem>

      {/* Reset */}
      <FrameItem divider={false}>
        <UIButton size="sm" color="danger" onClick={onReset}>
          Reset
        </UIButton>
      </FrameItem>
    </UIView>
  );
};

export default MeshBackgrounds;

import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import UISlider from '@/ui-kit/source/UISlider';
import { FrameItem } from '@/components/elements/frame';
import { useImmer } from 'use-immer';
import {
  MeshGradientGenerator,
  initialOptions,
  GradientOptions,
} from '@/plugins/easy-mesh-gradient';

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
    [setState]
  );
  const onGenerateMesh = React.useCallback(() => {
    setMesh(initialMesh());
  }, [initialMesh]);

  return (
    <UIView className="flex-1 flex flex-col gap-2 overflow-hidden">
      <FrameItem>
        <UIView
          className="h-48 w-full rounded-2xl"
          style={{
            backgroundImage: mesh,
          }}
        ></UIView>
      </FrameItem>
      <FrameItem>
        <UIView className="flex items-center gap-2 flex-1">
          <UIButton
            size={'sm'}
            fullWidth
            color={'primary'}
            variant={'flat'}
            onPress={onGenerateMesh}
          >
            Generate Mesh
          </UIButton>
        </UIView>
      </FrameItem>
      <FrameItem className="py-1">
        <UIView className="flex flex-col gap-4 w-full">
          <h4 className="text-default-500 text-small">Customize</h4>
          <UISlider
            label="Point Count"
            step={1}
            size="sm"
            minValue={0}
            maxValue={32}
            classNames={{
              label: 'text-default-500 text-tiny',
              value: 'text-default-500 text-tiny',
            }}
            defaultValue={state.pointCount}
            onChangeEnd={(value) => onChangeState('pointCount', value)}
            color="foreground"
          />
          <UISlider
            label="Hue Range"
            step={1}
            size="sm"
            minValue={0}
            maxValue={360}
            classNames={{
              label: 'text-default-500 text-tiny',
              value: 'text-default-500 text-tiny',
            }}
            defaultValue={state.hueRange}
            onChangeEnd={(value) => onChangeState('hueRange', value)}
            color="foreground"
          />
          <UISlider
            label="Saturation Range"
            step={0.1}
            size="sm"
            minValue={0}
            maxValue={1}
            classNames={{
              label: 'text-default-500 text-tiny',
              value: 'text-default-500 text-tiny',
            }}
            defaultValue={state.saturationRange}
            onChangeEnd={(value) => onChangeState('saturationRange', value)}
            color="foreground"
          />
          <UISlider
            label="Lightness Range"
            step={0.1}
            size="sm"
            minValue={0}
            maxValue={1}
            classNames={{
              label: 'text-default-500 text-tiny',
              value: 'text-default-500 text-tiny',
            }}
            defaultValue={state.lightnessRange}
            onChangeEnd={(value) => onChangeState('lightnessRange', value)}
            color="foreground"
          />
        </UIView>
      </FrameItem>
      <FrameItem divider={false}>
        <UIView className="flex items-center gap-2 flex-1">
          <UIButton
            size={'sm'}
            fullWidth
            color={'danger'}
            variant={'flat'}
            onPress={onGenerateMesh}
          >
            Reset
          </UIButton>
        </UIView>
      </FrameItem>
    </UIView>
  );
};
export default MeshBackgrounds;

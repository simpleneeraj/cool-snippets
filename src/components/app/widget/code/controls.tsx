import React from 'react';
import { Tooltip, tv } from '@heroui/react';
import UIView from '@/app-kit/source/UIView';
import UIIconButton from '@/app-kit/source/UIButton/icon';
import { useReactFlow, useViewport } from '@xyflow/react';
import { SolarMinimalisticMagniferZoomInLineDuotone } from '@/app-kit/icons/SolarMinimalisticMagniferZoomInLineDuotone';
import { SolarMinimalisticMagniferZoomOutLineDuotone } from '@/app-kit/icons/SolarMinimalisticMagniferZoomOutLineDuotone';
import { SolarMaximizeSquareMinimalisticLineDuotone } from '@/app-kit/icons/SolarMaximizeSquareMinimalisticLineDuotone';

type ControlsProps = object;

const icon = tv({
  base: 'h-5 w-5',
});

const Controls: React.FC<ControlsProps> = () => {
  const { zoom } = useViewport();
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  const onResetViewport = () => {
    fitView({
      maxZoom: 1,
    });
  };

  return (
    <UIView className="absolute bottom-2 left-0 z-50 w-full flex justify-between">
      <UIView className="flex items-center gap-1 backdrop-blur p-1 rounded-xl overflow-hidden bg-default">
        <UIIconButton onPress={onResetViewport} size="sm">{`${(
          zoom * 100
        ).toFixed(0)}%`}</UIIconButton>
      </UIView>
      <UIView className="flex items-center gap-1 backdrop-blur p-1 rounded-xl overflow-hidden bg-default">
        <Tooltip placement="bottom" content="Reset Viewport">
          <UIIconButton isIconOnly size="sm" onPress={onResetViewport}>
            <SolarMaximizeSquareMinimalisticLineDuotone className={icon()} />
          </UIIconButton>
        </Tooltip>
        <Tooltip placement="bottom" content="Zoom Out">
          <UIIconButton isIconOnly size="sm" onPress={zoomOut}>
            <SolarMinimalisticMagniferZoomOutLineDuotone className={icon()} />
          </UIIconButton>
        </Tooltip>
        <Tooltip placement="bottom" content="Zoom In">
          <UIIconButton isIconOnly size="sm" onPress={zoomIn}>
            <SolarMinimalisticMagniferZoomInLineDuotone className={icon()} />
          </UIIconButton>
        </Tooltip>
      </UIView>
    </UIView>
  );
};

export default Controls;

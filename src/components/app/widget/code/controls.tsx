import React from 'react';
import { Tooltip } from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';
import { useReactFlow, useViewport } from '@xyflow/react';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import FluentTableCursor20Regular from '@/ui-kit/icons/center/FluentTableCursor20Regular';
import SolarMagniferZoomOutLinear from '@/ui-kit/icons/center/SolarMagniferZoomOutLinear';
import SolarMinimalisticMagniferZoomInLinear from '@/ui-kit/icons/center/SolarMinimalisticMagniferZoomInLinear';

type ControlsProps = {};

const Controls: React.FC<ControlsProps> = () => {
  const { zoom } = useViewport();
  const { zoomIn, zoomOut, zoomTo, fitView } = useReactFlow();

  const onResetViewport = () => {
    fitView({
      maxZoom: 1,
    });
  };

  // useHotkeys([Key.Shift, Key.Plus].join(Key.Plus), () => zoomIn());
  // useHotkeys([Key.Shift, Key.Zero].join(Key.Add), () => zoomTo(1));

  return (
    <UIView className="absolute bottom-0 left-0 z-50 w-full flex justify-between">
      <UIView className="flex items-center backdrop-blur p-2 rounded-xl overflow-hidden bg-black/40">
        <UIIconButton onPress={onResetViewport} size="sm" variant="flat">{`${(
          zoom * 100
        ).toFixed(0)}%`}</UIIconButton>
      </UIView>
      <UIView className="flex items-center gap-1 backdrop-blur p-2 rounded-xl overflow-hidden bg-black/40">
        <Tooltip placement="bottom" content="Zoom Out (⌘⇧+)">
          <UIIconButton isIconOnly size="sm" onPress={zoomOut}>
            <SolarMagniferZoomOutLinear className="h-4 w-4" />
          </UIIconButton>
        </Tooltip>
        <Tooltip placement="bottom" content="Zoom In (⌘⇧-)">
          <UIIconButton isIconOnly size="sm" onPress={zoomIn}>
            <SolarMinimalisticMagniferZoomInLinear className="h-4 w-4" />
          </UIIconButton>
        </Tooltip>
        <UIIconButton
          isIconOnly
          variant="flat"
          size="sm"
          onPress={onResetViewport}
        >
          <FluentTableCursor20Regular />
        </UIIconButton>
      </UIView>
    </UIView>
  );
};

export default Controls;

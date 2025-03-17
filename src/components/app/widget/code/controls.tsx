import React from 'react';
import { Tooltip, tv } from '@heroui/react';
import UIView from '@/app-kit/source/UIView';
import { Icon } from '@iconify/react/dist/iconify.js';
import UIIconButton from '@/app-kit/source/UIButton/icon';
import { useReactFlow, useViewport } from '@xyflow/react';

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
    <UIView className="absolute bottom-0 left-0 z-50 w-full flex justify-between">
      <UIView className="flex items-center gap-1 backdrop-blur p-2 rounded-xl overflow-hidden bg-black/40">
        <UIIconButton onPress={onResetViewport} size="sm" variant="flat">{`${(
          zoom * 100
        ).toFixed(0)}%`}</UIIconButton>
      </UIView>
      <UIView className="flex items-center gap-1 backdrop-blur p-2 rounded-xl overflow-hidden bg-black/40">
        <Tooltip placement="bottom" content="Reset Viewport">
          <UIIconButton
            isIconOnly
            variant="flat"
            size="sm"
            onPress={onResetViewport}
          >
            <Icon
              icon={'solar:minimize-square-minimalistic-line-duotone'}
              className={icon()}
            />
          </UIIconButton>
        </Tooltip>
        <Tooltip placement="bottom" content="Zoom Out">
          <UIIconButton isIconOnly size="sm" onPress={zoomOut}>
            <Icon
              icon={'solar:magnifer-zoom-out-line-duotone'}
              className={icon()}
            />
          </UIIconButton>
        </Tooltip>
        <Tooltip placement="bottom" content="Zoom In">
          <UIIconButton isIconOnly size="sm" onPress={zoomIn}>
            <Icon
              icon={'solar:magnifer-zoom-in-line-duotone'}
              className={icon()}
            />
          </UIIconButton>
        </Tooltip>
      </UIView>
    </UIView>
  );
};

export default Controls;

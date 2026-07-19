'use client';

import React from 'react';
import useAsset from '@/lib/assets/use-asset';
import { WatermarkPropertiesType } from '@shared/types/editor';
import { WATERMARK_MODE } from '@shared/types/enums';

type Props = {
  properties?: WatermarkPropertiesType;
  style?: React.CSSProperties;
};

const WatermarkElement: React.FC<Props> = ({ properties, style }) => {
  const image = useAsset(properties?.image);
  const opacity = properties?.opacity ?? 0.6;

  if (properties?.mode === WATERMARK_MODE.IMAGE && image) {
    return (
      <img
        src={image}
        alt="Watermark"
        draggable={false}
        style={{ opacity }}
        className="h-8 w-auto object-contain select-none"
      />
    );
  }

  return (
    <span
      className="w-max font-medium whitespace-nowrap select-none"
      style={{ opacity, color: style?.color, fontSize: style?.fontSize }}
    >
      {properties?.text}
    </span>
  );
};

export default WatermarkElement;

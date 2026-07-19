'use client';

import React from 'react';
import { ImageIcon } from 'lucide-react';
import useAsset from '@/lib/assets/use-asset';
import { AssetRefType } from '@/typings/editor';

type Props = {
  properties?: AssetRefType;
  style?: React.CSSProperties;
  onUpload?: () => void;
};

const ImageElement: React.FC<Props> = ({ properties, style, onUpload }) => {
  const src = useAsset(properties);

  if (!src) {
    return (
      <button
        type="button"
        onClick={onUpload}
        style={style}
        className="flex size-full min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/40 bg-black/20 p-4 text-white/70 transition-colors hover:border-white/70 hover:text-white sm:cursor-pointer"
      >
        <ImageIcon className="size-6" />
        <span className="text-center text-xs">Click to upload</span>
      </button>
    );
  }

  return (
    <img
      src={src}
      alt={properties?.alt ?? ''}
      draggable={false}
      className="size-full object-contain select-none"
      style={{ borderRadius: style?.borderRadius }}
    />
  );
};

export default ImageElement;

'use client';

import React from 'react';
import { putAsset } from './store';
import { AssetRefType } from '@/typings/editor';
import { ASSET_SOURCE } from '@/typings/enums';

const ACCEPTED = 'image/png,image/jpeg,image/webp,image/gif,image/svg+xml';

const readDimensions = (file: Blob) =>
  new Promise<{ naturalWidth?: number; naturalHeight?: number }>((resolve) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      resolve({ naturalWidth: image.width, naturalHeight: image.height });
      URL.revokeObjectURL(url);
    };
    image.onerror = () => {
      resolve({});
      URL.revokeObjectURL(url);
    };
    image.src = url;
  });

/**
 * Opens the OS file picker and stores the chosen image in IndexedDB, returning
 * a reference the element can persist. The blob itself never enters the
 * localStorage-backed design store.
 */
const useImageUpload = () => {
  const [uploading, setUploading] = React.useState(false);

  const pickImage = React.useCallback(async (): Promise<
    AssetRefType | undefined
  > => {
    const file = await new Promise<File | undefined>((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = ACCEPTED;
      input.onchange = () => resolve(input.files?.[0]);
      input.click();
    });

    if (!file) return undefined;

    setUploading(true);
    try {
      const [assetId, dimensions] = await Promise.all([
        putAsset(file, file.name),
        readDimensions(file),
      ]);

      return {
        source: ASSET_SOURCE.IDB,
        assetId,
        alt: file.name,
        ...dimensions,
      };
    } finally {
      setUploading(false);
    }
  }, []);

  return { pickImage, uploading };
};

export default useImageUpload;

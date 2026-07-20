'use client';

import React from 'react';
import { getAsset } from './store';
import { AssetRefType } from '@features/studio/model/editor';
import { ASSET_SOURCE } from '@features/studio/model/enums';

/**
 * Object URLs are cached per asset for the lifetime of the session. Creating a
 * fresh one on every render would leak a handle per render and make the <img>
 * flicker as the src changes identity.
 */
const objectUrlCache = new Map<string, string>();

const resolveObjectUrl = async (assetId: string): Promise<string | null> => {
  const cached = objectUrlCache.get(assetId);
  if (cached) return cached;

  const asset = await getAsset(assetId);
  if (!asset) return null;

  const url = URL.createObjectURL(asset.blob);
  objectUrlCache.set(assetId, url);
  return url;
};

export const releaseAssetUrl = (assetId: string) => {
  const url = objectUrlCache.get(assetId);
  if (!url) return;
  URL.revokeObjectURL(url);
  objectUrlCache.delete(assetId);
};

/** Resolves an asset reference to something an <img src> can consume. */
const useAsset = (asset?: AssetRefType): string | undefined => {
  const { source, assetId, src } = asset ?? {};
  const [resolved, setResolved] = React.useState<string | undefined>(
    source === ASSET_SOURCE.IDB ? objectUrlCache.get(assetId ?? '') : src,
  );

  React.useEffect(() => {
    if (source !== ASSET_SOURCE.IDB || !assetId) {
      setResolved(src);
      return;
    }

    let active = true;
    resolveObjectUrl(assetId).then((url) => {
      if (active) setResolved(url ?? undefined);
    });
    return () => {
      active = false;
    };
  }, [source, assetId, src]);

  return resolved;
};

export default useAsset;

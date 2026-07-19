import { getAsset, putAsset } from '@/lib/assets/store';
import { ASSET_SOURCE } from '@shared/types/enums';

type UnknownRecord = Record<string, unknown>;

const isAssetRef = (value: unknown): value is UnknownRecord =>
  typeof value === 'object' &&
  value !== null &&
  (value as UnknownRecord).source === ASSET_SOURCE.IDB &&
  typeof (value as UnknownRecord).assetId === 'string';

const isInlinedRef = (value: unknown): value is UnknownRecord =>
  typeof value === 'object' &&
  value !== null &&
  (value as UnknownRecord).source === ASSET_SOURCE.IDB &&
  typeof (value as UnknownRecord).src === 'string' &&
  ((value as UnknownRecord).src as string).startsWith('data:');

const blobToDataUrl = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });

const dataUrlToBlob = async (dataUrl: string) =>
  (await fetch(dataUrl)).blob();

/**
 * Walks the tree applying `transform` to any node it matches, rebuilding
 * plain objects and arrays. The design tree is a loose bag of style and
 * property maps, so asset references are found structurally rather than by
 * hardcoding the handful of paths they currently live at.
 */
const mapDeep = async (
  value: unknown,
  match: (node: unknown) => boolean,
  transform: (node: UnknownRecord) => Promise<unknown>,
): Promise<unknown> => {
  if (match(value)) return transform(value as UnknownRecord);

  if (Array.isArray(value)) {
    return Promise.all(value.map((item) => mapDeep(item, match, transform)));
  }

  if (typeof value === 'object' && value !== null) {
    const entries = await Promise.all(
      Object.entries(value as UnknownRecord).map(
        async ([key, item]) =>
          [key, await mapDeep(item, match, transform)] as const,
      ),
    );
    return Object.fromEntries(entries);
  }

  return value;
};

/**
 * Replaces IndexedDB asset references with inline data URLs so the exported
 * file stands alone — an assetId means nothing on another machine.
 */
export const inlineAssets = async <T>(design: T): Promise<T> =>
  (await mapDeep(design, isAssetRef, async (ref) => {
    const asset = await getAsset(ref.assetId as string);
    if (!asset) return { ...ref, assetId: undefined };
    return { ...ref, assetId: undefined, src: await blobToDataUrl(asset.blob) };
  })) as T;

/** Re-stores inlined data URLs into IndexedDB under fresh ids. */
export const restoreAssets = async <T>(design: T): Promise<T> =>
  (await mapDeep(design, isInlinedRef, async (ref) => {
    try {
      const blob = await dataUrlToBlob(ref.src as string);
      const assetId = await putAsset(blob, String(ref.alt ?? 'imported'));
      return { ...ref, assetId, src: undefined };
    } catch {
      // A corrupt data URL should cost one image, not the whole import.
      return { ...ref, src: undefined };
    }
  })) as T;

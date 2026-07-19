import { createStore, del, get, keys, set } from 'idb-keyval';
import { generateID } from '@features/studio/lib/id-generator';

/**
 * Uploaded images live in IndexedDB rather than in the persisted Zustand store.
 * The design store is held in localStorage, which caps out around 5MB across
 * the whole origin — a couple of screenshots would evict the user's work.
 */
const assetStore = createStore('cool-snippets-assets', 'assets');

export type StoredAsset = {
  blob: Blob;
  name: string;
  type: string;
  createdAt: number;
};

export const putAsset = async (file: Blob, name = 'asset'): Promise<string> => {
  const assetId = generateID();
  const asset: StoredAsset = {
    blob: file,
    name,
    type: file.type,
    createdAt: Date.now(),
  };
  await set(assetId, asset, assetStore);
  return assetId;
};

export const getAsset = (assetId: string): Promise<StoredAsset | undefined> =>
  get<StoredAsset>(assetId, assetStore);

export const deleteAsset = (assetId: string): Promise<void> =>
  del(assetId, assetStore);

export const listAssetIds = (): Promise<IDBValidKey[]> => keys(assetStore);

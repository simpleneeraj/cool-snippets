import { SlideTypes } from '@shared/types/editor';
import migrateSlides from '@features/studio/store/slides/migrations';
import { inlineAssets, restoreAssets } from './assets';
import {
  CURRENT_DESIGN_VERSION,
  DESIGN_FILE_APP,
  DESIGN_FILE_KIND,
  DesignFile,
  designFileSchema,
} from './schema';

export const DESIGN_FILE_EXTENSION = '.json';

export const buildDesignFile = async (
  slides: SlideTypes[],
  exportedAt: string,
): Promise<DesignFile> => {
  const design = await inlineAssets({ slides });

  return {
    app: DESIGN_FILE_APP,
    kind: DESIGN_FILE_KIND,
    schemaVersion: CURRENT_DESIGN_VERSION,
    exportedAt,
    design,
  };
};

export class DesignImportError extends Error {}

/**
 * Parses, migrates and rehydrates a design file.
 *
 * Migration runs *before* validation so a file written by an older schema is
 * brought up to the current shape rather than rejected outright.
 */
export const parseDesignFile = async (raw: string): Promise<SlideTypes[]> => {
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    throw new DesignImportError('That file is not valid JSON.');
  }

  const parsed = designFileSchema.safeParse(json);
  if (!parsed.success) {
    throw new DesignImportError(
      'That file is not a Cool Snippets design export.',
    );
  }

  const { schemaVersion, design } = parsed.data;
  const migrated = migrateSlides(
    { slides: design.slides },
    schemaVersion,
  ) as unknown as { slides: SlideTypes[] };

  return restoreAssets(migrated.slides);
};

export const readFileAsText = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });

import { z } from 'zod';
import { STORE_VERSION, SlideTypes } from '@/typings/editor';
import { ELEMENTS } from '@/typings/enums';

export const DESIGN_FILE_KIND = 'design';
export const DESIGN_FILE_APP = 'cool-snippets';

/**
 * Element and slide shapes are intentionally permissive beyond their known
 * keys: the studio stores free-form style/property bags, and rejecting unknown
 * fields would make a file written by a newer build unreadable by an older one.
 */
const elementSchema = z
  .object({
    id: z.string(),
    type: z.enum(ELEMENTS),
    content: z.unknown().optional(),
    hidden: z.boolean().optional(),
    style: z.record(z.string(), z.unknown()).optional(),
    properties: z.record(z.string(), z.unknown()).optional(),
    header: z.record(z.string(), z.unknown()).optional(),
  })
  .loose();

const slideSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    background: z.record(z.string(), z.unknown()).optional(),
    elements: z.array(elementSchema),
  })
  .loose();

export const designFileSchema = z.object({
  app: z.literal(DESIGN_FILE_APP),
  kind: z.literal(DESIGN_FILE_KIND),
  schemaVersion: z.number().int().positive(),
  exportedAt: z.string(),
  design: z.object({
    slides: z.array(slideSchema).min(1),
  }),
});

/**
 * The written file. `designFileSchema` above validates *incoming* files (it is
 * stricter — it requires element ids/types), but the exported type is defined
 * against the store's own `SlideTypes` so `buildDesignFile` can hand the live
 * slides straight through without a cast. The store guarantees ids at runtime.
 */
export type DesignFile = {
  app: typeof DESIGN_FILE_APP;
  kind: typeof DESIGN_FILE_KIND;
  schemaVersion: number;
  exportedAt: string;
  design: { slides: SlideTypes[] };
};

export const CURRENT_DESIGN_VERSION = STORE_VERSION;

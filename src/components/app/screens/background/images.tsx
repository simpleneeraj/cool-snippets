import React from 'react';
import VirtualImageGrid from './virtual-grid';
import { BackgroundScreenTypes } from './types';
import ImagesJson from '@data/backgrounds/images.json';
import PopularJson from '@data/backgrounds/abstract-3d-shapes.json';
import { Tabs, TabsList, TabsPanel, TabsTab } from '@/app-kit/ui/tabs';

enum ImageType {
  POPULAR = 'popular',
  ABSTRACT_3D_SHAPES = 'abstract-3d-shapes',
}

/* ─────────────────────────────────────────────────────────── */

const ImagesBackground: React.FC<BackgroundScreenTypes> = ({
  value,
  onSelect,
}) => {
  return (
    <Tabs className="layout-fill">
      <TabsList className="w-full shrink-0" variant="underline">
        <TabsTab value={ImageType.POPULAR}>Popular</TabsTab>
        <TabsTab value={ImageType.ABSTRACT_3D_SHAPES}>Shapes</TabsTab>
      </TabsList>

      <TabsPanel value={ImageType.POPULAR} className="layout-fill">
        <VirtualImageGrid
          images={PopularJson}
          value={value}
          onSelect={onSelect}
        />
      </TabsPanel>

      <TabsPanel value={ImageType.ABSTRACT_3D_SHAPES} className="layout-fill">
        <VirtualImageGrid
          images={ImagesJson}
          value={value}
          onSelect={onSelect}
        />
      </TabsPanel>
    </Tabs>
  );
};

export default ImagesBackground;

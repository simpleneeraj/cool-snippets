// Canvas Configuration
export const canvasConfig = {
  maxZoom: 2,
  minZoom: 0.5,
  defaultZoom: 1,
  snapGrid: [20, 20],
  panOnDrag: [1, 2],
  viewportPadding: 10,
};

export enum ComponentTypes {
  CODE_EDITOR = 'CODE_EDITOR',
}

export const initialNodes = [
  {
    id: ComponentTypes.CODE_EDITOR,
    type: ComponentTypes.CODE_EDITOR,
    position: { x: 0, y: 0 },
    data: {},
  },
  // {
  //   id: '2',
  //   type: 'ResizableNodeSelected',
  //   data: { label: 'NodeResizer when selected' },
  //   position: { x: 100, y: 300 },
  // },
];

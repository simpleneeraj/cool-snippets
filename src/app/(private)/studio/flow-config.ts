// Canvas Configuration
export const canvasConfig = {
  maxZoom: 1.2,
  minZoom: 0.8,
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
];

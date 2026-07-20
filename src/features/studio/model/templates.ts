/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Theme Headers Enums and Props
 */

export enum HeaderVariants {
  FILLED = 'filled',
  OUTLINE = 'outline-solid',
  FLAT = 'flat',
}
export enum HeaderInputType {
  ICON = 'icon',
  INPUT = 'input',
  ICON_AND_INPUT = 'icon_input',
  NONE = 'none',
}

export enum HeaderPositions {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  DEFAULT = 'default',
}
export type Colors = {
  name?: string;
  value?: string;
  icon?: any;
};
type Style = {
  gap?: string;
  size?: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
  borderWidth?: string;
};
export type HeadersProps = {
  name?: string;
  style: Style;
  colors?: Colors[];
  iconSource?: string;
  variant?: HeaderVariants;
  position?: HeaderPositions;
  inputType?: HeaderInputType;
};

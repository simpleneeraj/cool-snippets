/**
 * Theme Headers Enums and Props
 */

export enum HeaderVariants {
  FILLED = 'filled',
  OUTLINE = 'outline',
  FLAT = 'flat',
}
export enum HeaderInputType {
  ICON = 'icon',
  INPUT = 'input',
  ICON_AND_INPUT = 'icon_input',
}

export enum HeaderPositions {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
export type Colors = {
  name: string;
  value: string;
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
  style: Style;
  colors?: Colors[];
  iconSource?: string;
  variant?: HeaderVariants;
  position?: HeaderPositions;
  inputType?: HeaderInputType;
};

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { template } from './style';
import Dismiss from './icons/Dismiss';
import RemoveOutline from './icons/Remove';
import SquareMultiple from './icons/SquareMultiple';
import { HeaderVariants, HeadersProps } from '@/typings/templates';

type CSS = React.CSSProperties;

/**
 * Window "personality" pieces — the dots/buttons that distinguish one chrome
 * from another. Each is a small presentational component reading only what it
 * needs from the shared `HeadersProps`; `WindowChrome` supplies the frame, the
 * background and the filename, and slots one of these in.
 *
 * Adding a new look is a new decoration here plus one entry in `registry.tsx` —
 * no switch to touch, no template component to duplicate.
 */

/** macOS / iOS traffic lights: three circles, filled or outlined by variant. */
export const TrafficLights: React.FC<HeadersProps> = ({
  colors,
  variant = HeaderVariants.OUTLINE,
  style,
}) => {
  const { size, borderRadius, padding, gap, borderWidth } = style;
  const isOutline = variant.includes('outline-solid');

  const dot: CSS = {
    height: size,
    width: size,
    borderRadius,
    ...(variant === HeaderVariants.FILLED && { border: 'none' }),
    ...(variant === HeaderVariants.OUTLINE && { border: `${borderWidth} solid` }),
  };

  const { container } = template();

  return (
    <div className={container()} style={{ padding, gap }}>
      {colors?.map((data, index) => (
        <span
          key={index}
          style={{
            ...dot,
            [isOutline ? 'borderColor' : 'backgroundColor']: data.value,
          }}
        />
      ))}
    </div>
  );
};

/** Windows Terminal caption buttons: minimise / restore / close. */
export const WindowsButtons: React.FC<HeadersProps> = ({ style }) => {
  const { size, padding, gap } = style;
  const { container, icon } = template();

  return (
    <div className={container()} style={{ padding, gap }}>
      <span className={icon()}>
        <RemoveOutline size={size} />
      </span>
      <span className={icon()}>
        <SquareMultiple size={size} />
      </span>
      <span className={icon()}>
        <Dismiss size={size} />
      </span>
    </div>
  );
};

/** Unix "neon" glyphs: shaped icons stroked (outline) or filled by variant. */
export const UnixIcons: React.FC<HeadersProps> = ({
  colors,
  variant = HeaderVariants.OUTLINE,
  style,
}) => {
  const { size, padding, gap } = style;
  const { container } = template();

  return (
    <div className={container()} style={{ padding, gap }}>
      {colors?.map((data, index) => {
        const fill = variant.includes('filled') ? data.value : 'none';
        const strokeWidth =
          variant.includes('filled') && data?.name?.includes('Close') ? 7 : 3;
        return (
          <span key={index}>
            {data.icon && (
              <data.icon
                fill={fill}
                size={size}
                color={data.value}
                stroke={data.value}
                strokeWidth={strokeWidth}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

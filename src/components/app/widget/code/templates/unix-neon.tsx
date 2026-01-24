/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { template } from './style';
import InputWithIcon from './input';
import { HeaderInputType, HeadersProps } from '@/typings/templates';

const UnixNeon = (props: HeadersProps) => {
  const { colors, variant = 'outline', name, ...rest } = props;
  const { size, padding, background, gap } = props?.style;

  const { container, base } = template();
  return (
    <div style={{ background }} className={base()}>
      {rest.inputType !== HeaderInputType.NONE && (
        <InputWithIcon value={name} {...rest} />
      )}
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
    </div>
  );
};

export default UnixNeon;

// icon,
// size = 16,
// background,
// padding = `.4rem`,
// iconGap = '4px',
// inputStyle: editable,
// theme = 'outline-solid',
// colors

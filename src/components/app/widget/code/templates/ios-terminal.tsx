/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { template } from './style';
import { HeaderVariants, HeadersProps } from '@/typings/templates';
import InputWithIcon from './input';

type CSS = React.CSSProperties;

const IOSTermainal = (props: HeadersProps) => {
  const { colors, variant = 'outline', ...rest } = props;
  const { size, borderRadius, padding, background, gap, borderWidth } =
    props?.style;
  const isOutlineVariant = variant.includes('outline');

  const style: CSS = React.useMemo(() => {
    return {
      height: size,
      width: size,
      borderRadius,
      ...(variant === HeaderVariants.FILLED && { border: 'none' }),
      ...(variant === HeaderVariants.FLAT && {}),
      ...(variant === HeaderVariants.OUTLINE && {
        border: `${borderWidth} solid`,
      }),
    };
  }, [borderRadius, borderWidth, size, variant]);

  const { container, base, input, inputContainer } = template();

  return (
    <div style={{ background }} className={base()}>
      <div className={container({})} style={{ padding: padding, gap }}>
        {colors?.map((data, index) => (
          <span
            key={index}
            style={{
              ...style,
              [isOutlineVariant ? 'borderColor' : 'backgroundColor']:
                data.value,
            }}
          ></span>
        ))}
      </div>
      <InputWithIcon {...rest} />
    </div>
  );
};

export default IOSTermainal;

/* eslint-disable @next/next/no-img-element */
import InputWithIcon from './input';
import { HeaderInputType, HeadersProps } from '@/typings/templates';
import { template } from './style';
/* ICONS */
import Dismiss from './icons/Dismiss';
import RemoveOutline from './icons/Remove';
import SquareMultiple from './icons/SquareMultiple';

const WindowsTen = (props: HeadersProps) => {
  const { colors, variant = 'outline', ...rest } = props;
  const { size, padding, background, gap } = props?.style;

  const { container, base, icon } = template();

  return (
    <div style={{ background }} className={base()}>
      {rest.inputType !== HeaderInputType.NONE && <InputWithIcon {...rest} />}
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
    </div>
  );
};

export default WindowsTen;

// icon,
// inputStyle,
// size = 8,
// padding = `.4rem`,
// iconGap: gap = '4px',
// background,

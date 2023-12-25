import { SwitchProps } from '@/ui/types/switch';
import css from '../css/switch.module.scss';

const Switch = ({ active, ...props }: SwitchProps) => {
  const classNames = active ? css.active : css.no;
  return (
    <div className={classNames} {...props}>
      <span></span>
    </div>
  );
};

export default Switch;

import React from 'react';
import { ButtonProps } from '@/ui/types/button';
import css from '../css/button.module.scss';

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { disabled, active, hover, label, direction, size, ...rest } = props;
    return (
      <div className={css.button}>
        <button {...rest} ref={ref} />
      </div>
    );
  }
);

Button.displayName = 'Button';
export default Button;

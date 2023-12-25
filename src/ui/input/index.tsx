import React from 'react';
import { InputProps } from '@/ui/types/select';
import css from '../css/input.module.scss';

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { ...rest } = props;
    return (
      <div className={css.container}>
        <input ref={ref} {...rest} />
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;

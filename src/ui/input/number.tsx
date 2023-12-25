import React from 'react';
import { InputProps } from '@/ui/types/select';
import css from '../css/input.module.scss';

const InputNumber = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { label, ...rest } = props;
    return (
      <div className={css['number']}>
        {label && <label>{label}</label>}
        <input type={'number'} ref={ref} {...rest} />
      </div>
    );
  }
);

InputNumber.displayName = 'Input';
export default InputNumber;

import React from 'react';
import { SelectProps } from '@/ui/types/select';
import css from '../css/select.module.scss';

type E = React.ChangeEvent<HTMLSelectElement>;

const Select = React.forwardRef(
  (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => {
    const { options, onSelect, ...rest } = props;

    const _onSelect = React.useCallback(
      (e: E) => {
        const value = e.target.value;
        if (onSelect) onSelect(value);
        if (props.onChange) props.onChange(e);
      },
      [onSelect, props]
    );
    return (
      <div className={css.container}>
        <select ref={ref} onChange={_onSelect} {...rest}>
          {options.map((data, index) => (
            <option key={index} value={data.value}>
              {data.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;

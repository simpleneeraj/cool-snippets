import clsx from 'clsx';
import React from 'react';
import UIButton from '../UIButton';
type Ref = React.Ref<HTMLInputElement>;
type Props = {
  prefix?: any;
  variant?: 'outline';
  clear?: boolean | string;
  onSearch?: (value: string) => void;
} & React.ComponentPropsWithRef<'input'>;

const UITextField = React.forwardRef((props: Props, ref: Ref) => {
  const { children, prefix, clear, onChange, onSearch, ...rest } = props;

  const handleSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      onChange && onChange(e);
      onSearch && onSearch(value);
    },
    [onChange, onSearch]
  );
  return (
    <div className="relative flex items-center gap-1">
      {prefix && (
        <span className="absolute inset-y-0 flex items-center z-40 start-2 text-sm text-white text-opacity-50">
          {prefix}
        </span>
      )}
      <input
        ref={ref}
        {...rest}
        onChange={handleSearch}
        className={clsx(
          `ui-kit-search-bar`,
          'flex transition-all rounded-lg text-base font-normal w-full',
          'z-30 h-8',
          'rounded-lg text-base placeholder-white placeholder-opacity-30 dark:bg-white/10 bg-[var(--ui-kit-search-background)]',
          'py-1 px-2',
          prefix && 'pl-7',
          props.className,
          'disabled:opacity-50 disabled:cursor-not-allowed',
          '' // Adjust the color as needed
        )}
      />
      {clear && (
        <UIButton className="w-fit text-sm font-medium !p-0" variant="clear">
          {clear}
        </UIButton>
      )}
    </div>
  );
});

UITextField.displayName = 'UITextField';

export default UITextField;

import clsx from 'clsx';
import React from 'react';

type Props = {
  theme?: 'primary' | 'secondry';
  variant?: 'icon' | 'outline' | 'clear' | 'fit' | 'button';
} & React.ComponentPropsWithRef<'button'>;

const UIButton = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLButtonElement>) => {
    const { children, theme = 'secondry', variant = 'button', ...rest } = props;

    const states = {
      hover: `hover:bg-[var(--ui-kit-button-hover-background)] hover:text-[var(--ui-kit-button-hover-color)]`,
      active: `active:bg-[var(--ui-kit-button-active-background)] active:text-[var(--ui-kit-button-active-color)]`,
      disabled: `disabled:bg-[var(--ui-kit-button-disabled-background)] disabled:text-[var(--ui-kit-button-disabled-color)] disabled:cursor-not-allowed`,
    };
    const outline = {
      hover: `hover:bg-[var(--ui-kit-button-background)] hover:text-[var(--ui-kit-button-hover-color)]`,
      active: `active:bg-[var(--ui-kit-button-hover-background)] active:text-[var(--ui-kit-button-active-color)]`,
      disabled: `disabled:bg-transparent opacity-8 disabled:cursor-not-allowed`,
    };
    return (
      <button
        ref={ref}
        {...rest}
        className={clsx(
          'flex items-center justify-center transition-all rounded-lg text-base font-normal py-1 px-2 w-full',
          variant === 'button' &&
            `${states.hover} ${states.active} ${states.disabled} bg-[var(--ui-kit-button-background)] text-[var(--ui-kit-button-color)]`,
          variant === 'icon' &&
            `${states.hover} ${states.active} ${states.disabled} bg-[var(--ui-kit-button-background)] text-[var(--ui-kit-button-color)] min-h-[36px] min-w-[36px] sm:min-h-[36px] sm:min-w-[36px]
            max-h-[36px] max-w-[36px] sm:max-h-[36px] sm:max-w-[36px]
            `,
          variant === 'fit' &&
            `${states.hover} ${states.active} ${states.disabled} bg-[var(--ui-kit-button-background)] text-[var(--ui-kit-button-color)] min-h-[36px] sm:min-h-[36px] min-w-[50px] max-w-fit`,
          variant === 'outline' &&
            `${outline.hover} ${outline.active} ${outline.disabled} bg-transparent text-[var(--ui-kit-button-color)] border border-[var(--ui-kit-button-border-color)] `,
          variant === 'clear' &&
            `bg-transparent text-[var(--ui-kit-link-color)] hover:text-[var(--ui-kit-link-hover-color)]`,
          props.className
        )}
      >
        {children}
      </button>
    );
  }
);

UIButton.displayName = 'UIButton';

export default UIButton;

import clsx from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';

interface UISwitchProps {
  name?: string;
  checked?: boolean;
  className?: string;
  thumbColor?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChecked?: (checked: boolean) => void;
}

const UISwitch: React.FC<UISwitchProps> = ({
  checked = false,
  thumbColor = 'white',
  backgroundColor = 'bg-[var(--ui-kit-switch-background-color)]',
  foregroundColor = 'bg-[var(--ui-kit-switch-foreground-color)]',
  disabled = false,
  readOnly = false,
  onChecked,
}) => {
  const size = 24;
  const handleToggle = () => {
    if (!disabled && !readOnly) {
      onChecked && onChecked(!checked);
    }
  };

  return (
    <button
      type="button"
      className={clsx(
        `flex items-center box-border cursor-pointer transition-all duration-[0.3s] px-1 py-0 rounded-3xl`,
        checked ? backgroundColor : foregroundColor,
        checked ? 'justify-end' : 'justify-start',
        disabled ? 'cursor-not-allowed opacity-50' : ''
      )}
      style={{
        height: size + 'px',
        width: size * 2 + 'px',
      }}
      onClick={handleToggle}
    >
      <motion.div
        layout
        className={`grid items-center justify-items-center bg-${thumbColor} overflow-hidden rounded-[50%]`}
        style={{
          height: size - 4 + 'px',
          width: size - 4 + 'px',
        }}
      ></motion.div>
    </button>
  );
};

export default UISwitch;

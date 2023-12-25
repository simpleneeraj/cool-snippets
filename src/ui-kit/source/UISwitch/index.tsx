import clsx from 'clsx';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const handleToggle = () => {
    if (!disabled && !readOnly) {
      onChecked && onChecked(!checked);
    }
  };

  return (
    <button
      type="button"
      className={clsx(
        'h-8 w-16 flex items-center box-border cursor-pointer transition-all duration-[0.3s] px-1 py-0 rounded-3xl',
        checked ? backgroundColor : foregroundColor,
        checked ? 'justify-end' : 'justify-start',
        disabled ? 'cursor-not-allowed opacity-50' : ''
      )}
      onClick={handleToggle}
    >
      <motion.div
        layout
        className={`h-6 w-6 grid items-center justify-items-center bg-${thumbColor} overflow-hidden rounded-[50%]`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            className={`text-black`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* {checked ? 'm' : 's'} */}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default UISwitch;

import React from 'react';
import HRLine from '@/ui/line';
import Add from '@/lib/icons/Add';
import RemoveOutline from '@/lib/icons/Remove';
import css from '../css/stepper.module.scss';
import { StepperButtonProps } from '../types/button';

const StepperButton = React.forwardRef(
  (
    { min, max, onStepper, defaultValue, step }: StepperButtonProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    React.useEffect(() => {
      if (
        typeof min !== 'undefined' &&
        typeof max !== 'undefined' &&
        typeof step !== 'undefined'
      ) {
        if (min > max) {
          throw new Error('min value greater than max');
        }
        if (step > max) {
          throw new Error('step value greater than max');
        }
      }
    }, [max, min, step]);

    const [stepValue, setStepValue] = React.useState(defaultValue);

    React.useEffect(() => {
      setStepValue(defaultValue);
    }, [defaultValue]);

    const onStepDown = React.useCallback(() => {
      if (typeof step !== 'undefined' && typeof min !== 'undefined') {
        if (stepValue > min) {
          setStepValue((i) => i - step);
        }
      }
    }, [min, step, stepValue]);

    const onStepUp = React.useCallback(() => {
      if (typeof step !== 'undefined' && typeof max !== 'undefined') {
        if (stepValue < max) {
          setStepValue((i) => i + step);
        }
      }
    }, [max, step, stepValue]);

    React.useEffect(() => {
      onStepper(Number(stepValue.toFixed(2)));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onStepper, stepValue]);

    return (
      <div ref={ref} className={css.stepper}>
        <button onClick={onStepDown} aria-labelledby="decrease-label">
          <RemoveOutline size={16} />
        </button>
        <HRLine className={css.hr} />
        <button onClick={onStepUp} aria-labelledby="increase-label">
          <Add size={16} />
        </button>
      </div>
    );
  }
);

StepperButton.displayName = 'StepperButton';
export default React.memo(StepperButton);

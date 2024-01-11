'use client';
import React from 'react';
// @ts-expect-error
import { pointer, trackOffset, transform } from 'popmotion';

interface UISwitchProps {
  name?: string;
  checked?: boolean;
  className?: string;
  // Theme
  thumbColor?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  pendingOffColor?: string;
  pendingOnColor?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (checked: boolean) => void;
}

const UISwitch: React.FC<UISwitchProps> = (props) => {
  const {
    checked = false,
    className,
    disabled = false,
    thumbColor: thumbColor = '#fff',
    name,
    backgroundColor = '#1c1c1e',
    onChange = () => {},
    foregroundColor = 'rgba(76, 217, 100)',
    pendingOffColor,
    pendingOnColor,
    readOnly = false,
  } = props;

  const [isDragging, setIsDragging] = React.useState(false);
  const [offset, setOffset] = React.useState<number | null>(null);
  // Adjust the type based on the actual type in popmotion
  const pointerTrackerRef = React.useRef<any>();
  // Adjust the type based on the actual type in popmotion
  const offsetTrackerRef = React.useRef<any>();
  const spanRef = React.useRef<HTMLSpanElement | null>(null);

  const height = 28;
  const width = 48;
  const thumbLength = height - 2;
  const offsetWidth = width - thumbLength - 2;
  const getOffset = React.useMemo(() => {
    if (isDragging) {
      return offset || 0;
    }
    return checked ? offsetWidth : 0;
  }, [checked, isDragging, offset, offsetWidth]);
  const offsetProgress = Number(getOffset) / offsetWidth;

  const getPendingColor = ({
    color,
    pendingColor,
  }: {
    color: string;
    pendingColor?: string;
  }) => {
    if (!pendingColor) {
      return color === 'white' ? '#dfdfdf' : color;
    }
    return pendingColor;
  };

  const getPendingOffColor = getPendingColor({
    color: backgroundColor,
    pendingColor: pendingOffColor,
  });

  const getPendingOnColor = getPendingColor({
    color: foregroundColor,
    pendingColor: pendingOnColor,
  });

  const isDisabled = disabled || readOnly;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    // handle case when the switch is clicked
    onChange(!checked);
  };

  const handleHandleClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (isDisabled) {
      return;
    }
    pointerTrackerRef.current = pointer(e).start();
    offsetTrackerRef.current = trackOffset(pointerTrackerRef.current.x, {
      from: getOffset,
      onUpdate: transform.pipe(
        transform.clamp(0, offsetWidth),
        (offset: number) => setOffset(offset)
      ),
    }).start();
    setIsDragging(true);
    setOffset(getOffset);
  };

  const handleMouseUp = React.useCallback(() => {
    if (!isDragging) {
      return;
    }

    pointerTrackerRef.current.stop();
    offsetTrackerRef.current.stop();

    const prevOffset = checked ? offsetWidth : 0;
    const newChecked =
      offset === prevOffset
        ? // handle case when the handle is clicked
          !checked
        : // handle case when the handle is dragged
          offsetProgress >= 0.5;

    setIsDragging(false);
    setOffset(null);

    onChange(newChecked);
  }, [checked, offsetProgress, offsetWidth, isDragging, offset, onChange]);

  React.useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);

  console.log(
    transform.pipe(
      transform.blendColor(backgroundColor, foregroundColor),
      transform.rgba
    )(offsetProgress)
  );
  return (
    <span
      className={className}
      onClick={handleClick}
      ref={spanRef}
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${transform.pipe(
          transform.blendColor(getPendingOffColor, getPendingOnColor),
          transform.rgba
        )(offsetProgress)}`,
        borderRadius: height / 2,
        boxShadow: `inset 0 0 0 ${getOffset}px ${transform.pipe(
          transform.blendColor(getPendingOffColor, getPendingOnColor),
          transform.rgba
        )(offsetProgress)}`,
        boxSizing: 'border-box',
        display: 'inline-block',
        height: height,
        opacity: isDisabled ? 0.5 : 1,
        position: 'relative',
        transition: isDragging ? 'initial' : '0.2s',
        userSelect: 'none',
        width: width,
      }}
    >
      <span
        onClick={handleHandleClick}
        onMouseDown={handleMouseDown}
        style={{
          backgroundColor: thumbColor,
          borderRadius: '100%',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          display: 'inline-block',
          height: thumbLength,
          left: getOffset,
          position: 'absolute',
          top: 0,
          transition: isDragging ? 'initial' : '0.3s',
          width: thumbLength,
        }}
      />
      <input
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        readOnly={readOnly}
        style={{
          display: 'none',
        }}
        type="checkbox"
      />
    </span>
  );
};

export default UISwitch;

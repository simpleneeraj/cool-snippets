import React from "react";

interface HoverEffectButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Pointer Background should be transparent like
   */
  pointerBackground?: string;
  /**
   * Pointer Size should string in px
   */
  pointerSize?: string;
}

const HoverEffectButton = ({
  children,
  className,
  pointerBackground = "rgba(186, 230, 253, 0.25)",
  pointerSize = "200px",
  ...rest
}: HoverEffectButtonProps) => {
  const { onMouseDown, onMouseEnter, onMouseMove, buttonRef } =
    useHoverEffect();

  return (
    <React.Fragment>
      <button
        ref={buttonRef}
        className={`hover-effect ${className} `}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        {...rest}
      >
        {children}
      </button>
      <style jsx>
        {`
          .hover-effect {
            --gradient-size: ${pointerSize};
            text-decoration: none;
            position: relative;
            color: var(--ui-secondry-color);
            background-color: var(--ui-secondry-background);
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .hover-effect::after {
            content: "";
            opacity: 0;
            position: absolute;
            top: calc(
              var(--y-cursor-position, 0) * 1px - var(--gradient-size) / 2
            );
            left: calc(
              var(--x-cursor-position, 0) * 1px - var(--gradient-size) / 2
            );
            height: var(--gradient-size);
            width: var(--gradient-size);
            background: radial-gradient(${pointerBackground}, #00000000 70%);
            transition: opacity 700ms;
          }
          .hover-effect:hover::after {
            opacity: 0.4;
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default HoverEffectButton;

const useHoverEffect = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const [safeEffect, setEffect] = React.useState(false);

  const _onMouseEnter = React.useCallback(() => {
    setEffect(true);
  }, []);
  const _onMouseDown = React.useCallback(() => {
    setEffect(false);
  }, []);

  const _onMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (safeEffect) {
        const link = buttonRef.current as HTMLButtonElement;
        const { x, y } = link.getBoundingClientRect();
        // Get relative coordinates.
        const relativeX = `${event.clientX - x}`;
        const relativeY = `${event.clientY - y}`;
        // Apply Coordinates values to CSS variables.
        link.style.setProperty("--x-cursor-position", relativeX);
        link.style.setProperty("--y-cursor-position", relativeY);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [safeEffect]
  );
  // MEMO HANDLERS
  const onMouseEnter = React.useMemo(() => _onMouseEnter, [_onMouseEnter]);
  const onMouseMove = React.useMemo(() => _onMouseMove, [_onMouseMove]);
  const onMouseDown = React.useMemo(() => _onMouseDown, [_onMouseDown]);
  return {
    buttonRef,
    onMouseDown,
    onMouseEnter,
    onMouseMove,
  };
};

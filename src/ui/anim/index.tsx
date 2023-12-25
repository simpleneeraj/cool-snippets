import React from "react";

interface AnimViewProps extends React.ComponentPropsWithRef<"div"> {
  delay?: number | undefined;
  visible?: boolean | undefined;
  duration?: number | undefined;
  animateY?: number | undefined;
  animateX?: number | undefined;
  onComplete?: () => void;
}

function AnimationView(props: AnimViewProps): JSX.Element {
  const animations = useAnim(props);

  return (
    <div style={animations} {...props}>
      {props.visible ? props.children : null}
    </div>
  );
}

export default AnimationView;

/**************************
Custom Hooks For This Functanality
***************************/
const useAnim = (props: AnimViewProps) => {
  const {
    delay,
    children,
    animateX = 0,
    animateY = 0,
    visible = true,
    duration = 400,
    onComplete,
  } = props;

  // Use State
  let [count, setCount] = React.useState(React.Children.count(children));
  const [maxVisible, setmaxVisible] = React.useState(0);
  React.useEffect(() => {
    if (!visible) {
      setCount(0);
    }
    if (count === maxVisible) {
      const timeOut = setTimeout(() => {
        if (onComplete) onComplete();
      }, duration);
      return () => clearTimeout(timeOut);
    }
    const increment = count > maxVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setmaxVisible(maxVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
  }, [children, count, delay, duration, maxVisible, onComplete, visible]);

  // Style For Fade Effect
  const animations = {
    transition: `opacity ${duration}ms , transform ${duration}ms`,
    transform: maxVisible
      ? "translate(0px)"
      : `translate(${animateX}px,${animateY}px)`,
    opacity: maxVisible ? 1 : 0,
    // visibility: maxVisible ? "visible" : "hidden"
  } as React.CSSProperties;

  return animations;
};

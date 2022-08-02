import React, { Fragment, useEffect, useState } from "react";
function Fade({
  delay,
  duration = 400,
  visible = true,
  onComplete,
  children,
  className,
  X = 0,
  Y = 0,
}) {
  const [maxVisible, setmaxVisible] = useState(0);
  useEffect(() => {
    let count = React.Children.count(children);
    if (!visible) {
      count = 0;
    }
    if (count == maxVisible) {
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
  }, [children]);
  const style = {
    transition: `opacity ${duration}ms , transform ${duration}ms`,
    transform: maxVisible ? "none" : `translate(${X}px,${Y}px)`,
    opacity: maxVisible ? 1 : 0,
  };
  //
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default Fade;

/**
 * 
 *   return React.createElement(
    "section",
    { className: className },
    React.Children.map(children, (child, i) => {
      const style = {
        transition: `opacity ${duration}ms , transform ${duration}ms`,
        transform: maxVisible > i ? "none" : `translate(${X}px,${Y}px)`,
        opacity: maxVisible > i ? 1 : 0,
        display: "grid",
        flex: "1",
      };
      return React.createElement(
        "div",
        { className: childClassName, style: style },
        child
      );
    })
  );
 */

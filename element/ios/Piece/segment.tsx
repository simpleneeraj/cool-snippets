import React from "react";
import css from "../Style/Segment.module.scss";

const Segment = ({ children, ...props }: any) => {
  return (
    <div className={css.Segment} {...props}>
      {children}
    </div>
  );
};

export default Segment;

// Hover Effect
export const Button = ({
  children,
  notallow,
  isActive = false,
  ...props
}: any) => {
  const whenDesable = notallow ? css.notallow : css.WraperButton;
  const Calculated = isActive ? css.Active : whenDesable;

  return (
    <button disabled={notallow} className={Calculated} {...props}>
      {children}
    </button>
  );
};
// No Hover Effect
export const TabButton = ({
  children,
  notallow,
  isActive = false,
  ...props
}: any) => {
  const whenDesable = notallow ? css.notallow : css.TabButton;
  const Calculated = isActive ? css.Active : whenDesable;

  return (
    <button disabled={notallow} className={Calculated} {...props}>
      {children}
    </button>
  );
};

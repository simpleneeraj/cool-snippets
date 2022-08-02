import css from "../Style/Switch.module.scss";

const Switch = ({ isActive, ...props }: any) => {
  const ActClass = isActive ? css.SwitchActive : css.SwitchInActive;

  return (
    <div className={ActClass} {...props}>
      <span></span>
    </div>
  );
};

export default Switch;

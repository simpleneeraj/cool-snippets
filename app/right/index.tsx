import React from "react";
import HRLine from "ui/line";
import BottomTabs from "./tabs";
import ToolsWraper from "./wraper";
import ToolsList from "./wraper/list";
import css from "styles/app.module.scss";
import StepperButton from "ui/button/stepper";
import Toggle from "../../element/toggle";
import Switch from "ui/switch";

const AppRight = () => {
  const [isToggle, setToggle] = React.useState(false);

  return (
    <div className={css.right}>
      <div className={css.RightTab}>
        <ToolsWraper labelleft="NODE" labelright="Reset">
          <ToolsList title="Width">
            <StepperButton
              min={0}
              max={5}
              step={1}
              onStepper={(value) => console.log({ width: value })}
              defaultValue={5}
            />
          </ToolsList>
          <HRLine className={css.horizontal} />
          <ToolsList title="Height">
            <StepperButton
              min={0}
              max={100}
              step={10}
              onStepper={(value) => console.log({ height: value })}
              defaultValue={0}
            />
          </ToolsList>
          <Switch active={isToggle} onClick={() => setToggle(!isToggle)} />
        </ToolsWraper>
        {/* <ToolsWraper labelleft="BORDER" labelright="Reset">
          <ToolsList title="Width">
            <StepperButton />
          </ToolsList>
          <HRLine className={css.horizontal} />
          <ToolsList title="Width">
            <StepperButton />
          </ToolsList>
          <HRLine className={css.horizontal} />
        </ToolsWraper> */}
      </div>
      <BottomTabs />
    </div>
  );
};
export default AppRight;

// T R B L
//
// border-radius:10px 10px 10px 10px;
// top-right
// top-left
// bottom-left
// bottom-right
